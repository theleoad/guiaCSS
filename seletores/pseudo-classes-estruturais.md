# Pseudo-classes estruturais
###### [Guia CSS](../README.md) > [Seletores](./seletores.md) > [Pseudo-classes](./pseudo-classes.md) > Pseudo-classes estruturais
---

Para definir essa divisão especial colocada como "estruturais" precisamos primeiro entender que todas as pseudo-classes (assim como todos os outros seletores) são estruturais: eles são dependentes da estrutura do documento de toda maneira. O que faz termos essa divisão especial é que essas pseudo-classes estão intrinsecamente ligadas a padrões encontrados na estrutura do documento.  Ou seja, são utilizadas para selecionar elementos da estutura do documento de uma maneira que os outros seletores não são capazes de fazer.  

### :empty  
Seleciona qualquer elemento que não tenha filhos. Os filhos podem ser ou outros elementos ou blocos de texto (incluindo espaços em branco).   
**Sintaxe**: `elemento:empty`  
**Como funciona**: `div:empty` eleciona qualquer `<div>` que não tenha conteúdo.  
**Exemplo**:  
```html
<div></div>
```
```css
div { /*somente criando algum espaço dentro da DIV para renderização (apenas para demonstração)*/
  padding: 10px;
}
div:empty {
  background-color: black;
}
```
---

### :first-child 
Seleciona qualquer elemento que seja o primeiro filho de seus pais.    
**Sintaxe**: `elemento:first-child`  
**Como funciona**: `li:first-child` seleciona o primeiro elemento `<li>` entre outros elementos `<li>` filhos de um elemento pai em comum.  
**Exemplo**:  
```html
<ul>
  <li>1° da lista</li>
  <li>2° da lista</li>
  <li>3° da lista</li>
</ul>
```
```css
li:first-child {
  color: red;
}
```
---

### :first-of-type 
Seleciona o primeiro elemento de seu tipo entre os filhos de seu elemento pai.    
**Sintaxe**: `elemento:first-of-type`  
**Como funciona**: `p:first-of-type` seleciona o primeiro elemento do tipo `<p>` entre outros elementos `<p>` filhos de um elemento pai em comum.  
**Exemplo**:  
```html
<article>
  <h1>Usando :first-of-type</h1>
  <p>Primeiro parágrafo.</p>
  <p>Segundo parágrafo.</p>
</article>
```
```css
p:first-of-type {
    font-size: 1.5em;
}
```
---

### :last-child 
Seleciona qualquer elemento que seja o último filho de seus pais.    
**Sintaxe**: `elemento:last-child`  
**Como funciona**: `li:last-child` seleciona o último elemento `<li>` entre outros elementos `<li>` filhos de um elemento pai em comum.  
**Exemplo**:  
```html
<ul>
  <li>1° da lista</li>
  <li>2° da lista</li>
  <li>3° da lista</li>
</ul>
```
```css
li:last-child {
  color: red;
}
```
---

### :last-of-type 
Seleciona o último elemento de seu tipo entre os filhos de seu elemento pai.    
**Sintaxe**: `elemento:first-of-type`  
**Como funciona**: `p:last-of-type` seleciona o último elemento do tipo `<p>` entre outros elementos `<p>` filhos de um elemento pai em comum.  
**Exemplo**:  
```html
<article>
  <p>Primeiro parágrafo.</p>
  <p>Segundo parágrafo.</p>
  <h6>Usando :last-of-type</h6>
</article>
```
```css
p:last-of-type {
    font-size: 1.5em;
}
```
---

### :nth-child(an+b) 
Seleciona um ou mais elementos com base em suas posições em um grupo de elementos irmãos.    
**Sintaxe**: ` `  
**Como funciona**:    
**Exemplo**:  
```html
<html>
```
```css
css {
}
```
---

### :nth-last-child(an+b) 
Seleciona um ou mais elementos com base em sua posição entre um grupo de elementos irmãos, contando a partir do último.  
**Sintaxe**: ` `  
**Como funciona**:    
**Exemplo**:  
```html
<html>
```
```css
css {
}
```
---

### :nth-of-type(an+b) 
Seleciona um ou mais elementos de um tipo, baseado em sua posição entre um grupo de elementos irmãos.    
**Sintaxe**: ` `  
**Como funciona**:    
**Exemplo**:  
```html
<html>
```
```css
css {
}
```
---

### :nth-last-of-type(an+b) 
Seleciona um ou mais elementos de um tipo, baseado em sua posição entre um grupo de elementos irmãos, contando a partir do último.  
**Sintaxe**: ` `  
**Como funciona**:    
**Exemplo**:  
```html
<html>
```
```css
css {
}
```

---
#### Nesta Seção:
[**Seletores**](./seletores.md)   
[Seletores Básicos](./seletores-basicos.md) | [Combinadores](./combinadores.md) | [Pseudo-classes](./pseudo-classes.md) | [Pseudo-elementos](./pseudo-elementos.md)

<img src="../assets/guia-css-linha-horizontal.jpg">
[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 
