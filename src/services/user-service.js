const UserRepository=require("../repository/user-repository");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const {JWT_KEY}=require("../config/serverConfig");



class UserService{
    constructor()
    {
        this.userRepository=new UserRepository();
    }

    async create(data)
    {
        try{
            const user=await this.userRepository.create(data);
            return user;

        }
        catch(error)
        {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async signIn(email,userInputPlainPassword)
    {
        try{
            const user=await this.userRepository.getByEmail(email);
            const passwordMatching=this.checkPassword(userInputPlainPassword,user.password);
            if(!passwordMatching)
            {
                console.log("Passwords dont match");
                throw {error:'passwords arent matching'};
            }
            const newJwt=this.createToken({email:user.email,id:user.id});
            return newJwt;

        }
        catch(error)
        {
            console.log("Something went wrong in the sign in process");
            throw error;
        }
    }
    checkPassword(userInputPlainPassword,encryptedPassword)
    {
        try{
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);

        }
        catch(error)
        {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }
    createToken(user)
    {
        try{
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'})
            return result;

        }
        catch(error)
        {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }
    
    verifyToken(token)
    {
        try{
            const response=jwt.verify(token,JWT_KEY);
            return response;

        }
        catch(error)
        {
            console.log("Something went wrong in token validation",error);
            throw error;
        }
    }
    async isAuthenticated(token)
    {
        try{
            const response=this.verifyToken(token);
            if(!response)
            {
                throw {error:'Invalid Token'};
            }
            const user=this.userRepository.getById(response.id);
            if(!user)
            {
                throw {error:'No user with the corresponding token exists'};
            }
            return user.id;

        }
        catch(error)
        {
            console.log("Something went wrong in auth process");
            throw error;
        }
    }
    
}


module.exports=UserService;