# Combinadores
###### [Guia CSS](../README.md) > [Seletores](./seletores.md) > Combinadores
---

### Seletor de descendentes  
O combinador ` `&nbsp;(espaço em branco) seleciona os elementos que são filhos do elemento especificado anteriormente (não é necessário que seja um filho direto).   
**Sintaxe**: `elemento-pai elemento-filho`  
**Como funciona**: `div p` irá corresponder a qualquer elemento `<p>` que estiver dentro do elemento `<div>`.  
**Exemplo**:  
```html
<div>
  <p>Usando o combinador "espaço"</p>
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
```html
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
**Como funciona**: `img + p` irá corresponder a qualquer elemento `<p>` que segue imediatamente após um elemento `<img>`.  
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
**Como funciona**: `img ~ p`  irá corresponder a todo elemento `<p>` que seguir um elemento `<img>`  dentro de um mesmo elemento pai.  
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

[Exemplos de utilização de Combinadores no Codepen](https://codepen.io/theleoad/pen/GeXjBj/right?editors=1100);

---
#### Nesta Seção:
[**Seletores**](./seletores.md)   
[Seletores Básicos](./seletores-basicos.md) | [Combinadores](./combinadores.md) | [Pseudo-classes](./pseudo-classes.md) | [Pseudo-elementos](./pseudo-elementos.md)

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 
