import { readFile } from "node:fs/promises"
import { Op } from "sequelize"
import Product from "../models/product.js"

const productsData = await readFile(new URL("./catalogProducts.json", import.meta.url), "utf8")
const seedProducts = JSON.parse(productsData.replace(/^\uFEFF/, ""))

async function seedProductsIfNeeded() {
    const names = seedProducts.map(({ name }) => name)
    const existingProducts = await Product.findAll({
        attributes: ["name"],
        where: { name: { [Op.in]: names } }
    })
    const existingNames = new Set(existingProducts.map(({ name }) => name))
    const missingProducts = seedProducts.filter(({ name }) => !existingNames.has(name))

    if (missingProducts.length > 0) {
        await Product.bulkCreate(missingProducts)
    }

    console.log(`${missingProducts.length} produtos de catálogo adicionados`)
}

export default seedProductsIfNeeded
