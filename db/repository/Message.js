import dbConnect from "@/db/dbConnect";
import { Message, User } from "@/db/models";

dbConnect();

export async function sendMessage(data) {
  try {
    const message = await Message.create(data);
    await User.updateOne(
      { _id: data.to },
      { $push: { messageRecieved: message } } // pushing the created message Id to messageRecieved property of user collection.
    );
    return message;
  } catch (error) {
    console.log(error);
    throw { error: "Something went wrong while sending message" };
  }
}
