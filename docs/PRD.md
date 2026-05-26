# PRD - Site Pessoal de Julio Saito

## 1. Resumo do Produto

Este repositório implementa o site pessoal de Julio Makdisse Saito, um portfólio profissional em PT-BR com foco em apresentação, trajetória de trabalho, competências técnicas, projetos em destaque e acesso ao currículo em PDF.

O site funciona como uma vitrine pública simples, rápida e objetiva. O conteúdo é apresentado em três rotas principais:

- `/`: página inicial com apresentação, credenciais resumidas e projetos em destaque.
- `/work`: trajetória profissional em formato cronológico.
- `/curriculo`: resumo profissional, contatos, competências e link para o PDF.

O produto também mantém preferências de idioma e tema persistidas no navegador.

## 2. Objetivo do Produto

O objetivo do site é apresentar o histórico profissional de Julio Saito de forma clara para recrutadores, parceiros e pessoas interessadas em seu trabalho técnico.

O site prioriza:

- clareza de apresentação;
- navegação curta e direta;
- conteúdo factual e verificável;
- acesso rápido ao currículo em PDF;
- leitura agradável em desktop e mobile.

## 3. Público-alvo

O site atende principalmente:

- recrutadores técnicos;
- gestores de produto e engenharia;
- parceiros profissionais;
- pessoas interessadas em projetos open source e em histórico técnico.

## 4. Escopo Atual

O escopo atual do site inclui:

- apresentação pessoal e profissional;
- link para projetos e perfis públicos;
- histórico de trabalho detalhado;
- lista de competências agrupadas por área;
- formação acadêmica;
- idiomas;
- download do currículo em PDF;
- alternância de tema claro/escuro/sistema;
- alternância de idioma PT/EN;
- persistência local dessas preferências no navegador.

O site não é uma aplicação transacional. Não há login, cadastro, formulário de contato, área administrativa ou banco de dados.

## 5. Funcionalidades

### 5.1 Home

A página inicial apresenta:

- nome público;
- título profissional;
- resumo profissional;
- blocos curtos de credenciais;
- imagem de perfil;
- projetos em destaque;
- CTAs para ver projetos, work e currículo.

### 5.2 Work

A página de trabalho apresenta:

- trajetória profissional em ordem cronológica;
- empresa, cargo, período e localização de cada experiência;
- resumo textual de cada posição;
- lista de entregas ou responsabilidades por experiência;
- destaque visual para posições mais relevantes;
- CTA para o currículo.

### 5.3 Currículo

A página de currículo apresenta:

- resumo profissional enxuto;
- cards de contato público;
- competências principais agrupadas;
- formação acadêmica;
- idiomas;
- CTA para baixar o PDF;
- CTA para ver a trajetória completa.

### 5.4 Navegação

O cabeçalho global oferece navegação entre:

- Home;
- Work;
- Currículo.

Ele também oferece:

- alternância de tema;
- link para download do PDF do currículo.

### 5.5 Preferências do Usuário

O site salva e reaplica preferências de:

- idioma;
- tema.

Essas preferências são aplicadas via:

- `localStorage`;
- querystring da URL;
- estado inicial baseado no idioma do navegador, quando não há preferência salva.

## 6. Conteúdo do Site

O conteúdo profissional fica centralizado em `src/resources/site-content.ts` e sua versão em inglês em `src/resources/site-content-en.ts`.

Os dados cobrem:

- nome público e nome completo;
- cargo principal;
- localização;
- e-mail;
- GitHub;
- LinkedIn;
- resumo profissional;
- credenciais curtas;
- projetos em destaque;
- experiências profissionais;
- formação;
- competências;
- links de contato;
- idiomas.

O site também usa `src/resources/i18n/ui.ts` para textos de interface, como botões, títulos e chamadas da navegação.
Esses textos seguem um contrato tipado entre PT e EN, para que qualquer chave ausente seja detectada na compilação.

## 7. Requisitos de Produto

### 7.1 Requisitos funcionais

- Exibir conteúdo profissional consistente nas três rotas principais.
- Permitir navegação interna entre páginas.
- Permitir alternância de idioma entre PT e EN.
- Permitir alternância de tema entre claro, escuro e sistema.
- Persistir idioma e tema no navegador.
- Disponibilizar o currículo em PDF via `public/curriculo.pdf`.
- Exibir links públicos para e-mail, GitHub e LinkedIn.
- Exibir projetos em destaque com imagens, tags e links quando disponíveis.

### 7.2 Requisitos não funcionais

- Renderização rápida e compatível com desktop e mobile.
- Layout legível e com hierarquia clara.
- Contraste adequado nos temas claro e escuro.
- Código enxuto e fácil de manter.
- Conteúdo factual, sem inventar informações profissionais.
- Navegação simples e com baixa profundidade de clique.

## 8. Restrições e Não Objetivos

O produto atual não inclui:

- login ou autenticação;
- banco de dados;
- CMS externo;
- blog;
- área administrativa;
- formulários de captura;
- comentários;
- buscas internas;
- APIs públicas;
- personalização avançada por usuário além de idioma e tema.

## 9. Critérios de Sucesso

O site cumpre seu papel quando:

- apresenta de forma clara quem é Julio Saito e o que ele faz;
- permite acessar rapidamente work e currículo;
- mostra experiência, competências e projetos sem redundância excessiva;
- mantém idioma e tema de forma estável entre visitas;
- carrega e funciona bem em mobile e desktop.

## 10. Métricas de Produto

Por ser um site pessoal estático, o produto não depende de métricas complexas de funil. Os sinais mais relevantes são:

- acesso bem-sucedido às três rotas principais;
- clique no download do PDF;
- navegação entre seções sem fricção;
- consistência visual entre temas;
- funcionamento correto do fluxo de idioma e tema persistidos.

## 11. Dependências Principais

- Next.js App Router;
- React 19;
- TypeScript;
- Tailwind CSS 4;
- shadcn/ui;
- lucide-react;
- nuqs;
- next-themes;
- `localStorage` do navegador;
- `public/curriculo.pdf`;
- imagens em `public/images/`.
