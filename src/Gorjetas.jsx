import { useState } from 'react'

function Gorjetas({ onSubmit }) {
  const [valor, setValor] = useState();
  const [porcentagem, setPorcentagem] = useState();
  const [numPessoas, setPessoas] = useState();
  const [error, setErro] = useState("");
    return (
      <div className="FundoNotinha">
        <h1 className="title-card">Insira as Informações</h1>
        <div className="inputs">
          <label htmlFor="number">
            Valor da Conta:
            <input
              onChange={(event) => setValor(event.target.value)}
              value={valor}
              placeholder="R$ 100"
              type="number"
            />
          </label>
          <label htmlFor="">
            Porcentagem:
            <input
              onChange={(event) => setPorcentagem(event.target.value)}
              value={porcentagem}
              placeholder="10%"
              type="text"
            />
          </label>
          <label htmlFor="">
            Número de Pessoas:
            <input
              onChange={(event) => setPessoas(event.target.value)}
              value={numPessoas}
              placeholder="10"
              type="number"
            />
          </label>
        </div>
        <button type='submit' onClick={() => onSubmit(valor, porcentagem, numPessoas)}>Enviar</button>
      </div>
    );
}

export default Gorjetas;