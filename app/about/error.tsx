"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void; //re-render the component
}) => {
  return (
    <>
      <h1>
        Error text from local component.................... {error.message}
      </h1>
      <button onClick={reset}>TRY again</button>
    </>
  );
};

export default ErrorBoundary;
