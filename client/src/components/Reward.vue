<template lang="html">
  <li class="reward-item">
    <div class="reward-item-wrapper">
      <div class="reward-name">
        <h2>{{ reward.name }}</h2>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'reward',
  props: [ 'reward' ]
}
</script>

<style lang="css" scoped>
</style>
