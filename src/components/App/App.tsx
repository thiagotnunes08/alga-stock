import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../compartilhado/Container';
import Table, { TableHeader } from '../../compartilhado/Table';
import Products from '../../compartilhado/Table/Table.mockdata';
import Form from '../../compartilhado/Form';
import Input from '../../compartilhado/Input';
import Button from '../../compartilhado/Button';
import ProdutoForm from '../Produtos/ProdutoForm';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={Products}
        />

      <ProdutoForm/>

      </Container>
    </div>
  );
}

export default App;