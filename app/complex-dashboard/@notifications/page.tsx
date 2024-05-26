import Card from "@/app/Components/UI/Card/Card";
import Link from "next/link";
import React from "react";

const NotificationsSlot: React.FC = () => {
  return (
    <Card>
      <h3>NotificationsSlot</h3>
      <Link href="/complex-dashboard/archived" className="text-amber-700">
        Archived
      </Link>
    </Card>
  );
};

export default NotificationsSlot;
