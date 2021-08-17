<template>
  <b-form-checkbox v-model="valueInput" :value="value" class="input-checkbox">
    <h5 class="body-2 m-0">{{ text }}</h5>
  </b-form-checkbox>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    },
    text: {
      type: String,
      required: true
    },
    saveIn: {
      type: String,
      required: true
    }
  },
  computed: {
    valueInput: {
      get () {
        return this.$store.getters[this.saveIn]
      },
      set (valueInput) {
        this.$store.commit(this.saveIn, valueInput === true)
      }
    }
  }
}
</script>

<style lang="scss">
  .input-checkbox {
    display: flex;
    align-items: center;
    input[type='checkbox'] {
      margin-right: .5rem;
      position: relative;
      height: 1.25rem;
      width: 1.25rem;
      &::after {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border: 2px solid lighten($light-grey, 20%);
      }
    }
    input[type='checkbox']:checked {
      &::before {
        display: inline-block;
        width: 100%;
        height: 100%;
        content: '';
        top: 0;
        left: 0;
        background-color: $yellow;
      }
      &::after {
        display: inline-block;
        width: 75%;
        height: 75%;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 3px solid $light;
      }
    }
  }
</style>