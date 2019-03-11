# Seletores

Como já vimos anteriormente, um Seletor CSS nada mais é que uma parte da Regra CSS que definem para quais elementos essas regras CSS deverão ser aplicadas.

```css
body {
  background-color: red;
}
```
No exemplo acima, estamos selecionando a tag body, ou seja body é nosso seletor na Regra CSS apresentada.

Existem vários tipos de seletores, vamos falar sobre cada um deles e como devem ser utilizados.

## Seletores Básicos

### Seletor universal  
Seleciona todos os elementos do documento.  
**Sintaxe**: `*`  
**Como funciona**: `*` corresponderá a todos os elementos do documento.  
**Exemplo**:  
```css
* {
  padding: 0;
  margin: 0;
}
```
---

### Seletor de Elemento  
Seleciona elementos baseado no nome do elemento HTML.   
**Sintaxe**: `nome-do-elemento`  
**Como funciona**: `h1` corresponderá a qualquer elemento `<h1>`.  
**Exemplo**:  
```html
<h1>Usando o seletor por tag</h1>
```
```css
h1 {
  color: red;
  font-weight: bold;
}
```
---

### Seletor de ID  
Seleciona elementos baseado no valor do atributo `id`. Deve existir apenas um elemento com o mesmo ID no documento.   
**Sintaxe**: `#nome-do-id`  
**Como funciona**: `#especial` corresponderá ao elemento que possuir `id ="especial"`.  
**Exemplo**:  
```html
<p id="especial">Usando o seletor por ID</p>
```
```css
#especial {
  color: purple;
  font-size: 16px;
}
```
---

### Seletor de Classe  
Seleciona elementos baseado no valor do atributo `class`. Diferente do ID, podemos ter mais de um elemento com a mesma classe no documento.  
**Sintaxe**: `.nome-da-classe`  
**Como funciona**: `.center` corresponderá aos elementos que possuirem `class ="center"`.  
**Exemplo**:  
```html
<p class="center">Usando o seletor por classe</p>
```
```css
.center {
  text-align: center;
  color: blue;
}
```
---

### Seletor de Atributo  
Seleciona elementos baseado no valor de um dos seus atributos (`nome-do-atributo="valor-do-atributo"`), ou até mesmo pelo próprio atributo.  
**Sintaxe**: `[atributo]`, `[atributo="valor"]`, `[atributo~="valor"]`, `[atributo|="valor"]`, `[atributo^="valor"]`, `[atributo$="valor"]`, `[atributo*="valor"]`   
**Como funciona**:  
`[href]` corresponderá aos elementos que possuirem o atributo `href` (para qualquer valor);  
`[href="https://google.com"]` corresponderá aos elementos que possuírem o atributo `href` com o valor exato de `https://google.com`;  
`[href*="google"]` corresponderá aos elementos que possuírem o atributo `href` contendo `google` em alguma parte do seu valor;  
`[href^="http"]` corresponderá aos elementos que possuírem o atributo `href` com seu valor começando em `http`;  
`[href$="pdf"]` corresponderá aos elementos que possuírem o atributo `href` com seu valor terminando em `pdf`;   
`[title~="casa"]` corresponderá aos elementos que possuírem o atributo `title` contendo a string `casa` em alguma parte do seu valor. Esse seletor só funciona com os valores do atributo no documento sendo listas separadas por espaço;  
`[data-decadas|="1980"]` corresponderá aos elementos que possuírem o atributo `data-decadas` começando a string `1980`. Esse seletor só funciona com os valores do atributo no documento sendo listas separadas por *dashes* (traços -);  
**Exemplo**:  
```html
<a href="https://google.com">Usando o seletor de Atributo</a> <!-- Usado nos exemplos 1, 2, 3 e 4 -->

<a href="http://ftt.unievangelica.edu.br/arquivo.pdf">Usando o seletor de Atributo</a> <!-- Usado no exemplo 5 -->

<img src="http://ftt.unievangelica.edu.br/casa.jpg" title="casa alvenaria"> <!-- Usado no exemplo 6 -->

<p data-decadas="1980-1990">Usando o seletor de Atributo</p> <!-- Usado no exemplo 7 -->
```
```css
[href] { /*Exemplo 1*/
    color: blue;
}

[href="https://google.com"] { /*Exemplo 2*/
    text-transform: uppercase;
}

[href*="google"] { /*Exemplo 3*/
    font-weight: bold;
}

[href^="https"] { /*Exemplo 4*/
    font-family: 'Courier New', Courier, monospace;
}

[href$="pdf"] { /*Exemplo 5*/
    color: red;
}

[title~="casa"] { /*Exemplo 6*/
    border: solid 2px blue;
}

[data-decadas|="1980"] { /*Exemplo 7*/
  border: solid 2px black;
  text-align: center;
}
```

## Combinadores

### Seletor de descendentes  
O combinador ` `&nbsp;(espaço em branco) seleciona os elementos que são filhos do elemento especificado anteriormente (não é necessário que seja um filho direto).   
**Sintaxe**: `elemento-pai elemento-filho`  
**Como funciona**: `div p` irá corresponder a qualquer elemento `<p>` que estiver dentro do elemento `<div>`.  
**Exemplo**:  
```html
<div>
  <p>Usando o seletor por tag</p>
</div>
```
```css
div p {
  color: red;
  font-weight: bold;
}
```
---

### Seletor de filhos  
O combinador `>` selecina elementos que são filhos diretos do elemento especificado anteriormente.  
**Sintaxe**: `elemento-pai > elemento-filho`  
**Como funciona**: `section > p` irá corresponder a todo elemento  `<p>` qque estiver diretamente dentro de um elemento `<section>` especificado.  
**Exemplo**:  
<section>
  <p>1 - parágrafo</p>
  <div>
    <p>2 - parágrafo</p>
  </div>
  <p>3 - parágrafo</p>
</section>
```
```css
section > p {
  color: red;
}
```
---

### Seletores de irmãos adjacentes 
O combinador `+` seleciona os elementos que seguem imediatamente o elemento especificado anteriormente.   
**Sintaxe**: `primeiro-irmao + segundo-irmao`  
**Como funciona**: `img p` irá corresponder a qualquer elemento `<p>` que segue imediatamente após um elemento `<img>`.  
**Exemplo**:  
```html
<div>
  <p>1 - parágrafo</p>
  <img src="http://ftt.unievangelica.edu.br/casa.jpg" title="casa">
  <p>2 - parágrafo</p>
  <p>3 - parágrafo</p>
</div>
```
```css
img + p {
  color: red;
}
```
---

### Seletores gerais de irmãos
O combinador `~` seleciona os elementos que seguem (não necessariamente imediatamente) o elemento especificado anteriormente, os elementos precisam compartilhar o mesmo pai.   
**Sintaxe**: `primeiro-irmao ~ segundo-irmao`  
**Como funciona**: `img p`  irá corresponder a todo elemento `<p>` que seguir um elemento `<img>`  dentro de um mesmo elemento pai.  
**Exemplo**:  
```html
<div>
  <p>1 - parágrafo</p>
  <img src="http://ftt.unievangelica.edu.br/casa.jpg" title="casa">
  <p>2 - parágrafo</p>
  <p>3 - parágrafo</p>
</div>
```
```css
img ~ p {
  color: blue;
}
```
---

## Pseudo-classes

## Pseudo-classes de negação

## Pseudo-classes de interação

## Pseudo-elementos
