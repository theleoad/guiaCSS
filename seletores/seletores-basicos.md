# Seletores Básicos
###### [Guia CSS](../README.md) > [Seletores](./seletores.md) > Seletores Básicos
---

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

---
#### Nesta Seção:
[**Seletores**](./seletores.md)   
[Seletores Básicos](./seletores-basicos.md) | [Combinadores](./combinadores.md) | [Pseudo-classes](./pseudo-classes.md) | [Pseudo-elementos](./pseudo-elementos.md)

<img src="../assets/guia-css-linha-horizontal.jpg">
[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 
