import { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import ListsGrid from "../../components/Lists/ListsGrid";
import { getLists } from "../../lib/lists/lists";

async function GetLists() {
  const response = await getLists();

  if (response.success === true) {
    return <ListsGrid lists={response.data} />;
  }
  if (response.success === false) {
    throw Error(response?.message);
  }
  throw Error(response?.message);
}

export default function Lists() {
  console.log("abbbbbbc");

  return (
    <>
      <header className={classes.header}>
        <h1>
          All lists, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Explore and Enjoy!</p>
        <p className={classes.cta}>
          <Link href="/lists/new-list">Create new list</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching lists...</p>}
        >
          <GetLists />
        </Suspense>
      </main>
    </>
  );
}
