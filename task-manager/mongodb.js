// CRUD (create, read, update and read)

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database', error);
    }

    // Accesing to DB (mdb will create automatically db)
    const db = client.db(databaseName);

    console.log('Connected!');

    db.collection('users').insertOne({
        name: 'Simone',
        age: 24
    })
})