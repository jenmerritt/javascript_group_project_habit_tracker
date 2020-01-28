<template lang="html">
  <div id="reward-form-wrapper">
    <form class="reward-form" v-on:submit="updateReward">
      <h1>Update Reward</h1>
      <div class="form-item-wrapper">
        <input type="text" id="name" v-model="name"/>
      </div>
      <div class="form-item-wrapper">
        <input type="number" id="targetLevel" v-model="targetLevel"/>
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

      this._id = null;
      this.name = null;
      this.targetLevel = null;
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
</style>
