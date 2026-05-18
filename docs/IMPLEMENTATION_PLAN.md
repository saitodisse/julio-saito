# Plano de Enriquecimento do Site Pessoal

## Objetivo

Adicionar informações úteis ao projeto `julio-saito` usando como fonte o arquivo legado:

`/home/saito/_git/saitodisse-portfolio/src/resources/siteContent.tsx`

O foco é transformar o site atual de uma landing simples em um portfólio pessoal mais completo, com dados profissionais reais, trajetória, competências, contatos e currículo, mantendo a implementação enxuta em Next.js.

## Estado Atual do Projeto

O projeto atual já possui:

- Home em `src/app/page.tsx`, com hero, imagem de perfil, projetos em destaque e CTA para Work/Currículo.
- Página Work em `src/app/work/page.tsx`, ainda resumida e sem histórico profissional detalhado.
- Página Currículo em `src/app/curriculo/page.tsx`, com link para `/curriculo.pdf`.
- Header compartilhado em `src/components/site-header.tsx`.
- SEO básico em `src/app/layout.tsx`.
- Estilo visual claro, editorial, com Tailwind CSS, shadcn/ui e ícones `lucide-react`.

Há alterações não commitadas no repositório atual. Este plano considera essas mudanças como trabalho em andamento e evita depender de commit limpo.

## Conteúdo Útil Encontrado na Fonte Legada

### Identidade

- Nome: Julio Makdisse Saito.
- Papel profissional:
  - PT-BR: Engenheiro de Software Sênior & Arquiteto de Soluções.
  - EN: Senior Software Engineer & Solutions Architect.
- Localização: São Bernardo do Campo, São Paulo, Brasil.
- Idiomas: Português e Inglês.
- E-mail: `saitodisse@gmail.com`.
- Telefone: `+55 11 96569-7834`.
- LinkedIn: `https://www.linkedin.com/in/julio-makdisse-saito-868707a`.
- GitHub: `https://github.com/saitodisse`.

### Resumo Profissional

Resumo em PT-BR com os pontos principais:

- Desenvolvedor de Software Sênior especializado em TypeScript.
- Mais de 20 anos de experiência como Full-Stack Developer e Solutions Architect.
- Experiência em JS/TS, Node.js, React/Next.js, GraphQL e tecnologias em nuvem.
- Atuação em Linx Chat Commerce.
- Contribuição importante no projeto open-source AZK, da Azuki.
- Experiência com arquitetura de sistemas em larga escala e soluções serverless.
- Interesse atual em IA como aliada estratégica para inovação e resolução de problemas.
- Defesa de desenvolvimento ágil, TDD, automação de deploy, simplicidade e manutenibilidade.

### Experiência Profissional

Experiências disponíveis para enriquecer a página Work:

- Soma Deals · PJ, Senior Software Engineer, Ago 2025 - o momento.
- Linx Commerce, Arquiteto de Soluções, Dez 2021 - Jun 2024.
- Semantix, Desenvolvedor Web, Nov 2020 - Dez 2021.
- Latife Gastronomia Árabe, CTO / Programador, Fev 2017 - Nov 2020.
- Azuki, Desenvolvedor, Out 2014 - Nov 2016.
- Integgro Tecnologia da Informação, Desenvolvedor, 2013.
- Grupo SHC, Desenvolvedor e Instrutor, Mar 2006 - Set 2012.
- everis, Analista Programador, Mai 2005 - Fev 2006.
- GEMPI, Desenvolvedor, Ago 2003 - Abr 2005.

### Formação

- FATEC-SP, Faculdade de Tecnologia de São Paulo.
- Tecnólogo em Tecnologia da Informação, 2001-2006.

### Competências

Competências e tecnologias extraídas:

- TypeScript, JavaScript, Node.js, React.js, Next.js, Tailwind CSS.
- API Development, GraphQL, Hasura, PostgreSQL, SQL Server, Oracle.
- Docker, Kubernetes, AWS Cloud Functions, Google Cloud, Vercel, Heroku.
- TDD, CI/CD, desenvolvimento ágil, arquitetura de sistemas, serverless.
- Open source, suporte à comunidade, DDD/OOP.
- Inteligência Artificial, RAG.
- ASP.NET MVC, Visual Basic 6.

## Decisões de Produto

### Idioma

Manter PT-BR como idioma principal no projeto atual.

