import db from "@/utils/db";
import User from "@/utils/userModel";

export default async function handler(req, res) {
  db();

  if (req.method === "POST") {
      const { name, email, password } = req.body;
      console.log(req.body)

      try {
         
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
        }
        
        console.log("existingUser")

      const user = new User({ name, email, password });
      const savedUser = await user.save();
       // Generate token
      const token = user.generateToken({ _id: savedUser._id });

      // Set the token as a cookie
      res.setHeader("Set-Cookie", `nexttoken=${token}; HttpOnly; Max-Age=3600; Path=/`);

      return res.status(200).json({success:true, message: "Registration successful", user:savedUser,token });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error",error });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
