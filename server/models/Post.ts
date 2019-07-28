import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
  account: string;
  title: string;
  content: string;
  viewCount: number;
  thumbImage: Buffer;
}

const Post = new Schema({
  account: { type: mongoose.SchemaTypes.ObjectId },
  title: String,
  content: String,
  thumbImage: Buffer,
  viewCount: { type: Number, default: 0 }
});

export default mongoose.model<IPost>("Post", Post);
