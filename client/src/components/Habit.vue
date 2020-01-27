<template lang="html">
  <p>{{ habit.name }}</p>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: 'habit',
  props: ['habit']
}
</script>

<style lang="css" scoped>
</style>
