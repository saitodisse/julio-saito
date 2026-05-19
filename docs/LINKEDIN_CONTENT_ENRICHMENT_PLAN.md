# Plano de Enriquecimento com Conteúdo do LinkedIn e PDF

## Objetivo

Adicionar mais informações profissionais ao site `julio-saito`, usando os novos dados fornecidos do LinkedIn e o PDF correto já salvo em `public/curriculo.pdf`.

Este plano complementa `docs/IMPLEMENTATION_PLAN.md` e deve orientar uma implementação mais completa, com maior densidade de conteúdo para recrutadores, clientes e parceiros técnicos.

## Fontes Confirmadas

- PDF correto: `public/curriculo.pdf`.
- LinkedIn canônico: `https://www.linkedin.com/in/julio-saito-868707a/`.
- E-mail: `saitodisse@gmail.com`.
- Telefone: `+5511 96569-7834`.
- Localização de contato: Ubatuba, São Paulo, Brasil.
- Localização profissional atual informada no resumo: Ubatuba, São Paulo, Brasil.

## Correções em Relação ao Plano Anterior

### LinkedIn

Usar como URL canônica:

```text
https://www.linkedin.com/in/julio-saito-868707a/
```

Não usar mais estas variações:

- `https://www.linkedin.com/in/julio-makdisse-saito-868707a`
- `www.linkedin.com/in/juliosaito-868707a`

### PDF

O arquivo correto já está em:

```text
public/curriculo.pdf
```

Manter o botão de download apontando para:

```text
/curriculo.pdf
```

## Conteúdo Novo a Incorporar

### Perfil Profissional

Título recomendado:

```text
Senior Software Engineer
```

Resumo em PT-BR sugerido para o site:

```text
Engenheiro de Software Sênior com mais de 20 anos de experiência em TypeScript, Node.js, React e Cloud. Especialista em TypeScript, utiliza Spec-Driven Development para construir softwares funcionais, complexos e sustentáveis.

Atuou em iniciativas críticas de desenvolvimento, liderança técnica e arquitetura de sistemas de alto impacto, desde plataformas em larga escala até soluções serverless ágeis. Atualmente está focado em integrar IA como aliada estratégica, pilotando ferramentas com método, contexto claro e validação final responsável.
```

Resumo curto para Home:

```text
Engenheiro de Software Sênior especializado em TypeScript, React, Node.js e Cloud, com mais de 20 anos criando produtos digitais, arquiteturas robustas e soluções úteis com IA aplicada.
```

### Top Skills

Exibir como destaque:

- Software Development.
- Software Systems Engineering.
- Software Design.

### Idiomas

Adicionar seção ou chips:

- Inglês: Full Professional.
- Espanhol: Limited Working.
- Português: Nativo, inferido pelo perfil e localização, mas só exibir se for desejado.

### Projetos Reais

Substituir os links genéricos da Home por projetos reais:

- Achorde: `https://achorde.com/`
- SVGuitar React: `https://svguitar-react.vercel.app/`
- SVGuitar React Storybook: `https://storybook-svguitar-react.vercel.app/?path=/docs/components-chorddiagram--docs`
- Matter.js Experiments: `https://saitodisse.github.io/matter-js-experiments/`
- Recipes Repository Library: `https://recipes-repo.vercel.app/`

Sugestão de descrição:

- Achorde: produto musical/web app relacionado a acordes.
- SVGuitar React: biblioteca React para renderização de diagramas de acordes em SVG.
- Matter.js Experiments: experimento de jogo com Matter.js, TypeScript e IA.
- Recipes Repository Library: biblioteca/repositório de receitas para organização e consulta.

Antes de publicar descrições definitivas, validar se cada descrição reflete exatamente o projeto atual.

## Plano de Arquitetura de Conteúdo

### Arquivo Central

Criar ou atualizar:

```text
src/resources/site-content.ts
```

Estrutura sugerida:

```ts
export const person = {
  name: "Julio Saito",
  fullName: "Julio Makdisse Saito",
  title: "Senior Software Engineer",
  email: "saitodisse@gmail.com",
  phone: "+5511 96569-7834",
  contactLocation: "Ubatuba, São Paulo, Brasil",
  currentLocation: "Ubatuba, São Paulo, Brasil",
  linkedin: "https://www.linkedin.com/in/julio-saito-868707a/",
  github: "https://github.com/saitodisse",
};
```

Outras coleções:

- `summary`
- `topSkills`
- `languages`
- `projects`
- `experiences`
- `education`
- `contactLinks`

Critérios:

- Preferir strings e arrays simples.
- Evitar JSX no conteúdo.
- Usar `as const` quando fizer sentido.
- Não calcular duração automaticamente a partir de datas sem regra explícita.

