import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://aman:WdN52a1UwCv5Gk2d@cluster0.jmukp1y.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}