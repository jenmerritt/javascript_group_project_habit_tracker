<template lang="html">
  <li class="reward-item">
      <div  class="reward-name" v-on:click="editReward">
        <h1>{{ reward.name }}</h1>
      </div>
      <div v-if="level < reward.targetLevel" class="reward-target-level">
        <h2>Target Level: {{ reward.targetLevel }}</h2>
      </div>
      <div v-if="level >= reward.targetLevel" class="reward-target-level">
        <h2>Do It!</h2>
      </div>
      <div class="delete-button-wrapper">
        <button v-on:click="handleDelete" id="delete-button">X</button>
      </div>
  </li>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name: 'reward',
  props: [ 'reward', 'level' ],
  methods:  {
    handleDelete() {
      eventBus.$emit("reward-deleted", this.reward._id)
    },
    editReward(){
      eventBus.$emit('reward-update-visible', true)
      eventBus.$emit('edit-reward', this.reward)
    },
  }
}
</script>

<style lang="css" scoped>

.reward-item{
  border: solid 5px goldenrod;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;

}

.reward-name h1{
  color: goldenrod;
  padding: 0;
  margin-top: 20px 0 0 0;
}

.reward-item:hover{
  cursor: pointer;
}

.delete-button-wrapper{
  text-align: left;
}

#delete-button{
  background-color: #702632;
  padding:8px;
  width:40px;
  border: none;
  font-size: 12px;
  color: #fff;
}

#delete-button:hover {
  background-color: #702632;
  padding:5px;
  width:40px;
  border: 3px solid #8B0000;
  font-size: 12px;
  color: #fff;
  cursor:pointer;
}

</style>
