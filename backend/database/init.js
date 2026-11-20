import { DataTypes } from "sequelize";
import sequelize from "./connection.js";
import Product from "../models/product.js";
import seedProductsIfNeeded from "./seedProducts.js";

async function ensureProductCategoryColumn() {
    const queryInterface = sequelize.getQueryInterface()
    const tableName = Product.getTableName()
    const columns = await queryInterface.describeTable(tableName)

    if (!columns.category) {
        await queryInterface.addColumn(tableName, "category", {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Moda"
        })
    }
}

async function initDatabase() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        await ensureProductCategoryColumn()
        await seedProductsIfNeeded()
        console.log("Conexão com banco de dados realizada com sucesso")
    } catch (error) {
        console.log("Tivemos um erro ao tentar se conectar ao banco de dados", error)
    }
}

export default initDatabase