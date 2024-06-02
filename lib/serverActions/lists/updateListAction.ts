"use server";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";
import { updateList } from "@/lib/lists/lists";

export interface List {
  title: string;
  email: string;
  description: string;
}

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function updateListAction(
  listId: string,
  _prevState: any,
  formData: any
): Promise<any> {
  const list: List = {
    title: formData.get("title") as string,
    email: formData.get("email") as string,
    description: formData.get("description") as string,
    // image: formData.get("image"),
  };

  if (
    isInvalidText(list.title) ||
    isInvalidText(list.description) ||
    isInvalidText(list.email) ||
    !list.email.includes("@")
    // ||
    // !meal.image ||
    // meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

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
