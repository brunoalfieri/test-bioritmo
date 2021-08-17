<template>
  <div class="card-place">
    <div class="card-place__layout">
      <b-row class="card-place__layout__row g-0">
        <h5 class="f-bold body-2 mb-2"
        :class="{
          'f-color-green': getplaceOpened === 'Aberto',
          'f-color-red': getplaceOpened === 'Fechado'
        }">
          {{ getplaceOpened }}
        </h5>
        <h3 class="f-bold">{{ place.title }}</h3>
        <p class="card-place__layout__row__content f-light mb-0 mt-2" v-html="place.content"/>
        <hr v-show="getplaceOpened === 'Aberto'"
        class="mb-3">
        <div 
        v-show="getplaceOpened === 'Aberto'"
        class="card-place__layout__row__container-images text-center">
          <b-img :src="getImageMask" class="px-1"/>
          <b-img :src="getImageTowel" class="px-1"/>
          <b-img :src="getImageFountain" class="px-1"/>
          <b-img :src="getImageLockerroom" class="px-1"/>
        </div>
        <b-col v-for="(item, index) in place.schedules" 
        :key="`${place.id}-time-${index}`"
        v-show="getplaceOpened === 'Aberto'"
        cols=6 class="mt-3">
          <h4 class="f-bold">{{ item.weekdays }}</h4>
          <p>{{ item.hour }}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      required: true
    }
  },
  computed: {
    getplaceOpened () {
      const possibles = {
        true: 'Aberto',
        false: 'Fechado'
      }
      return possibles[this.place.opened]
    },
    getImageMask () {
      const image = {
        required: '/images/required-mask.png',
        recommended: '/images/recommended-mask.png'
      }
      return image[this.place.mask]
    },
    getImageTowel () {
      const image = {
        required: '/images/required-towel.png',
        recommended: '/images/recommended-towel.png'
      }
      return image[this.place.towel]
    },
    getImageFountain () {
      const image = {
        partial: '/images/partial-fountain.png',
        not_allowed: '/images/forbidden-fountain.png'
      }
      return image[this.place.fountain]
    },
    getImageLockerroom () {
      const image = {
        allowed: '/images/required-lockerroom.png',
        partial: '/images/partial-lockerroom.png',
        closed: '/images/forbidden-lockerroom.png'
      }
      return image[this.place.locker_room]
    }
  }
}
</script>

<style lang="scss">
  .card-place {
    height: 100%;
    margin: .75rem 0;
    height: 530px;
    &__layout {
      background-color: lighten($light-grey, 45%);
      box-shadow: 0 0 8px -3px $light-grey;
      height: 100%;
      &__row {
        padding: 1rem;
        &__content {
          min-height: 100px;
        }
        &__container-images {
          img {
            width: calc(100%/4);
            max-width: 70px;
          }
        }
      }
    }
  }
</style>