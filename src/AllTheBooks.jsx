import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './components/SingleBook';
import { ThemeContext } from './contexts/ThemeContext';

const AllTheBooks = ({ searchQuery, selectedBook, setSelectedBook }) => {
  const [books, setBooks] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Cambia il percorso per puntare al file JSON corretto (ad esempio: public/fantasy.json)
    fetch('/fantasy.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Errore nel caricamento dei dati:', error));
  }, []);

  // Filtra i libri in base alla ricerca che ora arriva dalle props
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container 
      className="mt-5"
      style={{
        backgroundColor: theme === 'dark' ? '#222' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <Row>
        {filteredBooks.map((book) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={book.asin}>
            <SingleBook 
              book={book} 
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
