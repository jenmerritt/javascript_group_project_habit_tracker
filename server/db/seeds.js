use habit_tracker;
db.dropDatabase();

db.habits.insertMany([
  {
    name: "Drink 3l Water",
    points: 20,
    timesAchieved: 0,
    timeStamps: [],
    period: "Daily"
  },
  {
    name: "Walk To Work",
    points: 25,
    timesAchieved: 2,
    timeStamps: [],
    period: "Daily"
  },
  {
    name: "Buy Takeaway For Dinner",
    points: -15,
    timesAchieved: 3,
    timeStamps: [],
    period: "Daily"
  },
  {
    name: "Play Football",
    points: 30,
    timesAchieved: 0,
    timeStamps: [],
    period: "Weekly"
  },
  {
    name: "Climb a Mountain",
    points: 50,
    timesAchieved: 0,
    timeStamps: [],
    period: "Monthly"
  }
]);
