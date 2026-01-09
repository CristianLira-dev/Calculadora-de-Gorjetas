import { Percent, DollarSign, User } from "lucide-react";
import { useState } from "react";

function Gorjetas({ onSubmit }) {
  const [valor, setValor] = useState("");
  const [porcentagem, setPorcentagem] = useState(""); // Valor numérico padrão para o slider funcionar bem
  const [numPessoas, setPessoas] = useState("");
  const [error, setErro] = useState("");

  const regexInvalido = /[^0-9,.]/;

  // Função para controlar a mudança no slider
  const handleSliderChange = (e) => {
    setPorcentagem(e.target.value);
  };

  return (
    <div>
      <div className="inputs-container">
        <div className="input-box">
          <label htmlFor="valorInput">Valor da Conta:</label>
          <div className="input-group">
            <div className="icon-wrapper">
              <DollarSign size={24} />
            </div>
            <input
              id="valorInput"
              type="text"
              inputMode="decimal"
              onChange={(event) => setValor(event.target.value)}
              value={valor}
              placeholder="100,00"
            />
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="porcInput">Porcentagem:</label>
          <div className="input-group">
            <div className="icon-wrapper">
              <Percent size={24} />
            </div>
            <input
              id="porcInput"
              type="text"
              inputMode="decimal"
              onChange={(event) => setPorcentagem(event.target.value)}
              value={porcentagem}
              placeholder="10"
            />
          </div>

          <div className="slider-container">
            <hr></hr>
            <input
              type="range"
              min="0"
              max="100"
              value={porcentagem || 0}
              onChange={handleSliderChange}
              className="range-slider"
              aria-label="Ajustar porcentagem da gorjeta"
            />
          </div>
        </div>

        <div className="input-box">
          <label htmlFor="pessoasInput">Número de Pessoas:</label>
          <div className="input-group">
            <div className="icon-wrapper">
              <User size={24} />
            </div>
            <input
              id="pessoasInput"
              type="number"
              onChange={(event) => setPessoas(event.target.value)}
              value={numPessoas}
              placeholder="10"
            />
          </div>
        </div>
      </div>

      <div className="erroMsg">{error}</div>

      <button
        type="submit"
        onClick={() => {
          setErro("");

          if (!valor || (!porcentagem && porcentagem !== 0) || !numPessoas) {
            setErro("Preencha todos os Campos!");
            return;
          }

          const valorInvalido = regexInvalido.test(valor);
          // Permitimos que porcentagem venha do slider (number) ou input (string)
          const porcentagemInvalida = regexInvalido.test(String(porcentagem));
          const pessoasInvalido = /\D/.test(numPessoas);

          if (valorInvalido || porcentagemInvalida) {
            setErro("Apenas números, ponto ou vírgula.");
            return;
          } else if (pessoasInvalido) {
            setErro("Pessoas deve ser um número inteiro");
            return;
          }

          const numValor = parseFloat(String(valor).replace(",", "."));
          const numPorcentagem = parseFloat(
            String(porcentagem).replace(",", ".")
          );
          const numPessoasInt = Number(numPessoas);

          if (numValor <= 0 || isNaN(numValor)) {
            setErro("Valor da conta deve ser maior que 0");
            return;
          }
          if (
            numPorcentagem < 0 ||
            numPorcentagem > 100 ||
            isNaN(numPorcentagem)
          ) {
            setErro("Porcentagem entre 0 e 100");
            return;
          }
          if (numPessoasInt <= 0) {
            setErro("Pessoas deve ser maior que zero.");
            return;
          }

          onSubmit(valor, porcentagem, numPessoas);
        }}
      >
        Calcular
      </button>
    </div>
  );
}

export default Gorjetas;
