import { useState } from "react";

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [finalMessage, setFinalMessage] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && question) {
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
      setEmail("");
      setQuestion("");
    } else {
      setFinalMessage(true);
      setTimeout(() => {
        setFinalMessage(false);
      }, 4000);
    }
  };

  return (
    <>
      <section className="form-section">
        <section>
          {successMessage && (
            <article id="form-success">
              <p style={{ color: "green" }}>Thank you for the message</p>
            </article>
          )}
          {finalMessage && (
            <article id="form-success">
              <p style={{ color: "red" }}>Provide bellow your name and email</p>
            </article>
          )}
        </section>
        <section className="form">
          <form className="form-contact" onSubmit={handleSubmit}>
            <label htmlFor="contact-email">What is your email?</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="contact-email"
              placeholder="write your email"
              required
            />
            <label htmlFor="contact-textarea">Ask us a question </label>
            <textarea
              name=""
              id="contact-textarea"
              cols={23}
              rows={5}
              placeholder="write your question here"
              required
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            ></textarea>
          </form>
          <button className="btn" type="submit">
            submit
          </button>
        </section>
      </section>
    </>
  );
}
