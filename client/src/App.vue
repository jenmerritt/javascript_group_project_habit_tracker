<template lang="html">

  <div id="app">
    <habits-list />
    <habit-form />
  </div>

</template>

<script>
import HabitForm from "@/components/HabitForm";
import HabitsList from "@/components/HabitsList";

export default {
  name: 'app',
  components: {
    'habits-list': HabitsList,
    'habit-form': HabitForm
  }
}
</script>

<style lang="css" scoped>
</style>
