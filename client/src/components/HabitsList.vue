<template lang="html">
  <div id="habits-wrapper">
    <ul id="habit-list">
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
  watch: {
    habits() {
      this.fetchHabits();
    }
  },
  mounted(){

    this.fetchHabits();

    eventBus.$on('habit-updated', id => {
      this.fetchHabits();
    })

    eventBus.$on('habit-added', habit => {
      this.habits.push(habit)
    })

    eventBus.$on('delete-habit', id => {
      const index = this.habits.findIndex(habit => habit._id === id);
      this.habits.splice(index, 1)
    })
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

#habit-list {
  margin: 0 auto;
  max-width: 700px;
  list-style-type: none;
}

</style>
