import sequelize from "../database/connection.js";
import { DataTypes } from "sequelize";

const Leeds = sequelize.define('Leed', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING
  }
})

export default Leeds