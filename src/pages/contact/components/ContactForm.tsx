import React from "react";

export default function ContactForm() {
  return (
    <section className="form">
      <form>
        <label htmlFor="contact-email">What is your email?</label>
        <input type="email" id="contact-email" placeholder="write your email" />
        <label htmlFor="contact-textarea">Ask us a question </label>
        <textarea
          name=""
          id="contact-textarea"
          cols={10}
          rows={4}
          placeholder="write your question here"
        ></textarea>
      </form>
      <button className="btn">submit</button>
    </section>
  );
}
