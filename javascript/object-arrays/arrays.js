const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Limão", "Abacaxi"]

console.warn("BASICO DE UM ARRAY")
console.log(frutas)

console.warn("ACESSANDO ELEMENTO DE UM ARRAY PELO ÍNDICE(INDEX)")
console.log(frutas[3])


console.warn("ARRAY METHODS")
console.info("array.unshift(): O unshift ADICIONA um item/elemento no INICIO do array")
frutas.unshift("Morango")
console.info(frutas)

console.info("array.shift(): O unshift REMOVE o PRIMEIRO item/elemento do array")
frutas.shift()
console.log(frutas)

console.info("array.push(): O push ADICIONA um item/elemento no FINAL do array")
frutas.push("Abacate")
console.log(frutas)

console.info("array.pop(): O pop REMOVE o ULTIMO item/elemento do array")
frutas.pop()
console.log(frutas)

