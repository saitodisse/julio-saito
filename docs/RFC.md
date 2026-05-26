# RFC - Arquitetura Atual do Site Pessoal de Julio Saito

## 1. Contexto

Este documento descreve a arquitetura atual do site pessoal de Julio Makdisse Saito no repositório `julio-saito`.

O foco é registrar como o site funciona hoje, quais tecnologias usa, como o conteúdo é organizado e como as páginas se conectam. Este RFC não propõe evolução futura.

## 2. Estado Atual da Solução

O site é um aplicativo web construído com Next.js App Router, React, TypeScript e Tailwind CSS 4. Ele expõe três páginas públicas principais:

- `/` como apresentação inicial;
- `/work` como histórico profissional;
- `/curriculo` como resumo profissional e acesso ao PDF.

Além dessas rotas, existe um layout global com cabeçalho, rodapé, providers de tema e idioma, e suporte a preferências persistidas no navegador.

## 3. Tecnologias Utilizadas

### 3.1 Front-end e framework

- Next.js 16.2.6
- React 19.2.4
- TypeScript 5

### 3.2 Estilo e UI

- Tailwind CSS 4
- shadcn/ui
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `tw-animate-css`

### 3.3 Ícones e interações

- `lucide-react`
- `next-themes`
- `nuqs`
- `@base-ui/react`

### 3.4 Ferramentas de desenvolvimento

- ESLint 9
- Prettier 3
- `tsc --noEmit`
- pnpm

## 4. Arquitetura de Aplicação

### 4.1 Estrutura por camadas

O projeto segue uma separação simples:

- `src/app/`: rotas e layout da aplicação;
- `src/components/`: componentes reutilizáveis de página e UI;
- `src/resources/`: conteúdo profissional e textos de interface;
- `src/lib/`: utilidades e lógica de suporte;
- `public/`: imagens, PDF e assets públicos.

### 4.2 Layout global

O layout principal está em `src/app/layout.tsx`.

Ele configura:

- metadados básicos da página;
- carregamento das fontes `Geist` e `Geist_Mono`;
- aplicação global dos providers;
- detecção visual inicial do tema por script inline;
- renderização do `SiteFooter` em todas as páginas.

### 4.3 Providers

O aplicativo usa uma cadeia de providers no nível do layout:

- `NuqsAdapter` para estado sincronizado com querystring;
- `ThemeProvider` para tema do site;
- `LocaleProvider` para idioma e conteúdo;
- `SitePreferencesProvider` para reset de preferências e diálogo de configuração;
- `Suspense` para suportar os hooks ligados à URL.

## 5. Organização de Conteúdo

O conteúdo do site é centralizado em módulos dedicados.

### 5.1 Conteúdo profissional

`src/resources/site-content.ts` é a fonte principal do conteúdo em PT-BR.

Ele concentra:

- nome público e nome completo;
- cargo;
- localização;
- contatos;
- resumo profissional;
- credenciais;
- projetos em destaque;
- experiências;
- formação;
- competências;
- links de contato;
- idiomas.

### 5.2 Conteúdo em inglês

`src/resources/site-content-en.ts` contém a versão em inglês dos mesmos dados e estrutura.

### 5.3 UI copy

`src/resources/i18n/ui.ts` concentra a cópia de interface e usa um contrato tipado que obriga PT e EN a exporem as mesmas chaves:

- labels da navegação;
- textos dos botões;
- títulos e subtítulos das páginas;
- textos do modal de preferências;
- textos do rodapé.

### 5.4 Seleção de conteúdo

`src/resources/get-site-content.ts` escolhe o módulo de conteúdo com base no idioma atual.

## 6. Fluxo de Idioma

O idioma é controlado pelo `LocaleProvider` em `src/components/locale-provider.tsx`.

### 6.1 Ordem de resolução

Na montagem inicial, o idioma segue esta ordem:

1. valor presente na querystring `locale`;
2. valor salvo no `localStorage`;
3. idioma detectado do navegador;
4. fallback para `pt`.

### 6.2 Persistência

Quando o idioma é aplicado, o provider:

- atualiza o estado interno;
- grava `locale` no `localStorage`;
- atualiza `document.documentElement.lang`;
- reflete o valor na querystring.

### 6.3 Reset

O `SitePreferencesProvider` dispara um evento interno (`site-preferences-reset`) para reaplicar as preferências a partir do idioma do navegador quando o usuário redefine as configurações.

## 7. Fluxo de Tema

