import React, { useState, useEffect } from "react";
import Contact from "../../common/Contact";

const ContactList = () => {

const [contacts, setContacts]= useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => {
        if (!response.ok) {
          throw new Error("");
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data.results);
      })
      .catch((error) => {
        console.error("Error getting the contacts:", error);
      });
    return () => {};
  }, []);

  return (
    <div>
      <h2>Contact List </h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.login.uuid}>
        <Contact contact = {contact}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
