<template>
  <div>
    <!-- <p>{{ activities[0].name}}</p> -->
    <div>
      <GChart
      type="ScatterChart"
      :data="chartData"
      :options="chartOptions"
      />
    </div>
  </div>
</template>

<script>
import HabitService from '../services/HabitService';
import { GChart } from 'vue-google-charts';
import { eventBus } from '../main.js';

export default {
  name: "scatter-graph",
  data () {
    return {
      activities: [],
      chartData: [],
      chartOptions: {
        title: 'Habit Name',
        legend: {position: 'none'},
        colors: ['#547AA5'],
        pointSize: 5
      }
    }
  },
  components: {
    GChart
  },
  mounted() {
    eventBus.$on('habits', habits => {
      let maximumLength = 0
      habits.forEach(habit => {
        if (maximumLength < habit.timeStamps.length){
          maximumLength = habit.timeStamps.length + 1}

          this.chartData[0] = new Array(maximumLength).fill('')

          const chartDataRow = [habit.name]
          habit.timeStamps.forEach(timeStamp => {
            chartDataRow.push(new Date (timeStamp))
          })

          if (maximumLength > habit.timeStamps.length){
            let difference = maximumLength - habit.timeStamps.length

            for (let target = 1; target < difference; target++) {
              chartDataRow.push(new Date(habit.timeStamps[0]))
            }
            this.chartData.push(chartDataRow)
          }//convert object to array, then convert array of timestamps to array items
          return this.chartData
        })
      })
    }
  }
  </script>

  <style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
  </style>
