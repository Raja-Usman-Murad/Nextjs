import React from "react";
import type { Metadata } from "next";

type Props = {
  params: {
    listId: string;
  };
};
// we can do async calls as well in this function
export const generateMetadata = ({ params }: Props): Metadata => {
  const title = `list ${params.listId} ❤`;
  return {
    title: title,
  };
};

const ListsDetails = ({ params }: Props) => {
  return <div>ListsDetails page {params.listId}</div>;
};

export default ListsDetails;
