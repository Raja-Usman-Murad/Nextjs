"use client";

import { useFormState } from "react-dom";

import classes from "./page.module.css";
import { createNewListAction } from "@/lib/serverActions/lists/createNewList";
import ImagePicker from "@/components/Lists/imagePicker";
import MealsFormSubmit from "@/components/Lists/listFormSubmitButton";
import { showToast } from "@/helper/toast";

export default function CreateNewList() {
  const [state, formAction] = useFormState(createNewListAction, {
    message: null,
  });
  console.log(state, "state");
  console.log(Array.isArray(state?.message), "state");
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
          Create a new <span className={classes.highlight}>list</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="title">Your title</label>
              <input type="text" id="title" name="title" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
