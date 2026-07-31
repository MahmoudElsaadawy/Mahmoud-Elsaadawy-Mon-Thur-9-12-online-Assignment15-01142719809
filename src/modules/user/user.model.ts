import mongoose from "mongoose"
import { IUser, GenderEnum, ProviderEnum, RoleEnum } from "./user.types"


const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: Number,
    enum: GenderEnum,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  confirmedAt: {
    type: Date,
  },
  changedCredentialsAt: {
    type: Date,
  },
  provider: {
    type: Number,
    enum: ProviderEnum,
    default: ProviderEnum.system,
  },
  role: {
    type: Number,
    enum: RoleEnum,
    default: RoleEnum.user,
  },
  profilePic: {
    type: String,
  },
  coverPics: {
    type: [String],
    default: [],
  },
  bio: {
    type: String,
  },
}, {
  timestamps: true,
})

const userModel = mongoose.model("User", UserSchema)

export default userModel