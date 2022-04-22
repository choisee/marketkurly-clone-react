const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8", // 한글 저장
        collate: "utf8_general_ci", // 한글 저장
        sequelize,
      }
    );
  }

  // todo cart
  // static associate(db) {
  //     db.User.hasMany(db.Product);
  // }
};
