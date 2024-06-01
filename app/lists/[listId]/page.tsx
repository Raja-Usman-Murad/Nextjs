import Link from "next/link";
import classes from "./page.module.css";
import ListItem from "@/components/Lists/ListItem";
import { getListById } from "@/lib/lists/lists";
import { Suspense } from "react";
import DeleteButton from "@/components/Lists/deleteButton";
import { deleteListAction } from "@/lib/serverActions/lists/deleteListAction";

async function GetList({ listId }: { listId: string }) {
  const response = await getListById(listId);

  if (response?.success === true) {
    if (!response?.data) {
      return <p className="text-center">No list Found</p>;
    }
    return (
      <>
        <DeleteButton deleteAction={deleteListAction} listId={listId} />
        <ListItem {...response?.data} />
      </>
    );
  }
  if (response?.success === false) {
    throw Error(response?.message);
  }
  throw Error(response);
}

export default async function Lists({
  params,
}: {
  params: { listId: string };
}) {
  return (
    <>
      <header className={classes.header}>
        <h1>
          A list, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>You can Update and Delete</p>
        <p className={classes.cta}>
          <Link href={`/lists/${params.listId}/edit`}>Update list</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching list...</p>}
        >
          <GetList listId={params.listId} />
        </Suspense>
      </main>
    </>
  );
}
