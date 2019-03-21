# Propriedades de Texto
###### [Guia CSS](../README.md) > [Propriedades](./propriedades.md) > Texto
---

Vamos listar algumas propriedades que você provavelmente irá precisar quando estiver lidando com texto:

### `font-family`

A propriedade `font-family` define a fonte de um elemento. Essa propriedade pode receber mais de um valor, ou seja, uma lista de fontes separadas por vírgulas. O navegador irá usar o primeiro valor da lista, caso esse não esteja disponível, tentará o próximo. Caso o nome da família tenha espaços em branco, ela deve ser coloca entre aspas.  
É por isso que é importante fazer o uso das "famílias genêricas" nessa lista de fontes. Quando nenhuma fonte da lista estive diponível e existir uma fonte de família genêrica na lista, o navegador ira selecionar uma fonte aceita pelo computador.  
**Valores:** `<nome-da-família>` | `<família-generica>`  | `initial` | `inherit`  
**Informação extra:** as famílias genêricas são `serif` | `sans-serif` | `monospace` | `cursive` | `fantasy`  
**Valor padrão:** depende do navegador  
**Exemplo:**
```css
h1 {
    font-family: "Times New Roman", serif;
}

p {
  font-family: Helvetica, Arial, sans-serif;
}
```
---

### `font-size`

A propriedade `font-size` define o tamanho do texto. Pode utilizar palavras chaves ou valores de comprimento ou porcantagem.  
**Valores:** `xx-small` | `x-small` | `small` | `medium` | `large` | `x-large` |`xx-large` |`smaller` | `larger` | `<valor-de-comprimento>` | `<valor-de-porcentagem>` | `initial` | `inherit`;  
**Valor padrão:** `medium`  
**Exemplo:**  
```css
h2 {
    font-size: 36px;
}

h3 {
    font-size: 1.2em;
}

.destaque {
    font-size: large;
}
```
---

### `font-style`

A propriedade `font-style` define um estilo para a fonte, que podem ser o normal, itálico ou oblíquo.  
**Valores:** `normal` | `italic` | `oblique` | `initial` | `inherit`  
**Valor padrão:** `normal`  
**Exemplo:**  
```css
span {
    font-style: oblique;
}
```
---

### `font-variant`

A propriedade `font-variant` define se o texto pode estar ou não em *small-caps* ([Versalete em português](https://pt.wikipedia.org/wiki/Versalete)).  
**Valores:** `normal` | `small-caps` | `initial` | `inherit`   
**Valor padrão:** `normal`  
**Exemplo:**  
```css
p {
    font-variant: small-caps;
}
```
---

### `font-weight`

A propriedade `font-weight` define com qual peso a fonte vai ser renderizada (ex: negrito).  
**Valores:** `normal` | `bold` | `bolder` | `lighter` | `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900` | `initial` | `inherit`  
**Informação extra:** O valor `400` é equivalente ao valor `normal` e `700` ao valor `bold`.  
**Valor padrão:** `normal`  
**Exemplo:**  
```css
h1 {
    font-weight: 900;
}

p {
    font-weight: bold;
}
```
---

### `font`

A propriedade `font` é uma maneira abreviada para declarar todas as propriedades relacionadas à `font`, além de incluir a propriedade `line-height` que vamos ver a seguir.  
**Sintaxe:**    
`font: <font-style> <font-variant> <font-weight> <font-size>/<line-height> <font-family>`
- Deve obrigatoriamente incluir valores para:  
    `<font-size>`  
    `<font-family>`
- Os valores são opcionais:
    `<font-style>`  
    `<font-variant>`  
    `<font-weight>`  
    `<line-height>`  
- `font-style`, `font-variant` e `font-weight` devem vir antes de `font-size`  
- `line-height` deve vir imediatamente após `font-size`, precedido por uma barra (/), dessa maneira: `16px/3`;  
- `font-family` deve ser o último valor declarado.  
    
**Valores:** Os valores usados nessa propriedade são os das propriedades que o `font` abraça.  
**Valores padrão:** Os valores padrão são os das propriedades que o `font` abraça.

**Exemplo:**  
```css
p {
    font: italic small-caps bold 14px/1.2 Helvetica, sans-serif;
}

h2 {
    font: 24px "Times New Roman", serif; 
}

span {
    font: italic bold 16px Helvetica, sans-serif;
}
```
---

### `line-height`
A propriedade `line-height` define a altura da linha de um elemento.
**Valores:** `normal` | `<valor-de-numero>` | `<valor-de-comprimento>` | `<valor-de-porcentagem>` | `initial` | `inherit`;  
**Valor padrão:** `normal`  
**Exemplo:**  
```css
p {
    line-height: 1.5em;
}
```
---

### `letter-spacing`
A propriedade `letter-spacing` aumenta ou diminui o espaço entre os caracteres num texto.  
**Valores:** `normal` | `<valor-de-comprimento>` | `initial` | `inherit`  
**Valor padrão:** `normal`  
**Exemplo:**
```css
span {
    letter-spacing: 10px;
}
```
---

### `text-align`
A propriedade `text-align` define o alinhamento horizontal do elemento.  
**Valores:** `left` | `right` | `center` | `justify` |`initial` | `inherit`  
**Valor padrão:** é `left` se a propriedade `direction` tiver o valor `ltr` ou `right` se `direction` tiver o valor `rtl`.  
**Exemplo:**
```css
p {
    text-align: center;
}
```
---

### `text-decoration`
A propriedade `text-decoration` adiciona um tipo de decoração ao elemento. E essa propriedade é uma forma de abreviação para outras três propriedades:
- text-decoration-line (valor obrigatório);
  - É o único valor obrigatório e define o tipo de decoração, que pode ser sublinhado por exemplo.
- text-decoration-color (opcional);
  - É opcional e define a cor da decoração.
- text-decoration-style (opcional);
  - É opicional e define um estilo para a decoração, que pode ser sólido ou pontilhado, por exemplo.  
  
**Sintaxe:**  
`text-decoration: <text-decoration-line> <text-decoration-color> <text-decoration-style>`  
**Valores:**  
- **`text-decoration-line`**: `none` | `underline` | `overline` | `line-through` | `initial` | `inherit`;
  - **Valor padrão:** `none`.
- **`text-decoration-color`**: `<valor-de-cor>` | `initial` |`inherit`;
  - **Valor padrão:** `none`.
- **`text-decoration-style`**: `solid` | `double` |`dotted` | `dashed` | `wavy` | `initial`| `inherit`;
  - **Valor padrão:** `solid`.

**Exemplo:**
```css
h1 {
    text-decoration: underline;
}

h2 {
    text-decoration: overline dashed red;
}
```
---

### `text-indent`
A propriedade `text-indent` define a indentação da primeira linha de um bloco de texto.  
**Valores:** `<valor-de-comprimento>` | `<valor-de-porcentagem>` | `initial` | `inherit`;  
**Valor padrão:** `0`;  
**Exemplo:**
```css
p {
    text-indent: 15px;
}
```
---

### `text-transform`
A propriedade `text-transform` define a capitalização do texto, se o texto vai aparecer todo em maiúsculas  ou minúsculas por exemplo.
**Valores:** `none` | `capitalize` | `uppercase` | `lowercase` | `initial` | `inherit`;  
**Valor padrão:** `none`;  
**Exemplo:**  
```css
h1 {
    text-transform: uppercase;
}
```

---
#### Nesta Seção:
[**Propriedades**](./propriedades.md)   
[Texto](./texto.md) | [Cor](./cor.md) | [Espaçamento](./espacamento.md) 

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br)