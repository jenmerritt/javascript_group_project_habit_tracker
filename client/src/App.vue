<template lang="html">

  <div id="app">
    <div id="header">
      <div id="score">
        <h1>Score:</h1>
        <h1>{{this.pointsTotal}}</h1>
      </div>
      <div id="right-column">
        <h1>Nav (and app name)</h1>
        <h1>User Info</h1>
      </div>
    </div>
    <div id="main-wrapper">
      <habits-list />
      <habit-form />
      <habit-update-form />
    </div>
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
      pointsTotal: 0
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
  #app {
    font-family: 'Play', sans-serif;
    background-color: #1f60a6;
    color: #FFF;
  }

  #header {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 200px;
    vertical-align: middle;
    background-color: #003063;
  }

  #score {
    width: 30%;
    border: 8px solid #33CCFF;
    padding: 25px;
  }

  #score h1 {
    text-align: center;
    font-size: 80px;
    color: #33CCFF;
    margin: 10px;
  }

  #right-column {
    padding: 20px;
  }

</style>
