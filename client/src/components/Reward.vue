<template lang="html">
  <li class="reward-item">
    <div class="reward-item-wrapper">
      <div v-on:click="editReward" class="reward-name">
        <h2>{{ reward.name }}</h2>
      </div>
      <div v-if="level < reward.targetLevel" class="reward-target-level">
        <h2>{{ reward.targetLevel }}</h2>
      </div>
      <div v-if="level >= reward.targetLevel" class="reward-target-level">
        <h2>Do It!</h2>
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
  props: [ 'reward', 'level' ],
  methods:  {
    handleDelete() {
      eventBus.$emit("reward-deleted", this.reward._id)
    },
    editReward(){
      eventBus.$emit('edit-reward', this.reward)
    },
  }
}
</script>

<style lang="css" scoped>
</style>
