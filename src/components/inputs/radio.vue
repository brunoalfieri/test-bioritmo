<template>
  <b-form-radio :id="id" :value="value" class="input-radio">
    {{ text }}
  </b-form-radio>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
  .input-radio {
    display: flex;
    align-items: center;
    input[type='radio'] {
      margin-right: .5rem;
      position: relative;
      height: 1.5rem;
      width: 1.5rem;
      &::after {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        border-radius: 50%;
        top: 0;
        left: 0;
        border: 2px solid lighten($light-grey, 20%);
      }
    }
    input[type='radio']:checked {
      &::before {
        display: inline-block;
        width: 100%;
        height: 100%;
        content: '';
        border-radius: 50%;
        top: 0;
        left: 0;
        background-color: $yellow;
      }
      &::after {
        display: inline-block;
        width: 75%;
        height: 75%;
        content: '';
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 3px solid $light;
      }
    }
  }
</style>