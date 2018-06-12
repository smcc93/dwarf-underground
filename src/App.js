import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import MainPage from './MainPage'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <MainPage />  
      <Footer />
      </div>
      
    );
  }
}

export default App;
