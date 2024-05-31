"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../../reduxStore/store";
export default function Lists({ params }: { params: { listId: string } }) {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);

  return (
    <main className="">
      <h1>LISTS Details Page {params.listId}</h1>
    </main>
  );
}
