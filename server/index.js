const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const superagent = require('superagent')
const bodyParser = require('body-parser')

const app = express()
const CurrentDir = path.join(process.cwd(),'server/')
const PORT = process.argv[2] || 4242
const { Sequelize, Model, DataTypes } = require('sequelize');

dotenv.config()
const { DATABASE_HOST: host, DATABASE_PORT, DATABASE_USER: user, DATABASE_PASS: password, DATABASE_NAME: databaseName } = process.env
const sequelize = new Sequelize('postgres://'+user+':'+password+'@'+host+':'+DATABASE_PORT+'/'+databaseName);

let tableName = 'users'

function dbConnect() {
    
    sequelize
        .authenticate()
        .then(function(err) {
            console.log('Connection has been established successfully.');
          })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        })
    
}
dbConnect()

app.use(cors())

app.get('/',(req,res) => {
    console.log('Server is listening on localhost:'+PORT)
    res.send('Add the following command in the url : /users/your_username')
})

app.get('/users',(req,res) => {
    console.log('Server is listening on localhost:'+PORT)
    res.send('Add the following command in the url : /your_username')
})

let searchCondition 
app.get('/users/:username',(req,res) => {
    let url = 'https://api.github.com/users/'+req.params.username;
    
    sequelize
        .query("SELECT * FROM "+tableName+" WHERE login = '"+req.params.username+"'")
        .then(function(result){
            searchCondition = result[0][0]['login']
            if(req.params.username==searchCondition) {
                console.log(req.params.username+' trouvé dans la base de donnée')
                res.json(result[0][0])
            }
        })
        .catch(function (err) {
            superagent
                .get(url)
                .set('Cookie', 'hello')
                .set('user-agent', 'Chrome')
                .then(response => {
                    if(response.body.login == req.params.username) {
                        // res.send(response.body.login+' trouvé sur GitHub')
                        console.log(response.body.login+' trouvé sur GitHub')
                        let User = sequelize.define(tableName,{
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
                        User.create({
                            login : response.body.login,
                            id : response.body.id,
                            node_id : response.body.node_id,
                            avatar_url : response.body.avatar_url,
                            gravatar_id : response.body.gravatar_id,
                            url : response.body.url,
                            html_url : response.body.html_url,
                            followers_url : response.body.followers_url,
                            following_url : response.body.following_url,
                            gists_url : response.body.gists_url,
                            starred_url : response.body.starred_url,
                            subscriptions_url : response.body.subscriptions_url,
                            organizations_url : response.body.organizations_url,
                            repos_url : response.body.repos_url,
                            events_url : response.body.events_url,
                            received_events_url : response.body.received_events_url,
                            type : response.body.type,
                            site_admin : response.body.site_admin,
                            name : response.body.name,
                            company : response.body.company,
                            blog : response.body.blog,
                            location : response.body.location,
                            email : response.body.email,
                            hireable : response.body.hireable,
                            bio : response.body.bio,
                            twitter_username : response.body.twitter_username,
                            public_repos : response.body.public_repos,
                            public_gists : response.body.public_gists,
                            followers : response.body.followers,
                            following : response.body.following,
                            created_at : response.body.created_at,
                            updated_at : response.body.updated_at
                        })
                        .then(function () {
                            console.log(req.params.username+' a été inséré dans la base')
                            sequelize
                                .query("SELECT * FROM "+tableName+" WHERE login = '"+req.params.username+"'")
                                .then(function(result){
                                    res.json(result[0][0])
                                })
                            return 
                        })
                        .catch(function(err) {

                        })
                    }
                })
                .catch(function (err) {
                    res.send('Aucun utilisateur trouvé')
                    console.log('Aucun utilisateur trouvé')
                })
        })
})


app.post('/:username',(req,res) => {
    let url = 'https://api.github.com/users/'+req.params.username;
    
    superagent
        .get(url)
        .set('Cookie', 'hello')
        .set('user-agent', 'Chrome')
        .then(response => {
            // console.log(JSON.parse(response.text))
            res.send(response.body.login)
        
            
    })
    
})

app.listen(PORT, () => {
    console.log("Server is running on port "+PORT)
})
