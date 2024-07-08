import React from 'react';
import Header from './componets/header';
import HomePage from './componets/homepage';
import About from './componets/about';
import Services from './componets/services';
import Portfolio from './componets/portfolio';
import Testimonial from './componets/testimonial';
import Getstart from './componets/getstart';
import Footer from './componets/footer';
import './App.css';
function App() {
  return (
    <div className="App">
       <Header />
      <HomePage />
      <About />
      <Services />
      <Portfolio />
      <Getstart />
      <Footer />
    </div>
  );
}

export default App;
