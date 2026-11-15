# RegenMed - Site institucional e Jornal Científico

Esta branch `live-site` contém o site publicado em `https://regen.med.br/`.

## Templates compartilhados

O GitHub Pages processa as páginas com Jekyll. Todos os arquivos HTML possuem *front matter* e incluem os mesmos componentes:

- `_includes/site-header.html` - menu principal, logo, links para o Instituto, matrizes, Jornal Científico e AVA.
- `_includes/site-footer.html` - rodapé institucional, links e marca ABEC Brasil.

Para mudar a navegação ou o rodapé de **todas as páginas**, edite somente o include correspondente. Evite criar cópias de `<header>` ou `<footer>` nos HTMLs.

A front matter de cada página usa `layout: null` e `section`, com valores `home`, `instituto`, `formacao`, `matrizes` ou `jornal`, para indicar o setor de navegação. Exemplo:

```yaml
---
layout: null
section: jornal
---
```

O conteúdo de cada página permanece em seu próprio arquivo. A navegação editorial interna do jornal (`j-tabs`) é intencionalmente específica do jornal e não faz parte do menu global.

Os includes são incorporados **durante o build Jekyll**, e não por uma requisição JavaScript no navegador. Não adicione `.nojekyll`. Se a publicação migrar para um pipeline que não execute Jekyll, será necessário renderizar esses includes na etapa de build.

Não altere o site na branch `master`: a branch oficial é `live-site`.
