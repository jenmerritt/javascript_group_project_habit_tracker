<template lang="html">
  <form class="habit-form" v-on:submit="updateHabit">
    <h2>Update Habit</h2>
    <label for="name">Habit Name: </label>
    <input type="text" v-model="name" id="name"/>

    <label for="type">Habit Type</label>
    <input type="radio" name="type" value="positive" v-model="type"/>Positive
    <br>
    <input type="radio" name="type" value="negative" v-model="type"/>Negative
    <br>

    <label for="points">Assigned Points</label>
    <input type="number" name="points" v-model="points"/>


    <input type="submit" value="Update Habit!">
  </form>

</template>

<script>
import { eventBus } from '../main';
import HabitService from '../services/HabitService';

export default {
  name:'habit-update-form',
  data() {
    return {
      _id: null,
      name: null,
      type: 'positive',
      points: null,
      timesAchieved: 0,
    }
  },
  methods: {
    updateHabit(e) {
      e.preventDefault();

      if (this.type == 'negative') {
        this.points = -this.points
      }

      const payload = {
        _id: this._id,
        name: this.name,
        points: this.points,
        timesAchieved: this.timesAchieved
      }

      HabitService.putHabit(payload)
      .then(habit => eventBus.$emit('habit-updated', habit));
    }
  },
  mounted() {
    eventBus.$on('edit-habit', habit => {
      this._id = habit._id;
      this.name = habit.name;
      this.points = habit.points;
      this.timesAchieved = habit.timesAchieved;

      if (habit.points <0) {
        this.type = 'negative'
        this.points = 0-this.points
      }

    })
  }
}
</script>

<style lang="css" scoped>
</style>
