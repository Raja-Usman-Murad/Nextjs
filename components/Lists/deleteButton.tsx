import ListsFormSubmitButton from "./listFormSubmitButton";

export default async function DeleteButton({
  deleteAction,
  listId,
}: {
  deleteAction: any;
  listId: string;
}) {
  return (
    <form className="mt-2" action={deleteAction.bind(null, listId)}>
      <button className="btn btn-danger ">
        <ListsFormSubmitButton
          actualText="Delete List"
          pendingText="Deleting...."
        />
      </button>
    </form>
  );
}
