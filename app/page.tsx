"use client";

import { useSelector } from "react-redux";
import { RootState } from "../reduxStore/store";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);

  return (
    <main className="">
      <h1>Home</h1>
    </main>
  );
}
