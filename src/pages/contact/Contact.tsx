import React from "react";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import ContactSocial from "./components/ContactSocial";

export default function Contact() {
  return (
    <section className="container">
      <ContactHeader />
      <section className="form-and-info">
        <ContactForm />
        <ContactInfo />
      </section>
      <ContactSocial />
    </section>
  );
}
