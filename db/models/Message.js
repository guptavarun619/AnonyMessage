const { Schema, model, models } = require("mongoose");

const messageSchema = new Schema(
  {
    from: String,
    to: String,
    content: String,
    hidden: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Message = models.Message || model("Message", messageSchema);

export default Message;
