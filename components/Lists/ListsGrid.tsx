import React from "react";
import ListItem from "./ListItem";
import classes from "./listsGrid.module.css";

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
    <ul className={classes.lists}>
      {lists.map((list) => (
        <li key={list._id}>
          <ListItem {...list} />
        </li>
      ))}
    </ul>
  );
};

export default ListsGrid;
