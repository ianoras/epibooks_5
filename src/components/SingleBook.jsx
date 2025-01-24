import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Card 
      className="h-100" 
      onClick={() => setSelected(!selected)}
      style={{ cursor: 'pointer', border: selected ? '3px solid red' : 'none' }}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title className="text-truncate">{book.title}</Card.Title>
        <Card.Text>€ {book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook; 