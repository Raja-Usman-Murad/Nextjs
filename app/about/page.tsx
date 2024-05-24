"use client";

import React from "react";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * 2);
}

const About = () => {
  const randomNumber = getRandomInt(2);
  if (randomNumber === 1) {
    throw new Error("my generated error");
  }
  console.log(randomNumber, "randomNumber");

  return <div>About Page {randomNumber.toString()}</div>;
};

export default About;
