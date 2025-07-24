const jwt = require('jsonwebtoken')
const jwtMiddleware = (req,res,next)=>{
    console.log("Inside JWTMiddleware");
    //get token
    let token = req.headers.authorization.slice(7)
    console.log(token);
    try{
        //token verification
        const tokenVerify = jwt.verify(token,'superkey2025')
        console.log(tokenVerify);
        

    }catch(err){
        res.status(401).json("Authorization Failed....")
    }
    next()
}
module.exports=jwtMiddleware