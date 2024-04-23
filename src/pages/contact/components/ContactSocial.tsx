import React from "react";

export default function ContactSocial() {
  return (
    <>
      <h2 id="follow">FOLLOW US:</h2>
      <article className="contact-ways social-icons">
        <p>
          <a
            href="https://www.facebook.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="fa-brands fa-square-facebook"></i>
            </span>
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="fa-brands fa-square-twitter"></i>
            </span>
          </a>
        </p>
      </article>
    </>
  );
}
