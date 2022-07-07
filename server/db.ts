import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './vm.db',
  logging: console.log,  
});

export default sequelize;