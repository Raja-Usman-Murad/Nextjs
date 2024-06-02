import { v2 as cloudinary } from "cloudinary";

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error("CLOUDINARY_CLOUD_NAME is not set");
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("CLOUDINARY_API_KEY is not set");
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error("CLOUDINARY_API_SECRET is not set");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(image: any) {
  console.log(image, "image");

  const imageData = await image.arrayBuffer();
  console.log(imageData, "imageData");

  const mime = image.type;
  console.log(mime, "mime");

  const encoding = "base64";
  const base64Data = Buffer.from(imageData).toString("base64");
  console.log(base64Data, "base64Data");
  const fileUri = "data:" + mime + ";" + encoding + "," + base64Data;
  console.log(fileUri, "fileUri");
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: "nextjs-nestjs-practice-project",
  });
  console.log(result, "result");
  return result.secure_url;
}
