<template>
  <b-container id="app" fluid>
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </b-container>
</template>

<script>

import { differenceInDays } from 'date-fns'

import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
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
<style lang="scss">
 #app {
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-family: $font-gotham;
 }
</style>
