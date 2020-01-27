<template lang="html">
  <li class="habit-item">
    <div class="habit-item-wrapper">
      <div class="habit-name">
        <p>{{ habit.name }}</p>
        <p>Achieved: {{habit.timeStamp}}</p>
        <button v-on:click="editHabit">Click to edit</button>
      </div>
      <div class="habit-points">
        <button v-if="!habit.timeStamp" v-on:click="updateTimesAchieved">Adjust Score</button>
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
  props: ['habit'],
  methods:{
    moment() {
      return moment();
    },
    updateTimesAchieved(){
      this.habit.timesAchieved += 1
      this.habit.timeStamp = this.moment().format('MMMM Do YYYY, h:mm:ss a')
      HabitService.putHabit(this.habit)
      .then( () => eventBus.$emit('habit-updated', this.habit))
    },
    editHabit(){
      eventBus.$emit('edit-habit', this.habit)
    }
  }
}
</script>

<style lang="css" scoped>
.habit-item {
  display: inline-block;
  width: 100%;
  /* max-width: 300px; */
  text-align: center;
  margin: 30px 0 0 0;
}

.habit-item-wrapper {
  display: flex;
  width: 100%;
  padding: 30px;
  background-color: #F5F5F5
}

.habit-name {
  width: 70%;
}

</style>
