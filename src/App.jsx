import { useState } from 'react'
import './App.css'
import { Calculator } from 'lucide-react';
import Gorjetas from './Gorjetas';

function App() {
  const [gorjeta, setGorjeta] = useState(
    {
      valor: 100,
    porcentagem: "10%",
      numPessoas: 100,
      valorFinal: 0
  }
)
  return (
    <div className="main">
      <div className="title">
      <Calculator size={38} />
      <h1>Calculadora de Gorjetas</h1>
      </div>
      <div className="Calculadora">
        <Gorjetas gorjeta={gorjeta} />
      </div>
    </div>
  );
}

export default App
