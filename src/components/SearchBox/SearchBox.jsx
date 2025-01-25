import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.form}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.field}
        type="text"
        value={value}
        onChange={(ev) => onFilter(ev.target.value)}
      />
    </div>
  );
}
