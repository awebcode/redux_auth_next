// In your route handler file
import { authMiddleware } from "@/utils/auth";
import db from "@/utils/db";

import User from "@/utils/userModel";

db();

export default async function handler(req, res) {
  try {
    await authMiddleware(req, res);
    
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
