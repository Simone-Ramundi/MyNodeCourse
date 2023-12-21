// CRUD (create, read, update and read)

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database', error);
    }

    const db = client.db(databaseName);

    console.log('Connected!');

    // Uncomment the following lines to insert a document into the "users" collection
    db.collection('users').insertOne({
        name: 'Simone',
        age: 24
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user', error);
        } else {
            console.log('User inserted:', result);
        }
        client.close();
    });
})


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/task-manager";
// MongoClient.connect(url, function (err, db) {
//     console.log("ciao!");
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });
