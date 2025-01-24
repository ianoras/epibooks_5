import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import SingleBook from './components/SingleBook';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Cambia il percorso per puntare al file JSON corretto (ad esempio: public/fantasy.json)
    fetch('/fantasy.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Errore nel caricamento dei dati:', error));
  }, []);

  // Filtra i libri in base alla ricerca
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Form className="mb-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Cerca un libro..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Row>
        {filteredBooks.map((book) => (
          <Col xs={12} md={4} lg={3} className="mb-4" key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
