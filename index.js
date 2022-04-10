const getData = require('./dbSearch.js')


var url = require('url');
const express = require('express'); //import express
app = express(); //create initial app

const port = process.env.PORT || 3000; //Use a port the environment provides or default to port 3000

//Express will look in the static folder for pages to run in the browser
app.use(express.static(__dirname + '/static'));




//Any function that begins with 'app.get' are processed by Node.js on the server

app.get('/history', async (request, response) => {
   
   getData.getData("HST01", function(obj1) {
    
    response.send(obj1);
   });
})
//comment
app.get('/CompSci', async (request, response) => {
   
  getData.getData("CIS01", function(obj1) {
   
   response.send(obj1);
  });
})







app.use((request, response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - Not Found')
  })
  
  // Custom 500 page.
  app.use((err, request, response, next) => {
    console.error(err.message)
    response.type('text/plain')
    response.status(500)
    response.send('500 - Server Error')
  })


app.listen(port, () => {
    console.log(`express started at \"http://localhost:${port}\"\n` + `press Ctrl-C to terminate`);
})


//var obj1 = undefined;
// const client = new MongoClient(CONNECTION_URL);
// client.connect(async (err) => {
//   const collection = client.db("Quiz-Capstone").collection("Quiz");
//   const cursor = collection.find({});
//   const allVals = await cursor.toArray();
//   var obj1 = {
//     quizName: allVals[0].quizName
//   }
//   response.send(obj1.quizName);
// });
// console.log(obj1);
// response.send(obj1);