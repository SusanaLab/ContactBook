import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const { name, phone, picture} = contact;
  const { first, last } = name;

  return (
    <div>
      <Link to={`/contact/${contact.login.uuid}`}>
        <img src={picture.large} alt="Contact" />
        <h1>
          {first} {last}
        </h1>
        <h4>Phone: {phone}</h4>
      </Link>
    </div>
  );
};

export default Contact;
