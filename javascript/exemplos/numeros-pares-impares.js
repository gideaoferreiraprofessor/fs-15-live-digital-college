const totalNumeros = 10

for (let i = 1; i <= totalNumeros; i++) {
    if (i % 2 !== 0) {
        console.log("O número", i , "é ímpar")
    }

    if (i % 2 === 0) {
        console.log("O número", i , "é par")
    }
}