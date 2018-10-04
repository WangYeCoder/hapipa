module.exports = (sequelize, DataTypes) => sequelize.define(
    'shop',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        thumb_url: DataTypes.STRING,
    },
    {
        tableName: 'shop',
    },
);