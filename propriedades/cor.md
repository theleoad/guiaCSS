# Propriedades de Cor
###### [Guia CSS](../README.md) > [Propriedades](./propriedades.md) > Cor
---

##### Acesso rápido:
[background](#background) | [color](#color) | [box-shadow](#box-shadow) | [text-shadow](#text-shadow) | [outline](#outline) | [opacity](#opacity) | [filter](#filter) 

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






---
#### Nesta Seção:
[**Propriedades**](./propriedades.md)   
[Texto](./texto.md) | [Cor](./cor.md) | [Espaçamento](./espacamento.md) 

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br)
