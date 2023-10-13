import client from "@/utils/pg";
import User from "@/utils/userModel";

const db = require("@/utils/db");

db()

// Assuming db is imported and contains user records

export default async function handler(req, res) {
  

  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // client.connect();
      // console.log("connected to postgresql");
      // const result = await client.query(
      //   "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      //   ["John Doe", "john@example.com"]
      // );
      // const insertedUser = result.rows[0];
      // console.log(insertedUser);

      

      const user = await User.findOne({ email });

      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = user.generateToken();
      res.setHeader("Set-Cookie", `nexttoken=${token}; HttpOnly; Max-Age=3600; Path=/`);
      return res
        .status(200)
        .json({ success: true, message: "Login successful", user, token });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
