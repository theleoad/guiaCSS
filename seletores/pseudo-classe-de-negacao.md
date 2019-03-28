# Pseudo-classe de negação
###### [Guia CSS](../README.md) > [Seletores](./seletores.md) > [Pseudo-classes](./pseudo-classes.md) > Pseudo-classe de negação
---

Existe apenas uma pseudo-classe nessa categoria, porém ela merece uma categoria própria.

### :not(*e*)

Seleciona todo elemento que **não** é representado pelo seletor *e*. É importante dizer que o seletor *e* não pode conter outro seletor de negação.
**Sintaxe**: `elemento:not(e)`  
**Como funciona**: `p:not(.especial)` eleciona qualquer `p` que não tenha a classe `.especial`.  
**Exemplo**:  
```html
<p>Usando o seletor de negação.</p>
<p>Usando o seletor de negação.</p>
<p class="especial">Usando o seletor de negação.</p>
```
```css
p:not(.especial) {
  color: red;
}
```

---
#### Nesta Seção:
[**Seletores**](./seletores.md)   
[Seletores Básicos](./seletores-basicos.md) | [Combinadores](./combinadores.md) | [Pseudo-classes](./pseudo-classes.md) | [Pseudo-elementos](./pseudo-elementos.md)

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 
