"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./imagePicker.module.css";

export default function ImagePicker({ label, name, imageUrl }) {
  const [pickedImage, setPickedImage] = useState(imageUrl);
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log(event.target.files, "event.target.files");

    if (!file) {
      setPickedImage("");
      return;
    }

    const fileReader = new FileReader();
    console.log(fileReader, "fileReader");

    fileReader.onload = () => {
      console.log(fileReader.result, "fileReader.result");

      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
