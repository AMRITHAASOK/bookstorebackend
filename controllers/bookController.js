const users = require("../models/userModel");

exports.addBook=(req,res)=>{
    console.log("Inside addBookController");
    const {title,author,noofpages,imageUrl,price,dprice, abstract,publisher,language,isbn,category} = req.body
    
    UploadedImages=[]
    req.files.map((item)=>UploadedImages.push(item.filename))
    
    console.log(req.files);//array
    console.log(req.body);
    
    
      res.status(200).json("AddBook request received...");
}