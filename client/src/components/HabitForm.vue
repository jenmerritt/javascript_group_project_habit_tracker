<template lang="html">
  <div id="habit-form-wrapper">
    <form class="habit-form" v-on:submit="addHabit">
      <h1>Add Habit</h1>
      <div class="form-item-wrapper">
        <input type="text" v-model="name" id="name" placeholder="Enter Habit Name...."/>
      </div>
      <div class="form-item-wrapper">
        <label for="type">Is Your Habit:</label>
        <br/>
        <input type="radio" name="type" value="positive" v-model="type"/><span class="radio-title">Positive</span>
        <input type="radio" name="type" value="negative" v-model="type"/><span class="radio-title">Negative</span>
      </div>
      <div class="form-item-wrapper">
        <label for="type">Set Time Period:</label>
        <br/>
        <input type="radio" name="period" value="Daily" v-model="period" required/><span class="radio-title">Daily</span>
        <input type="radio" name="period" value="Weekly" v-model="period" required/><span class="radio-title">Weekly</span>
        <input type="radio" name="period" value="Monthly" v-model="period" required/><span class="radio-title">Monthly</span>
        <input type="radio" name="period" value="Ad-hoc" v-model="period" required/><span class="radio-title">Ad-hoc</span>
      </div>
      <div class="form-item-wrapper">
        <label for="points">Assign Points:</label>
        <br/>
        <input type="number" name="points" v-model="points"/>
      </div>
      <input type="submit" value="Save">
      <button v-on:click="closeAddHabitForm" id="cancel-button">Cancel</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import HabitService from "../services/HabitService";

export default {
  name: 'habit-form',
  data() {
    return {
      name: null,
      type: null,
      points: null,
      timeStamps: [],
      period: null
    }
  },
  methods: {
    addHabit(e) {
      e.preventDefault();

      if (this.type == 'negative') {
        this.points = -this.points
      }

      const payload = {
        name: this.name,
        points: this.points,
        timeStamps: [],
        period: this.period
      }

      HabitService.postHabit(payload)
      .then(habit => eventBus.$emit('habit-added', habit))

      this.name = null;
      this.type = null;
      this.points = null;
      this.period = null

      eventBus.$emit('habit-form-visibility-update', false)

    },

    closeAddHabitForm(){
      eventBus.$emit('habit-form-visibility-update', false)
    }

  }

}
</script>

<style lang="css" scoped>

#habit-form-wrapper{
  margin-bottom:50px;
}

.form-item-wrapper {
  margin-bottom: 10px;
}

.habit-form {
  width: 65%;
  margin: 0 auto;
  margin-top:20px;
  background-color: #113e7a;
  padding: 20px 20px 40px 20px;
  text-align: center;
}

label {
  min-width: 100px;
  display: inline-block;
  font-size: 22px;
  padding: 15px 0 15px 0;
}

input[type=text]{
  font-family:inherit;
  height: 30px;
  width: 70%;
  font-size: 22px;
}

input[type=number]{
  font-family:inherit;
  height: 30px;
  width: 80px;
  font-size: 22px;
}

input[type=submit]{
  background-color: #8AC926;
  padding:10px;
  width:150px;
  border: none;
  font-size: 20px;
  color: green;
  margin-top: 25px;
  margin-right: 20px;
}

input[type=submit]:hover{
  background-color: #8AC926;
  padding:7px;
  width:150px;
  border: none;
  font-size: 20px;
  color: green;
  cursor: pointer;
  border: 3px solid green;
  margin-top: 25px;
  margin-right: 20px;
}

.radio-title{
  font-size: 22px;
  padding: 0 15px 0 15px;
}

#cancel-button{
  background-color: #702632;
  padding:10px;
  width:150px;
  border: none;
  font-size: 20px;
  color: #000;
  margin-top: 25px;
  margin-left: 20px;
}

#cancel-button:hover{
  background-color: #702632;
  padding:7px;
  width:150px;
  border: none;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  border: 3px solid #8B0000;
  margin-top: 25px;
  margin-left: 20px;
}

</style>
