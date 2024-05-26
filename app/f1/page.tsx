import Link from "next/link";
import React from "react";

const F1: React.FC = () => {
  return (
    <>
      <div>f1 page</div>
      <Link className="text-red-600" href={"f1/f2"}>
        F2
      </Link>
    </>
  );
};

export default F1;
