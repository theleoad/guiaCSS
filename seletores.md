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

### Seletor por Classe  
Seleciona elementos baseado no valor do atributo `class`. Diferente do ID, podemos ter mais de um elemento com a mesma classe no documento.
**Sintaxe**: `.center`  
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



## Pseudo-classes

## Pseudo-classes de negação

## Pseudo-classes de interação

## Pseudo-elementos
