import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../compartilhado/Container';
import Table, { TableHeader } from '../../compartilhado/Table';
import Products from '../../compartilhado/Table/Table.mockdata';
import ProdutoForm, { ProdutoRequest } from '../Produtos/ProdutoForm';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {

  const [produtos, setProduto] = useState(Products)

  const formatData = (produto: ProdutoRequest) => {
    setProduto([
      ...produtos,
      {
        id: produtos.length + 1,
        ...produto

      }

    ])
  }

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={produtos}
        />

        <ProdutoForm
          onSubimit={formatData}
        />

      </Container>
    </div>
  );
}

export default App;