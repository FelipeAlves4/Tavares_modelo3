---
version: alpha
name: "TAVARES Construção — Modelo 03"
description: "Marca residencial de alto padrão cuja engenharia aparece como precisão silenciosa, não como estética corporativa."
colors:
  primary: "#E36B3D"
  ink: "#12171B"
  steel: "#27323A"
  copper: "#E36B3D"
  paper: "#F8F8F5"
  concrete: "#E5E4DF"
  line: "rgba(18,23,27,.18)"
typography:
  display:
    fontFamily: "Space Grotesk, Arial, sans-serif"
  sans:
    fontFamily: "Manrope, Arial, sans-serif"
  serif:
    fontFamily: "Georgia, serif"
rounded:
  DEFAULT: "0px"
spacing:
  shell: "min(1240px, calc(100% - 64px))"
  section: "140px"
  section-mobile: "86px"
components:
  brand: { textColor: "#F8F8F5", typography: "display" }
  hero: { backgroundColor: "#12171B", textColor: "#F8F8F5" }
  button: { backgroundColor: "#E36B3D", textColor: "#12171B", rounded: "0px" }
  navigation: { textColor: "#F8F8F5" }
  story: { backgroundColor: "#12171B", textColor: "#F8F8F5" }
---

# TAVARES Construção — Modelo 03 Design System

## Overview

### Creative North Star

Uma residência brasileira de alto padrão ao entardecer: a piscina e a luz interna expressam desejo, enquanto as linhas, os números de processo e a composição assimétrica preservam a precisão da engenharia.

### Product context and register

- **Audience and primary job:** pessoas avaliando uma construtora para uma residência de alto padrão; o site deve converter interesse em conversa, transmitindo confiança e aspiração.
- **Target market(s) and evidence:** Brasil, em português do Brasil, conforme a marca, textos e pedido atual.
- **Locale(s) and language policy:** `pt-BR`; voz direta, sóbria e humana. “Construindo os sonhos.” é a assinatura de marca.
- **Usage scene:** descoberta em celular e desktop; imagens devem reservar área para leitura e nunca esconder a ação principal.
- **Register:** marca, com rotas institucionais e de portfólio.
- **Memorable signature:** fotografia residencial aspiracional enquadrada por sinais técnicos discretos de processo e construção.
- **Restraint:** a fotografia conduz o desejo; bordas, linhas e motion só orientam a leitura.
- **Anti-references:** catálogo imobiliário genérico, dashboard corporativo e luxo ornamental excessivo.
- **Token ownership/runtime mapping:** `src/styles/global.css` é a fonte de verdade dos tokens CSS (`--ink`, `--steel`, `--copper`, `--paper`, `--concrete`, `--line`) e este arquivo documenta seus papéis.

## Colors

`ink` cria o contraste institucional e os fundos de narrativa. `paper` e `concrete` sustentam leitura e materialidade. `copper` é reservado a ações, foco e linhas técnicas; não deve dominar a fotografia. A foto do hero recebe overlay escuro progressivo para manter contraste AA da navegação e do texto.

## Typography

`Space Grotesk` é a voz geométrica para headline, marca e dados de processo. `Manrope` sustenta leitura corrente. `Georgia` aparece somente como ênfase editorial. A marca textual é sempre “TAVARES Construção” e “Construindo os sonhos.”, sem reintroduzir o slogan legado da imagem de logo.

## Layout

O shell usa o token `shell`; as seções usam `section` no desktop e `section-mobile` abaixo de 800px. O hero trabalha em tela cheia, com a residência e piscina à direita e a copy protegida à esquerda. A navegação compacta preserva logo, menu e área de toque no mobile. Imagens têm dimensões declaradas e `object-fit: cover` para estabilidade.

## Elevation & Depth

Profundidade vem de contraste, overlays e bordas de 1px, não de cards flutuantes. O painel secundário do hero é o único elemento sobreposto de destaque; no mobile ele é removido para deixar a fotografia respirar.

## Shapes

Sem raio decorativo. Botões, imagens e painéis seguem linguagem arquitetônica reta. A borda e as linhas de 1px são estruturais, não ornamento.

## Components

### Foundational visual states

Links e botões têm hover e `:focus-visible` em cobre. O menu móvel sobre header claro troca para superfície `ink` e links `paper`. Conteúdo e imagens continuam acessíveis sem motion.

### Buttons and actions

O botão cobre é a ação primária. Links em texto são secundários, com sublinhado animado apenas como confirmação de interação.

### Navigation and data display

A marca usa o símbolo oficial recortado e wordmark em HTML para que a assinatura atual seja consistente em cabeçalho claro, escuro e rodapé. As grades de projetos mantêm proporção arquitetônica e revelação escalonada.

### Forms and overlays

Formulários seguem controles nativos com foco visível. Não há overlay de diálogo compartilhado nesta identidade.

### Iconography

Lucide é usado em traço fino, normalmente junto a um rótulo. Ícones não substituem ações compreensíveis.

### Motion

Motion deve explicar hierarquia: entrada do hero, revelação de imagens e processo scroll-linked. Transições usam opacidade e transform; `prefers-reduced-motion` remove transições e mostra o processo em fluxo estático.

### Content and data visualization

Copy usa português direto, evitando promessas técnicas sem contexto. Os números de seção e processo comunicam sequência real; não são decoração isolada.

## Do's and Don'ts

- **Do:** valorizar arquitetura, piscina e luz residencial antes de sinais técnicos.
- **Do:** usar cobre apenas para orientar ações e marcos construtivos.
- **Don't:** reutilizar slogans legados em texto visível ou alt text.
- **Don't:** converter o Modelo 03 em uma cópia editorial do Modelo 01 ou em uma vitrine corporativa fria.
