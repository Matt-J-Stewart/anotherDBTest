const { response } = require("express");
const chalk = require('chalk');


var obj1 = undefined;
const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = 'mongodb+srv://matthewjstewart:Sn3akySnak3@quizcluster.5oc2z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DATABASE_NAME = 'Quiz-Capstone'
const dbName = "mattDB"
const connectURL = "mongodb+srv://matthewjstewart:Sn3akySnak3@mattdb.jyd3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

function getData(testP, callback) {
    MongoClient.connect(connectURL, async function(error,client) {
        var database = client.db(DATABASE_NAME);
        var collection = database.collection("Quiz");
        var cursor = collection.find({quizName: testP}).limit(1);
        var allVals = await cursor.toArray();
        var testVar = allVals[0];
        client.close();
        console.log(chalk.red(testP))
        callback(testVar);
    });
};

   
  

module.exports = {
    getData: getData
};

