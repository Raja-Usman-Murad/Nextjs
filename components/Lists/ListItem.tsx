import Link from "next/link";
import Image from "next/image";
import DeleteButton from "./deleteButton";
import { deleteListAction } from "@/lib/serverActions/lists/deleteListAction";

interface ListItemProps {
  _id: string;
  title: string;
  image: string;
  description: string;
  email: string;
  deleteButton?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  _id,
  title,
  description,
  image,
  email,
  deleteButton,
}) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 my-2">
        <div className="card mx-auto h-100" style={{ width: 18 + "rem" }}>
          <Image
            src={image}
            alt={title}
            className="card-img-top"
            width={370}
            height={350}
          />
          {/* <Image
            src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={title}
            width={370}
            height={350}
            className="card-img-top"
          /> */}
          <div className="card-body d-flex flex-column justify-content-end">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">by {email}</h5>
            <p className="card-text">{description}</p>
            {deleteButton ? (
              <DeleteButton deleteAction={deleteListAction} listId={_id} />
            ) : (
              <Link
                href={`/lists/${_id}`}
                className="btn btn-outline-primary mt-2 align-self-baseline"
              >
                View Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
