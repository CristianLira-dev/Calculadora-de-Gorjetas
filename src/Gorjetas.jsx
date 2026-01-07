function Gorjetas({ gorjeta }) {
    return (
      <div className="FundoNotinha">
        <h1 className="title-card">Insira as Informações</h1>
        <div className="inputs">
          <label htmlFor="number">
            Valor da Conta
            <input value={gorjeta.valor} type="number" />
          </label>
          <label htmlFor="">
            Porcentagem
            <input value={gorjeta.porcentagem} type="text" />
          </label>
          <label htmlFor="">
            Número de Pessoas
            <input value={gorjeta.numPessoas} type="number" />
          </label>
        </div>
      </div>
    );
}

export default Gorjetas;