<template lang="html">
  <div>
    <ul>
      <li v-for="habit in habits">{{habit.name}}</li>
    </ul>
  </div>

</template>

<script>
import Habit from "@/components/Habit";
import HabitService from "../services/HabitService.js";

export default {
  name: 'habits-list',
  data(){
    return{
      habits: []
    }
  },
  mounted(){

    this.fetchHabits();

  },
  methods: {
    fetchHabits() {
      HabitService.getHabits()
      .then(habits => this.habits = habits)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
