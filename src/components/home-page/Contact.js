import "./contact.css";
import React, { useState } from "react";
import contactTitle from "../img/contact.svg";
import { TextField, Button } from "@mui/material";
import instaIcon from "../img/instagram.svg";
import githubIcon from "../img/github.svg";
import linkedIcon from "../img/linkedin.svg";
import spotifyIcon from "../img/spotify.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function clearFields() {
    setEmail("");
    setName("");
    setMessage("");
  }
  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/tVDK6DsU_Pw", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
          clearFields();
        } else if (res.code === 422) {
          setError(res.message);
        } else {
          setError("Please try again later.");
        }
      })
      .catch((error) => setError(error));
  }

  return (
    <div id="contact">
      <div id="contact-container">
        <img className="section-title" alt="contact-title" src={contactTitle} />
        <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
          <div className="formcarry-block">
            <TextField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="contact-input"
              placeholder="Full Name"
            />
          </div>
          <div className="formcarry-block">
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="contact-input"
              placeholder="john@doe.com"
            />
          </div>
          <div className="formcarry-block">
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="contact-input"
              placeholder="Enter your message..."
            ></TextField>
          </div>
          <div className="formcarry-block">
            <Button id="contact-button" variant="contained" type="submit">
              Send
            </Button>
          </div>
          {submitted ? (
            <p className="contact-message green">
              I've received your message, thank you for contacting me!
            </p>
          ) : error ? (
            <p className="contact-message red">{error}</p>
          ) : (
            ""
          )}
        </form>
        <div id="social-container">
          <a href="/">
            <img className="social-links" alt="instagram" src={instaIcon} />
          </a>
          <a href="/">
            <img className="social-links" alt="linkedin" src={linkedIcon} />
          </a>
          <a href="/">
            <img className="social-links" alt="github" src={githubIcon} />
          </a>
          <a href="/">
            <img className="social-links" alt="spotify" src={spotifyIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
