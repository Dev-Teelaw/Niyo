import mongoose from "mongoose";
import serverConfig from "../config/serverConfig.js"
import { User, hashPassword } from "../models/user.js";

const atlasUri = serverConfig.mongoDbUri;

export const connectDB =  async function(){
  const {connection: db} = await mongoose.connect(atlasUri)
  return db
}

export const runMigration = async function () {
  const defaultUser = await User.updateOne(
    {email: "test@gmail.com"}, 
    {
      email: "test@gmail.com",
      password: await hashPassword(serverConfig.defaultUserPassword)
    }, {upsert: true});
}