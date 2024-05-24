import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <img
              alt="Under development"
              src={"/error-404.png"}
              className="inline-block max-w-full w-64"
            />
          </div>
          <h3 className="mb-6 text-3xl">
            404: The page you are looking for isn’t here
          </h3>
          <p className="mb-6 text-center text-gray-600">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </p>
          <Link href={"/"}>
            <button className="inline-flex items-center justify-center mt-6 mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Go back to Home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
