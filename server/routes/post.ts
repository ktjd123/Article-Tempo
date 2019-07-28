import express from "express";
import joi from "joi";
import { Post } from "../models";
import { imgPro } from "../lib/ImgPro";

const router = express();

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
