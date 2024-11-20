import { useEffect, useState } from "react";

// Import Styles
import "../styles/css/contact.css";

function Contact() {
  const [sendEnabled, setSendEnabled] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name !== null &&
      name.length > 0 &&
      email !== null &&
      email.length > 0 &&
      email.match(emailPattern) &&
      message !== null &&
      message.length > 0
    ) {
      setSendEnabled(true);
    } else {
      setSendEnabled(false);
    }
  }, [name, email, message]);

  return (
    <div id="contact" className="contact">
      <div className="contact--heading">
        <h1 className="contact--heading--icon">&#8811;</h1>
        {/* <h1 className="contact--heading--icon">&#8827;</h1> */}
        <div className="width-s"></div>
        <h1 className="contact--heading--text">contact</h1>
        <div className="width-m"></div>
        <div className="contact--heading--line"></div>
      </div>
      <div className="height-l"></div>
      <div className="contact--container">
        <div className="contact--container--left">
          <div className="contact--container--left--text">
            <p>Hit me up if you want to know more contact me or my work!</p>
            <p>I'd love to hear from you.</p>
          </div>
          <div className="height-m"></div>
          <div className="contact--container--left--formular">
            <input
              className="contact--container--left--formular--name input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="height-s"></div>
            <input
              className="contact--container--left--formular--email input"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="height-s"></div>
            <textarea
              className="contact--container--left--formular--message input"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div className="contact--container--left--formular--button">
              <button
                className="contact--container--left--formular--button--btn"
                onClick={() => {
                  console.log("Implement send function");
                }}
                disabled={!sendEnabled}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="contact--container--right">
          <h2 className="contact--container--right--email-heading">Email</h2>
          <a
            href="mailto:jm.lindemann@web.de"
            className="contact--container--right--email"
          >
            jm.lindemann@web.de
          </a>
          <div className="height-m"></div>
          <h2 className="contact--container--right--socials-heading">
            Socials
          </h2>
          <div className="contact--container--right--socials">
            <a
              href="https://www.github.com/lambouw"
              className="hero--left--socials--icon"
              target="blank"
              fill="currentColor"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                data-view-component="true"
                fill="currentColor"
              >
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
            </a>
            <div className="width-sm"></div>
            <a
              href="https://www.linkedin.com/in/malte-lindemann-b9533b209/"
              className="hero--left--socials--icon"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="32x32"
                fill="currentColor"
                class="mercado-match"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
