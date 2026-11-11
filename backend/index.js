import express from "express"
import morgan from "morgan"
import cors from "cors"
import { userListController } from "./constrollers/userListController.js"
import productListController from "./constrollers/productListController.js"
import initDatabase from "./database/init.js"
import productCreateController from "./constrollers/productCreateController.js"
import productDetailsController from "./constrollers/productDetailsController.js"
import productUpdateController from "./constrollers/productUpdateController.js"
import productDeleteController from "./constrollers/productDeleteController.js"
import listController from "./constrollers/product/ecommerce/listController.js"

// Inicialização do express
const app = express()
// Port a ser usada pela aplicação
const port = 8001

// Confiuguração de recursos do servidor.
// Itens que auxiliam no crontrole e interpretação dos dados
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))

// Rotas publicas para o ecommerce
app.get("/store/products", listController)

// Rotas ADM
app.get("/", userListController)
app.get("/products", productListController)
app.get("/product/:id", productDetailsController)
app.put("/product/:id", productUpdateController)
app.post("/products", productCreateController)
app.delete("/product/:id", productDeleteController)

// Execução do servidor

app.listen(port, () => {
    initDatabase()
    // Esse console é exibido apenas no terminal
    console.log("Meu servidor está funcionando")
})