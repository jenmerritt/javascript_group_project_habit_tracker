<template lang="html">
  <div id="reward-form-wrapper">
    <form class="reward-form" v-on:submit="updateReward">
      <h1>Update Reward</h1>
      <div class="form-item-wrapper">
        <input type="text" id="name" v-model="name"/>
      </div>
      <div class="form-item-wrapper">
        <label for="targetLevel">Enter Target Level:</label>
        <br/>
        <input type="number" id="targetLevel" v-model="targetLevel"/>
      </div>
      <input type="submit" value="Save">
      <button v-on:click="closeUpdateRewardForm" id="cancel-button">Cancel</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from '../main';
import RewardService from '../services/RewardService.js'

export default {
  name: 'reward-update-form',
  data() {
    return {
      _id: null,
      name: null,
      targetLevel: null
    }
  },
  methods: {
    updateReward(e) {
      e.preventDefault();

      const payload = {
        _id: this._id,
        name: this.name,
        targetLevel: this.targetLevel
      }

      RewardService.putReward(payload)
      .then(reward => eventBus.$emit('reward-updated', reward))
      .then(() => eventBus.$emit('reward-update-not-visible', false))

      this._id = null;
      this.name = null;
      this.targetLevel = null;
    },
    closeUpdateRewardForm(){
      eventBus.$emit('reward-update-not-visible', false)
    }
  },
  mounted() {

    eventBus.$on('edit-reward', reward => {
      this._id = reward._id;
      this.name = reward.name;
      this.targetLevel = reward.targetLevel
    })
  }
}
</script>

<style lang="css" scoped>

#reward-form-wrapper{
  margin-bottom:50px;
}

.reward-form {
  width: 80%;
  margin: 0 auto;
  margin-top:20px;
  background-color: #113e7a;
  padding: 20px 20px 40px 20px;
  border: 5px solid #0a1832;
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
