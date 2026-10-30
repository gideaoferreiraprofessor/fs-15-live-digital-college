import express from "express"
import morgan from "morgan"
import cors from "cors"
import { userListController } from "./constrollers/userListController.js"
import { productListController } from "./constrollers/productListController.js"
import initDatabase from "./database/init.js"
import { productCreateController } from "./constrollers/productCreateController.js"

// Inicialização do express
const app = express()
// Port a ser usada pela aplicação
const port = 8001

// Confiuguração de recursos do servidor.
// Itens que auxiliam no crontrole e interpretação dos dados
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))

// Rotas
app.get("/", userListController)
app.get("/products", productListController)
app.post("/products", productCreateController)

// Execução do servidor

app.listen(port, () => {
    initDatabase()
    // Esse console é exibido apenas no terminal
    console.log("Meu servidor está funcionando")
})