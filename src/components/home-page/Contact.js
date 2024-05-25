import "./index.css";
import React, { useState } from "react";
import contactTitle from "../img/contact.svg";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function clearFields() {
    setEmail("");
    setName("");
    setMessage("");
  }
  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    clearFields();

    fetch("https://formcarry.com/s/tVDK6DsU_Pw", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div id="contact">
      <img className="section-title" alt="contact-title" src={contactTitle} />
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="formcarry-block">
          <TextField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
          />
        </div>

        <div className="formcarry-block">
          {/* <label htmlFor="email">Your Email Address</label> */}
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="john@doe.com"
          />
        </div>

        <div className="formcarry-block">
          {/* <label htmlFor="message">Your message</label> */}
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Enter your message..."
          ></TextField>
        </div>

        <div className="formcarry-block">
          <Button variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
