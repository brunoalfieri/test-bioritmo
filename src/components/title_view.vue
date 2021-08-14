<template>
  <div class="title-view position-relative mb-5">
    <h1 v-html="title" class="f-color-dark-grey text-uppercase m-0 f-bold line-height-50"/>
    <div class="title-view__tag"/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .title-view {
    height: max-content;
    &__tag {
      position: absolute;
      top: calc(100% + 1rem);
      left: 0;
      height: 10px;
      width: 100px;
      background-color: $dark-grey;
    }
  }
</style>