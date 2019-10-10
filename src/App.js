import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import Header from './components/Header'

function App(props) {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
