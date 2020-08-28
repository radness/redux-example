import React, { Component } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          {/* <div>
          <Counter />
          </div> */}
          <Header />

          <Nav />

          <Article />
        </div>
      </>
    );
  }
}

export default App;
