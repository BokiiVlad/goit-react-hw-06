import { BsTelephoneFill, BsPersonFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact() {
  return (
    <li className={css.listItem}>
      <div>
        <div className={css.firstField}>
          <BsPersonFill size="22" />
          <p className={css.listText}></p>
        </div>
        <div className={css.listField}>
          <BsTelephoneFill size="18" />
          <p className={css.listText}></p>
        </div>
      </div>
      <button className={css.contBut}>Delete</button>
    </li>
  );
}
