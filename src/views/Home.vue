<template>
  <b-container class="py-5">
    <b-row>
      <b-col cols=12>
        <AppTitleView title="REABERTURA <br> SMART fit"/>
      </b-col>
      <b-col cols=12>
        <p class="mt-3 f-book">
          O horário de funcionamento das nossas unidades está seguindo
          os decretos de cada município. 
          Por isso, confira aqui se a sua unidade está aberta e as
          medidas de segurança que estamos seguindo.
        </p>
      </b-col>
      
      <b-col cols=12>
        <AppCardFilter 
        saveInTimeLocationsOpen="saveUserSelectTime"
        saveInFilterLocationsClose="saveUserFilterLocationsClose"
        :totalFiltered="totalFilteredByUser"
        @submitFilter="submitFilter"
        @resetFilter="resetFilter"/>
        <AppLegend/>
        <b-row class="g-0 content-places mt-4">
          <b-col cols=4 v-for="place in listLocationsFiltered"
          :key="place.id">
            <AppCardPlace :place="place"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import AppTitleView from '@/components/title_view.vue'
import AppCardFilter from '@/components/cards/filter/Main.vue'
import AppLegend from '@/components/legend.vue'
import AppCardPlace from '@/components/cards/Place.vue'


export default {
  components: {
    AppTitleView,
    AppCardFilter,
    AppLegend,
    AppCardPlace
  },
  computed: {
    totalFilteredByUser () {
      return this.$store.getters['placesFilted'].total
    },
    userSelectedTime () {
      return this.$store.getters['saveUserSelectTime']
    },
    userCheckedLocationClosed () {
      return this.$store.getters['saveUserFilterLocationsClose']
    },
    listLocationsFiltered () {
      return this.$store.getters['placesFilted'].locationsFilted
    }
  },
  methods: {
    submitFilter () {
      const locations = this.$store.getters['places'].locations
      const locationsFilted = locations.filter(location => {
        if (location.schedules === undefined) return false
        const resultWithIntervalOneHour = location.schedules.some(rule => {
          const intervalMinAndMax = rule.hour.match(/[0-9][0-9]h/g)
          if (intervalMinAndMax === null || intervalMinAndMax.length === 0) return false
          const minValue = Number(intervalMinAndMax[0].replace(/\D/g, '').replace('00', '24'))
          const maxValue = Number(intervalMinAndMax[1].replace(/\D/g, '').replace('00', '24'))
          const locationHasInInterval = this.valueHasBetween(this.userSelectedTime, minValue, maxValue)
          if (this.userCheckedLocationClosed) {
            return locationHasInInterval
          } else {
            return locationHasInInterval && location.opened
            
          }
        })
        return resultWithIntervalOneHour
      })
      this.$store.commit('placesFilted', {
        locationsFilted: locationsFilted,
        total: locationsFilted.length
      })
    },
    resetFilter () {
      this.$store.commit('placesFilted', {
        userSelectTime: undefined,
        userFilterLocationsClose: false,
        total: 0
      })
    },
    valueHasBetween (value, minValue, maxValue) {
      const valueInitialSelected = value[0]
      const valueEndingSelected = value[1]
      const valueInitialReached = valueInitialSelected + 1 >= minValue && valueInitialSelected + 1 <= maxValue
      const valueEndingReached = valueEndingSelected - 1 >= minValue && valueEndingSelected - 1 <= maxValue
      return valueInitialReached || valueEndingReached
    }
  }
}
</script>

<style lang="scss">
  .content-places {
    > * {
      margin: .75rem 0;
      height: 530px;
    }
    > :nth-child(3n-2) {
      padding-right: .75rem;
    }
    > :nth-child(3n-1) {
      padding: 0 .75rem;
    }
    > :nth-child(3n) {
      padding-left: .75rem;
    }
  }
</style>