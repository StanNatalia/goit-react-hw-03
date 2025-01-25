import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.item}>
      <div className={css.itemWrapper}>
        <div className={css.itemInfo}>
          <FaUserAlt className={css.userIcon} />
          <p className={css.itemName}>{name}</p>
        </div>
        <div className={css.itemInfo}>
          <BsTelephoneFill className={css.userIcon} />
          <p className={css.itemName}>{number}</p>
        </div>
      </div>

      <button onClick={() => onDelete(id)} className={css.itemBtn}>
        Delete
      </button>
    </div>
  );
}
