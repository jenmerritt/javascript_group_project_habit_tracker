<template lang="html">
  <div>
    <p>{{ habit.name }}</p>
    <button v-on:click="updateTimesAchieved">Adjust Score</button>
  </div>
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
