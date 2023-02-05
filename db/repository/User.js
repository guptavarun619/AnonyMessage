import dbConnect from "@/db/dbConnect";
import { User } from "../models";

dbConnect();

export async function addUser(username) {
  try {
    // console.log("addUser fn", username);
    const user = await User.create({ username: username });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    throw { error: error };
  }
}

export async function findUser(username) {
  try {
    console.log("findUser fn", username);
    const user = await User.findOne({ username: username }).populate(
      "messageRecieved"
    ); // populate the data for the corresponsing object ID (message id ) in the response (meaning : it does not populate the data on the db)

    console.log(user);
    if (!user) {
      throw new Error("No such user found");
    }
    return {
      userId: user._id,
      username: user.username,
      messageRecieved: user.messageRecieved,
    };
  } catch (error) {
    console.log(error);
    throw { error: error };
  }
}
