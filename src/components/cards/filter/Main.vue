<template>
  <b-form tag="section" 
  @submit.prevent="$emit('submitFilter')"
  @reset="$emit('resetFilter')"
  class="card-filter p-3">
    <AppTitle/>
    <AppOptions :saveIn="saveInTimeLocationsOpen"/>
    <AppSubfilter :saveIn="saveInFilterLocationsClose" :totalFiltered="totalFiltered"/>
    <AppActions/>
  </b-form>
</template>

<script>

import AppTitle from './_title.vue'
import AppOptions from './_options.vue'
import AppSubfilter from './_subfilter.vue'
import AppActions from './_actions.vue'

export default {
  components: {
    AppTitle,
    AppOptions,
    AppSubfilter,
    AppActions
  },
  props: {
    saveInTimeLocationsOpen: {
      type: String,
      required: true
    },
    saveInFilterLocationsClose: {
      type: String,
      required: true
    },
    totalFiltered: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .card-filter {
    width: 100%;
    height: max-content;
    border: 3px solid lighten($light-grey, 40%);
    border-radius: 8px;
  }
</style>