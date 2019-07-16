import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
