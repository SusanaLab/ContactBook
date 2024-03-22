import React from "react";
import Contact from "../../common/Contact";
import Footer from "../../layout/footer/Footer";

const ContactList = ({ contacts }) => {
  return (
    <div className="contactList" >
      <h2>Contact Book </h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.login.uuid}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default ContactList;
