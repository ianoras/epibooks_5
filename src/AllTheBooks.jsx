import React, { useState, useEffect } from 'react';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Cambia il percorso per puntare al file JSON corretto (ad esempio: public/fantasy.json)
    fetch('/fantasy.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Errore nel caricamento dei dati:', error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {books.map((book) => (
          <div className="col-md-3 mb-4" key={book.asin}>
            <div className="card">
              <img src={book.img} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTheBooks;
