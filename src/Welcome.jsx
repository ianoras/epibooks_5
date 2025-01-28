import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from './contexts/ThemeContext';

const Welcome = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container 
      fluid 
      className="text-center p-5"
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#f8f9fa',
        color: theme === 'dark' ? '#fff' : '#000',
        transition: 'all 0.3s ease'
      }}
    >
      <h1>Benvenuti in EpiBooks!</h1>
      <p>La tua libreria digitale di fiducia</p>
    </Container>
  );
};

export default Welcome;
