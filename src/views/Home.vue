<template>
  <b-container tag="main" class="py-5">
    <b-row>
      <b-col cols=12>
        <AppTitleView title="REABERTURA SMART FIT"/>
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
        <transition-group
        tag="div"
        class="g-0 row content-places mt-4"
        name="slide-fade">
          <AppCardPlace
          v-for="place in listLocationsFiltered"
          class="col-12 col-md-6 col-lg-4"
          :key="place.id"
          :place="place"/>
        </transition-group>
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
      return this.$store.getters['placesFilted']?.total || 0
    },
    userSelectedTime () {
      return this.$store.getters['saveUserSelectTime']
    },
    userCheckedLocationClosed () {
      return this.$store.getters['saveUserFilterLocationsClose']
    },
    listLocationsFiltered () {
      return this.$store.getters['placesFilted']?.locationsFilted || []
    }
  },
  methods: {
    submitFilter () {
      const minValueSelected = this.userSelectedTime[0]
      const maxValueSelected = this.userSelectedTime[1]

      const minHoursInTraining = 1

      const locations = this.$store.getters['places'].locations
      const locationsFilted = locations.filter(location => {
        if (location.schedules === undefined) return false
        const resultWithIntervalOneHour = location.schedules.some(rule => {

          const intervalMinAndMax = rule.hour.match(/[0-9][0-9]h/g)
          if (intervalMinAndMax === null || intervalMinAndMax.length === 0) return false

          const minValue = Number(intervalMinAndMax[0].replace(/\D/g, '').replace('00', '24'))
          const maxValue = Number(intervalMinAndMax[1].replace(/\D/g, '').replace('00', '24'))
        
          const checkMinValue = this.valueHasBetweenWithTolerance(minValueSelected, minValue, maxValue, minHoursInTraining)
          const checkMaxValue = this.valueHasBetweenWithTolerance(maxValueSelected, minValue, maxValue, minHoursInTraining)

          const allCheckValue = checkMinValue || checkMaxValue

          if (this.userCheckedLocationClosed) {
            return allCheckValue
          } else {
            return allCheckValue && location.opened
            
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
        locationsFilted: [],
        userSelectTime: undefined,
        userFilterLocationsClose: false,
        total: 0
      })
    },
    valueHasBetweenWithTolerance (value, minValue, maxValue, tolerance) {
      return value - tolerance >= minValue && value + tolerance <= maxValue
    }
  }
}
</script>

<style lang="scss">
  .content-places {
    @media screen and (min-width: $grid-md) {
      > :nth-child(2n-1) {
        padding: 0 .75rem 0 0;
      }
      > :nth-child(2n) {
        padding: 0 .75rem;
      }
    }
    @media screen and (min-width: $grid-lg) {
      > :nth-child(3n-2) {
        padding: 0 .75rem 0 0;
      }
      > :nth-child(3n-1) {
        padding: 0 .75rem;
      }
      > :nth-child(3n) {
        padding: 0 0 0 .75rem;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .6s ease-in-out;
  }
  .slide-fade-leave-active {
    transition: all .6s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>