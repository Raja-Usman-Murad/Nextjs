import { getListById } from "@/lib/lists/lists";
import CreateNewList from "../../new-list/page";

export default async function EditList({
  params,
}: {
  params: { listId: string };
}) {
  const response = await getListById(params.listId);

  if (response?.success === true) {
    if (!response?.data) {
      return <p className="text-center">No list Found</p>;
    }
    return (
      <>
        <CreateNewList listData={response?.data} />
      </>
    );
  }
  if (response?.success === false) {
    throw Error(response?.message);
  }
  throw Error(response);
}