O tema é controlado por `ThemeProvider` e por um script inline no layout.

### 7.1 Resolução inicial

O tema inicial é resolvido com base em:

1. parâmetro `theme` da querystring;
2. valor salvo em `localStorage`;
3. preferência do sistema operacional.

### 7.2 Persistência

O tema é mantido no navegador e refletido visualmente pela classe `dark` aplicada ao elemento raiz.

### 7.3 Controle de interface

O botão de alternância de tema fica no cabeçalho e usa `ThemeToggle`.

## 8. Rotas e Responsabilidades

### 8.1 `/`

Arquivo: `src/app/page.tsx`

Responsável por:

- introdução do profissional;
- exibição da foto de perfil;
- credenciais curtas;
- projetos em destaque;
- navegação para work e currículo.

### 8.2 `/work`

Arquivo: `src/app/work/page.tsx`

Responsável por:

- linha do tempo profissional;
- exibição de empresa, cargo, período e localização;
- resumo e bullets de cada experiência;
- destaque visual de experiências selecionadas;
- CTA para o currículo.

### 8.3 `/curriculo`

Arquivo: `src/app/curriculo/page.tsx`

Responsável por:

- resumo profissional;
- contatos públicos;
- competências principais;
- formação;
- idiomas;
- download do PDF;
- navegação para a trajetória completa.

## 9. Componentes Reutilizáveis

### 9.1 `SiteHeader`

Arquivo: `src/components/site-header.tsx`

Exibe:

- nome público;
- navegação principal;
- atalho de download do PDF;
- alternância de tema.

### 9.2 `SiteFooter`

Arquivo: `src/components/site-footer.tsx`

Mantém ações auxiliares relacionadas a idioma e preferências.

### 9.3 `PageShell`

Arquivo: `src/components/page-shell.tsx`

Padroniza o contêiner visual das páginas internas.

### 9.4 `PageIntro`

Arquivo: `src/components/page-intro.tsx`

Renderiza a abertura das páginas internas com título, resumo e link de retorno.

### 9.5 `ThemeToggle`

Arquivo: `src/components/theme-toggle.tsx`

Controla a alternância de tema.

### 9.6 `SitePreferencesDialog`

Arquivo: `src/components/site-preferences-dialog.tsx`

Permite configurar tema e idioma e persistir a escolha.

## 10. Modelo de Dados

O site não usa banco de dados nem API externa para o conteúdo principal.

O modelo é estático e tipado em arquivos TypeScript:

- arrays de experiências;
- arrays de projetos;
- grupos de competências;
- dados de contato;
- textos de interface.

Os textos de interface são validados por contrato, então qualquer chave ausente em uma das línguas quebra a compilação.

Esse modelo é consumido diretamente pelos componentes de página.

## 11. Assets Públicos

O diretório `public/` contém os recursos servidos diretamente pelo Next.js.

Os itens mais relevantes são:

- `public/curriculo.pdf`;
- imagens de perfil em `public/images/`;
- imagens de projetos em `public/images/projects/`.

## 12. Comportamento de Navegação

A navegação interna usa `next/link` e preserva estado de idioma e tema por meio da camada de routing local.

Os links internos mantêm a experiência consistente entre páginas, sem depender de recarregamento completo para a navegação principal.

## 13. Segurança e Privacidade

O site não coleta credenciais, não armazena dados do usuário em servidor e não expõe endpoints de escrita.

As únicas informações persistidas são preferências locais de apresentação:

- idioma;
- tema;
- indicador de configuração já concluída.

## 14. Acessibilidade e Semântica

A implementação atual favorece:

- uso de headings e seções semânticas;
- `alt` útil em imagens informativas;
- contraste adequado entre textos e fundos;
- links externos com abertura segura quando necessário;
- navegação simples e previsível.

## 15. Build e Validação

Scripts disponíveis no projeto:

- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm lint`
- `pnpm check-types`
- `pnpm format`

O fluxo normal de validação do site usa:

- checagem de tipos;
- lint;
- formatação;
- build de produção quando há mudanças em rotas, layout ou assets.

## 16. Resumo das Decisões Atuais

As decisões arquiteturais que o site já aplica hoje são:

- usar Next.js App Router;
- manter o conteúdo profissional centralizado em módulos TypeScript;
- suportar PT e EN com conteúdo separado;
- persistir idioma e tema no navegador;
- manter o produto simples, sem backend;
- expor três rotas públicas principais;
- servir o currículo em PDF a partir de `public/`.
