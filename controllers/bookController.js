const books= require("../models/bookModel");

exports.addBook=async(req,res)=>{
    console.log("Inside addBookController");
    const {title,author,noofpages,imageUrl,price,dprice, abstract,publisher,language,isbn,category} = req.body
    
    UploadedImages=[]
    req.files.map((item)=>UploadedImages.push(item.filename))
    
    console.log(req.files);//array
    console.log(req.body);

    const email = req.payload?.userMail
    console.log(email);
   try{
      const existingBook = await books.findOne({title,userMail:email})
      console.log(existingBook);
      
      if(existingBook){
        res.status(401).json("Book already existing....")
      }
      else{
        const newBook = new books({
          title,author,noofpages,imageUrl,price,dprice, abstract,publisher,language,isbn,category,UploadedImages,userMail:email
        })
        await newBook.save()
        res.status(200).json(newBook)

      }
    }
    catch(err){
      res.status(500).json("Err"+err)
    }
  
}