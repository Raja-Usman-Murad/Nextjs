import { axios } from "@/app/_configs/config";

export async function getLists() {
  try {
    const response = await axios.get("list");
    return response.data;
  } catch (error: any) {
    console.log(error, "error123");
    return error.response.data;
  }
}
