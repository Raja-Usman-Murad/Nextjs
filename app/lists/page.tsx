"use client";

import { useSelector } from "react-redux";
import { RootState } from "../_store/store";
export default function Lists() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);

  return (
    <main className="">
      <h1>LISTS PAGE</h1>
    </main>
  );
}
