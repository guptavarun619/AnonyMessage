const { Schema, model, models } = require("mongoose");

const messageSchema = new Schema(
  {
    from: { ip: String, loc: String },
    to: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = models.Message || model("Message", messageSchema);

export default Message;
