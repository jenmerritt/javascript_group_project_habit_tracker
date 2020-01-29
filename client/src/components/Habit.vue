<template lang="html">
  <li class="habit-item">
    <div class="habit-item-wrapper">
      <button id="delete-button" v-on:click="deleteHabit()">X</button>
      <div class="habit-name" v-on:click="editHabit">
        <h1>{{ habit.name }}</h1>
        <p>Repeat: {{ habit.period }}</p>
      </div>
      <div v-if="checkAllowedInPeriod()" class="habit-achieved-wrap">
        <h3 v-if="!habit.timeStamps.length == 0" class="habit-achieved">Last Achieved:</h3>
        <h2 class="habit-timestamp">{{latestTimestamp()}}</h2>
      </div>
      <div v-if="!checkAllowedInPeriod()" class="habit-points">
        <button v-on:click="updateTimeStamps" id="adjust-score-button">{{ habit.points }}</button>
      </div>
    </div>
  </li>
</template>

<script>
import { eventBus } from "@/main";
import HabitService from "../services/HabitService.js";
import moment from 'moment';


export default {
  name: 'habit',
  data(){
    return{
    }
  },
  props: ['habit'],
  methods:{
    moment() {
      return moment();
    },
    checkAllowedInPeriod() {
      const today = new Date(this.moment())

      if (this.habit.period === 'Daily') {
        const daysAchieved = this.habit.timeStamps
        .filter(day => new Date(day).getDate() === today.getDate())
        return daysAchieved.length
      }
      else if (this.habit.period === 'Monthly') {
        const daysAchieved = this.habit.timeStamps
        .filter(day => new Date(day).getMonth() === today.getMonth())
        return daysAchieved.length
      }
      else if (this.habit.period === 'Weekly') {
        const endOfWeekPeriod = new Date(this.moment().add(7, 'days').calendar());
        const daysAchieved = this.habit.timeStamps.filter(day => endOfWeekPeriod > today)
        return daysAchieved.length
      }
      else if (this.habit.period === 'Ad-hoc')
        return false
    },
    latestTimestamp() {
      const lastTimestamp = this.habit.timeStamps[this.habit.timeStamps.length-1]
      const prettyTimestamp = new Date(lastTimestamp).toDateString()
      return prettyTimestamp
    },
    updateTimeStamps(){
      this.habit.timeStamps.push(new Date(this.moment()))
      HabitService.putHabit(this.habit)
      .then( () => eventBus.$emit('habit-updated', this.habit._id))
      window.location.reload();
      window.scrollTo(0,0);
    },
    editHabit(){
      eventBus.$emit('habit-update-visible', true)
      eventBus.$emit('edit-habit', this.habit)
    },
    deleteHabit() {
      eventBus.$emit('delete-habit', this.habit._id)
      HabitService.destroyHabit(this.habit)
    }
  }
}
</script>

<style lang="css" scoped>

.habit-item {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 30px 0 0 0;
}

.habit-item-wrapper {
  display: flex;
  width: 100%;
  background-color: #F2F2F2;
}

.habit-name {
  width: 70%;
  padding: 30px;
}

.habit-name h1{
  font-size: 30px;
  text-align: left;
  color: #0a1831;
  margin: 0;
}

.habit-name p{
  font-size:20px;
  text-align: left;
  color: #000;
  margin-top: 15px;
}

.delete {
  color: black;
  font-size: 10px;
  max-height: 30px;
}

.delete{
  cursor: pointer;
}

.habit-name:hover{
  cursor:pointer;
}

.habit-points{
  padding: 30px;
  background-color: #8AC926;
}

.habit-achieved{
  color: goldenrod;
  text-align: center;
}

.habit-achieved-wrap{
    padding-right: 30px;
}

.habit-timestamp{
  color: goldenrod;
  text-align: center;
}

#adjust-score-button {
  background-color: #8AC926;
  padding:20px;
  width:150px;
  border: none;
  font-size: 30px;
  color: green;
}

#adjust-score-button:hover {
  background-color: #8AC926;
  padding:17px;
  width:150px;
  border: 3px solid green;
  font-size: 30px;
  color: green;
  cursor:pointer;
}

#delete-button{
  background-color: #702632;
  padding:8px;
  width:25px;
  border: none;
  font-size: 12px;
  color: #fff;
  height: 20%;
}

#delete-button:hover {
  background-color: #702632;
  padding:5px;
  width:25px;
  border: 3px solid #8B0000;
  font-size: 12px;
  color: #fff;
  cursor:pointer;
}

</style>
