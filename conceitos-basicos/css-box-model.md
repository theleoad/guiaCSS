# CSS Box Model
###### [Guia CSS](../README.md) > [Conceitos Básicos](./conceitos-basicos.md) > CSS Box Model
---

Podemos considerar todos os elementos HTML como caixas (boxes). Em CSS usamos o termo Box Model quando falamos de design e layout. Basicamente o Box Model é uma caixa que envolve todo elemento HTML e composta por margem, borda, espaçamento e o conteúdo do elemento em si.  
Veja a imagem abaixo:

**FALTA IMAGEM**
<!-- Imagem do box model -->

A importância de entender bem o Box Model é saber que mudanças que implementamos em um elemento podem impactar outro elemento. Vamos falar de cada item do Box Model com detalhes:

-  Content (conteúdo) - é o conteúdo do box, onde o texto e a imagem de fato aparecem;
-  Padding (espaçamento) - é a área em volta do *content* até a *border*. O *padding* é transparente;
-  Border (borda) - É uma borda que está ao redor do *padding*;
-  Margin (margem) - É a parte mais externa do box model, é o espaço que separa um elemento de outro. A *margin* é transparente.

Exemplo:
```css
div {
  width: 100px;
  height: 100px;
  border: 10px solid black;
  padding: 50px;
  margin: 50px;
}
```

### Propriedade `box-sizing`

Se usarmos como referência o exemplo acima podemos dizer que nossa `div` terá `100px` de largura e `100px` de altura. Mas isso não é verdade, se inspecionarmos esse elemento vamos ver que ele foi renderizado com `220px` de largura e `220px` de altura. Essa largura e altura têm esse valor pois os valores da `border` e `padding` são somadas à largura e altura definidas para o conteúdo. Com isso podemos perceber que as propriedades `width` e `height` definem as dimensões do conteúdo e não de todo o elemento.

![É matemática!](https://media.giphy.com/media/c7PcKQlOqZ8Ws/giphy.gif)  
*É matemática!*

Vamos entender a matemática:

>**Largura:**  
(`100px` de `width`)  +  
(`10px` de `border-left`) +  
(`10px` de `border-right`) +  
(`50px` de `padding-left`) +  
(`50px` de `padding-right`) = `220px`

>**Altura:**  
(`100px` de `width`)  +  
(`10px` de `border-top`) +  
(`10px` de `border-bottom`) +  
(`50px` de `padding-top`) +  
(`50px` de `padding-bottom`) = `220px`

 Esses elementos se organizam dessa maneira por conta da propriedade `box-sizing`. Essa propriedade permite que a gente modifique o comportamento do Box Model, porém ela tem como padrão o valor `content-box`, que se aplica a todos os elementos. Esse valor é exatamente o que vimos no exemplo anterior: o box-model é definido pelo conteúdo do elemento.

De fato isso pode paracer confuso e nos trazer problemas no nosso trabalho cotidiano. Para ilustrar esse tipo de problema vamos imaginar uma situação:

>Você precisa criar duas DIVs onde cada uma ocupe 50% da largura do elemento pai, dessa maneira as DIVs ficariam lado a lado.  
Com o valor padrão da propriedade `box-sizing` não daria certo, mas vamos ver como solucinar:

[Exemplo do 'box-sizing' no CODEPEN](https://codepen.io/theleoad/pen/qvpBPq/right?editors=1100)

Como vimos no exemplo a solução é mudar o valor do `box-sizing` para `border-box`. Mas como funciona esse valor? Ele altera todo o comportamento do Box Model, fazendo com que o browser calcule as dimensões do elemento contando não somenent o seu conteúdo, como acontece com o valor `content-box`, mas também considerando o `padding` e `border` do elemento.

---
#### Nesta Seção:
[**Conceitos Básicos**](./conceitos-basicos.md)  
[O que é CSS?](./o-que-e-css.md) | [Adicionando estilo ao HTML](./adicionando-estilo-ao-html.md) | [Regra CSS](./regra-css.md) | [CSS Box Model](./css-box-model.md)

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 