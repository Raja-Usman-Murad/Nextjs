"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
import { createNewList } from "@/lib/lists/lists";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function createNewListAction(prevState, formData) {
  const list = {
    title: formData.get("title"),
    email: formData.get("email"),
    description: formData.get("description"),
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
