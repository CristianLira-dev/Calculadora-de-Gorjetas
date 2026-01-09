# 💰 Tip Calculator (Calculadora de Gorjetas)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> Uma aplicação web interativa para cálculo de gorjetas e divisão de contas, construída com React e princípios de Clean Code.

## 📸 Preview

<img width="1919" height="913" alt="Captura de tela 2026-01-09 202912" src="https://github.com/user-attachments/assets/8c0427f1-b0b5-4fc6-8dd7-343791407537" />

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido para praticar conceitos fundamentais do React, como manipulação de estado (`useState`), renderização condicional e efeitos colaterais. A aplicação permite que o usuário insira o valor da conta, escolha a porcentagem da gorjeta e divida o total pelo número de pessoas na mesa.

### ✨ Funcionalidades

- ✅ **Inputs Customizados:** Opção para inserir uma porcentagem de gorjeta personalizada.
- ✅ **Input de Range:** Para melhorar a usabilidade do usuário na hora de adiconar a porcentagem
- ✅ **Validação de Erros:** Feedback visual (bordas vermelhas) quando o número de pessoas é zero.
- ✅ **Design Responsivo:** Layout adaptável para Mobile (coluna única) e Desktop (layout em grid/card).

## 🛠️ Tecnologias Utilizadas

- **React.js** (via Vite)
- **JavaScript (ES6+)**
- **CSS3** (Variáveis CSS, Flexbox e Grid)
- **Git & GitHub**

## 💡 O que eu aprendi

Neste projeto, foquei em melhorar minha arquitetura de componentes e lógica de estado. Alguns desafios superados:

1. **Estado Derivado:** Evitei criar estados desnecessários para o `total`, calculando-o diretamente no render para evitar problemas de sincronismo.
2. **Componentização:** Uso do `.map()` para renderizar os botões de porcentagem de forma dinâmica.
3. **UX/UI:** Implementação de `focus states` e validações para garantir que o usuário não cometa erros matemáticos (como divisão por zero).

## 🏁 Como rodar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/CristianLira-dev/Calculadora-de-Gorjetas.git

# Acesse a pasta do projeto no terminal/cmd
$ cd calculadora-de-gorjetas

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
