import user from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";


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
};

export const login = async(req,res,next) => {
  const {email, password} = req.body;
  if (!email || !password || email === '' || password === '') {}
  next(errorHandler(400,"All fields are required"));
  try{
    const ValidUser = await user.findOne({email});
    if (!ValidUser) {
     return next(errorHandler(404, "User not found"));
      }
      const validPassword = bcryptjs.compareSync(password, ValidUser.password);
      if (!validPassword) {
       return next(errorHandler(401, "Invalid Password"));
      }

      const token = jwt.sign(
        {
          id: ValidUser._id,
        },
        process.env.JWT_SECRET,
      );
      const {password: pass, ...rest} = ValidUser._doc;
      res.status(200).cookie('access_token',token, {
        httpOnly: true,
        }).json(rest);
      }catch(error){
        next(error);
        }
}