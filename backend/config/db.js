import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://chinmaychavan3424:hitesh123@cluster0.j6ap99e.mongodb.net/').then(()=>console.log("DB Connected"));
   
}


