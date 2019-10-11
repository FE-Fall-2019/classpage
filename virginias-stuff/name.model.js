module.exports = (db) => {
    let name = db.sequelize.define("name", {
        id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: db.Sequelize.STRING
        },
    })
    return name;
}