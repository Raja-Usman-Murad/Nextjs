import Card from "@/app/Components/UI/Card/Card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications: React.FC = () => {
  return (
    <Card>
      <h3>Archived Notifications</h3>
      <Link href="/complex-dashboard" className="text-amber-700">
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotifications;
