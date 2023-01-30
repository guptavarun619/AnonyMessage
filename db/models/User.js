const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  messageRecieved: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const User = models.User || model("User", userSchema);

export default User;
