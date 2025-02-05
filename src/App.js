import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './Mynav';
import Myfooter from './Myfooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';
import CommentArea from './components/CommentArea';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

// Creiamo un componente wrapper per applicare il tema
const AppContent = ({ searchQuery, setSearchQuery }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedBook, setSelectedBook] = useState('');

  return (
    <div 
      className="App"
      style={{
        backgroundColor: theme === 'dark' ? '#222' : '#fff',
        transition: 'background-color 0.3s ease'
      }}
    >
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Welcome />
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <AllTheBooks 
              searchQuery={searchQuery} 
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          </Col>
          <Col xs={12} md={4}>
            <CommentArea asin={selectedBook} />
          </Col>
        </Row>
      </Container>
      <Myfooter />
    </div>
  );
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider>
      <AppContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </ThemeProvider>
  );
}

export default App;
