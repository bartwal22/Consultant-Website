import React from "react";
import { CommonHero } from "../utils/CommonHero";
import { Form } from "../components/contact/Form";
import { Map } from "../components/contact/Map";

const data = [{ tittle: "Contact" }];

export const Contact = () => {
  return (
    <main>
      <CommonHero item={data[0]} />
      <Form />
      <Map />
    </main>
  );
};
