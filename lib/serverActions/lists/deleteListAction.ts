"use server";
import { deleteList } from "@/lib/lists/lists";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteListAction(listId: string) {
  const response = await deleteList(listId);
  if (response?.success === true) {
    if (!response?.data) {
      throw Error(response?.message);
    }
    revalidatePath("/lists");
    redirect("/lists");
  }
  if (response?.success === false) {
    throw Error(response?.message);
  }
  throw Error(response);
}
