<template lang="html">
  <li class="habit-item">
    <p>{{ habit.name }}</p>
    <button v-on:click="updateTimesAchieved">Adjust Score</button>
    <button v-on:click="editHabit">Click to edit</button>
  </li>
</template>

<script>
import { eventBus } from "@/main";
import HabitService from "../services/HabitService.js";

export default {
  name: 'habit',
  props: ['habit'],
  methods:{
    updateTimesAchieved(){
      this.habit.timesAchieved += 1
      HabitService.putHabit(this.habit)
      .then( () => eventBus.$emit('habit-updated', this.habit));
    },
    editHabit(){
      eventBus.$emit('edit-habit', this.habit)
    }
  }
}
</script>

<style lang="css" scoped>
.habit-item {
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
