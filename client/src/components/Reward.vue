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
</style>
