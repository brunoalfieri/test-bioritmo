<template>
  <div id="app">
    APP3
  </div>
</template>

<script>

import { differenceInDays } from 'date-fns'

export default {
  name: 'App',
  async beforeCreate () {
    const lastUpdatePlaces = this.$store.getters['places']['updated_at'] || new Date()
    const diffDate = Math.abs(differenceInDays(new Date(lastUpdatePlaces), new Date()))

    const notExistsPlaces = this.$store.getters['places']['locations'].length === 0

    if (diffDate > 0 || notExistsPlaces) {
      const { 
        locations,
        total,
        wp_total
      } = await this.$api.getPlaces().then(({ data }) => data);
      this.$store.commit('places', {
        updated_at: new Date(),
        locations,
        total,
        wp_total
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
