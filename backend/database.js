const mongoose = require("mongoose");
require("dotenv").config(); 

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connection success"))
  .catch((err) => console.log("Database connection error:", err));

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const DC_User = mongoose.model("DC_User", userSchema);

module.exports = { DC_User };
