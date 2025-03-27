import Contact from "../Contact/Contact";
import contacts from "../../contactsArr";
import css from "./ContactList.module.css";

export default function ContactList() {
  return (
    <ul className={css.contactsList}>
      {contacts.map(() => {
        return <Contact />;
      })}
    </ul>
  );
}
