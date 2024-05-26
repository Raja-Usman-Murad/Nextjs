import Link from "next/link";
import React from "react";

const F5: React.FC = () => {
  return (
    <>
      <div>f5 page</div>
      <Link className="text-green-600" href="/f1">
        f1 Link
      </Link>
    </>
  );
};

export default F5;
