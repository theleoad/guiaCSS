# Valores - Comprimento
###### [Guia CSS](../README.md) > [Valores](./valores.md) > Comprimento
---

Um Valor de Comprimento é expresso por um número positivo ou negativo (quando permitido), seguido imediatamente por uma abreviação de duas letras que representa uma unidade a ser utilizada. Não pode existir espaço entre o número e a unidade. Quando o número nesse valor for 0 (zero), não é necessário expressar uma unidade.

Essas unidades que usamos com Valores de Comprimento são divididas em dois tipos: unidades absolutas, que são sempre medidas da mesma maneira; e as unidades relativas, que são medidas em relação a outras coisas. Vamos ver algumas dessas unidades abaixo.

### Unidades Absolutas

- Polegadas, centímetros e milímetros: as abreviações para essas unidades são *in*, *cm* e *mm* respectivamente. Como você pode imaginar essas medidas são as mesmas que encotramos nas nossas réguas. Elas são perigosas para o desenvolvimento de design em telas, que é o caso de sites. O mapeamento dessas unidades para um monitor ou qualquer outro display é geralmente aproximado, poir muitos sistemas não tem nenhum conceito da relação de suas áreas de exibição com as medidas do "mundo real". 
- Pontos e paicas: são duas unidades de medida mais comumente usadas para composição e design de tipografia. Elas têm relação com as polegadas: 1 polegada é igual a 72 pontos e 1 paica é igual a 12 pontos. 

Como as unidades absolutas podem nos trazer problemas, elas não são muito utilizadas no design web.

### Unidades Relativas

- Em (`em`) - É uma unidade que é relativa ao tamanho da fonte do elemento, ou seja, `2em` significa 2 vezes o tamanho da fonte atual. [Exemplo da unidade Em no Codepen](https://codepen.io/theleoad/pen/jJvWbw/right?editors=1100);
- Rem (`rem`) - Funciona de uma maneira parecida com o `em`. A diferença é que a `rem` é relativa ao tamanho da fonte do elemento raiz, `<html>`. [Exemplo da unidade Rem no Codepen](https://codepen.io/theleoad/pen/WmgrVJ/right?editors=1100);
- Pixels (`px`) - No CSS, um pixel é o tamanho necessário para prencheer uma polegada com 96 pixels, ou seja 1/96 de uma polegada. Você vai encontrar em alguns materiais o Pixel como uma unidade absoluta, porém os pixels são relativos ao dispositivo de visualização. Para dispositivos de baixa resolução, 1px é um pixel desse dispositivo (1 ponto) da exibição. Para impressoras e telas de alta resolução, 1px pode implicar em vários pixels de dispositivo;
- Viewport width unit (vw) - Relativo a 1% do da largura do viewport (o tamanho da janela do navegador);
- Viewport height unit (vh) - Relativo a 1% do da altura do viewport (o tamanho da janela do navegador).


---
#### Nesta Seção:
[**Valores**](./valores.md)  
[Palavras-chave](./palavras-chave.md) | [Cores](./cores.md) | [Números](./numeros.md) | [Porcentagem](./porcentagem.md) | [Comprimento](./comprimento.md) 

[<img src="../assets/guia-css-linha-horizontal.jpg">](../README.md)

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 