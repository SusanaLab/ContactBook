import React from "react";
import { Link } from "react-router-dom";



const Contact = ({ contact }) => {
  const { name, phone, picture } = contact;
  const { first, last } = name;

  return (
    <div className="container">
      <Link to={`/contact/${contact.login.uuid}`}>
        <img src={picture.large} alt="Contact" className="image" />
        <h1 className="name">
          {first} {last}
        </h1>
        <h4 className="phone">Phone: {phone}</h4>
      </Link>
    </div>
  );
};

export default Contact;
