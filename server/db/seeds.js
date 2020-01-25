use habit_tracker;
db.dropDatabase();

db.habits.insertMany([
  {
    name: "Drink 3l Water",
    points: 20,
    timesAchieved: 0
  },
  {
    name: "Walk To Work",
    points: 25,
    timesAchieved: 0
  },
  {
    name: "Buy Takeaway For Dinner",
    points: -15,
    timesAchieved: 0
  }
]);
