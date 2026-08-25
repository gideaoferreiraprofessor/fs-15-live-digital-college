# Estrutura Condicional: if, else, elseif

São estruturas de controle que permitem executar diferentes blocos de código com base em condições específicas.
Elas são fundamentais para a tomada de decisões em programas.

## Sintaxe

A sintaxe básica das estruturas condicionais em JavaScript é a seguinte:

```javascript
if (condição) {
  // bloco de código a ser executado se a condição for verdadeira
} else if (outraCondição) {
  // bloco de código a ser executado se a outra condição for verdadeira
} else {
  // bloco de código a ser executado se nenhuma das condições anteriores for verdadeira
}
```

## Operadores de Comparação

São usados para comparar valores e retornar um valor booleano (true ou false).
Alguns exemplos incluem:

- `==` : igual a (Verifica apenas valores)
- `===` : estritamente igual a (verifica valor e tipo)

- `!=` : diferente de
- `!==` : estritamente diferente de (verifica valor e tipo)

- `>` : maior que
- `>=` : maior ou igual a

- `<` : menor que
- `<=` : menor ou igual a

## Estrutura if

A estrutura `if` é usada para executar um bloco de código se uma condição for verdadeira.

```javascript
let idade = 18;
if (idade >= "18") {
  console.log("Você é maior de idade.");
}
```

## Estrutura else

A estrutura `else` é usada para executar um bloco de código se a condição do `if` for falsa.

```javascript
let idade = 16;
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

## Estrutura else if

A estrutura `else if` é usada para verificar múltiplas condições. Se a primeira condição for falsa, o programa verifica a próxima condição.

```javascript
let idade = 20;
if (idade < 13) {
  console.log("Você é uma criança.");
} else if (idade < 20) {
  console.log("Você é um adolescente.");
} else {
  console.log("Você é um adulto.");
}
```
