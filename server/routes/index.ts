import express from "express";
import auth from "./auth";
import post from "./post";

const router = express();

router.use("/auth", auth);
router.use("/post", post);

router.get(
  "/heart_beat",
  async (req: express.Request, res: express.Response) => {
    res.send();
  }
);

export default router;
