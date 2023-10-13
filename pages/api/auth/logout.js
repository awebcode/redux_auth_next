// pages/api/auth/logout.js

export default  async function handler(req, res) {
  res.setHeader("Set-Cookie", "nexttoken=; HttpOnly; Max-Age=0; Path=/");
    res.status(200).json({ success: true, message: "Logout successful" });
};
