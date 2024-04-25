import ContactHeader from "../../components/Contact/ContactHeader";
import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactSocial from "../../components/Contact/ContactSocial";

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
