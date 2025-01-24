import React from 'react';
import MyNav from './Mynav';
import Myfooter from './Myfooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <Myfooter />
    </div>
  );
}

export default App;
