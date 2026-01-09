import { useEffect, useState } from "react";
import "./App.css";
import { Calculator } from "lucide-react";
import Gorjetas from "./Gorjetas";
import ResultadoGorjeta from "./ResultadoGorjeta";

function App() {
  const [gorjeta, setGorjeta] = useState(
    JSON.parse(localStorage.getItem("Gorjeta")) || []
  );

  function onSubmit(valor, porcentagem, numPessoas) {
    console.log("Input recebido:", valor, porcentagem, numPessoas);
    const valorNumerico = parseFloat(valor.toString().replace(",", "."));
    const porcentagemNumerica = parseFloat(
      porcentagem.toString().replace(",", ".")
    );
    const pessoasNumerico = Number(numPessoas);
    const valorDaGorjeta = valorNumerico * (porcentagemNumerica / 100);
    const calcFinal = valorDaGorjeta / pessoasNumerico;
    const resultadoFormatado = calcFinal.toFixed(2).replace(".", ",");


    const valorOriginalFormatado = valorNumerico.toFixed(2).replace(".", ",");

    const newGorjeta = {
      id: Date.now(),
      valor: valorOriginalFormatado,
      porcentagem: porcentagemNumerica.toString().replace(".", ","), 
      numPessoas: pessoasNumerico,
      valorFinal: resultadoFormatado,
    };

    console.log("Objeto salvo:", newGorjeta);
    setGorjeta([newGorjeta]);
  }

  useEffect(() => {
    if (gorjeta.length > 0) {
      localStorage.setItem("Gorjeta", JSON.stringify(gorjeta));
    }
  }, [gorjeta]);

  return (
    <div className="FundoNotinha">
      <div className="title">
        <Calculator size={38} />
        <h1>Calculadora de Gorjetas</h1>
      </div>
      <div className="Calculadora">
        <Gorjetas onSubmit={onSubmit} />
        {/* Passamos o array para o componente de resultado */}
        <ResultadoGorjeta gorjetas={gorjeta} />
      </div>
    </div>
  );
}

export default App;
