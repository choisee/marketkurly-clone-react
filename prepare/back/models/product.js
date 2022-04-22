const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다
        no: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        shortDescription: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        listImageUrl: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        originalPrice: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        discountedPrice: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        discountRate: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        // isBuyNow: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: true,
        // },
        // isPurchaseStatus: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: true,
        // },
        // isGiftable: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: true,
        // },
        // isSoldOut: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: true,
        // },
        // soldOutTitle: {
        //   type: DataTypes.STRING(300),
        //   allowNull: true,
        // },
        // soldOutText: {
        //   type: DataTypes.TEXT,
        //   allowNull: true,
        // },
        // canRestockNotify: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: true,
        // },
        // tags: {
        //   type: DataTypes.JSON,
        //   allowNull: true,
        // },
        // sticker: {
        //   type: DataTypes.JSON,
        //   allowNull: true,
        // },
        // meta: {
        //   type: DataTypes.JSON,
        //   allowNull: true,
        // },
      },
      {
        modelName: "Product",
        tableName: "products",
        charset: "utf8mb4", // 이모티콘 저장
        collate: "utf8mb4_general_ci", // 이모티콘 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Product.belongsTo(db.Section);
    // db.Product.belongsToMany(db.Section, {through: 'section',as: 'sections'}); // todo
  }
};
