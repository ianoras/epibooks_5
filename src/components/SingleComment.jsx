import { useState } from 'react';
import { ListGroup, Button, Form, Spinner } from 'react-bootstrap';

const SingleComment = ({ comment, onCommentDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNzBlNWI3NDcwMTAwMTU4YjJiYWEiLCJpYXQiOjE3Mzc3MTU5NDIsImV4cCI6MTczODkyNTU0Mn0.x6qupdfGVXRKSmj_jRc642t6hY-rf48NP89_EtGbACw"
          }
        }
      );
      if (response.ok) {
        onCommentDeleted();
      } else {
        setError('Errore durante l\'eliminazione');
      }
    } catch (error) {
      setError('Errore di rete');
    }
    setIsLoading(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNzBlNWI3NDcwMTAwMTU4YjJiYWEiLCJpYXQiOjE3Mzc3MTU5NDIsImV4cCI6MTczODkyNTU0Mn0.x6qupdfGVXRKSmj_jRc642t6hY-rf48NP89_EtGbACw"
          },
          body: JSON.stringify({
            comment: editedComment,
            rate: editedRate,
          })
        }
      );
      if (response.ok) {
        setIsEditing(false);
        onCommentDeleted(); // Ricarica i commenti
      } else {
        setError('Errore durante l\'aggiornamento');
      }
    } catch (error) {
      setError('Errore di rete');
    }
    setIsLoading(false);
  };

  return (
    <ListGroup.Item>
      {error && <div className="text-danger mb-2">{error}</div>}
      
      {isEditing ? (
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select 
              value={editedRate}
              onChange={(e) => setEditedRate(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} stelle</option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex gap-2">
            <Button type="submit" variant="success" disabled={isLoading}>
              {isLoading ? <Spinner size="sm" /> : 'Salva'}
            </Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)} disabled={isLoading}>
              Annulla
            </Button>
          </div>
        </Form>
      ) : (
        <>
          <p className="mb-1">{comment.comment}</p>
          <small>Rating: {comment.rate}/5</small>
          <div className="mt-2 d-flex gap-2">
            <Button variant="warning" size="sm" onClick={() => setIsEditing(true)} disabled={isLoading}>
              Modifica
            </Button>
            <Button variant="danger" size="sm" onClick={handleDelete} disabled={isLoading}>
              {isLoading ? <Spinner size="sm" /> : 'Elimina'}
            </Button>
          </div>
        </>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment; 