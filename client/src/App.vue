<template lang="html">

  <div id="app">
    <h1>{{this.pointsTotal}}</h1>
    <habits-list />
    <habit-form />
  </div>

</template>

<script>
import HabitForm from "@/components/HabitForm";
import HabitsList from "@/components/HabitsList";
import { eventBus } from "@/main";

export default {
  name: 'app',
  data(){
    return{
      pointsTotal: 0
    }
  },
  components: {
    'habits-list': HabitsList,
    'habit-form': HabitForm
  },
  mounted() {
    eventBus.$on('habits', habits => {
      let total = 0;
      habits.forEach(habit => total += (habit.points * habit.timesAchieved))
      this.pointsTotal = total;
    })

    // get each habit points and times clicked. Multiply points by times clicked and add all habits together.
  }
}
</script>

<style lang="css" scoped>
</style>
