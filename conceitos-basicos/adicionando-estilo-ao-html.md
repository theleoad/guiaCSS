# Adicionando estilo ao HTML
###### [Guia CSS](../README.md) > [Conceitos Básicos](./conceitos-basicos.md) > Adicionando estilo ao HTML
---

O CSS pode ser aplicado aos documentos de três formas diferentes, veremos abaixo cada uma delas.

## CSS Inline

No seu documento HTML é possível adicionar estilo a um elemento individual através do atributo `style`. O valor que será adicionado a esse atributo é o que chamamos de *Bloco de Declaração* (Veremos na seção [Estrutura básica](./estrutura-basica.md)). No caso desse estilo inline o Bloco de Declaração irá sem as chaves:

```html
<p style="color: red; font-size: 16px;">Texto com CSS Inline aplicado</p>
```

Essa maneira de aplicar uma folha de estilo não é exatamente a maneira mais prática pois dificulta a manutenibilidade do código. Iremos ver outras maneiras de inserir o CSS para que possamos tirar todo o proveito dessa ferramenta.

## Folhas de estilo internas

Uma folha de estilo pode ser adicionada no topo de um documento HTML usando a tag `<style>`, ela deve estar dentro do elemento `<head>`:

```html
<html>
  <head>
    <title>Folhas de estilo internas</title>
    <style type="text/css">
      h1 {
        color: red;
      }
      p {
        font-size: 16px;
        color: darkgray;
      }
    </style>
  </head>
  ...
</html>
```

Essa maneira de aplicar o CSS é mais prática que a "Inline" pois permite que vários elementos sejam selecionados de uma só vez, mantendo o código mais manutenível. Porém se tivermos mais de um documento HTML no nosso projeto devemos preferir o próximo método.

### Folhas de estilo externas

Com esse método você pode modificar o visual de um projeto com várias páginas através de um único arquivo. Em cada documento HTML onde se deseja adicionar uma folha de estilo você deve incluir uma referência para o arquivo CSS através da tag `<link>`, que deve estar dentro do elemento `<head>`:

```html
<head>
  <title>Folhas de estilo externas</title>
  <link rel="stylesheet" type="text/css" href="estilo-1.css">
  <link rel="stylesheet" type="text/css" href="estilo-2.css">
</head>
```

Como se pode ver no exemplo acima, é possível adicionar mais de um arquivo CSS em um documento HTML. É bom saber que se você aplicar um estilo a um elemento em dois arquivos CSSs distintos, o último arquivo adicionado será o utilizado. No caso do exemplo o `estilo-2.css` terá mais importância que o `estilo-1.css`. 
 
---
## Nesta Seção:
[**Conceitos Básicos**](./conceitos-basicos.md)  
[O que é CSS?](./o-que-e-css.md) | [Adicionando estilo ao HTML](./adicionando-estilo-ao-html.md) | [Estrutura básica](./estrutura-basica.md) | [CSS Box Model](./css-box-model.md)

<img src="../assets/guia-css-linha-horizontal.jpg">
[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br)  