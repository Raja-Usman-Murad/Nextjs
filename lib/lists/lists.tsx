import { axios } from "@/configs/config";
import { List } from "../serverActions/lists/createNewList";

export async function getLists() {
  try {
    const response = await axios.get("list");
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return response.data;
  } catch (error: any) {
    console.log(error, "error123");
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message;
    }
    return "Network Error";
  }
}

export async function createNewList(list: List) {
  try {
    const response = await axios.post("list", list);
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
    return response.data;
  } catch (error: any) {
    console.log(error, "error123");
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message;
    }
    return "Network Error";
  }
  // meal.slug = slugify(meal.title, { lower: true });
  // meal.instructions = xss(meal.instructions);
  // const extension = meal.image.name.split(".").pop();
  // const fileName = `${meal.slug}.${extension}`;
  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  // const bufferedImage = await meal.image.arrayBuffer();
  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("Saving image failed!");
  //   }
  // });
  // meal.image = `/images/${fileName}`;
  // db.prepare(
  //   `
  //   INSERT INTO meals
  //     (title, summary, instructions, creator, creator_email, image, slug)
  //   VALUES (
  //     @title,
  //     @summary,
  //     @instructions,
  //     @creator,
  //     @creator_email,
  //     @image,
  //     @slug
  //   )
  // `
  // ).run(meal);
}
