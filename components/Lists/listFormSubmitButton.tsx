"use client";

import { useFormStatus } from "react-dom";

export default function ListsFormSubmitButton({
  actualText,
  pendingText,
}: {
  actualText: string;
  pendingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? pendingText : actualText}</button>
  );
}
