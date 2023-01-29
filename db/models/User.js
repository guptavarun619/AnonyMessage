const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  messageRecieved: [],
});

const User = models.User || model("User", userSchema);

export default User;
