# Regra CSS

###### [Guia CSS](../README.md) > [Conceitos Básicos](./conceitos-basicos.md) > Regra CSS

---

Uma **Regra CSS** é uma declaração que define estilo a um ou mais elementos na sua página. Essa Regra tem uma sintaxe própria:

![Regra CSS](../assets/guiacss-regra-css.jpg)

- Seletor: indica o elemento HTML que você deseja adicionar o estilo;
- Bloco de Declaração: contém uma ou mais declarações separadas por ponto e vírgula. Cada declaração leva uma propriedade CSS e um Valor separados por dois pontos;
  - Propriedade: é um aspecto do elemento HTML que será modificado (por exemplo: font-size, color, background, etc);
  - Valor: é a característica específica a ser assumida pela propriedade (por exemplo: fonte de 16px, cor vermelha, fundo azul).

![Legal, mas e aí?](https://media1.tenor.com/images/555b77dde4cbfa15cb2c108493e019bf/tenor.gif)  
_Legal, mas e aí?_

Exemplo de Regras CSS:

```css
h1 {
  color: red;
}

.top-box {
  background-color: blue;
  width: 100%;
}
```

Podemos ter mais de um seletor em uma regra CSS, fazendo com que tenhamos menos repetição de código quando elementos compartilharem as mesmas propriedades. Para usarmos múltiplos seletores basta separa-lós por vírgula:

```css
h1,
h2,
p {
  font-family: Helvetica, Arial, sans-serif;
  color: darkgray;
}
```

---

#### Nesta Seção:

[**Conceitos Básicos**](./conceitos-basicos.md)  
[O que é CSS?](./o-que-e-css.md) | [Adicionando estilo ao HTML](./adicionando-estilo-ao-html.md) | [Regra CSS](./regra-css.md) | [CSS Box Model](./css-box-model.md)

[<img src="../assets/guia-css-linha-horizontal.jpg">](../README.md)

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br)
