import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar() {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
