const {MongoClient} = require('mongodb');
// or
// const MongoClient = require('mongodb').MongoClient
//set mongodb url / path
// const url = 'mongodb://localhost:27017'
const url = 'mongodb://localhost:27017/';
//store database in a variabe
const database = 'mydb';
// fetch
const client = new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    //connect with database
    // result.db('mydb')
    let db = result.db(database);
    //connect with collection / table
    let collection = db.collection('products');
    // console.log(collection.find({}).toArray());
    //or
    let response = await collection.find({}).toArray();
    console.log(response)
}
//calling
getData.listen('5000');
// app.listen('5000')

