<template lang="html">
  <li class="reward-item">
    <div class="reward-item-wrapper">
      <div class="reward-name">
        <h2>{{ reward.name }}</h2>
      </div>
      <div class="delete-button-wrapper">
        <button v-on:click="handleDelete" id="delete-button">DELETE</button>
      </div>
    </div>
  </li>
</template>

<script>

import {eventBus} from '@/main.js'

export default {
  name: 'reward',
  props: [ 'reward' ],
  methods:  {
    handleDelete() {
      eventBus.$emit("reward-deleted", this.reward._id)
    }
  }
}
</script>

<style lang="css" scoped>

#reward-item{
  /* text-align:center; */
}

#delete-button{
  background-color: #8AC926;
  padding:10px;
  width:100px;
  border: none;
  font-size: 16px;
  color: green;
}

#delete-button:hover {
  background-color: #8AC926;
  padding:7px;
  width:100px;
  border: 3px solid green;
  font-size: 16px;
  color: green;
  cursor:pointer;
}

</style>
