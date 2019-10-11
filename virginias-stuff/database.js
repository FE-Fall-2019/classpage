const Sequelize = require("sequelize"); 
const sequelize = new Sequelize("frontend-classpage", "root", "",
    {   
        dialect:"mariadb",
        host:"localhost",
        pool: {
            max:5,
            min:0,
            aquire:30000,
            idle:10000,  
        },
    },
);

sequelize.authenticate().then( 
    () => {console.log("succesfully connected")},
    () => {console.log("failed to connect")}
)

let db = {}; 

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync();

db.Student = require("../models/name.model")(db);

// sequelize.sync({ force:true })

module.exports = db;
