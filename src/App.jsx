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

    // PASSO 1: TRATAMENTO DE ENTRADA (String -> Number)
    // O usuário pode ter digitado "10,50". O JS precisa de "10.50".
    // Usamos toString() para garantir que é string e replace() para trocar.
    const valorNumerico = parseFloat(valor.toString().replace(",", "."));
    const porcentagemNumerica = parseFloat(
      porcentagem.toString().replace(",", ".")
    );
    const pessoasNumerico = Number(numPessoas);

    // PASSO 2: CÁLCULOS (Matemática pura com PONTOS)
    const valorDaGorjeta = valorNumerico * (porcentagemNumerica / 100);
    const calcFinal = valorDaGorjeta / pessoasNumerico;

    // PASSO 3: FORMATAÇÃO DE SAÍDA (Number -> String BR)
    // .toFixed(2) transforma em string com 2 casas (ex: "12.50")
    // .replace('.', ',') transforma em "12,50"
    const resultadoFormatado = calcFinal.toFixed(2).replace(".", ",");

    // Opcional: Formatar o valor original também para ficar bonito na lista
    const valorOriginalFormatado = valorNumerico.toFixed(2).replace(".", ",");

    const newGorjeta = {
      id: Date.now(),
      valor: valorOriginalFormatado, // Salva ex: "100,00"
      porcentagem: porcentagemNumerica.toString().replace(".", ","), // Salva ex: "10" ou "10,5"
      numPessoas: pessoasNumerico,
      valorFinal: resultadoFormatado, // AQUI ESTÁ O RESULTADO COM VÍRGULA
    };

    console.log("Objeto salvo:", newGorjeta);

    // Atualiza o estado (lembrando: substitui o anterior, não acumula)
    setGorjeta([newGorjeta]);
  }

  useEffect(() => {
    // Se quiser carregar o histórico ao abrir a tela, precisaria ler aqui também.
    // Mas para salvar está correto:
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
