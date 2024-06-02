"use server";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";
import { createNewList } from "@/lib/lists/lists";
import { uploadImage } from "@/lib/cloudinary";

export interface List {
  title: string;
  email: string;
  description: string;
  image: string;
}

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function createNewListAction(
  _prevState: any,
  formData: any
): Promise<any> {
  const title = formData.get("title");
  const email = formData.get("email");
  const description = formData.get("description");
  const image = formData.get("image");

  if (
    isInvalidText(title) ||
    isInvalidText(description) ||
    isInvalidText(email) ||
    !email.includes("@") ||
    !image ||
    image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
    console.log(imageUrl, "imageUrl");
  } catch (error) {
    throw new Error(
      "Image upload failed, list was not created. Please try again later."
    );
  }
  const list: List = {
    title,
    email,
    description,
    image: imageUrl,
  };
  const response = await createNewList(list);

  if (response?.success === true) {
    revalidatePath("/lists");
    redirect("/lists");
  }
  if (response?.success === false) {
    return {
      message: response?.message,
    };
  }
  return {
    message: response,
  };
}
