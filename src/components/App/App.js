import React, { Component } from 'react';
import '../Header/Header'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Footer/>
      </div>
    );
  }
}

export default App;
