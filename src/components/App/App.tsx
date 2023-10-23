import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../compartilhado/Button';
import Container from '../../compartilhado/Container';
import Input from '../../compartilhado/Input';

function TestComponent() {

  return <img width="16" src='https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png' alt='icone de pesquisa'></img>

}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>
        <Button
          onClick={() => window.alert('UIIIU')}
          icone={<TestComponent/>}
        >
          
          Alert
        </Button>
        <Input label="Rua" placeholder="exemplo: Rua indianopolis 2663"/>
        </Container>
      </div>
  );
}

export default App;
