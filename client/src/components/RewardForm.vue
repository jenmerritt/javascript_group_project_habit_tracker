<template lang="html">
  <div id="reward-form-wrapper">
    <form class="reward-form" v-on:submit="addReward">
      <h1>Add Reward</h1>
      <div class="form-item-wrapper">
        <input type="text" v-model="name" id="name" placeholder="Enter Reward Name...."/>
      </div>
      <input type="submit" value="Save">
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
      name: ""
    }
  },
  methods: {
    addReward(e) {
      e.preventDefault();

      const payload = {
        name: this.name
      }

      RewardService.postReward(payload)
      .then(reward => eventBus.$emit('reward-added', reward))

      this.name = null;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
