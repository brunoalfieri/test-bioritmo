<template>
  <b-row tag="footer" class="py-3 d-flex align-items-center">
    <b-col cols=12 class="text-center mb-2 mt-auto">
      <b-img src="/images/logo.svg" class="img-fill-height"/>
    </b-col>
    <b-col cols=12 class="text-center f-color-light mt-2 mb-auto">
      Todos os direitos reservados - 2020
    </b-col>
  </b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  footer {
    background-color: $dark-grey;
    height: 200px;
    > *:first-child {
      height: 50px;
    }
  }
</style>