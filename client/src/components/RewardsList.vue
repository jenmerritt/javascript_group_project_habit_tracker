<template lang="html">
  <div id="rewards-wrapper">
    <div id="new-reward">
      <button id="new-reward-button">ADD REWARD</button>
    </div>
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
<<<<<<< HEAD
  props: ['rewardsFormVisible'],
=======
  props: ["level"],
>>>>>>> develop
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

    // makeRewardsFormVisible() {
    //   rewardsFormVisible = true
    //   eventBus.$emit('make-rewards-form-visible', rewardsFormVisible)
    // }

  },

  components: {
    'reward': Reward
  }
}
</script>

<style lang="css" scoped>

#rewards-wrapper {
  width: 40%;
  margin: 0 auto;
  background-color: #113e7a;
  padding: 20px 20px 20px 20px;
}

#reward-list {
  list-style-type: none;
  /* text-align:censter; */
}

#new-reward-button{
  background-color: #8AC926;
  padding:20px;
  width:200px;
  border: none;
  font-size: 20px;
  color: green;
}

#new-reward-button:hover{
  background-color: #8AC926;
  padding:17px;
  width:200px;
  border: none;
  font-size: 20px;
  color: green;
  cursor: pointer;
  border: 3px solid green;
}
</style>
