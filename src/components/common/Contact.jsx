import React from "react";

const Contact = ({ contact }) => {
  const { phone, name , picture} = contact;
  const { title, first, last } = name;
 

  return (
    <div>   
        <img src={picture.large} alt="Contact" />
      <h1>
        {title} {first} {last}
      </h1>
      <h4>Phone: {phone}</h4>
    </div>
  );
};

export default Contact;
