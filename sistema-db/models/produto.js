const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idProduto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idProduto"
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "preco"
    },
    codbarra: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "codbarra"
    }
  };
  const options = {
    tableName: "produto",
    comment: "",
    indexes: []
  };
  const ProdutoModel = sequelize.define("produtoModel", attributes, options);
  return ProdutoModel;
};