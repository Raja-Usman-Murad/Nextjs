import { axios } from "@/configs/config";
import { List } from "../serverActions/lists/createNewList";
import { checkErrorResponse } from "./checkErrorResponse";

export async function getLists() {
  try {
    const response = await axios.get("list");
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return response.data;
  } catch (error: any) {
    console.log(error, "error123");
    return checkErrorResponse(error);
  }
}

export const getListById = async (listId: string) => {
  try {
    const response = await axios.get(`list/${listId}`);
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return response.data;
  } catch (error) {
    console.log(error, "error123");
    return checkErrorResponse(error);
  }
};

export const deleteList = async (listId: string) => {
  try {
    const response = await axios.delete(`list/${listId}`);

    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return response.data;
  } catch (error) {
    console.log(error, "error123");
    return checkErrorResponse(error);
  }
};

export async function createNewList(list: List) {
  try {
    const response = await axios.post("list", list);
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return response.data;
  } catch (error: any) {
    console.log(error, "error123");
    return checkErrorResponse(error);
  }
}
export async function updateList(list: List, listId: string) {
  try {
    const response = await axios.patch(`list/${listId}`, list);
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return response.data;
  } catch (error: any) {
    console.log(error, "error123");
    return checkErrorResponse(error);
  }
}
