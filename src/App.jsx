import { useEffect, useState } from 'react'
import './App.css'
import { Calculator } from 'lucide-react';
import Gorjetas from './Gorjetas';
import ResultadoGorjeta from './ResultadoGorjeta';

function App() {
  const [gorjeta, setGorjeta] = useState(
      JSON.parse(localStorage.getItem("gorjeta")) || []
)
  
  function onSubmit(valor, porcentagem, numPessoas) {
    console.log("BATATATATATATATAT", valor, porcentagem, numPessoas)
      const calcporcent = porcentagem / 100
      const valorDaPorcentagem = valor * calcporcent
      const CalcFinal = valorDaPorcentagem / numPessoas
    const newGorjeta = {
        id: Date.now(),
        valor,
        porcentagem,
        numPessoas,
        valorFinal: CalcFinal
      };
    console.log(newGorjeta, CalcFinal)
    setGorjeta([gorjeta, newGorjeta]);
  }
  
  useEffect(() => {
    localStorage.setItem("Gorjeta", JSON.stringify(gorjeta))
  }, [gorjeta])

  return (
    <div className="main">
      <div className="title">
      <Calculator size={38} />
      <h1>Calculadora de Gorjetas</h1>
      </div>
      <div className="Calculadora">
        <Gorjetas onSubmit={onSubmit} />
        <ResultadoGorjeta gorjetas={ gorjeta} />
      </div>
    </div>
  );
}

export default App
