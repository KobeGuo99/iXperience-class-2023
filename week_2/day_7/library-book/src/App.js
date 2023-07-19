import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import { useState, useEffect } from "react";
import { Book } from "./models/Book";

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    loadBooksFromLocalStorage();
  }, [])

  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
    saveBooksToLocalStorage();
  }

  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function saveBooksToLocalStorage(){
    const json = JSON.stringify(books);
    localStorage.setItem('books', json);
  }

  function loadBooksFromLocalStorage() {
    const json = localStorage.getItem('books');
    if (json) {
      const bookArr = JSON.parse(json);
      if (bookArr.length) {
        setBooks(bookArr.map((x) => Book.fromJSON(x)));
      }
    }
  }

  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit} />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  );
}

export default App;
