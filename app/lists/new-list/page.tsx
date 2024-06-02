"use client";

import { useFormState } from "react-dom";

import classes from "./page.module.css";
import { createNewListAction } from "@/lib/serverActions/lists/createNewList";
import ImagePicker from "@/components/Lists/imagePicker";
import ListsFormSubmitButton from "@/components/Lists/listFormSubmitButton";
import { showToast } from "@/helper/toast";
import { updateListAction } from "@/lib/serverActions/lists/updateListAction";

interface ListItemProps {
  listData?: {
    _id: string;
    title: string;
    //   slug: string;
    //   image: string;
    description: string;
    email: string;
  };
}

const CreateNewList: React.FC<ListItemProps> = ({ listData }) => {
  const updatePage = listData;
  const action = listData
    ? updateListAction.bind(null, listData._id)
    : createNewListAction;

  const [state, formAction] = useFormState(action, {
    message: null,
  });
  if (state?.message) {
    if (Array.isArray(state.message)) {
      state.message.forEach((message: string) => showToast(message, "error"));
    } else {
      showToast(state.message, "error");
    }
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          {updatePage ? "Update" : "Create"} a {updatePage ? "" : "new"}
          <span className={classes.highlight}>list</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="title">Your title</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={listData?.title || ""}
                required
              />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                defaultValue={listData?.email || ""}
              />
            </p>
          </div>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              defaultValue={listData?.description || ""}
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <ListsFormSubmitButton
              actualText={updatePage ? "Update List" : "Create List"}
              pendingText={updatePage ? "Updating...." : "Submitting...."}
            />
          </p>
        </form>
      </main>
    </>
  );
};

export default CreateNewList;
