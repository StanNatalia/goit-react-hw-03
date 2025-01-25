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

  const addContacts = (newContact) => {
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
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
