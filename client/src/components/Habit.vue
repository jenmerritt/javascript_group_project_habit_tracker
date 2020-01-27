<template lang="html">
  <li class="habit-item">
    <div class="habit-item-wrapper">
      <div v-on:click="editHabit" class="habit-name">
        <h2>{{ habit.name }}</h2>
      </div>
      <div class="habit-points">
        <button v-on:click="updateTimesAchieved" id="adjust-score-button">Adjust Score Icon</button>
      </div>
    </div>
  </li>
</template>

<script>
import { eventBus } from "@/main";
import HabitService from "../services/HabitService.js";

export default {
  name: 'habit',
  props: ['habit'],
  methods:{
    updateTimesAchieved(){
      this.habit.timesAchieved += 1
      HabitService.putHabit(this.habit)
      .then( () => eventBus.$emit('habit-updated', this.habit));
      window.scrollTo(0,0);
      
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
  text-align: center;
  margin: 30px 0 0 0;
}

.habit-item-wrapper {
  display: flex;
  width: 100%;
  background-color: #E8E8E8;
}

.habit-name {
  width: 70%;
  padding: 30px;
}

.habit-name h2{
  font-size: 25px;
  text-align: left;
  color: #0a1831;
}

.habit-name:hover{
  cursor:pointer;
}

.habit-points{
  padding: 30px;
  background-color: #8AC926;
}

#adjust-score-button {
  background-color: #8AC926;
  padding:20px;
  width:150px;
  border: none;
  font-size: 20px;
  color: green;
}

#adjust-score-button:hover {
  background-color: #8AC926;
  padding:17px;
  width:150px;
  border: 3px solid green;
  font-size: 20px;
  color: green;
  cursor:pointer;
}

</style>
