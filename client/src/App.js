import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Main from "../src/views/Main";
import ProductPage from "../src/components/ProductPage"
import ProductUpdate from './components/ProductUpdate';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Main path="/"/>
          <ProductPage path='/api/products/:id' />
          <ProductUpdate path='/api/update/:id' />
        </Router>
      </header>
    </div>
  );
}

export default App;
