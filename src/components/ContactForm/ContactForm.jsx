import React, { useState } from "react";
import css from "./ContactForm.module.scss";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInBase = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (!isInBase) {
      console.log("Dispatching addContact action...");
      dispatch(addContact({ name, phone }));
      setName("");
      setPhone("");
    } else {
      alert(`${name} is already in use. Try another name.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css["form-container"]}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[a-zA-Z '\-]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Phone</label>
      <input
        type="tel"
        name="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="^\+?[0-9\(\) \-]+$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
