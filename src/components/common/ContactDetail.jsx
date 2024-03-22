import React from "react";
import { useParams } from "react-router-dom";

const ContactDetail = ({ contacts }) => {
  const { uuid } = useParams();
  const contact = contacts.find((c) => c.login.uuid === uuid);



  const { name, location, email, phone, picture, dob } = contact;
  const { title, first, last } = name;
  const { street, city, state, country, postcode, timezone } = location;
  const birthDate = new Date(dob.date).toLocaleDateString();
  return (
    <div className="contact_detail">
      <div className="contact_name">
        <img src={picture.large} alt="Contact" />
        <h1>
          {title} {first} {last}
          <h4>
            {city}, {state}
          </h4>
        </h1>
      </div>
      <div className="contact_info">
        <h1>Contact Info </h1>
        <h4>Phone: {phone}</h4>
        <h4>Email: {email}</h4>
        <h4>Date of birth: {birthDate}</h4>
      </div>
    </div>
  );
};

export default ContactDetail;
