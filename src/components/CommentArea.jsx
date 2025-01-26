import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNzBlNWI3NDcwMTAwMTU4YjJiYWEiLCJpYXQiOjE3Mzc3MTU5NDIsImV4cCI6MTczODkyNTU0Mn0.x6qupdfGVXRKSmj_jRc642t6hY-rf48NP89_EtGbACw"
          }
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Errore nel caricamento commenti:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [asin]);

  return (
    <Card className="mt-3 p-3">
      <h4>Recensioni</h4>
      <AddComment asin={asin} onCommentAdded={fetchComments} />
      <CommentList comments={comments} onCommentDeleted={fetchComments} />
    </Card>
  );
};

export default CommentArea; 