import React from "react";
import { useParams } from "react-router-dom";

const ContactDetail = ({ contacts }) => {
  const { uuid } = useParams();
  const contact = contacts.find((c) => c.login.uuid === uuid);

  if (!contact) return <div>Contact not found</div>;

  const { name, location, email, phone, picture } = contact;
  const { title, first, last } = name;
  const { street, city, state, country, postcode, timezone } = location;

  return (
    <div>
      <h1>
        {title} {first} {last}
      </h1>
      <h4>
        Location: {street.number} {street.name}, {city}, {state}, {country},{" "}
        {postcode}
      </h4>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4>
      <img src={picture.large} alt="Contact" />
    </div>
  );
};

export default ContactDetail;
