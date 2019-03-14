# Valores - Cores
###### [Guia CSS](../README.md) > [Valores](./valores) > Cores
---

Os valores de cores são usados em propriedades como `color` e `background-color`, eles podem ter alguns diferentes formatos:

- `#` - Hexadecimal RGB - Pode ser utilizado em dois formatos: 
  - `#RRGGBB` - O primeiro par de dítos corresponde ao nível de vermelho, o segundo par ao nível de verde e o terceiro ao de azul. Cada par está em notação hexadecimal no intervalo de 00 até FF. Sendo assim temos vermelho "puro" sendo `#FF0000` e verde `#00FF00` por exemplo;
  - `#RGB` - Essa é uma "abreviação" do formato anterior. Onde o primeiro dígito representa o nível de vermelho, o segundo verde e o terceiro azul. Sempre que tiver valores repetidos nos 3 pares no do formato `#RRGGBB` você pode usar apenas 3 dígitos. Temos, por exemplo, o verde `#0F0` e o vermelho `#F00`.
- `rgb()` - Funcão RGB - São 3 valores separados por vírgulas, cada um indo de 0 até 255 (`rgb(rrr,ggg,bbb)`) ou 0% até 100% (`rgb(rrr.rr%,ggg.gg%,bbb.bb%)`). O primeiro sendo o nível de vermelho, o segundo verde e o terceiro azul. Exemplo: vermelho `rgb(255,0,0)` e azul `rgb(0%,0%,100%)`;
- `rgba()` - Função RGB com alpha - Funciona como o formato anterior adicionado de um terceiro valor: o *alpha*. Esse valor vai de 0 até 1 e define a transparência, 0 é totalmente transparente, 1 é totalmente opaco, 0.3 é 30% opaco, etc;
- `hsl()` - Função HSL - São 3 valores separados por vírgulas. O primeiro valor, *hue* (tom da cor), vai de 0 até 360 e representa um ângulo que aponta para um tom da cor na roda de cores. O segundo valor, *saturation* (saturação), vai de 0% a 100% onde um valor igual a 100% representa saturação e 0% é um leve sombreado cinza de saturação. O terceiro valor, *lightness* (luminosidade), vai de 0% (preto) e 100% (branco);
- `hsla()` - Função HSL com alpha - Funciona como o formato anterior adicionado de um terceiro valor: o *alpha*. Esse valor vai de 0 até 1 e define a transparência, 0 é totalmente transparente, 1 é totalmente opaco, 0.3 é 30% opaco, etc;
- `<keyword>` - Palavras-chave - No C
- `transparent` - Transparente -

---
#### Nesta Seção:
[**Valores**](./valores.md)  
[Palavras-chave](./palavras-chave.md) | [Cores](./cores.md) | [Números](./numeros.md) | [Porcentagem](./porcentagem.md) | [Comprimento](./comprimento.md) 

<img src="../assets/guia-css-linha-horizontal.jpg">

[ftt.unievangelica.edu.br :arrow_backward:](http://ftt.unievangelica.edu.br) 