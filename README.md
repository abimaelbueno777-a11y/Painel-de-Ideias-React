# Painel de Ideias

Projeto desenvolvido em React para a atividade **Trabalho 01 - Painel de Ideias**.

A aplicação permite cadastrar ideias de projetos, marcar ideias como concluídas e remover ideias do painel.

## Funcionalidades

- Adicionar novas ideias;
- Impedir o cadastro de ideias vazias;
- Marcar e desmarcar ideias como concluídas;
- Remover ideias;
- Mostrar a quantidade total de ideias;
- Mostrar a quantidade de ideias concluídas;
- Adaptar a interface para telas menores.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- CSS

## Como executar

Clone o repositório:

```bash
git clone https://github.com/abimaelbueno777-a11y/Painel-de-Ideias-React.git
```

Entre na pasta do projeto:

```bash
cd Painel-de-Ideias-React
cd PainelDeIdeias
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado no terminal.

## Estrutura do projeto

`src/App.jsx` - contém a interface e a lógica principal da aplicação.

`src/App.css` - contém os estilos do painel.

`src/index.css` - contém os estilos gerais da página.

`src/main.jsx` - inicia a aplicação React.

## Funcionamento

A aplicação utiliza estados do React para guardar a lista de ideias, o texto digitado no campo e as mensagens de erro.

As ideias ficam armazenadas somente enquanto a página está aberta. Ao atualizar a página, a lista volta a ficar vazia.

O CSS foi separado dos componentes e também possui ajustes para o funcionamento em telas menores.

## Interface

### Computador

![Painel no computador](PainelDeIdeias/docs/painel-desktop.png)

### Celular

![Painel no celular](PainelDeIdeias/docs/painel-celular.png)

## Links

**Repositório:**  
https://github.com/abimaelbueno777-a11y/Painel-de-Ideias-React

**Enunciado do trabalho:**  
https://violin-info.notion.site/Trabalho-01-Painel-de-Ideias-3e455b0d298281deb95fefe743c726b9?pvs=143

## Autor

Abimael Siebra Bueno