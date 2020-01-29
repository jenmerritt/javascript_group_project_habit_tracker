use habit_tracker;
db.dropDatabase();

db.habits.insertMany([
  {
    name: "Walk To Work",
    points: 15,
    timeStamps: ["2020-01-13", "2020-01-14", "2020-01-15", "2020-01-16", "2020-01-20", "2020-01-22", "2020-01-23", "2020-01-24", "2020-01-27", "2020-01-28"],
    period: "Daily"
  },
  {
    name: "Drink 3l Water",
    points: 10,
    timeStamps: ["2020-01-13", "2020-01-14", "2020-01-15", "2020-01-16", "2020-01-17", "2020-01-20", "2020-01-22", "2020-01-25", "2020-01-26", "2020-01-27"],
    period: "Daily"
  },
  {
    name: "Buy Takeaway For Dinner",
    points: -15,
    timeStamps: [],
    period: "Daily"
  },
  {
      name: "Take dog for extra walk",
      points: 10,
      timeStamps: ["2020-01-13", "2020-01-17", "2020-01-20", "2020-01-26"],
      period: "Ad-hoc"
    },
  {
    name: "Play Football",
    points: 25,
    timeStamps: ["2020-01-15", "2020-01-25"],
    period: "Weekly"
  },
  {
    name: "Climb a Mountain",
    points: 50,
    timeStamps: ["2020-01-12"],
    period: "Monthly"
  }
]);

db.rewards.insertMany([
  {
    name: "Buy new Videogame",
    targetLevel: 1
  },
  {
    name: "Night Out",
    targetLevel: 2
  },
  {
    name: "Buy new footy boots",
    targetLevel: 3
  },
  {
    name: "Go out for dinner",
    targetLevel: 4
  }
]);
