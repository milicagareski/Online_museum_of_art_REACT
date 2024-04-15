import React from "react";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export default function Contact() {
  return (
    <section className="container">
      <ContactHeader />
      <ContactForm />
      <ContactInfo />
    </section>
  );
}
