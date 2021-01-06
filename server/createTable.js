const dotenv = require('dotenv')
const { Sequelize, Model, DataTypes } = require('sequelize');

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
    
const tableName = 'users'

let User = sequelize.define(tableName, {
    login: {
        type: Sequelize.STRING,
        allowNull:true
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:true
    },
    node_id: {
        type: Sequelize.STRING,
        allowNull:true
    },
    avatar_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    gravatar_id: {
        type: Sequelize.STRING,
        allowNull:true
    },
    url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    html_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    followers_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    following_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    gists_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    starred_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    subscriptions_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    organizations_url: {
        type: Sequelize.STRING
    },
    repos_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    events_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    received_events_url: {
        type: Sequelize.STRING,
        allowNull:true
    },
    type: {
        type: Sequelize.STRING,
        allowNull:true
    },
    site_admin: {
        type: Sequelize.STRING,
        allowNull:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull:true
    },
    company: {
        type: Sequelize.STRING,
        allowNull:true
    },
    blog: {
        type: Sequelize.STRING,
        allowNull:true
    },
    location: {
        type: Sequelize.STRING,
        allowNull:true
    },
    email: {
        type: Sequelize.STRING,
        allowNull:true
    },
    hireable: {
        type: Sequelize.STRING,
        allowNull:true
    },
    bio: {
        type: Sequelize.STRING,
        allowNull:true
    },
    twitter_username: {
        type: Sequelize.STRING,
        allowNull:true
    },
    public_repos: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    public_gists: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    followers: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    following: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    created_at: {
        type: Sequelize.STRING,
        allowNull:true
    },
    updated_at: {
        type: Sequelize.STRING,
        allowNull:true
    }
})
User.sync({force:true})
.then(function (result) {
    console.log('La table',tableName,'a été créée')
    return 
})
