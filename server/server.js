const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('habit_tracker');
    const habitsCollection = db.collection('habits');
    const habitsRouter = createRouter(habitsCollection);
    app.use('/api/habits', habitsRouter);
    const rewardsCollection = db.collection('rewards');
    const rewardsRouter = createRouter(rewardsCollection);
    app.use('/api/rewards', rewardsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
