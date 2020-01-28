<template lang="html">
  <!-- <div id="rewards-wrapper">
    <ul id="reward-list">
      <reward v-for="reward in rewards" :reward="reward"></reward>
    </ul>
  </div> -->
</template>

<script>
// import Reward from "@/components/Reward";
import RewardService from "../services/RewardService.js";
import { eventBus } from "@/main";

export default {
  name: 'rewards-list',
  data(){
    return{
      rewards: []
    }
  },
  mounted() {

    this.fetchRewards()
  },
  methods: {
    fetchRewards() {
      RewardService.getRewards()
      .then(rewards => this.rewards = rewards)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
