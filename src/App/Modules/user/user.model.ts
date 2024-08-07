import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
    adress: { type: String },
    password: { type: String, required: true }
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User;