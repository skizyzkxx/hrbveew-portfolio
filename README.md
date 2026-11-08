# hrbveew — portfólio

Portfólio responsivo em React, TypeScript e Vite, com CSS próprio e Lucide React. A identidade oficial é sempre `hrbveew`.

## Instalar e executar

Requer Node.js 22 ou superior e npm.

```sh
npm install
npm run dev
```

Abra o endereço local informado pelo Vite. Para verificar e gerar a versão de produção:

```sh
npm test
npm run build
npm run preview
```

## Personalização

- `src/data/profile.ts`: GitHub, nome de usuário do Discord, e-mail público e redes adicionais. O GitHub atual é `skizyzkxx`; o Discord é `arqx_yt`. Nenhum link de Discord foi inventado: o botão copia o usuário para adicionar manualmente no aplicativo.
- `src/data/projects.ts`: cadastro central de projetos; inclua nome, descrição, categoria (`Discord`, `Web` ou `Automação`), tecnologias e thumbnail. Adicione `github` e `demo` somente quando os links existirem. Mude `placeholder` para `false` apenas em projetos reais. Os cards atuais apresentam Bot-ticket, Lumi AI, os bots de moderação, sugestões e lembretes, além deste portfólio. As descrições dos dois primeiros se baseiam nos READMEs públicos, sem alegar validação de execução. As capas são ilustrações.
- `public/images/`: imagens leves em SVG dos exemplos; inclua capturas reais se desejar. Imagens de projetos são carregadas sob demanda e têm dimensões definidas.
- `src/sections/`: conteúdo de cada seção. `src/components/`: navegação e componentes reutilizáveis. `src/hooks/`: indicador de seção atual. `src/types/`: tipos.
- `src/styles/global.css`: paleta em preto, branco e cinza, tipografia, detalhes visuais e regras responsivas.
- `index.html`: título, descrição, Open Graph e URL de publicação. Atualize `og:url` e `og:image` caso use domínio próprio.
- `public/og-cover.png`: imagem de compartilhamento. `public/favicon.svg`: ícone da marca.

## Recursos

Todas as seções, menu mobile com fechamento por Escape, rolagem suave, indicador da seção atual, filtros de projetos, cópia do Discord com retorno de sucesso ou alternativa manual, links externos seguros, atalhos de acessibilidade, seletor de projetos em destaque, animações discretas de entrada e suporte a movimento reduzido. Não há formulário fictício, backend, coleta de dados, pagamentos ou segredos no cliente. O e-mail só vira um link quando configurado. Fontes são carregadas do Google Fonts, com alternativas locais.

## Hospedagem

`npm run build` gera `dist/`, pronta para hospedagem estática. Em Netlify, Vercel ou Cloudflare Pages, configure o comando `npm run build` e a pasta de saída `dist`. Este projeto não usa rotas de servidor. Para domínio próprio, atualize os metadados antes de publicar. Não coloque tokens ou senhas em arquivos públicos ou em variáveis `VITE_*`.

Antes de divulgar, configure o e-mail se desejar e mantenha os projetos atualizados. O site não afirma níveis de domínio, clientes, experiência profissional ou resultados não fornecidos.
