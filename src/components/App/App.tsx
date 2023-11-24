import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../compartilhado/Container';
import Table, { TableHeader } from '../../compartilhado/Table';
import Products from '../../compartilhado/Table/Table.mockdata';
import Form from '../../compartilhado/Form';
import Input from '../../compartilhado/Input';
import Button from '../../compartilhado/Button';

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
      <Form title="formulário de produtos" onSubmit={console.log}>
        <Input label='Nome' placeholder='ex: Pão'></Input>
        <Input label='Preço' placeholder='ex: 0.50' type='number' min='0' step={'0.1'}></Input>
        <Input label='Stock' type='number' min='0' placeholder='ex: 10'></Input>
        <Button>
        cadastrar
        </Button>
      </Form>

      </Container>
    </div>
  );
}

export default App;