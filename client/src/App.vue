<template lang="html">

  <div id="app">
      <div id="header">
          <div id="header-left">
            <div id="score">
              <h1>{{this.score}}</h1>
              <p>POINTS</p>
            </div>
            <div id="level">
              <h1>LEVEL: {{this.level}}</h1>
            </div>
          </div>
          <div id="header-center-wrapper">
            <div id="header-center">
                <div class="user-pic">
                  <img id="user-img" src="../public/Jude.png" alt="">
                </div>
                <div class="user-profile">
                  <h2>Jude Law</h2>
                  <h2>Current Level: {{this.level}}</h2>
                  <h2>Goal: Stop Smoking</h2>
                </div>
            </div>
            <div id="next-reward">
              <p>your next reward</p>
            </div>
        </div>
        <div id="header-right">
          <h1><a href="">YOU V2.0</a></h1>
          <h2><a href="#rewards-wrapper">Rewards</a></h2>
          <h2>Progress</h2>
        </div>
      </div>
    <div id="heading-block">
      <div id="heading-block-left">
        <h1>YOUR HABITS</h1>
      </div>
      <div id="heading-block-right">
        <button id="add-new-button" v-on:click="habitAddVisible = !habitAddVisible">ADD NEW</button>
      </div>
    </div>
    <scatter-graph />
    <div id="main-wrapper">
      <habit-form  v-if="habitAddVisible" />
      <habit-update-form v-if="habitUpdateVisible"  />
      <habits-list />
    </div>
    <div id="rewards-header">
      <div id="new-reward">
        <h1>YOUR REWARDS</h1>
        <button id="new-reward-button" v-on:click="rewardAddVisible = !rewardAddVisible">ADD NEW</button>
      </div>
      <reward-form v-if="rewardAddVisible" />
      <reward-update-form v-if="rewardUpdateVisible"  />
      <a name="rewards"><rewards-list :level = "level"/></a>
    </div>
    </div>

</template>

<script>
import HabitForm from "@/components/HabitForm";
import HabitsList from "@/components/HabitsList";
import RewardsList from "@/components/RewardsList";
import RewardForm from '@/components/RewardForm';
import RewardUpdateForm from '@/components/RewardUpdateForm'
import HabitUpdateForm from "@/components/HabitUpdateForm";
import ScatterGraph from "@/components/ScatterGraph";
import { eventBus } from "@/main";

export default {
  name: 'app',
  data(){
    return{
      pointsTotal: 0,
      level: 0,
      habitUpdateVisible: false,
      habitAddVisible: false,
      rewardAddVisible: false,
      rewardUpdateVisible: false
    }

  },
  watch: {
    pointsTotal: function() {
      const newCalculatedLevel = Math.floor(this.pointsTotal / 100)
      if (newCalculatedLevel < this.level) {
        return this.level
      }
      return this.level = newCalculatedLevel
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
    'reward-form': RewardForm,
    'reward-update-form': RewardUpdateForm,
    'scatter-graph': ScatterGraph
  },
  mounted() {
    eventBus.$on('habits', habits => {
      let total = 0;
      habits.forEach(habit => total += (habit.points * habit.timeStamps.length))
      this.pointsTotal = total;
    })

    eventBus.$on('habit-update-visible', update => {
      this.habitUpdateVisible = true
    })

    eventBus.$on('habit-update-not-visible', update => {
      this.habitUpdateVisible = false
    })

    eventBus.$on('reward-update-visible', update => {
      this.rewardUpdateVisible = true
    })

    eventBus.$on('reward-update-not-visible', update => {
      this.rewardUpdateVisible = false
    })

    eventBus.$on('habit-form-visibility-update', update => {
      this.habitAddVisible = false
    })

    eventBus.$on('reward-form-visibility-update', update => {
      this.rewardAddVisible = false
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
  margin-bottom: 50px;

}

#header-right a{
  text-decoration: none;
  color: #ffffff;
  margin-right:30px;
}

#header-right a:hover{
  text-decoration: underline;
  color: #ffffff;
  margin-right:30px;
}

#progress-nav{
  text-decoration: none;
  color: #ffffff;
  margin-right:30px;
}

#progress-nav:hover{
  text-decoration: underline;
  color: #ffffff;
  margin-right:30px;
}


#header-right h1 a:hover{
  text-decoration: none;
  color: #ffffff;
  margin-right:30px;
}

#header-right h1{
  font-size:50px;
  font-family: 'Bowlby One SC', cursive;
  margin: 0;
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

#header-center-wrapper{
  display:flex;
  flex-direction: column;
  width: 40%;
}

#header-center {
  width: 100%;
  text-align: left;
  display:flex;
  flex-direction:row;
  margin-top:30px;
  margin-left: 50px;
}

#header-right {
  width: 30%;
  padding: 20px;
  text-align: right;
}

#user-img{
  padding:10px 10px 0 0;
  height: 150px;
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

#user-details {
  display:flex;
  flex-direction: row;
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

#rewards-header {
  width: 70%;
  margin: 0 auto;
  background-color: #113e7a;
  padding: 20px 20px 20px 20px;
  margin-top: 50px;
}

#new-reward {
  padding: 0 20px 0 20px;
  text-align: center;
}

#new-reward h1{
  text-align: center;
  font-size:40px;
}

#new-reward-button{
  background-color: #8AC926;
  padding:20px;
  width:150px;
  border: none;
  font-size: 20px;
  color: green;
}

#new-reward-button:hover{
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
