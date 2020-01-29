<template>
    <div id="chart-wrapper">
      <h1>Progress History</h1>
      <GChart
      type="ScatterChart"
      :data="chartData"
      :options="chartOptions"
      />
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
        title: 'Progress Chart of Days Your Habits Have Been Completed',
        legend: {position: 'none'},
        colors: ['#8AC926'],
        pointSize: 20,
        fontSize: 16,
        vAxis: {title: 'Dates', gridlines: {color: "black", count: 200}},
        height: 800
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
#chart-wrapper{
  font-family: 'Play', sans-serif;
  text-align: center;
  margin-top: 300px;
}
</style>
