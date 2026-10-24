# TAVARES Construção — Modelo 03

Website demonstrativo **Engineering Prestige**, criado como proposta visual e técnica para a TAVARES Construção.

## Tecnologias

- React + TypeScript + Vite
- React Router
- Motion for React
- Lucide React

## Rodar localmente

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components`: navegação, layout, animações reutilizáveis, projetos e formulário
- `src/data/projects.ts`: conteúdo demonstrativo tipado
- `src/pages`: rotas da aplicação
- `public/images`: imagens locais usadas pelo site

## Motion e acessibilidade

O projeto usa Motion para revelação estável de imagens e entradas de conteúdo; a preferência `prefers-reduced-motion` preserva o conteúdo visível sem movimentos intensos. Navegação, filtros e formulário funcionam por teclado.

## Imagens e limitações demonstrativas

- `hero-engineering.png`: imagem gerada para esta proposta com ferramenta de imagem da OpenAI.
- Demais imagens: fotografias do [Unsplash](https://unsplash.com), registradas com seus URLs de origem em [`IMAGE_SOURCES.md`](IMAGE_SOURCES.md).
- Projetos, locais, descrições, etapas e contato são conteúdos ilustrativos; não representam dados, obras ou canais reais da TAVARES Construção.

## Deploy na Vercel

Importe este repositório na Vercel. O comando de build é `npm run build` e a saída é `dist`. `vercel.json` inclui o fallback necessário para as rotas SPA.
