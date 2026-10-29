import { Sequelize } from "sequelize";

const sequelize = new Sequelize('store_shop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize