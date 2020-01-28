<template lang="html">
  <div id="reward-form-wrapper">
    <form class="reward-form" v-on:submit="updateReward">
      <h1>Update Reward</h1>
      <div class="form-item-wrapper">
        <input type="text" id="name" v-model="name"/>
      </div>
      <input type="submit" value="Save">
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
      name: null
    }
  },
  methods: {
    updateReward(e) {
      e.preventDefault();

      const payload = {
        _id: this._id,
        name: this.name,
      }

      RewardService.putReward(payload)
      .then(reward => eventBus.$emit('reward-updated', reward))

      this._id = null;
      this.name = null;
    }
  },
  mounted() {

    eventBus.$on('edit-reward', reward => {
      this._id = reward._id;
      this.name = reward.name;
    })
  }
}
</script>

<style lang="css" scoped>
</style>
