import { useState, useEffect } from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import AddComment from './AddComment';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async (bookId) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNzBlNWI3NDcwMTAwMTU4YjJiYWEiLCJpYXQiOjE3Mzg3NDg3MTYsImV4cCI6MTczOTk1ODMxNn0.fKmV4AJBuGxm2iU-yHSbA8VvyQssMvyDwd4sBfQOtzo"
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        setError('Errore nel caricamento dei commenti');
      }
    } catch (error) {
      setError('Errore di rete');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (asin) {
      fetchComments(asin);
    }
  }, [asin]);

  if (!asin) {
    return (
      <Alert variant="info">
        Seleziona un libro per vedere i commenti
      </Alert>
    );
  }

  if (isLoading) {
    return <div>Caricamento commenti...</div>;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div className="mt-3">
      <h4>Commenti</h4>
      <ListGroup>
        {comments.map((comment) => (
          <ListGroup.Item key={comment._id}>
            <p>{comment.comment}</p>
            <footer className="blockquote-footer">
              Voto: {comment.rate}
            </footer>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <AddComment asin={asin} onCommentAdded={() => fetchComments(asin)} />
    </div>
  );
};

export default CommentArea; 