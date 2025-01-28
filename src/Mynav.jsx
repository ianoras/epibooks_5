import { useContext } from 'react';
import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import { ThemeContext } from './contexts/ThemeContext';

const MyNav = ({ searchQuery, setSearchQuery }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar 
      bg={theme} 
      variant={theme} 
      expand="lg" 
      sticky="top"
      className={`transition-colors ${theme === 'dark' ? 'border-bottom' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Cerca un libro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={theme === 'dark' ? 'bg-dark text-light' : ''}
            />
          </Form>
          <Button 
            variant={theme === 'dark' ? 'light' : 'dark'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
