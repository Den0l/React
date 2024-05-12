import React from 'react';
import './App.css';
import Header from './components/JS/Header';
import Main from './components/JS/Main';
import Footer from './components/JS/Footer';
import "./components/CSS/Misto.css"

const App = () => {
  return (
    <div className="Container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
