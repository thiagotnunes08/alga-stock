import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../compartilhado/Container';
import ProdutosCRUD from '../Produtos/ProdutosCRUD'


function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <ProdutosCRUD />
      </Container>
    </div>
  );
}

export default App;