# Prova de Conceito - React com Next.js

Este projeto é uma prova de conceito sobre React, desenvolvida utilizando Next.js 14, com o objetivo de explorar a estrutura de projeto do framework, a criação de componentes simples e a aplicação de estilos CSS globais e modulares.

---

## Sumário

1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Componentes](#componentes)
3. [Estilo CSS](#estilo-css)
4. [Executando o Projeto](#executando-o-projeto)
5. [Integrantes do Grupo](#integrantes-do-grupo)

---

### Estrutura do Projeto

Utilizamos Next.js 14 para organizar a aplicação. A estrutura é dividida nas seguintes partes principais:

- **Páginas**: O arquivo `page.tsx` representa a página principal. Neste arquivo, o componente `ImageConnector` é utilizado para demonstrar a funcionalidade de ligação visual entre imagens.
- **Layouts**: Em `layout.tsx`, o layout raiz é definido. Este arquivo estabelece a estrutura básica, incluindo o cabeçalho e o uso de fontes e estilos globais.
- **Componentes**: Componentes estão organizados em uma pasta `components`, mantendo a modularidade e a reutilização de código. O componente `ImageConnector`, que conecta duas imagens com uma linha vermelha, é um exemplo simples e funcional.

### Componentes

O projeto utiliza um componente simples e sem estado, `ImageConnector`, que recebe `props` e renderiza o conteúdo de acordo com as propriedades fornecidas. Essa abordagem torna o componente reutilizável.

#### Estrutura do Componente

- **Propriedades**: `title`, `image1`, `image2`, e `lineColor` (para definir a cor da linha).
- **Renderização**: Renderiza um título e duas imagens conectadas por uma linha colorida central.
- **Código**: O arquivo `ImageConnector.jsx` define a estrutura do componente e utiliza CSS modular para estilização.

### Estilo CSS

Utilizamos tanto o CSS global quanto o CSS modular para estilizar a aplicação, proporcionando flexibilidade e organização:

- **CSS Global**: O arquivo `globals.css` define estilos globais, como configurações básicas para o `body` e títulos `h2`, aplicando uma fonte padrão e estilização consistente.
- **CSS Modular**: Estilos específicos para o componente `ImageConnector` estão no arquivo `ImageConnector.module.css`, encapsulando os estilos diretamente no componente e evitando conflitos com outros elementos da aplicação. Cada estilo modular é importado e aplicado ao componente usando classes específicas.

### Executando o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acesse o projeto**:
   Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

---

### Integrantes do Grupo

- **Lucas Rocha**
- **Luiz Saraiva**
- **Leonardo Pinheiro**
- **Fábio Sabino**