import user from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";


export const register = async (req,res,next) =>{
  const {username, email,password} = req.body;
  if (!username || !email || !password || username === '' || email === '' || password === '') {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password,10);

  const newUser = new user({
    username,
    email,
    password: hashedPassword
  });

  try{
    await newUser.save();
    res.json('Registration Success');
  }catch(error){
    next(error);
  }
}