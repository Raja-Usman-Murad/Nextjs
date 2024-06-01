import Link from "next/link";
import Image from "next/image";

import classes from "./listItem.module.css";

interface ListItemProps {
  _id: string;
  title: string;
  //   slug: string;
  //   image: string;
  description: string;
  email: string;
}

const ListItem: React.FC<ListItemProps> = ({
  _id,
  title,
  description,
  email,
}) => {
  return (
    <article className={classes.list}>
      <header>
        <div className={classes.image}>
          {/* <Image src={image} alt={title} fill /> */}
          <Image
            src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={title}
            width={370}
            height={350}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {email}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{description}</p>
        <div className={classes.actions}>
          <Link href={`/lists/${_id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default ListItem;
