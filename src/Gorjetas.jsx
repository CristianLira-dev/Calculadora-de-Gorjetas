import { useState } from "react";

function Gorjetas({ onSubmit }) {
  // Inicializamos com string vazia para não dar erro de "uncontrolled component"
  const [valor, setValor] = useState("");
  const [porcentagem, setPorcentagem] = useState("");
  const [numPessoas, setPessoas] = useState("");
  const [error, setErro] = useState("");

  // REGEX NOVA: Permite números (0-9), ponto (.) e vírgula (,)
  // O acento circunflexo ^ dentro dos colchetes significa "NÃO".
  // Ou seja: "Procure qualquer coisa que NÃO seja número, ponto ou vírgula"
  const regexInvalido = /[^0-9,.]/;

  return (
    <div>
      <div className="inputs">
        <label htmlFor="valorInput">
          Valor da Conta:
          <input
            id="valorInput"
            // type="text" + inputmode="decimal" permite vírgula no celular
            type="text"
            inputmode="decimal"
            onChange={(event) => setValor(event.target.value)}
            value={valor}
            placeholder="R$ 100,00"
          />
        </label>

        <label htmlFor="porcInput">
          Porcentagem:
          <input
            id="porcInput"
            type="text"
            inputmode="decimal"
            onChange={(event) => setPorcentagem(event.target.value)}
            value={porcentagem}
            placeholder="10%"
          />
        </label>

        <label htmlFor="pessoasInput">
          Número de Pessoas:
          <input
            id="pessoasInput"
            type="number" // Pessoas continua number pois não tem meia pessoa
            onChange={(event) => setPessoas(event.target.value)}
            value={numPessoas}
            placeholder="10"
          />
        </label>
      </div>

      <div className="erroMsg">{error}</div>

      <button
        type="submit"
        onClick={() => {
          setErro(""); // Limpa erros antigos

          // 1. Validação de Campos Vazios
          if (!valor || !porcentagem || !numPessoas) {
            setErro("Preencha todos os Campos!");
            return;
          }

          // 2. Validação de Caracteres (Letras ou Símbolos)
          const valorInvalido = regexInvalido.test(valor);
          const porcentagemInvalida = regexInvalido.test(porcentagem);
          // Para pessoas, usamos regex simples de numeros pois é inteiro
          const pessoasInvalido = /\D/.test(numPessoas);

          if (valorInvalido || porcentagemInvalida) {
            setErro("Os campos devem conter apenas números, ponto ou vírgula.");
            return;
          } else if (pessoasInvalido) {
            setErro("O Campo Pessoas deve ser um número inteiro")
            return
          }

          // 3. Conversão para Validar Valores (Troca vírgula por ponto temporariamente)
          const numValor = parseFloat(valor.replace(",", "."));
          const numPorcentagem = parseFloat(porcentagem.replace(",", "."));
          const numPessoasInt = Number(numPessoas);

          // 4. Validação de Lógica (Valores > 0, etc)
          if (numValor <= 0 || isNaN(numValor)) {
            setErro("O Valor da conta deve ser maior que 0");
            return;
          }

          if (
            numPorcentagem < 0 ||
            numPorcentagem > 100 ||
            isNaN(numPorcentagem)
          ) {
            setErro("A Porcentagem deve ser entre 0 e 100");
            return;
          }

          if (numPessoasInt <= 0) {
            setErro("O número de pessoas deve ser maior que zero.");
            return;
          }

          // SE PASSOU POR TUDO:
          // Envia os dados ORIGINAIS (strings) para o App tratar e exibir formatado
          onSubmit(valor, porcentagem, numPessoas);
          // Limpa o formulário
          setErro("");
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default Gorjetas;
