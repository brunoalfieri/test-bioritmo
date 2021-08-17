<template>
  <b-row class="g-0 my-2">
    <b-col cols=12 md=6
    class="d-flex my-1 justify-content-md-start  justify-content-center">
      <b-form-checkbox-group v-model="checkedFilter" name="location-closed">
        <AppInputCheckbox :value="true" text="Exibir unidades fechadas"/>
      </b-form-checkbox-group>
    </b-col>
    <b-col cols=12 md=6
    class="d-flex my-1 justify-content-md-end justify-content-center">
      <h5 class="body-2 m-0 d-flex align-items-center">
        Resultados encontrados: 
        <number
        ref="number1"
        class="h4 f-bold m-0 ms-2"
        :from="totalFiltered"
        :to="totalFiltered"
        :format="theFormat"
        :duration="1"
        :delay="0"
        easing="Power1.easeOut"/>
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
      durationAnimation: 1,
      totalFiltedAnimation: 0,
      checkedFilter: []
    }
  },
  methods: {
    theFormat(number) {
      return Math.round(number);
    },
  },
  watch: {
    totalFiltered () {
      this.$refs.number1.play()
    },
    checkedFilter (valueInGroupCheckbox){
      this.$store.commit(this.saveIn, valueInGroupCheckbox[0] || false)
    }
  }
}
</script>

<style>

</style>