<template lang="html">
  <div>
    <ul>
      <habit v-for="habit in habits" :habit="habit"></habit>
    </ul>
  </div>
</template>

<script>
import Habit from "@/components/Habit";
import HabitService from "../services/HabitService.js";
import { eventBus } from "@/main";

export default {
  name: 'habits-list',
  components: {
    'habit': Habit
  },
  data(){
    return{
      habits: []
    }
  },
  mounted(){

    this.fetchHabits();

    eventBus.$on('habit-updated', (id) =>{
      this.fetchHabits();
    })
    
    eventBus.$on('habit-added', habit => this.habits.push(habit))


  },
  methods: {
    fetchHabits() {
      HabitService.getHabits()
      .then(habits => this.habits = habits)
      .then(() => eventBus.$emit('habits', this.habits))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
