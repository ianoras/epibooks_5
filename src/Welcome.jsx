import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
  return (
    <div className="text-center my-4">
      <h1>Benvenuti in EpiBooks!</h1>
      <Alert variant="info">
        La tua libreria digitale di fiducia
      </Alert>
    </div>
  );
};

export default Welcome;
