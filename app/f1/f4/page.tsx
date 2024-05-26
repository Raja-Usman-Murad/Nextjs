import Link from "next/link";
import React from "react";

const F4: React.FC = () => {
  return (
    <>
      <div>f4 page</div>
      <Link className="text-green-600" href={"f3"}>
        f3 Link
      </Link>
    </>
  );
};

export default F4;