## Plano por Página

### Home

Arquivo:

```text
src/app/page.tsx
```

Alterações:

- Atualizar headline para algo mais preciso:

```text
Software engineering for useful, complex and maintainable products.
```

ou em PT-BR:

```text
Engenharia de software para produtos úteis, complexos e sustentáveis.
```

- Usar o resumo curto com TypeScript, React, Node.js, Cloud, 20+ anos e IA aplicada.
- Adicionar faixa de autoridade:
  - 20+ anos.
  - TypeScript specialist.
  - Spec-Driven Development.
  - AI-assisted engineering.
- Atualizar cards de projetos com URLs reais.
- Incluir um CTA externo para LinkedIn.
- Manter CTA para currículo e Work.

### Work

Arquivo:

```text
src/app/work/page.tsx
```

Transformar em timeline completa, com dados abaixo.

#### Soma Deals

- Cargo: Senior Software Engineer.
- Período: August 2025 - Present.
- Local: São Paulo, Brazil.
- Conteúdo:
  - Desenvolvimento de plataforma digital de M&A para PMEs.
  - Atuação full-stack com Next.js e TypeScript.
  - Gestão ou manutenção de backend Python e infraestrutura AWS.
  - Foco em segurança, intuição de uso e sofisticação técnica para empresários e profissionais do setor.

Observação:

- Revisar a consistência temporal antes de publicar, porque "August 2025 - Present" é uma data futura ou sensível dependendo do momento de publicação.

#### Linx Commerce

- Cargo: Solutions Architect.
- Período: December 2021 - June 2024.
- Local: São Paulo, Brasil.
- Conteúdo:
  - Liderança no desenvolvimento de atendimento via WhatsApp.
  - Integração de listagem de produtos, carrinho virtual e fluxos dinâmicos de conversa.
  - Atuação como Senior Developer, Product Owner e Scrum Master.
  - Levantamento de requisitos e simplificação arquitetural para o time.
  - Migração de Kubernetes para Vercel/AWS Cloud Functions.
  - Otimização de PostgreSQL no Google Cloud.

#### Semantix

- Cargo: Senior Web Developer.
- Período: November 2020 - December 2021.
- Local: São Paulo, Brasil.
- Conteúdo:
  - Implementação de live-shopping.
  - Implementação de intelligent-chat.
  - Uso de VTEX e Dialogflow.
  - Colaboração em projetos open source com Next.js.

#### Latife Gastronomia Árabe

- Cargo: Dev at family business.
- Período: February 2017 - November 2020.
- Local: São Paulo e Região, Brasil.
- Conteúdo:
  - Gestão de toda a operação de TI.
  - Uso de TypeScript, Next.js, Hasura e outras tecnologias.
  - Organização com Trello e GitHub Projects.
  - Manutenção de servidores em AWS, Heroku, Google Cloud e Vercel.

#### Azuki

- Cargo: Software Engineer.
- Período: October 2014 - November 2016.
- Local: São Paulo.
- Conteúdo:
  - Contribuição relevante no AZK, CLI open-source para automação de ambientes de desenvolvimento.
  - AZK como precursor conceitual do docker compose.
  - Desenvolvimento interno em Node.js.
  - Suporte à comunidade e gestão do projeto open source.
  - Uso de TDD para qualidade e confiabilidade.
  - Link de evidência: `https://github.com/azukiapp/azk/graphs/contributors`.

#### Integgro Tecnologia da Informação

- Cargo: Web Developer.
- Período: 2013.
- Conteúdo:
  - Desenvolvimento de aplicações web com ASP.NET MVC e JavaScript.
  - Implementação de servidor de integração contínua.

#### Grupo SHC

- Cargo: Programador e instrutor.
- Período: March 2006 - September 2012.
- Projeto: Apollo Web.
- Conteúdo:
  - Arquiteto técnico do Apollo Web, maior projeto de software próprio do Grupo SHC.
  - Definição de tecnologias, técnicas e procedimentos.
  - Desenvolvimento e manutenção do site.
  - ASP.NET, SQL Server, NHibernate, SAP e Castle Windsor.
  - DDD, orientação a objetos, NUnit, Moq e Selenium.
  - Treinamentos técnicos.
  - Uso de open source: Moq, jQuery, Ninject, knockout.js, log4net, AutoMapper, NVelocity e FluentNHibernate.
  - Comunicação com SAP via ERPConnect.
  - Criação e manutenção de CI com TeamCity, Rake e Albacore.
  - Criação de wiki e blog internos para difusão de conhecimento.

#### everis

- Cargo: Analista Programador.
- Período: May 2005 - February 2006.
- Projetos:
  - Santander Banespa - Santander Oper.
  - Santander Banespa - Cadastramento PJ.
