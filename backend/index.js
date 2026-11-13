import express from "express"
import morgan from "morgan"
import cors from "cors"
import { userListController } from "./controllers/userListController.js"
import productListController from "./controllers/productListController.js"
import initDatabase from "./database/init.js"
import productCreateController from "./controllers/productCreateController.js"
import productDetailsController from "./controllers/productDetailsController.js"
import productUpdateController from "./controllers/productUpdateController.js"
import productDeleteController from "./controllers/productDeleteController.js"
import listController from "./controllers/product/ecommerce/listController.js"
import { productUpload } from "./assets/multer-config.js"
import leedsListController from "./controllers/leeds/leedsListController.js"

// Inicialização do express
const app = express()
// Port a ser usada pela aplicação
const port = 8001

// Confiuguração de recursos do servidor.
// Itens que auxiliam no crontrole e interpretação dos dados
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))
app.use("/assets", express.static("assets/uploads"))

// Rotas publicas para o ecommerce
app.get("/store/products", listController)

// Rotas ADM
app.get("/", userListController)
app.get("/products", productListController)
app.get("/product/:id", productDetailsController)
app.put("/product/:id", productUpdateController)
app.post("/products", productUpload.single("image"), productCreateController)
app.delete("/product/:id", productDeleteController)

app.get('/leeds', leedsListController)

// Execução do servidor

app.listen(port, () => {
    initDatabase()
    // Esse console é exibido apenas no terminal
    console.log("Meu servidor está funcionando")
})