<template lang="html">
  <div id="reward-form-wrapper">
    <form class="reward-form" v-on:submit="addReward">
      <h1>Add Reward</h1>
      <div class="form-item-wrapper">
        <input type="text" v-model="name" id="name" placeholder="Enter Reward Name...."/>
      </div>
      <div class="form-item-wrapper">
        <label for="targetLevel">Enter Target Level:</label>
        <br/>
        <input type="number" v-model="targetLevel" id="target-level" />
      </div>
      <input type="submit" value="Save">
      <button v-on:click="closeAddRewardForm" id="cancel-button">Cancel</button>
    </form>
  </div>
</template>

<script>

import RewardService from "@/services/RewardService.js"
import { eventBus } from "@/main";


export default {
  name: 'reward-form',
  data() {
    return {
      name: "",
      targetLevel: null
    }
  },
  methods: {
    addReward(e) {
      e.preventDefault();

      const payload = {
        name: this.name,
        targetLevel: Number(this.targetLevel)
      }

      RewardService.postReward(payload)
      .then(reward => eventBus.$emit('reward-added', reward))

      this.name = null;
      this.targetLevel = null;

      eventBus.$emit('reward-form-visibility-update', false)
    },

    closeAddRewardForm(){
      eventBus.$emit('reward-form-visibility-update', false)
    }
  }
}
</script>

<style lang="css" scoped>

.reward-form {
  width: 80%;
  margin: 0 auto;
  margin-top:50px;
  margin-bottom: 50px;
  background-color: #113e7a;
  padding: 20px 20px 40px 20px;
  text-align: center;
  border: 5px solid #0a1832;
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
