# Pseudo-classe de estado
###### [Guia CSS](../README.md) > [Seletores](./seletores.md) > [Pseudo-classes](./pseudo-classes.md) > Pseudo-classes de estado
---

As pseudo-classes dessa categoria são todas relacionadas ao estado do elemento e esse estado tem a ver com a interação do usuário: colocar o mouse sobre um elemento, dar foco num elemento de formulário, etc.

### :active

Seleciona todo elemento que esteja no estado em que os navegadores chamam de ativo. Esse estado é o tempo entre pressionar o botão principal do mouse e liberá-lo.  
**Sintaxe**: `elemento:active`  
**Como funciona**: `a:active` seleciona qualquer `a` no intervalo entre o usuário pressionar o mouse sobre o elemento e liberá-lo.    
**Exemplo**:  
```html
<a href="http://ftt.unievangelica.edu.br">FTT</a>
```
```css
a:active {
  color: red;
}
```
---

### :checked

Seleciona todo elemento que esteja alternado para um estado ligado. Exemplos são os tipos `checkbox` e `radio` do elemento `input`.
**Sintaxe**: `elemento:checked`  
**Como funciona**: `input[type="checkbox"]:checked` seleciona qualquer `input` com o tipo `checkbox` que esteja num estado ligado.    
**Exemplo**:  
```html
<input type="checkbox" name="frutas" value="banana"/> <label for="banana"> Banana</label> <br> 
<input type="checkbox" name="frutas" value="maca" id="maca"/> <label for="maca"> Maçã</label>
```
```css
input[type="checkbox"]:checked {
  box-shadow: red 0 0 5px;
}
```
---

### :disabled

Seleciona todo elemento desativado. Um elemento está desativado quando ele não pode ser selecionado, clicado, digitado, etc, ou aceitar foco.  
**Sintaxe**: `elemento:disabled`   
**Como funciona**: `input:disabled` seleciona qualquer `input` que esteja desativado.  
**Exemplo**:  
```html
<label>Nome: <input type="text" disabled></label>

```
```css
input:disabled {
  opacity: 0.5;
}
```
---

### :enabled

Seleciona todo elemento ativado. Um elemento está ativado quando ele pode ser selecionado, clicado, digitado, etc, ou aceitar foco.
**Sintaxe**: `elemento:enabled`   
**Como funciona**: `input:enabled` seleciona qualquer `input` que esteja ativado.  
**Exemplo**:  
```html
<label>Nome: <input type="text"></label>
```
```css
input:enabled {
  box-shadow: 0 0 10px black;
}
```
---

### :hover

Seleciona todo elemento que esteja com o ponteiro do mouse sobre ele.  
**Sintaxe**: `elemento:hover`  
**Como funciona**: `a:hover` seleciona qualquer `a` quando o usuário posiciona o ponteiro do mouse sobre o elemento.  
**Exemplo**:  
```html
<a href="http://ftt.unievangelica.edu.br">FTT</a>
```
```css
a:hover {
    color: red;
}
```
---

### :link 

Seleciona elementos que contenham links que ainda não foram visitados.
**Sintaxe**: `elemento:link`  
**Como funciona**: `a:link` seleciona qualquer `a` que ainda não tenha tido seu link visitado.  
**Exemplo**:  
```html
<a href="http://ftt.unievangelica.edu.br">FTT</a>
```
```css
a:link {
    text-decoration: none;
}
```
---

### :visited

Seleciona elementos que contenham links que já tenham sido visitados.
**Sintaxe**: `elemento:visited`  
**Como funciona**: `a:visited` seleciona qualquer `a` que ainda já tenha tido seu link visitado.  
**Exemplo**:  
```html
<a href="http://ftt.unievangelica.edu.br">FTT</a>
```
```css
a:visited {
    color: purple;
}
```
---

[Exemplos de utilização de Pseudo-classes no Codepen](https://codepen.io/theleoad/pen/bJpVYg/right?editors=1100);


---
#### Nesta Seção:
[**Seletores**](./seletores.md)   
[Seletores Básicos](./seletores-basicos.md) | [Combinadores](./combinadores.md) | [Pseudo-classes](./pseudo-classes.md) | [Pseudo-elementos](./pseudo-elementos.md)

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 
