import { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';

const AddComment = ({ asin, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNzBlNWI3NDcwMTAwMTU4YjJiYWEiLCJpYXQiOjE3Mzc3MTU5NDIsImV4cCI6MTczODkyNTU0Mn0.x6qupdfGVXRKSmj_jRc642t6hY-rf48NP89_EtGbACw"
          },
          body: JSON.stringify({
            comment,
            rate,
            elementId: asin
          })
        }
      );

      if (response.ok) {
        setComment('');
        setRate(1);
        onCommentAdded();
      } else {
        setError('Errore durante l\'invio della recensione');
      }
    } catch (error) {
      setError('Errore di rete');
    }
    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Scrivi una recensione..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={isLoading}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select 
          value={rate} 
          onChange={(e) => setRate(parseInt(e.target.value))}
          disabled={isLoading}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} stelle</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner size="sm" className="me-2" />
            Invio in corso...
          </>
        ) : (
          'Invia recensione'
        )}
      </Button>
    </Form>
  );
};

export default AddComment; 