<template lang="html">
  <div id="habit-form-wrapper">
    <form class="habit-form" v-on:submit="updateHabit">
      <h1>Update Habit</h1>
      <div class="form-item-wrapper">
        <input type="text" v-model="name" id="name"/>
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
        <input type="radio" name="period" value="Daily" v-model="period"/><span class="radio-title">Daily</span>
        <input type="radio" name="period" value="Weekly" v-model="period"/><span class="radio-title">Weekly</span>
        <input type="radio" name="period" value="Monthly" v-model="period"/><span class="radio-title">Monthly</span>
      </div>
      <br>
      <div class="form-item-wrapper">
        <label for="points">Assigned Points</label>
        <br/>
        <input type="number" name="points" v-model="points"/>
      </div>
      <input type="submit" value="Save">
    </form>
  </div>

</template>

<script>
import { eventBus } from '../main';
import HabitService from '../services/HabitService';

export default {
  name:'habit-update-form',
  data() {
    return {
      _id: null,
      name: null,
      type: 'positive',
      points: null,
      period: null
    }
  },
  methods: {
    updateHabit(e) {
      e.preventDefault();

      if (this.type == 'negative') {
        this.points = -this.points
      }

      const payload = {
        _id: this._id,
        name: this.name,
        points: this.points,
        period: this.period
      }

      HabitService.putHabit(payload)
      .then(habit => eventBus.$emit('habit-updated', habit))

      this._id = null;
      this.name = null;
      this.type = 'positive';
      this.points = null;
      this.period = null;
    }
  },
  mounted() {
    eventBus.$on('edit-habit', habit => {
      this._id = habit._id;
      this.name = habit.name;
      this.points = habit.points;
      this.period = habit.period;

      if (habit.points <0) {
        this.type = 'negative'
        this.points = 0-this.points
      }

    })
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
}

.radio-title{
  font-size: 22px;
  padding: 0 15px 0 15px;
}
</style>
