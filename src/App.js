import React, { useState, useContext } from 'react';
import MyNav from './Mynav';
import Myfooter from './Myfooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

// Creiamo un componente wrapper per applicare il tema
const AppContent = ({ searchQuery, setSearchQuery }) => {
  const { theme } = useContext(ThemeContext);

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
      <AllTheBooks searchQuery={searchQuery} />
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
