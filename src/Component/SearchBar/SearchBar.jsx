import { Formik, Form, Field } from "formik";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, { resetForm }) => {
    onSearch(values.query); // Здесь вы можете выполнить логику отправки запроса поиска
    resetForm(); // Очищаем форму после отправки
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
