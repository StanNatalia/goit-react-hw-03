import initialContacts from "./contacts.json";
import css from "../src/App.module.css";
import ContactForm from "../src/components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts ?? initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");
  const [warning, setWarning] = useState("");

  const addContacts = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isDuplicate) {
      setWarning(`A contact with the name ${newContact.name} already exists`);
      return;
    }
    setWarning("");
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      {warning && <p className={css.warning}>{warning}</p>}
      {contacts.length > 0 ? (
        <div className={css.wrapper}>
          <SearchBox value={filter} onFilter={setFilter} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
}

export default App;
