const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idGestor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idGestor"
    },
    login: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "login"
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "senha"
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    documento: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "documento"
    }
  };
  const options = {
    tableName: "gestor",
    comment: "",
    indexes: []
  };
  const GestorModel = sequelize.define("gestorModel", attributes, options);
  return GestorModel;
};