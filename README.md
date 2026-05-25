# julio-saito

Site pessoal de Julio Makdisse Saito, desenvolvido com Next.js, React, TypeScript, Tailwind CSS e componentes baseados em shadcn/ui.

O projeto funciona como um portfólio profissional enxuto: apresenta uma home editorial, projetos em destaque, trajetória profissional, competências, canais de contato e uma página de currículo com link para PDF.

## Objetivo

Este repositório concentra a presença pública de Julio Saito na web. A proposta é manter um site simples de evoluir, rápido de publicar e suficientemente completo para recrutadores, parceiros e pessoas interessadas no histórico profissional.

O conteúdo principal cobre:

- apresentação profissional em PT-BR;
- idioma inicial ajustado ao idioma do navegador na primeira visita;
- projetos selecionados;
- histórico de trabalho em formato de linha do tempo;
- competências técnicas agrupadas por área;
- contatos públicos;
- currículo em PDF servido a partir de `public/curriculo.pdf`.
- idioma e tema sincronizados na URL via querystring, usando `locale` e `theme`.

## Stack

- **Next.js 16** com App Router.
- **React 19**.
- **TypeScript**.
- **Tailwind CSS 4**.
- **shadcn/ui** e utilitários de composição de classes.
- **lucide-react** para ícones.
- **nuqs** para sincronização de estado de URL.
- **next-themes** para alternância de tema.
- **Prettier** com `semi: true` e `useTabs: true` para padronização de formato.
- **pnpm** como gerenciador de pacotes.

As preferências de tema e idioma são persistidas no `localStorage` do navegador e refletidas na querystring da URL.

## Estrutura do Projeto

```text
src/
  app/
    page.tsx              Home
    work/page.tsx         Trajetória profissional
    curriculo/page.tsx    Currículo, contatos e download do PDF
    layout.tsx            Metadados e estrutura global
    globals.css           Tokens visuais e estilos globais
  components/
    site-header.tsx       Navegação principal
    site-footer.tsx       Alternância de idioma e reset de preferências
    page-shell.tsx        Contêiner de página
    page-intro.tsx        Cabeçalhos internos
    locale-provider.tsx   Estado de idioma + querystring
    theme-provider.tsx    Provider de tema
    theme-toggle.tsx      Controle de tema
    ui/button.tsx         Botão compartilhado
  resources/
    site-content.ts       Conteúdo profissional reutilizado pelas páginas
  lib/
    utils.ts              Utilitários compartilhados

public/
  curriculo.pdf           PDF público do currículo
  images/
    perfil*.png           Imagens de perfil
    projects/             Screenshots ou arte para projetos em destaque
  svgs/                   Assets SVG de exemplo (template Next.js)

docs/
  IMPLEMENTATION_PLAN.md
  LINKEDIN_CONTENT_ENRICHMENT_PLAN.md
```

## Conteúdo

O conteúdo editável do site fica principalmente em `src/resources/site-content.ts`.

Use esse arquivo para alterar:

- nome público e dados de contato;
- resumo profissional;
- credenciais exibidas na home;
- projetos em destaque;
- experiências profissionais;
- formação;
- grupos de competências;
- links de contato.

A navegação interna preserva `?locale=pt|en&theme=light|dark` ao trocar entre `Home`, `Work` e `Currículo`.

Evite duplicar arrays de conteúdo diretamente nas páginas. As rotas devem consumir o módulo de conteúdo para manter home, work e currículo consistentes.

## Desenvolvimento

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor local:

```bash
pnpm dev
```

Por padrão, o Next.js expõe o projeto em:

```text
http://localhost:3000
```

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm check-types
pnpm format
```

- `pnpm dev`: inicia o ambiente local.
- `pnpm build`: gera a build de produção.
- `pnpm start`: serve a build gerada.
- `pnpm lint`: executa ESLint.
- `pnpm check-types`: executa `tsc --noEmit`.
- `pnpm format`: executa Prettier com a configuração do repositório.

## Validação Recomendada

Antes de publicar ou abrir um pull request, rode:

```bash
pnpm check-types
pnpm lint
pnpm format
pnpm build
```

Para mudanças pequenas de texto, `pnpm check-types`, `pnpm lint` e `pnpm format` normalmente são suficientes. Para alterações em rotas, metadados, imagens ou configuração do Next.js, rode também `pnpm build`.

## Estilo de Implementação

- Mantenha o site em PT-BR.
- Prefira componentes server-side quando não houver necessidade de estado no cliente.
- Use `next/link` para navegação interna.
- Use `next/image` para imagens locais de perfil ou assets públicos.
- Preserve o padrão visual existente antes de introduzir novas seções.
- Centralize dados duráveis em `src/resources/site-content.ts`.
- Mantenha a navegação principal simples: Home, Work e Currículo.

## Deploy

O projeto está preparado para deploy na Vercel.

Fluxo esperado:

1. Garantir que `pnpm build` passe localmente.
2. Publicar a branch no repositório remoto.
3. Deixar a Vercel executar a build de produção.

## Licença

Este é um site pessoal. Código, textos, imagens e currículo representam a presença profissional de Julio Saito e não devem ser reutilizados como conteúdo pessoal de terceiros sem autorização.
