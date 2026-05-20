# AGENTS.md

Instruções para agentes trabalhando neste repositório. Estas regras complementam os defaults globais do usuário e valem para a raiz do projeto.

## Contexto do Projeto

Este repositório contém o site pessoal de Julio Makdisse Saito.

O produto é um portfólio profissional em PT-BR construído com Next.js, React, TypeScript, Tailwind CSS e shadcn/ui. O site deve permanecer direto, rápido, legível e fácil de atualizar.

Rotas principais:

- `/`: home com apresentação, credenciais e projetos em destaque.
- `/work`: trajetória profissional.
- `/curriculo`: resumo profissional, contatos, competências e download do PDF.

## Prioridades

- Preserve o caráter pessoal e profissional do site.
- Mantenha o conteúdo factual e consistente com `src/resources/site-content.ts`.
- Faça alterações pequenas, revisáveis e alinhadas ao estilo visual existente.
- Evite transformar o projeto em landing page genérica de produto.
- Não invente experiências, empresas, datas, credenciais ou links.
- Sempre responda em pt-br com acentuação e gramáticas corretas.

## Stack e Convenções

- Next.js App Router.
- React 19.
- TypeScript.
- Tailwind CSS 4.
- shadcn/ui para padrões de componentes.
- lucide-react para ícones.
- pnpm para scripts e dependências.
- Prettier com `semi: true` e `useTabs: true` para manter o formato consistente.

Prefira:

- Server Components por padrão.
- Client Components apenas quando houver estado, efeitos, tema ou interação de navegador.
- `next/link` para navegação interna.
- `next/image` para imagens locais.
- imports usando alias `@/` quando o projeto já estiver usando esse padrão.

## Conteúdo

O arquivo `src/resources/site-content.ts` é a fonte principal de conteúdo profissional.

Ao alterar textos usados por mais de uma página:

1. Atualize `src/resources/site-content.ts`.
2. Ajuste as páginas consumidoras apenas se a estrutura visual precisar mudar.
3. Verifique se home, work e currículo continuam coerentes entre si.

Não duplique listas de experiências, projetos, competências ou contatos diretamente nas páginas quando elas puderem vir do módulo de conteúdo.

## Design e UX

- Mantenha o idioma principal em PT-BR.
- Preserve a navegação simples: Home, Work e Currículo.
- Use hierarquia visual clara e sem excesso de texto explicativo dentro da interface.
- Mantenha boa leitura em mobile e desktop.
- Evite seções decorativas que não ajudem a entender o perfil profissional.
- Use ícones de `lucide-react` quando um ícone for necessário.
- Não adicione animações pesadas sem necessidade.
- Não adicione cards dentro de cards.

## Acessibilidade

- Imagens informativas devem ter `alt` útil.
- Links externos devem usar `target="_blank"` com `rel="noreferrer"` quando abrirem nova aba.
- Não dependa apenas de cor para comunicar estado ou categoria.
- Garanta contraste adequado nos temas claro e escuro.

## Arquivos Públicos

- `public/curriculo.pdf` é o currículo público baixável.
- Imagens de perfil ficam em `public/images/` (artefatos de projeto em `public/images/projects/` quando aplicável).
- Antes de trocar ou remover arquivos públicos, procure referências nas páginas e no módulo de conteúdo.

## Documentação

Atualize `README.md` quando mudar:

- stack;
- scripts;
- rotas principais;
- estrutura de conteúdo;
- fluxo de validação;
- instruções de deploy.

Use `docs/` para planos, decisões e materiais auxiliares. Não coloque documentação durável apenas em comentários de código.

## Validação

Use a validação mais estreita que prove a mudança.

Comandos comuns:

```bash
pnpm check-types
pnpm lint
pnpm format
pnpm build
```

Para mudanças de texto ou documentação:

```bash
pnpm check-types
pnpm lint
pnpm format
```

Para mudanças em rotas, layout, metadados, imagens ou configuração:

```bash
pnpm build
```

Se algum comando não puder ser executado, registre claramente o motivo no encerramento.

## Git e Segurança

- Não reverta alterações não relacionadas.
- Não use comandos destrutivos sem pedido explícito.
- Não publique dados pessoais novos sem confirmação.
- Não adicione segredos, tokens, arquivos `.env` ou credenciais.
- Antes de commitar, revise o diff e mantenha o commit focado na tarefa.

## Escopo de Mudanças

Quando o pedido for pequeno, altere somente os arquivos necessários.

Para mudanças de conteúdo profissional, revise no mínimo:

- `src/resources/site-content.ts`;
- páginas que exibem esse conteúdo;
- `README.md`, se a estrutura ou instruções mudarem.

Para mudanças visuais, revise também:

- `src/app/globals.css`;
- componentes compartilhados em `src/components/`.

## Critério de Pronto

Uma alteração está pronta quando:

- o pedido do usuário foi atendido;
- o conteúdo está consistente entre as rotas afetadas;
- não há diffs não relacionados criados pelo agente;
- a validação relevante foi executada ou o motivo de não execução foi informado;
- documentação foi atualizada quando a mudança altera uso, estrutura ou fluxo.
