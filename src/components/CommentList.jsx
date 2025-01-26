import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentList = ({ comments, onCommentDeleted }) => (
  <ListGroup className="mt-2">
    {comments.map(comment => (
      <SingleComment 
        key={comment._id} 
        comment={comment} 
        onCommentDeleted={onCommentDeleted}
      />
    ))}
  </ListGroup>
);

export default CommentList; 