<template>
  <b-row class="g-0 my-4">
    <b-col cols=12 class="d-flex justify-content-between">
      <b-form-checkbox-group v-model="checkedFilter" name="location-closed">
        <AppInputCheckbox :value="true" text="Exibir unidades fechadas"/>
      </b-form-checkbox-group>
      <h5 class="body-2 m-0 d-flex align-items-center">
        Resultados encontrados: 
        <b class="h4 f-bold m-0 ms-2">{{ totalFiltered }}</b>
      </h5>
    </b-col>
  </b-row>
</template>

<script>

import AppInputCheckbox from '@/components/inputs/checkbox.vue'

export default {
  components: {
    AppInputCheckbox
  },
  props: {
    saveIn: {
      type: String,
      required: true
    },
    totalFiltered: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      checkedFilter: []
    }
  },
  watch: {
    checkedFilter (valueInGroupCheckbox){
      this.$store.commit(this.saveIn, valueInGroupCheckbox[0] || false)
    }
  }
}
</script>

<style>

</style>