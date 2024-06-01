import ListsFormSubmitButton from "./listFormSubmitButton";

export default async function DeleteButton({
  deleteAction,
  listId,
}: {
  deleteAction: any;
  listId: string;
}) {
  return (
    <form action={deleteAction.bind(null, listId)}>
      <span className="p-3 m-3 bg-orange-700 rounded-sm text-white">
        <ListsFormSubmitButton
          actualText="Delete List"
          pendingText="Deleting...."
        />
      </span>
    </form>
  );
}
