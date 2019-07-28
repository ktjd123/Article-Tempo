import sharp from "sharp";

export const imgPro = async (
  baseImg: string,
  width = 640,
  height: number | undefined = undefined,
  quality = 75
) => {
  const matches = baseImg.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    throw new Error("is not image");
  }
  const imgBuff = Buffer.from(matches[2], "base64");
  let resizeImgBuff;
  try {
    resizeImgBuff = await sharp(imgBuff)
      .resize(width, height, {
        withoutEnlargement: true
      })
      .flatten({
        background: {
          r: 255,
          g: 255,
          b: 255,
          alpha: 1
        }
      })
      .jpeg({ quality })
      .toBuffer();
  } catch (e) {
    throw e;
  }
  return resizeImgBuff;
};

export const toBase64 = (imgBuffer: Buffer) =>
  `data:image/jpeg;base64,${Buffer.from(imgBuffer).toString("base64")}`;
