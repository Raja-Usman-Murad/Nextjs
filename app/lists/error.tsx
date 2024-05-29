"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch list data. Please try again later.</p>
      <p> {error.message}</p>
    </main>
  );
}
