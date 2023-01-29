import mongoose from "mongoose";
import { MONGO_DB_URI } from "../config/serverConfig";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose.connect(MONGO_DB_URI);

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
