import React from 'react'
import './global.css'
import Header from './components/Header';
import RoutesFunction from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesFunction />
    </div>
  );
}

export default App;
