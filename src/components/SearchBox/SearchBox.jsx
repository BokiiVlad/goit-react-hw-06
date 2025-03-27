import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div>
      <p className={css.searchText}>Find contacts by name</p>
      <input className={css.findField} />
    </div>
  );
}
