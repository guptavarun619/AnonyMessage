import dbConnect from "@/db/dbConnect";
import { Message } from "@/db/models";

dbConnect();

export async function sendMessage(data) {
  try {
    const message = await Message.create(data);
    return message;
  } catch (error) {
    console.log(error);
    throw { error: "Something went wrong while sending message" };
  }
}
