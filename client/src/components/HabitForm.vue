<template lang="html">
  <form class="habit-form" v-on:submit="addHabit">
    <h2>Add Habit</h2>
    <label for="name">Habit Name: </label>
    <input type="text" v-model="name" id="name"/>

    <label for="type">Habit Type</label>
    <input type="radio" name="type" value="positive" v-model="type"/>Positive
    <br>
    <input type="radio" name="type" value="negative" v-model="type"/>Negative
    <br>

    <label for="points">Assigned Points</label>
    <input type="number" name="points" v-model="points"/>


    <input type="submit" value="Add Habit!">
  </form>

</template>

<script>
import { eventBus } from "@/main";
import HabitService from "../services/HabitService";

export default {
  name: 'habit-form',
  data() {
    return {
      name: null,
      type: null,
      points: null,
      timesAchieved: 0
    }
  },
  methods: {
    addHabit(e) {
      e.preventDefault();

      if (this.type == 'negative') {
        this.points = -this.points
      }

      const payload = {
        name: this.name,
        points: this.points,
        timesAchieved: this.timesAchieved
      }

      HabitService.postHabit(payload)
      .then(habit => eventBus.$emit('habit-added', habit))

    }

  }

}

  </script>

  <style lang="css" scoped>
  </style>
