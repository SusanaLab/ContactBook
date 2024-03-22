import React, {useState} from "react";
import Contact from "../../common/Contact";
import Footer from "../../layout/footer/Footer";

const ContactList = ({ contacts }) => {

const [showOnlyWomen, setShowOnlyWomen] = useState(false);
 const [showOnlyMen, setShowOnlyMen] = useState(false); 

const handleShowOnlyWomen = () => {
  setShowOnlyWomen(true);
  setShowOnlyMen(false);

}; const handleShowOnlyMen = () => {
  setShowOnlyMen(true);
  setShowOnlyWomen(false);
}; 


const filteredContacts = contacts.filter((contact) => {
    if (showOnlyWomen && contact.gender === "female") {
      return true;
    }
    if (showOnlyMen && contact.gender === "male") {
      return true;
    }

    return !showOnlyWomen && !showOnlyMen;
});


  return (
    <div className="contactList" > 
    <h2>Contact Book </h2>   
     <h3>Filter by gender</h3>
      <div className= "filter">
   
      <button onClick={handleShowOnlyWomen}>Women</button>
   <button onClick={handleShowOnlyMen}>Men</button> 
      </div>
       
      <ul>
        {filteredContacts.map((contact) => (
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
