import { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';
import { ThemeContext } from '../contexts/ThemeContext';

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mb-4">
      <Card 
        onClick={() => setSelected(!selected)}
        style={{ 
          cursor: 'pointer', 
          border: selected ? '3px solid red' : 'none',
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000'
        }}
      >
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text>€ {book.price}</Card.Text>
        </Card.Body>
      </Card>
      {selected && (
        <div className="mt-2">
          <CommentArea asin={book.asin} />
        </div>
      )}
    </div>
  );
};

export default SingleBook; 