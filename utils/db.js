const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db connected");
  } catch (error) {
    console.log("Db Not Connected");
  }
};

module.exports = db;
