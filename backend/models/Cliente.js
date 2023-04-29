import Sequelize from 'sequelize';
import db from '../config/db.js';

const Cliente = db.define('cliente', {
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre:{
      type:Sequelize.STRING(50),
      allowNull:false
    },
    cuil:{
      type:Sequelize.STRING(11)
    },
    email:{
      type:Sequelize.STRING(50)
    },
    telefono:{
      type:Sequelize.STRING(50)
    },
    condicion:{
      type:Sequelize.STRING(50),
      defaultValue: 'Consumidor Final'
    },
    estado: {
      type:Sequelize.BOOLEAN,
      defaultValue: 1
    }
});

export default Cliente;