Motivo: o projeto já está em `lang="pt-BR"` e a maior parte das páginas atuais está escrita em português. O conteúdo legado possui versão bilíngue, mas implementar i18n agora aumentaria escopo e complexidade sem ser necessário para enriquecer o site.

### Estrutura de Conteúdo

Criar um módulo de conteúdo interno para evitar arrays duplicados espalhados por páginas.

Sugestão:

- `src/resources/site-content.ts`

Esse arquivo deve concentrar:

- `person`
- `socialLinks`
- `professionalSummary`
- `experiences`
- `education`
- `skills`
- `featuredProjects`

### Rotas

Manter a estrutura atual:

- `/`: narrativa curta, destaques e CTAs.
- `/work`: trajetória profissional detalhada.
- `/curriculo`: resumo de currículo, contatos e download do PDF.

Não recriar agora as rotas antigas `/about`, `/blog` ou `/gallery`.

Motivo: o projeto atual já tem escopo mais direto. O conteúdo de About pode ser absorvido por Home, Work e Currículo sem criar navegação vazia.

### Privacidade de Contato

O e-mail e LinkedIn podem ser públicos. O telefone existe na fonte legada, mas deve ser usado com cuidado.

Recomendação:

- Mostrar e-mail, GitHub e LinkedIn no site.
- Usar telefone apenas no PDF ou em uma seção discreta da página Currículo, se fizer sentido.

## Plano de Implementação

### 1. Criar Módulo de Conteúdo

Arquivo: `src/resources/site-content.ts`

Incluir conteúdo tipado com `as const`:

- Dados pessoais e links sociais.
- Resumo profissional em PT-BR.
- Lista completa de experiências.
- Formação.
- Grupos de competências.
- Projetos em destaque atuais.

Critérios:

- Não usar JSX no arquivo de conteúdo se não for necessário.
- Preferir strings e arrays simples para facilitar reuso em Server Components.
- Manter textos em PT-BR.
- Corrigir detalhes temporais manualmente antes de exibir duração, porque a fonte antiga contém durações calculadas que podem ficar obsoletas.

### 2. Atualizar Home

Arquivo: `src/app/page.tsx`

Mudanças propostas:

- Trocar o headline genérico por algo mais específico:
  - "Engenharia de software para produtos úteis, simples e escaláveis."
- Substituir o parágrafo do hero por uma versão curta do resumo profissional.
- Adicionar uma faixa de credenciais abaixo do hero:
  - 20+ anos de experiência.
  - TypeScript / React / Next.js.
  - Arquitetura, TDD e cloud.
  - Open source e IA aplicada.
- Manter a seção de projetos, mas mover os dados para `site-content.ts`.
- Corrigir links dos projetos, evitando `https://github.com/saitodisse` genérico em todos os cards quando houver URL específica.
- Alterar CTA secundário de "Baixar currículo" para "Ver currículo" se o botão leva à página `/curriculo`, deixando "Baixar PDF" apenas dentro da página de currículo.

### 3. Atualizar Página Work

Arquivo: `src/app/work/page.tsx`

Mudanças propostas:

- Transformar a página em uma linha do tempo profissional.
- Exibir cada experiência com:
  - Empresa.
  - Cargo.
  - Período.
  - Localidade/modalidade quando existir.
  - 2 a 4 bullets de impacto.
- Destacar experiências mais fortes:
  - Soma Deals: plataforma digital de M&A para PMEs, Next.js, TypeScript, AWS.
  - Linx Commerce: arquitetura de Chat Commerce via WhatsApp, liderança, Vercel, AWS Cloud Functions, PostgreSQL, CI/CD, TDD.
  - Azuki: contribuição relevante ao AZK e open source.
  - Grupo SHC: arquitetura do Apollo Web e treinamento técnico.
- Remover frases genéricas que não agregam ao recrutador.

### 4. Atualizar Página Currículo

Arquivo: `src/app/curriculo/page.tsx`

Mudanças propostas:

- Exibir um resumo profissional enxuto.
- Incluir cards de contato:
  - E-mail.
  - LinkedIn.
  - GitHub.
  - Localização.
- Incluir seção "Competências principais" com grupos:
  - Front-end.
  - Back-end e dados.
  - Cloud e DevOps.
  - Arquitetura e qualidade.
  - IA aplicada.
- Manter CTA "Baixar PDF" apontando para `/curriculo.pdf`.
- Adicionar CTA "Ver trajetória completa" para `/work`.

### 5. Atualizar Header

