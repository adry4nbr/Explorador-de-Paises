# 🌍 Mundo dos Países | API Explorer

[![Hospedagem](https://img.shields.io/badge/Live-Demo-blue)](https://adry4nbr.github.io/Explorador-de-Paises/)

Uma aplicação interativa de exploração geográfica que consome a **REST Countries API**. O projeto oferece uma experiência de usuário fluida para busca e filtragem de dados globais, com foco em performance e interface adaptável.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o propósito de aplicar conceitos avançados de manipulação de dados assíncronos e arquitetura de componentes em JavaScript Vanilla. O desafio principal foi lidar com uma API de larga escala e transformar objetos complexos em uma interface intuitiva.

---

## 🛠️ Stack Técnica & Diferenciais

### **Core**

- **JavaScript (ES6+):** Uso intensivo de `Async/Await`, `Fetch API` e métodos de array (`map`, `forEach`, `filter`).
- **CSS3 Advanced:** Arquitetura baseada em **Variáveis CSS** para o sistema de Temas (Light/Dark Mode).
- **HTML5 Semântico:** Foco em acessibilidade e estrutura limpa.

### **Destaques de Engenharia**

- **Arquitetura de Temas:** Implementação de Dark Mode utilizando o padrão de _Custom Properties_ e persistência via `LocalStorage`.
- **Manipulação de Objetos Dinâmicos:** Tratamento lógico com `Object.values()` para extrair dados de chaves variáveis na API (como moedas e nomes nativos).
- **Responsividade Robusta:** Grid System customizado que elimina barras de rolagem laterais e otimiza a visualização em dispositivos móveis.
- **UX Optimization:** Filtros inteligentes que limpam estados anteriores para garantir a precisão da busca.

---

## ⚙️ Funcionalidades Principais

- 🔍 **Busca em Tempo Real:** Pesquisa por nome comum ou oficial.
- 🗺️ **Filtros por Região e Idioma:** Seletores dinâmicos que segmentam a lista global.
- 🌓 **Dark Mode Nativo:** Alternância suave de tema que respeita a última escolha do usuário.
- 🗂️ **Modal de Detalhes:** Interface rica com dados de área, população (formatada), idiomas nativos e moedas.

---

## 🧠 Desafios e Aprendizados

Durante o desenvolvimento, um dos maiores desafios foi lidar com a estrutura irregular da REST Countries API (onde alguns países não possuem capital ou idiomas definidos).

- **Solução:** Implementação de verificações ternárias e tratamentos de erro (`try/catch`) para garantir que o sistema nunca quebre, exibindo "N/A" ou valores padrão quando necessário.
- **Refatoração:** O código passou por uma refatoração para centralizar a lógica de busca em uma única função assíncrona, reduzindo a duplicidade de código e facilitando a manutenção.

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   ```
2. Acesse a pasta e abra o `index.html` em seu navegador.

---

### **Contato**

**Adryan** LinkedIn: [https://www.linkedin.com/in/adryan-galdino-262769276] | E-mail: [adry4nbr@gmail.com]
