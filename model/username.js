import { Schema, models, model } from "mongoose";

const usernameSchema = new Schema({
  username: String,
  password: String,
});

const User = models.User || model("User", usernameSchema);

export default User;
