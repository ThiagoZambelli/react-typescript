<img align="right" width="50%" style="margin-top:-20px" src="public/eu.png">

</br>
</br>

<div dsplay="inline-block">
 
 <h1 align="left">Bem-Vindo ao Projeto -> React com Typescript</h1>
 <h2 align="left">Feito por : Thiago Zambelli</h2>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

&nbsp;

---

&nbsp;

# Problemas e soluções -

---

&nbsp;

## Criação do projeto com TypeScript

> Comando `npx create-react-app --template typescript react-typescript --use-npm` onde
- npx (Comando para rodar)
- create-react-app (Comando para criar um app React)
- --template typescript (diz para o create que sera usado typescript)
- react-typescript (nome da aplicação criada)

&nbsp;
&nbsp;

## Problema de modulação do CSS

>Não sei se é por causa da defasagem de tempo da aula mas algumas coisas estao bem diferentes entre o que foi aprendido em ccursoso anteriors e neste. Principalmente com relação ao CSS module.

&nbsp;
&nbsp;

## Utilização de ternario para estilos:

>Podemos usar um ternario para a alocação de estilos no JS (Consequentemente React)

~~~JavaScript
const objOn = true;
const style = {
  backgroundColor: objOn ? "green" : "red"
}

<button style={style}>
</button>

~~~


&nbsp;
&nbsp;

## Desestruturação das props ao serem enviadas:

>Ao mandar um Obj como prop de um componente, podemos mandar prop a pro (utilizado principalmente quando queremos mandar uma parte delas), ou podemos mandar o Obj em forma de spred

  - Forma 1:

~~~JavaScript
<Componente 
  prop1={obj.elemento1}
  prop2={obj.elemento2}
  prop3={obj.elemento3}
  prop4={obj.elemento4}
/>

~~~

  - Forma 2:

~~~JavaScript
<Componente 
  {...obj}
/>

~~~


&nbsp;

---

&nbsp;

# Aulas - 

---

&nbsp;

### Aula 1:

- Configurar o seu ambiente para rodar o projeto;
  - Aprendemos como configurar o seu ambiente para poder criar e rodar um projeto React, instalando o Node/npm e o GIT para controlarmos as versões e/ou baixarmos a aplicação do Github.
- Diferenciar npx de npm;
  - Utilizamos o npx na aplicação e aprendemos a diferenciar o comando npx do comando npm, mostrando quando é melhor usar cada um.
- Criar um projeto com create-react-app com template typescript usando npm;
  - Criamos um projeto utilizando npx, entendemos que o CRA (Create React App) tem possibilidade de criar projetos com template (optamos pelo typescript), escolhendo o npm como o nosso gerenciador de pacotes padrão.
- O Create React App estrutura o projeto.
  - Entendemos como o Create React App estrutura a aplicação, vendo dos arquivos de configuração (tsconfig, package.json, package-lock.json entre outros), até as pastas/arquivos que serão atualizados por nós (pasta src, arquivos app.tsx, index.tsx, index.css entre outros).

&nbsp;

### Aula 2:

- Funciona a pasta public;
  - Abordamos sobre a pasta public, para que ela serve e por que raramente mexemos nela, mostramos também o arquivo index.html e como que o React popula ele com os componentes.
- Criar um componente com class component e como utilizá-lo;
  - Criamos um componente com class component, mostrando toda a sintaxe desde o extends até o retorno e o export.
- O que é JSX;
  - Vimos que o React retorna na verdade um JSX, não um HTML, também falamos de algumas diferenças entre os dois.
- Criar um function component;
  - Também criamos um componente com function component (a forma mais atual de se escrever componentes desde a versão 16.8), e mostramos como é mais simples criarmos dessa forma.
- Utilizar o método map para renderizar arrays.
  - Renderizamos arrays de JSX com o método map, mostrando que assim conseguimos aproveitar parte do JSX e mudar apenas o valor de item para item, utilizando assim o princípio DRY (Don't Repeat Yourself).

&nbsp;

### Aula 3:
- Usar o CSS inline;
  - Aprendemos como criar o CSS inline direto no atributo, como variável JS e utilizando condicionais para mudar o estilo.
- Utilizar CSS e Sass no projeto;
  - Vimos como importar CSS e SASS no projeto é fácil dentro de um projeto criado com Create React App.
- Colocar o CSS Modules em um projeto com Create React App + Typescript;
  - Configuramos o projeto para aceitar CSS Modules.
Vantagens de se utilizar CSS Modules.
- Discutimos as vantagens de se utilizar CSS Modules na aplicação.

&nbsp;

### Aula 4:

- Adicionar informações externas ao componente com Props;
  - Aprendemos a utilizar propriedades externas para reutilizar componentes de forma única.
- Funciona o props.children;
  - Vimos que o React disponibiliza uma props padrão chamada children, que ao contrário das outras props, é escrita dentro do componente, abrindo e fechando a tag como em uma tag HTML.
- O key (chaves) é importante em arrays no React;
  - Entendemos mais a fundo como o React trabalha com arrays, e como o key é importante para que ele não se perca entre os itens deste array.
- Usar spread operator de forma consciente para passar props para os componentes;
  - Utilizamos o spread operator para poder passar todos os itens de um objeto como props para o componente, também pensamos como isso pode se tornar um problema.