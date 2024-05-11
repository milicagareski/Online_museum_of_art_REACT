import ContactHeader from "../../components/Contact/ContactHeader";
import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactSocial from "../../components/Contact/ContactSocial";
import { useState } from "react";

export default function Contact() {

  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  return (
    <section className="container">
      <ContactHeader />
      <section className="form-and-info">
        <ContactForm successMessage = {successMessage} setSuccessMessage={setSuccessMessage} email
        ={email} setEmail = {setEmail} question={question} setQuestion={setQuestion}/>
        <ContactInfo />
      </section>
      <ContactSocial />
    </section>
  );
}
