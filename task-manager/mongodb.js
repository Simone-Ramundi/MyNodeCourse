const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'local';


MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    console.log('Now here!')
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Simone',
        age: '24'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })
})
console.log('qui!')
