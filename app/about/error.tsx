"use client";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <h1>Error text from local component.................... {error.message}</h1>
  );
};

export default ErrorBoundary;
