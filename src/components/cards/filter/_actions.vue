<template>
  <b-row class="g-0 justify-content-center mt-4">
    <b-col cols=12 md=6 lg=4 xl=3 
    class="mb-3 mb-lg-0 pe-0 pe-md-2">
      <AppButtonDefault type="submit" variant="yellow"
      class="px-2"
      size="lg">
        <h5 class="d-none d-md-block f-bold text-uppercase body-2">Encontrar unidades</h5>
        <h5 class="d-block d-md-none f-bold text-uppercase body-2 line-height-20">Encontrar <br> unidades</h5>
      </AppButtonDefault>
    </b-col>
    <b-col cols=12 md=6 lg=4 xl=3
    class="mb-3 mb-lg-0 ps-0 ps-md-2">
      <AppButtonDefault type="reset" variant="outline-dark"
      size="lg">
        <h5 class="f-bold text-uppercase body-2">Limpar</h5>
      </AppButtonDefault>
    </b-col>
  </b-row>
</template>

<script>

import AppButtonDefault from '@/components/buttons/default'

export default {
  components: {
    AppButtonDefault
  }
}
</script>

<style>

</style>