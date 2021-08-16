<template>
  <b-row class="justify-content-center">
    <b-col cols=3>
      <AppButtonDefault type="submit" variant="yellow"
      size="lg">
        <h5 class="f-bold text-uppercase body-2">Encontrar unidades</h5>
      </AppButtonDefault>
    </b-col>
    <b-col cols=3>
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
  },
  methods: {
    test () {
      console.log('TESTE')
    }
  }
}
</script>

<style>

</style>