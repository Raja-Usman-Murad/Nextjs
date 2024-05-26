"use client";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <h1>
      Error text from global component.................... {error.message}
    </h1>
  );
};

export default ErrorBoundary;
