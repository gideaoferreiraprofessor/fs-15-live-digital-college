import sequelize from "./connection.js";

async function initDatabase() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log("Conexão com banco de dados realizada com sucesso")
    } catch (error) {
        console.log("Tivemos um erro ao tentar se conectar ao banco de dados", error)
    }
}

export default initDatabase