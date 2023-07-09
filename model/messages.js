import { Schema, models, model } from "mongoose";

const messagesSchema = new Schema({
  user: String,
  message: String,
  time: String,
});

const Messages = models.messages || model("messages", messagesSchema);

export default Messages;
