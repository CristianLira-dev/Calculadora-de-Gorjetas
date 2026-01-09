function ResultadoGorjeta({ gorjetas }) {
    const items = gorjetas && gorjetas.length > 0

    if (!items) {
        return null
    }
    
    console.log(gorjetas)
    return (
      <div className="resultado">
        <div className="listaResultado">
          {gorjetas.map((gorjeta) => (
            <div className="lista" key={gorjeta.id}>
              <h1 className="ValorFinal">Valor por Pessoa: R$ {gorjeta.valorFinal}</h1>
              <h1>Valor: R${gorjeta.valor}</h1>
              <h1>Porcentagem: {gorjeta.porcentagem}%</h1>
              <h1>Numero de Pessoas: {gorjeta.numPessoas}</h1>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ResultadoGorjeta;