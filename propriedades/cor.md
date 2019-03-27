# Propriedades de Cor
###### [Guia CSS](../README.md) > [Propriedades](./propriedades.md) > Cor
---

##### Acesso rápido:
[background](#background) | [color](#color) | [box-shadow](#box-shadow) | [text-shadow](#text-shadow) | [opacity](#opacity) | [filter](#filter) 

### `background`
A propriedade `background` serve para estilizar o fundo de elementos. Essa propriedade é uma forma de abreviação para outras 8 propriedades:
- `background-color` - Define uma cor de fundo para um elemento;
- `background-image` - Define uma ou mais imagens de fundo para um elemento;
- `background-position` - Define a posição inicial de uma imagem de fundo (`background-image`); 
- `background-size` - Define o tamanho da imagem de fundo;
- `background-repeat` - Define como e se uma imagem de fundo vai ser repetida;
- `background-origin` -  Define o ponto de origem de uma imagem de fundo, essa propriedade não tem efeito caso só esteja sendo usado a propriedade `background-color`.
- `background-clip` - Define como o plano de fundo (imagem ou cor) irá se posicionar dentro do elemento;
- `background-attachment` - Define se uma imagem de fundo irá rolar junto com a página ou ficará fixa.

**Sintaxe:**  
`background: <background-color> <background-image> <background-position>/<background-size> <background-repeat> <background-origin> <background-clip> <background-attachment>;`  
**Valores:**
- **`background-color`**: `<valor-de-cor>` | `transparent` | `initial` | `inherit`;
  - **Valor padrão:** `	transparent`;
- **`background-image`**: `url` | `none` | `initial` | `inherit`;
  - **Valor padrão:** `none`;
- **`background-position`**: `left top` | `left center` | `left bottom` | `right top` | `right` | `center` | `right bottom` | `center top` | `center center` | `center bottom` | `<valor-de-comprimento>` | `<valor-de-comprimento> <valor-de-comprimento>` | `<valor-de-porcentagem>` | ` <valor-de-porcentagem> <valor-de-porcentagem>` | `initial` | `inherit`;  
*Nota*: Nos valores com palavra-chave, comprimento ou porcentagem, você pode definir apenas o primeiro valor, mas sempre que definir apenas o primeiro valor o segundo assume o valor `50%` que é igual a `center`;
  - **Valor padrão:** `0% 0%`;
- **`background-size`**: `auto` | `<valor-de-comprimento>` | `<valor-de-comprimento> <valor-de-comprimento>` | `<valor-de-porcentagem>` | ` <valor-de-porcentagem> <valor-de-porcentagem>` | `cover` | `contain` | `initial` | `inherit`;  
*Nota*: `auto` a imagem é renderizada no seu tamanho original, `cover` redimensiona a imagem para cobrir todo o elemento (cortando ou redimensionando a imagem), `contain` redimensiona a imagem para fazer que ela seja totalmente visível dentro do elemento. Nos valores com comprimento ou porcentagem, o primeiro valor corresponde a largura e o segundo a altura. Você pode definir apenas o primeiro valor, mas nesse caso o segundo valor assume o valor `auto`;
  - **Valor padrão:** `auto`;
- **`background-repeat`**: `repeat` | `repeat-x` | `repeat-y` | `no-repeat` | `initial` | `inherit`;
  - **Valor padrão:** `repeat`;
- **`background-origin`**: `padding-box` | `border-box` | `content-box` | `initial` | `inherit`;
  - **Valor padrão:** `padding-box`;
- **`background-clip`**: `border-box` | `padding-box` | `content-box` | `initial` | `inherit`;
  - **Valor padrão:** `border-box`;
- **`background-attachment`**: `scroll` | `fixed` | `local` | `initial` | `inherit`;
  - **Valor padrão:** `scroll`;

### `color`
A propriedade `color` define a cor de um elemento que nesse caso se aplica ao texto renderizado e alguma decoração que estiver aplicada a esse texto. Essa propriedade também se aplica à borda do elemento.  
**Valores:** `<valor-de-cor>` | `initial` | `inherit`;  
**Valor padrão:** depende do navegador;  
**Exemplo:**  
```css
h1 {
  color: red;
}

h2 {
  color: #F95;
}

p {
  color: rgba(255,180,220, 0.7);
}
```
---

### `box-shadow`
A propriedade `box-shadow` adiciona uma ou mais sombras ao elemento. A sombra é definida pelos deslocamentos (offset) X e Y em relação ao elemento, desfoque, raio de propagação e cor. Para adicionar mais de uma sombra ao elemento basta separar os valores por vírgula.  
**Sintaxe:** `box-shadow: <h-offset> <v-offset> <blur> <spread> <color>` ou `box-shadow: <h-offset> <v-offset> <blur> <spread> <color> inset`;  
**Valores:** `<h-offset> <v-offset> <blur> <spread> <color>` | `inset` | `initial` | `inherit` | `none`;
- h-offset - `<valor-de-comprimento>`. É o deslocamento horizontal e é um valor obrigatório. Um valor positivo posiciona a sombra do lado direito do elemento e um valor negativo do lado esquerdo;
- v-offset - `<valor-de-comprimento>`. É o desloacamento vertical e é um valor obrigatório. Um valor positivo posiciona a sombra abaixo do elemento e um valor negativo acima;
- blur - `<valor-de-comprimento>`. É o desfoque e é um valor opcional. Quanto maior o número, maior o desfoque. Se não for especificado, o valor padrão é 0;
- spread - `<valor-de-comprimento>`. É o raio de propagação e é um valor opcional. Um valor positivo aumenta o tamanho da sombra e um valor negativo diminui. Se não for especificado, o valor padrão é 0;
- color - `<valor-de-cor>`. É a cor atribuída à sombra. Esse valor também é opcional, sendo que o valor padrão é o valor `color` do elemento;
- inset quando incluído, o valor `inset` muda a sombra de externa pra interna.  
  
**Valor Padrão:** `none`;

**Exemplo:**  
```css
div {
  box-shadow: 10px 15px 30px 10px red inset;
}

.circle {
  box-shadow: 5px 5px rgba(0, 98, 90, 0.4),
              10px 10px rgba(0, 98, 90, 0.3),
              15px 15px rgba(0, 98, 90, 0.2),
              20px 20px rgba(0, 98, 90, 0.1),
              25px 25px rgba(0, 98, 90, 0.05);
}
```
---

### `text-shadow`

A propriedade `text-shadow` adiciona uma ou mais sombras ao elemento de texto e ao seu `text-decoration` se houver. A sombra é definida como um deslocamento (offset) do texto que tem valores para o deslocamento vertical e horizontal, além de de valores opcionais de cor e desfoque.  
**Sintaxe:** `text-shadow: <h-offset> <v-offset> <blur> <color>`;  
**Valores:** `<h-offset> <v-offset> <blur> <color>` | `none` | `initial` | `inherit`;
- h-offset - `<valor-de-comprimento>`. É o deslocamento horizontal e é um valor obrigatório. Um valor positivo posiciona a sombra do lado direito do elemento e um valor negativo do lado esquerdo;
- v-offset - `<valor-de-comprimento>`. É o desloacamento vertical e é um valor obrigatório. Um valor positivo posiciona a sombra abaixo do elemento e um valor negativo acima;
- blur - `<valor-de-comprimento>`. É o desfoque e é um valor opcional. Quanto maior o número, maior o desfoque. Se não for especificado, o valor padrão é 0;  

**Valor Padrão:** `none`;  
**Exemplo:**
```css
h1 {
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
}

h2 {
  text-shadow: 6px 6px rgba(0,0,0,0.2);
}
```
---

### `opacity`

A propriedade `opacity` define o nível de opacidade de um elemento, onde `1` é totalmente opaco, `0.5` é 50% opaco e `0` é totalmente transparente.  
É importante falar que quando você define a transparência de um elemento, todos os seus elementos filho também irão carregar essa definição.  
**Valores:** `<valor-de-numero>` | `initial` | `inherit`;
**Valor Padrão:** `1`;  
**Exemplo:**
```css
img {
  opacity: 0.5;
}
```
---
#### Nesta Seção:
[**Propriedades**](./propriedades.md)   
[Texto](./texto.md) | [Cor](./cor.md) | [Espaçamento](./espacamento.md) 

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br)