Arquivo: `src/components/site-header.tsx`

Mudanças propostas:

- Manter navegação simples:
  - Home.
  - Work.
  - Currículo.
- Considerar mostrar "Currículo" como item de navegação também em telas pequenas, já que hoje o botão fica oculto no mobile.
- Evitar duplicar botão e item com o mesmo destino no desktop se isso poluir o header.

### 6. Atualizar SEO

Arquivo: `src/app/layout.tsx`

Mudanças propostas:

- Atualizar `title` e `description` para refletir o conteúdo mais específico:
  - `Julio Makdisse Saito | Engenheiro de Software Sênior`
  - `Portfólio de Julio Makdisse Saito, engenheiro de software sênior especializado em TypeScript, Next.js, arquitetura de soluções, cloud e IA aplicada.`
- Adicionar `openGraph.locale = "pt_BR"`.
- Avaliar `alternates.canonical` quando a URL final estiver confirmada.

### 7. Opcional: Criar Metadados por Página

Arquivos:

- `src/app/work/page.tsx`
- `src/app/curriculo/page.tsx`

Adicionar `metadata` por rota:

- Work: trajetória profissional e projetos.
- Currículo: currículo, competências e contato.

### 8. Revisar Conteúdo de Projetos

Projetos atuais na Home:

- Grana Clara.
- svgguitar-react.
- SoM&A Deals.
- Open Source Tools.

Ações:

- Confirmar URLs reais dos projetos.
- Substituir links genéricos por links específicos.
- Se algum projeto for privado, apontar para uma descrição interna ou para LinkedIn/GitHub geral.
- Evitar afirmar tecnologias não confirmadas pelo projeto atual.

### 9. Acessibilidade e UX

Critérios:

- Links externos com `target="_blank"` e `rel="noreferrer"`.
- Texto de botões coerente com destino real.
- Contraste adequado nos textos `text-black/62` e similares.
- Cards legíveis no mobile.
- Header funcional em mobile, especialmente acesso ao currículo.
- Evitar emojis no conteúdo principal se a direção visual for mais profissional.

### 10. Validação

Comandos recomendados:

```bash
pnpm check-types
pnpm lint
pnpm build
```

Ordem sugerida:

1. `pnpm check-types`
2. `pnpm lint`
3. `pnpm build`

Se houver falha de dependência ou ambiente, registrar o erro e validar manualmente os arquivos alterados.

## Critérios de Aceite

- O conteúdo profissional real do arquivo legado aparece no site atual de forma clara e útil.
- Home comunica rapidamente quem é Julio, especialidade e tipo de trabalho.
- Work deixa de ser resumo genérico e passa a mostrar trajetória completa.
- Currículo concentra resumo, contatos, competências e download do PDF.
- O conteúdo compartilhado fica centralizado em um módulo reutilizável.
- Links e CTAs têm rótulos coerentes com o destino.
- O site continua funcionando em desktop e mobile.
- `pnpm check-types`, `pnpm lint` e `pnpm build` passam ou têm bloqueios documentados.

## Fora de Escopo Inicial

- Implementar troca de idioma.
- Recriar blog.
- Recriar galeria.
- Adicionar CMS.
- Alterar design system de forma ampla.
- Reescrever o PDF do currículo.
- Publicar/deployar.

## Riscos e Cuidados

- A duração das experiências no arquivo legado pode estar desatualizada. Evitar exibir durações calculadas como "10 meses" sem revisão.
- O período "Ago 2025 - o momento" deve ser confirmado antes de publicação, já que a data atual do projeto pode tornar isso sensível.
- O telefone pessoal pode não ser desejável no site público.
- Alguns links de projeto na Home estão genéricos e precisam de confirmação antes de parecerem finais.
- O arquivo legado usa JSX no conteúdo. Para o projeto atual, strings simples reduzem acoplamento e facilitam manutenção.

## Sequência Recomendada de Execução

1. Criar `src/resources/site-content.ts` com dados normalizados em PT-BR.
2. Atualizar Home para consumir o conteúdo compartilhado.
3. Atualizar Work como timeline completa.
4. Atualizar Currículo com resumo, contato, skills e PDF.
5. Ajustar Header para navegação completa em mobile e desktop.
6. Atualizar metadados globais e, se necessário, metadados por página.
7. Rodar validação na ordem definida.
8. Revisar textos finais em PT-BR, principalmente acentos, períodos e CTAs.
