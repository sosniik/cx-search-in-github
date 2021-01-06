const dotenv = require('dotenv')
const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports.dbConnect = function() {
    dotenv.config()
    
    const { DATABASE_HOST: host, DATABASE_PORT, DATABASE_USER: user, DATABASE_PASS: password, DATABASE_NAME: database } = process.env
    
    const sequelize = new Sequelize('postgres://'+user+':'+password+'@'+host+':5432/searchGithub');
   sequelize
        .authenticate()
        .then(function(err) {
            console.log('Connection has been established successfully.');
          })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
    
        module.exports.seqCon = sequelize
}
