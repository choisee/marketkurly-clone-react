// todo
const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Section extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다
        title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: "Section",
        tableName: "sections",
        charset: "utf8", // 한글 저장
        collate: "utf8_general_ci", // 한글 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Section.hasMany(db.Product);
  }
};
