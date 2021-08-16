<template>
  <b-button :type="type"
  @click="$emit('click')"
  :size="size"
  :variant="variant"
  class="btn-default"
  :class="`btn-default-${size}`">
    <slot/>
  </b-button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    variant: {
      type: String,
      required: false,
      default: 'yellow'
    },
    size: {
      type: String,
      required: false,
      default: 'lg'
    }
  }
}
</script>

<style lang="scss">
  @mixin btn-outline ($color) {
    background-color: transparent !important;
    color: $color !important;
    box-shadow: 0 0 0 2px lighten($color, 85%) inset !important;
  }
  @mixin btn-solid ($color) {
    background-color: $color;
    color: $dark !important;
    border: none ;
  }

  .btn {
    &-default {
      &-sm { padding: .25rem .5rem !important; }
      &-md { padding: .5rem 1rem !important; }
      &-lg { padding: .75rem 1.25rem !important; }
      position: relative;
      box-shadow: none !important;
      height: 100%;
      width: 100%;
      transform: translate(0, 0);
      border: none;
      transition: transform 200ms;
      border-radius: 5px;
      &:active:not(:disabled) {
        transform: translate(2px, 2px);
        transition: transform 200ms;

      }
      &:disabled {
        filter: grayscale(1);
      }
    }
    &-outline {
      @each $key, $color in $all-colors {
        &-#{"" + $key} {
          @include btn-outline($color);
        }
      }
    }
    @each $key, $color in $all-colors {
      &-#{"" + $key} {
        @include btn-solid($color);
      }
    }
  }
</style>