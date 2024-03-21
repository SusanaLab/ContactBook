import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./components/pages/contactList/ContactList";
import ContactDetail from "./components/common/ContactDetail";

const App = () => {
  const [contacts, setContacts] = useState([]);

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
  console.log(contacts);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} />} />
        <Route
          path="/contact/:uuid"
          element={<ContactDetail contacts={contacts} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
