<template lang="html">

  <div id="app">
    <div id="header">
      <div id="header-left">
        <div id="score">
          <h1>{{this.score}}</h1>
          <p>POINTS</p>
        </div>
        <div id="level">
          <h1>LEVEL: {{this.levelTotal}}</h1>
        </div>
      </div>
      <div id="header-right">
        <h1>Nav (and app name)</h1>
        <h1>User Info</h1>
      </div>
    </div>
    <div id="heading-block">
      <div id="heading-block-left">
        <h1>YOUR HABITS</h1>
      </div>
      <div id="heading-block-right">
        <button id="add-new-button">ADD NEW</button>
      </div>
    </div>
    <div id="main-wrapper">
      <habits-list />
      <habit-form />
      <habit-update-form />
    </div>
    <div id="rewards-wrapper">
      <rewards-list />
      <reward-form/>
    </div>
  </div>

</template>

<script>
import HabitForm from "@/components/HabitForm";
import HabitsList from "@/components/HabitsList";
import RewardsList from "@/components/RewardsList";
import RewardForm from '@/components/RewardForm';
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
    'habit-update-form': HabitUpdateForm,
    'rewards-list': RewardsList,
    'reward-form': RewardForm
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

<style lang="css">

body{
  margin: 0;
  padding: 0;
  background-color: #0a1832;
}

#app {
  font-family: 'Play', sans-serif;
  background-color: #0a1832;
  color: #FFF;
  margin: 0 auto;
}

#header {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  background-color: #003063;
}

#header-left {
  width: 30%;
  padding: 25px;
  display:flex;
  flex-direction: column;
  background-color: #08bdc6;
}

#score{
  text-align: center;
}

#score h1 {
  font-size: 6vw;
  color: #ffffff;
  margin: 0px;
}

#score p{
  margin: 0;
}

#level{
  text-align:center;
}

#header-right {
  width: 70%;
  padding: 20px;
  text-align: right;
}

#heading-block{
  height:120px;
  width: 100%;
  text-align: center;
  background-color: #123e7b;
  display:flex;
  flex-direction: row;
}

#heading-block-left{
  width: 50%;
  text-align: center;
  padding: 25px;
}

#heading-block-left h1{
  font-size: 40px;
  margin: 0;
}

#heading-block-right{
  width: 50%;
  text-align: center;
  padding: 25px;
}

#add-new-button{
  background-color: #8AC926;
  padding:20px;
  width:150px;
  border: none;
  font-size: 20px;
  color: green;
}

#add-new-button:hover{
  background-color: #8AC926;
  padding:17px;
  width:150px;
  border: none;
  font-size: 20px;
  color: green;
  cursor: pointer;
  border: 3px solid green;
}

</style>
