const semaforo = "amarelo"
const podePassar = "verde"
const atencao = "amarelo"
const pare = "vermelho"

if (semaforo == podePassar) {
    console.log("Pode passar, o Semáforo está verde")
}

if (semaforo == atencao) {
    console.log("Cuidado! O Semáforo está fechando.")
}

if (semaforo == pare) {
    console.log("Semáforo fechado!")
}
