import React from "react";

const ListsDetails = ({ params }: { params: { listId: string } }) => {
  return <div>ListsDetails page {params.listId}</div>;
};

export default ListsDetails;
