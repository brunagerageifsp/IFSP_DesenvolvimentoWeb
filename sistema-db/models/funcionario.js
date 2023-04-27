const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idFuncionario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idFuncionario"
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
    },
    telefone: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "telefone"
    },
    senha: {
      type: DataTypes.STRING(35),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "senha"
    }
  };
  const options = {
    tableName: "funcionario",
    comment: "",
    indexes: []
  };
  const FuncionarioModel = sequelize.define("funcionarioModel", attributes, options);
  return FuncionarioModel;
};