import Link from "next/link";
import React from "react";

const F6: React.FC = () => {
  return (
    <>
      <div>f6 page</div>
      <Link className="text-green-600" href="/lists">
        lists Link
      </Link>
    </>
  );
};

export default F6;
