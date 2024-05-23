"use client";

import { useSelector } from "react-redux";
import { RootState } from "./_store/store";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Home</h1>
    </main>
  );
}
