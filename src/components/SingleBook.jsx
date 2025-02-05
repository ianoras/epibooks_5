import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';

const SingleBook = ({ book, selectedBook, setSelectedBook }) => {
  const { theme } = useContext(ThemeContext);
  const isSelected = selectedBook === book.asin;

  return (
    <div className="mb-4">
      <Card 
        onClick={() => setSelectedBook(book.asin)}
        style={{ 
          cursor: 'pointer', 
          border: isSelected ? '3px solid red' : 'none',
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
    </div>
  );
};

export default SingleBook; 