import React from "react";
import ListItem from "./ListItem";

// Define the props type
interface ListsGridProps {
  lists: {
    _id: string;
    title: string;
    // slug: string;
    // image: string;
    description: string;
    email: string;
  }[];
}

// Type the component with React.FC
const ListsGrid: React.FC<ListsGridProps> = ({ lists }) => {
  if (lists.length === 0) {
    return <p className="text-center">No list Found</p>;
  }
  return (
    <>
      <div className="row no-gutters">
        {lists.map((list) => (
          <ListItem key={list._id} {...list} />
        ))}
      </div>
    </>
  );
};

export default ListsGrid;
