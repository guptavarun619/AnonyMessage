import dbConnect from "@/db/dbConnect";
import { Message } from "@/db/models";

dbConnect();

export async function sendMessage(data) {
  try {
    console.log("sendMessage fn", data);
    const message = await Message.create(data);
    console.log(message);
    return message;
  } catch (error) {
    console.log(error);
    throw { error: "Something went wrong while sending message" };
  }
}
