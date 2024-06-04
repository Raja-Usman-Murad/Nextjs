"use server";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";
import { updateList } from "@/lib/lists/lists";
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

export async function updateListAction(
  listId: string,
  existingImageUrl: string,
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
    !email.includes("@")
  ) {
    return {
      message: "Invalid input.",
    };
  }

  let imageUrl;
  if (!image || image.size === 0) {
    imageUrl = existingImageUrl;
  } else {
    try {
      imageUrl = await uploadImage(image);
    } catch (error) {
      throw new Error(
        "Image upload failed, list was not created. Please try again later."
      );
    }
  }

  const list: List = {
    title,
    email,
    description,
    image: imageUrl,
  };
  const response = await updateList(list, listId);

  if (response?.success === true) {
    if (!response?.data) {
      throw Error(response?.message);
    }
    revalidatePath("lists");
    redirect(`/lists/${listId}`);
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
