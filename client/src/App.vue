<template lang="html">

  <div id="app">
    <h1>{{this.score}}</h1>
    <h1>{{this.levelTotal}}</h1>
    <habits-list />
    <habit-form />
    <habit-update-form />
  </div>

</template>

<script>
import HabitForm from "@/components/HabitForm";
import HabitsList from "@/components/HabitsList";
import HabitUpdateForm from "@/components/HabitUpdateForm";
import { eventBus } from "@/main";

export default {
  name: 'app',
  data(){
    return{
      pointsTotal: 0,
      levelTotal: 0
    }

  },
watch: {
  pointsTotal: function() {
    this.levelTotal = Math.floor(this.pointsTotal / 100)
  }
},


  computed:{
    score(){
      return this.pointsTotal
    }
  },
  components: {
    'habits-list': HabitsList,
    'habit-form': HabitForm,
    'habit-update-form': HabitUpdateForm
  },
  mounted() {
    eventBus.$on('habits', habits => {
      let total = 0;
      habits.forEach(habit => total += (habit.points * habit.timesAchieved))
      this.pointsTotal = total;
    })


  }
}
</script>

<style lang="css" scoped>
</style>
