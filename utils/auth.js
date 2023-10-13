// In your auth middleware file (e.g., authMiddleware.js)
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  return new Promise((resolve, reject) => {
    // Get the token from the request headers or cookies
     console.log(req.cookies.nexttoken);
    const token = req.headers.authorization || req.cookies.nexttoken;

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      reject();
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.SECRET); // Change with your secret key
      req.user = decoded;
      resolve();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
      reject();
    }
  });
};
