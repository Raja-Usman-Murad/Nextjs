import { axios } from "@/configs/config";

export async function getLists() {
  try {
    const response = await axios.get("list");
    await new Promise<void>((resolve) => setTimeout(resolve, 5000));
    return response.data;
  } catch (error: any) {
    console.log(error, "error123");
    return error.response.data;
  }
}
