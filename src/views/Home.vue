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
    </b-row>
  </b-container>
</template>

<script>

import AppTitleView from '@/components/title_view.vue'

export default {
  components: {
    AppTitleView
  }
}
</script>

<style>

</style>