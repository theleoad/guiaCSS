# Propriedades de Espaçamento
###### [Guia CSS](../README.md) > [Propriedades](./propriedades.md) > Espaçamento
---

##### Acesso rápido:
[padding](#padding) | [border](#border) | [margin](#margin) 


### `padding`
Como vimos na seção [Conceitos Básicos](../conceitos-basicos/conceitos-basicos.md), o padding é o espaço entre o conteúdo e a borda. A propriedade `padding` controla o valor desse espaço e é uma maneira abreviada para outras 4 propriedades:  
- `padding-top` - `padding` ao topo do elemento;
- `padding-right` - `padding` à direita elemento;
- `padding-bottom` - `padding` a baixo do elemento;
- `padding-left` - `padding` à esquerda elemento;  

**Sintaxe:**
A propriedade `padding` pode ter de um a quatro valores declarados:
- 4 valores: `padding: 10px 15px 20px 8px;`
  - `padding-top` é igual a `10px`;
  - `padding-right` é igual a `15px`;
  - `padding-bottom` é igual a `20px`;
  - `padding-left` é igual a `8px`;
  
- 3 valores: `padding: 10px 15px 20px;`
  - `padding-top` é igual a `10px`;
  - `padding-right` e `padding-left` são iguais a `15px`;
  - `padding-bottom` é igual a `20px`;

- 2 valores: `padding: 10px 15px;`
  - `padding-top` e `padding-bottom` são iguais a `10px`;
  - `padding-right` e `padding-left` são iguais a `15px`;
  
- 1 valor: `padding: 15px;`
  - `padding-top`, `padding-right`, `padding-bottom` e `padding-left` são iguais a 15px;

**Valores:** `<valor-de-comprimento>` | `<valor-de-porcentagem>` | `initial` | `inherit`;  
**Informação extra:** Não são aceitos valores negativos para essa propriedade.   
**Valor Padrão:** `0`;
**Exemplo:**
```css
div {
    padding: 30px 20px;
}

p {
    padding: 10px 15px 5px 7px;
}
```
---
### `border`
A borda está ao redor do conteúdo e do `padding`. A propriedade `border` define as propriedades da borda e é uma maneira abreviada para 3 propriedades:
- `border-width` - define a largura da borda, valor opcional;
  - **Valores:** `medium` | `thin` | `thick` | `<valor-de-comprimento>` | `initial` | `inherit`;
  - **Valor padrão:** `medium`;
- `border-style` define o estilo da borda;
  - **Valores:** `none` | `hidden` | `dotted` | `dashed` | `solid` | `double` | `groove` | `ridge` | `inset` | `outset` | `initial` | `inherit`;
  - **Valor padrão:** `none`;
- `border-color` define a cor da borda;
  - **Valores:** `<valor-de-cor>` | `transparent` | `initial` | `inherit`;
  - **Valor padrão:** a cor do elemento.  

**Sintaxe:** `border: <border-width> <border-style> <border-color>;`  
**Valores:** `<border-width> <border-style> <border-color>` | `initial` | `inherit`;
**Valor padrão:** `medium none`
**Exemplo:**
```css
h1 {
    border: 2px solid red;
}

h2 {
    border: 4px dashed rgba(98, 98, 70, 0.5);
}
```
---

### `margin`

A `margin` é a parte mais externa do box model, é o espaço que separa um elemento de outro. A propriedade `margin` controla o valor desse espaço e é uma maneira abreviada para outras 4 propriedades:  
- `margin-top` - `margin` ao topo do elemento;
- `margin-right` - `margin` à direita elemento;
- `margin-bottom` - `margin` a baixo do elemento;
- `margin-left` - `margin` à esquerda elemento;  

**Sintaxe:**
A propriedade `margin` pode ter de um a quatro valores declarados:
- 4 valores: `margin: 10px 15px 20px 8px;`
  - `margin-top` é igual a `10px`;
  - `margin-right` é igual a `15px`;
  - `margin-bottom` é igual a `20px`;
  - `margin-left` é igual a `8px`;
  
- 3 valores: `margin: 10px 15px 20px;`
  - `margin-top` é igual a `10px`;
  - `margin-right` e `margin-left` são iguais a `15px`;
  - `margin-bottom` é igual a `20px`;

- 2 valores: `margin: 10px 15px;`
  - `margin-top` e `margin-bottom` são iguais a `10px`;
  - `margin-right` e `margin-left` são iguais a `15px`;
  
- 1 valor: `margin: 15px;`
  - `margin-top`, `margin-right`, `margin-bottom` e `margin-left` são iguais a 15px;
  
**Valores:** `<valor-de-comprimento>` | `<valor-de-porcentagem>` | `auto` | `initial` | `inherit`;  
**Informação extra:** No valor `auto`, o navegador calcula a margem.   
**Valor Padrão:** `0`;
**Exemplo:**
```css
div {
    margin: 30px 20px;
}

p {
    margin: 10px 15px 5px 7px;
}

.box {
    margin: 0 auto;
}
```

---
#### Nesta Seção:
[**Propriedades**](./propriedades.md)   
[Texto](./texto.md) | [Cor](./cor.md) | [Espaçamento](./espacamento.md) 

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br)
