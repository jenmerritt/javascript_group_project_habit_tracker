<template lang="html">
  <div id="rewards-wrapper">
    <ul id="reward-list">
      <reward v-for="reward in rewards" :reward="reward" :level = "level"></reward>
    </ul>
  </div>
</template>

<script>
import Reward from "@/components/Reward";
import RewardService from "../services/RewardService.js";
import { eventBus } from "@/main";

export default {
  name: 'rewards-list',
  data(){
    return{
      rewards: []
    }
  },
  props: ["level"],
  mounted() {

    this.fetchRewards()

    eventBus.$on('reward-added', reward => this.rewards.push(reward))

    eventBus.$on('reward-updated', id => {
      this.fetchRewards();
    })

    eventBus.$on("reward-deleted", (id) => {
      RewardService.deleteReward(id)
      const index = this.rewards.findIndex(reward => reward._id === id);
      this.rewards.splice(index, 1)
    })
  },
  methods: {

    fetchRewards() {
      RewardService.getRewards()
      .then(rewards => this.rewards = rewards)
    }


  },

  components: {
    'reward': Reward
  }
}
</script>

<style lang="css" scoped>

#reward-list {
  list-style-type: none;
  margin-right:40px;
}


</style>
