require("dotenv").config();
const mData = require("./MOCK_DATA.json");
const connectDB = require("./db/connect");
const Job = require("./models/Job");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.create(mData);
    console.log("Pass!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
