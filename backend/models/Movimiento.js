import Sequelize from 'sequelize';
import db from '../config/db.js';
import Cliente from './Cliente.js';

const Movimiento = db.define('movimiento', {
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
      type:Sequelize.DATEONLY,
      allowNull:false
    },
    clienteId:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    detalle:{
      type:Sequelize.STRING(150),
      allowNull:false
    },
    importe:{
      type:Sequelize.DECIMAL(14,2),
      allowNull:false
    },
    estado: {
      type:Sequelize.BOOLEAN,
      defaultValue: 1
    }
});

Cliente.hasMany(Movimiento);
Movimiento.belongsTo(Cliente);

export default Movimiento;