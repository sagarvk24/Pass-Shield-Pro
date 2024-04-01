const express = require('express')
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors')
dotenv.config();

// Connection URL
const url = 'mongodb://127.0.0.1:27017/?directConnection=true';
const client = new MongoClient(url);
// // Database Name
const dbName = 'passshield';
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

//get all the passwords
client.connect();
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// save a password
// app.post('/', async(req, res) => {
//     const password = req.body;
//     const db = client.db(dbName);
//     const collection = db.collection('passwords');
//     const findResult = await collection.insertOne(password);
//     res.send({success: true, result: findResult})
// })

app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');

    // Check if the password already exists
    const existingPassword = await collection.findOne({ id: password.id });

    if (existingPassword) {
        // If the password exists, update it
        const updateResult = await collection.updateOne({ id: password.id }, { $set: password });
        res.send({ success: true, result: updateResult });
    } else {
        // If the password doesn't exist, insert it
        const insertResult = await collection.insertOne(password);
        res.send({ success: true, result: insertResult });
    }
})



// deleting a password by id
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({ success: true, result: findResult })
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})