import express from "express";
import mongoose from "mongoose";
import joi from "joi";
import { Post, Account } from "../models";
import { imgPro, toBase64 } from "../lib/ImgPro";

const router = express();

router.get("/thumbImage/:id", async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id) !== true)
    return res.json({ code: 1 });

  const post = await Post.findById(id, { thumbImage: true }).lean();
  const imageBuffer = new Buffer(post.thumbImage.buffer);
  res.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Content-Length": imageBuffer.length
  });

  return res.end(imageBuffer);
});

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id) !== true)
    return res.json({ code: 1 });

  const post = await Post.findById(id).lean();
  const account = await Account.findById(post.account, {
    id: true,
    role: true
  }).lean();
  post.thumbImage = await toBase64(post.thumbImage.buffer);
  post.account = account;

  return res.json(post);
});

router.get("/list", async (req, res) => {
  if (req.session === undefined || req.session!.info === undefined)
    return res.json({ code: 1 });

  const posts = await Post.find(
    { account: req.session!.info._id },
    { title: true, viewCount: true }
  );

  return res.json(posts);
});

router.post("/write", async (req, res) => {
  if (req.session === undefined || req.session!.info === undefined)
    return res.json({ code: 1 });

  const schema = joi.object().keys({
    title: joi
      .string()
      .trim()
      .required(),
    content: joi
      .string()
      .trim()
      .required(),
    thumbImage: joi
      .string()
      .trim()
      .required()
  });

  const result = joi.validate(req.body, schema);

  if (result.error) return res.json({ code: 2 });

  const {
    title,
    content,
    thumbImage
  }: { title: string; content: string; thumbImage: string } = result.value;

  const post = new Post({
    account: req.session!.info._id,
    title,
    content,
    thumbImage: await imgPro(thumbImage, 1024, 500, 80)
  });

  await post.save();

  return res.json();
});

export default router;
