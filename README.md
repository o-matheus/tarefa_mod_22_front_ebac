# 📘 Projeto: Landing Page – Meu Aniversário

📅 Finalizado em: junho de 2025
🎯 Módulo 22 – Formação EBAC

---

## 🧠 Contexto e Objetivo

Neste módulo, o desafio era criar uma landing page no estilo dos eventos que vimos anteriormente na formação, mas agora com um tema pessoal: o meu aniversário. A ideia era aplicar todos os aprendizados com foco em responsividade, animações com AOS, organização com SASS e Parcel, além de lógica em JavaScript para uma contagem regressiva personalizada.

---

## 🧱 Estrutura e Organização Inicial

O projeto foi estruturado manualmente, organizando o HTML em cinco seções principais:

1. **Header / Hero** com imagem de fundo e contagem regressiva.
2. **Sessão "Sair para comer"** 🍔
3. **Sessão "Pegar uma praia"** 🏖️
4. **Sessão "Jogar videogame"** 🎮
5. **Sessão "Assistir anime"** 📺

Desde o início, trabalhei com `npm init` para iniciar o ambiente Node e instalei o Parcel como bundler. No `package.json`, configurei os scripts `dev` e `build`, e estruturei os arquivos nas pastas `src/scripts` e `src/styles`.

Também criei o `.gitignore` para ignorar `node_modules`, `.parcel-cache` e `dist`.

---

## 🎨 Estilo com SCSS

Organizei o CSS usando SASS modularizado:

* `main.scss` (arquivo principal que importa os outros)
* `_variables.scss` com cores, fontes e gradientes
* `_event.scss` com os estilos das seções reutilizáveis
* **Removi o `_hero.scss`** após perceber que só havia um parágrafo no Hero, sem necessidade de um arquivo separado

As variáveis definidas incluíram:

```scss
$cor-titulo: #ffffff;
$cor-texto: #aaaaaa;
$blue1: #22CCB2FF;
$blue2: #235BCDFF;
```

A tipografia foi padronizada com a fonte **Roboto**, e os tamanhos ajustados para responsividade:

* Título principal: `40px → 30px` no mobile
* Títulos de seção: `24px → 20px`
* Texto: `16px → 14px`
* `Gap` entre conteúdo: `110px`

---

## 📏 Responsividade

Ajustes realizados com `@media (max-width: 360px)` para alinhar os elementos no mobile. Entre as ações tomadas:

* `text-align: center` nas seções de texto
* `margin: 0 auto` nos containers
* Ajuste do `gap` para evitar colagem entre imagem e texto
* Redução progressiva do `font-size` dos títulos e parágrafos

---

## 🧠 Lógica JavaScript – Contagem Regressiva

Essa foi uma das partes mais desafiadoras. A lógica seguiu o fluxo:

1. Criar uma `const dataEvento` com a data e hora do aniversário
2. Calcular o timestamp com `.getTime()`
3. Usar `setInterval` para atualizar o tempo restante a cada segundo
4. Calcular dias, horas, minutos e segundos com `Math.floor`
5. Inserir no HTML com `innerHTML`

### 🧩 Desafio resolvido: ano automático

Como o aniversário é um evento recorrente, precisei adaptar o código para que, se a data já tiver passado no ano atual, o contador recomece automaticamente com o **ano seguinte**.

```js
const anoAtual = new Date().getFullYear();
let anoEvento = anoAtual;

function atualizaDataEvento() {
  let dataEvento = new Date(`Sep 01, ${anoEvento} 06:40:00`);
  let tempoEvento = dataEvento.getTime() - new Date().getTime();

  if (tempoEvento < 0) {
    anoEvento++;
    dataEvento = new Date(`Sep 01, ${anoEvento} 06:40:00`);
    tempoEvento = dataEvento.getTime() - new Date().getTime();
  }

  // Atualiza o DOM com o tempo calculado
}
```

Esse ajuste resolveu o problema do tempo negativo pós-evento, sem forçar recarregar o código todo.

---

## 🌀 Animações com AOS

Implementei a biblioteca **AOS** (Animate On Scroll) com animações suaves:

* `data-aos="fade-left"` para sessões com imagem à esquerda
* `data-aos="fade-right"` para sessões com imagem à direita

💡 **Importante:** a animação foi aplicada **somente no container interno**, não na `section`, para evitar efeitos indesejados na imagem de fundo com gradiente.

Tive um erro inicial por esquecer o `AOS.init()` no `main.js`. Resolvi com:

```js
AOS.init();
```

---

## 🖼️ Otimização de Imagens – SharpConfig

Durante a otimização de imagens com Sharp, surgiram alguns entraves:

* Tentei configurar `.jpg`, mas o Parcel só reconheceu `.jpeg`
* O correto foi definir o `sharp.config.json` assim:

```json
{
  "png": { "quality": 75 },
  "jpeg": { "quality": 75 }
}
```

Esse passo não impactou visualmente o projeto, mas reduziu o tamanho final do `build`.

---

## 🧩 Bugs, Ajustes e Observações

* Imagem de fundo no Hero não aparecia: **faltava configurar `background-size: cover` e overlay com pseudo-elemento `::before`**
* Overlay não funcionava porque o `position: absolute` estava fora da pseudo-classe
* O `gap` entre texto e imagem parecia quebrado: **era o `display: flex` que estava mal configurado**
* A fonte parecia apagada no mobile: resolvido com `font-weight: bold`
* A última seção demorava a aparecer no scroll: ajustado o `padding-bottom` da seção anterior

---

## ✅ Conclusão

Esse projeto me desafiou a aplicar:

* Organização com Parcel e SCSS modular
* Lógica JavaScript contextualizada e prática
* Otimizações visuais e estruturais reais
* Resolução de bugs com paciência e atenção aos detalhes

E acima de tudo: **me mostrou como criar uma experiência visual divertida e personalizada**, mesmo com recursos limitados.

---

📦 **Publicado na Vercel**
🔗 Link disponível na plataforma de envio da EBAC

---

Se quiser, posso gerar esse texto em formato `.md` (Markdown) ou `.pdf` para você enviar direto. Deseja que eu gere isso?