- Conteúdo:
  - Análise de sistemas.
  - Desenvolvimento web.
  - Visual Basic 6.
  - Liderança de equipe web.
  - Packages Oracle para migração e sistemas.
  - Comunicação ativa com cliente.
  - Macros para agilizar criação e manutenção.
  - Gestão de cadastro de senhas seguras, anti-trojan e encriptação.
  - Aplicações de apoio à programação ASP.

#### GEMPI

- Cargo: Programador.
- Período: August 2003 - April 2005.
- Projetos:
  - Embratel - Gaia.
  - Telemar - GeoWeb.
- Conteúdo:
  - Gestão de projeto.
  - Especificações técnica e funcional de migração de bases de dados.
  - Desenvolvimento web.
  - Visual Basic 6.
  - Packages Oracle.
  - Separar experiência como cooperado e estagiário se a página suportar detalhes.

### Currículo

Arquivo:

```text
src/app/curriculo/page.tsx
```

Alterações:

- Confirmar que o botão principal baixa `/curriculo.pdf`.
- Exibir:
  - Título profissional.
  - Resumo curto.
  - Top Skills.
  - Idiomas.
  - Contatos.
  - Link para LinkedIn canônico.
  - Link para Work.
- Considerar mostrar telefone somente nesta página, não necessariamente na Home.

### Header

Arquivo:

```text
src/components/site-header.tsx
```

Alterações:

- Garantir acesso a:
  - Home.
  - Work.
  - Currículo.
- Se houver espaço, adicionar ícone/link discreto para LinkedIn.
- No mobile, não esconder o acesso ao currículo.

### SEO

Arquivo:

```text
src/app/layout.tsx
```

Atualizar metadados:

```text
Julio Saito | Senior Software Engineer
```

Descrição:

```text
Portfólio de Julio Saito, Senior Software Engineer especializado em TypeScript, Node.js, React, Cloud, Spec-Driven Development e IA aplicada.
```

Adicionar ou revisar:

- `openGraph.title`
- `openGraph.description`
- `openGraph.locale = "pt_BR"`
- `metadataBase`
- `alternates.canonical`, se a URL final estiver confirmada.

## UX Recomendada

### Densidade de Informação

O site deve ter duas camadas:

- Home: leitura rápida, autoridade e projetos.
- Work/Currículo: leitura detalhada para recrutador ou cliente.

### Visual

Manter a direção atual:

- Fundo claro.
- Tipografia grande.
- Cards editoriais.
- Layout responsivo.

Evitar:

- Transformar o site em uma cópia literal do currículo.
- Listas longas demais na Home.
- Repetir o mesmo conteúdo integral em Work e Currículo.

## Validação de Conteúdo Antes de Publicar

Checar manualmente:

- LinkedIn usa exatamente `https://www.linkedin.com/in/julio-saito-868707a/`.
- `/curriculo.pdf` abre o PDF correto.
- Telefone está formatado de forma consistente.
- Localização não conflita entre Ubatuba e Ubatuba.
- Datas e "Present" fazem sentido para o momento da publicação.
- Links de projetos abrem corretamente.
- Descrições de projetos não prometem mais do que o projeto entrega.

## Validação Técnica

Rodar:

```bash
pnpm check-types
pnpm lint
pnpm build
```

Se houver alteração visual relevante, validar também manualmente:

- Home desktop.
- Home mobile.
- Work desktop.
- Work mobile.
- Currículo desktop.
- Currículo mobile.
- Download do PDF.
- Links externos.

## Critérios de Aceite

- O site usa o LinkedIn canônico novo.
- O botão de currículo baixa o PDF correto em `public/curriculo.pdf`.
- A Home destaca claramente senioridade, TypeScript, Cloud, SDD e IA aplicada.
- A página Work mostra histórico profissional completo e organizado.
- A página Currículo tem contatos, top skills, idiomas e download.
- Os projetos têm links reais.
- O conteúdo fica centralizado em `src/resources/site-content.ts` ou equivalente.
- O site passa em `pnpm check-types`, `pnpm lint` e `pnpm build`, ou os bloqueios ficam documentados.

## Ordem Recomendada de Execução

1. Atualizar o conteúdo central com URL canônica do LinkedIn, contatos, skills, idiomas, projetos e experiências.
2. Atualizar Home com resumo curto, autoridade e projetos reais.
3. Atualizar Work com timeline detalhada.
4. Atualizar Currículo com contatos, skills, idiomas e PDF.
5. Ajustar Header para não esconder rotas importantes no mobile.
6. Atualizar SEO.
7. Validar PDF e links externos.
8. Rodar `pnpm check-types`, `pnpm lint` e `pnpm build`.
