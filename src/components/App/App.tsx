import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../Button';

function TestComponent() {

  return <img width="16" src='https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png' alt='icone de pesquisa'></img>

}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />

      <div className="Container">
        <Button
          onClick={() => window.alert('UIIIU')}
          icone={<TestComponent/>}
        >
          
          Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
