use habit_tracker;
db.dropDatabase();

db.habits.insertMany([
  {
    name: "Drink 3l Water",
    points: 20,
    timesAchieved: 0,
    timeStamps: []
  },
  {
    name: "Walk To Work",
    points: 25,
    timesAchieved: 2,
    timeStamps: []
  },
  {
    name: "Buy Takeaway For Dinner",
    points: -15,
    timesAchieved: 3,
    timeStamps: []
  }
]);

db.rewards.insertMany([
  {
    name: "Eat a Pizza"
  },
  {
    name: "Night Out"
  },
  {
    name: "Go On Holiday"
  }
]);
