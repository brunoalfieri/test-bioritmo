<template>
  <div>
    <b-form-radio-group v-model="optionSelected"
    :required="true">
      <b-row v-for="option in options" 
      :key="option.text" 
      class="g-0 align-items-center">
        <b-col cols=12 class="d-flex justify-content-between">
          <AppInputRadio
          :id="option.id"
          :value="option.value" 
          :text="option.text"/>
          <h5 class="f-color-light-grey f-light">{{ option.legend }}</h5>
        </b-col>
        <b-col cols=12>
          <hr class="my-3"/>
        </b-col>
      </b-row>
    </b-form-radio-group>
    {{ teste }}
  </div>
</template>

<script>
import AppInputRadio from '@/components/inputs/radio.vue'
export default {
  components: {
    AppInputRadio
  },
  props: {
    saveIn: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      teste: '',
      options: [
        {
          id: 'morning',
          value: [6, 12],
          text: 'Manhã',
          legend: '06:00 às 12:00'
        },
        {
          id: 'afternoon',
          value: [12, 18],
          text: 'Tarde',
          legend: '12:01 às 18:00'
        },
        {
          id: 'night',
          value: [18, 23],
          text: 'Noite',
          legend: '18:01 às 23:00'
        }
      ]
    }
  },
  computed: {
    optionSelected: {
      get () {
        return this.$store.getters[this.saveIn]
      },
      set (valueInRadio) {
        this.$store.commit(this.saveIn, valueInRadio)
      }
    }
  }
}
</script>

<style>

</style>