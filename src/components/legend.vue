<template>
  <b-row class="legend-layout g-0 mt-5 p-3">
    <b-col v-for="legend in legends" 
    :key="legend.id"
    class="legend-layout__container d-flex flex-column align-items-center">
      <h5 class="f-black text-center">
        {{ legend.title }}
      </h5>
      <b-row class="g-0 legend-layout__container__images mt-3">
        <b-col v-for="image in legend.images"
        :key="image.src"
        class="d-flex flex-column align-items-center mx-2">
          <b-img :src="image.src"/>
          <h5 class="text-center body-2">Obrigatório</h5>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      legends: [
        {
          id: 'mask',
          title: 'Máscara',
          images: [
            {
             src: '/images/required-mask.png',
             text: 'Obrigatório'
            },
            {
             src: '/images/recommended-mask.png',
             text: 'Recomendado'
            }
          ]
        },
        {
          id: 'towel',
          title: 'Toalha', 
          images: [
            {
             src: '/images/required-towel.png',
             text: 'Obrigatório'
            },
            {
             src: '/images/recommended-towel.png',
             text: 'Recomendado'
            }
          ]
        },
        {
          id: 'fountain',
          title: 'Bebedouro',
          images: [
            {
             src: '/images/partial-fountain.png',
             text: 'Parcial'
            },
            {
             src: '/images/forbidden-fountain.png',
             text: 'Proibido'
            }
          ]
        },
        {
          id: 'lockerRoom',
          title: 'Vestiários',
          images: [
            {
             src: '/images/required-lockerroom.png',
             text: 'Liberado'
            },
            {
             src: '/images/partial-lockerroom.png',
             text: 'Parcial'
            },
            {
             src: '/images/forbidden-lockerroom.png',
             text: 'Proibido'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .legend-layout {
    background-color: lighten($light-grey, 45%);
    height: max-content;
    &__container {
      &__images {
        width: max-content;
        img {
          height: 70px;
          width: 70px;
        }
      }
    }
  
  }
</style>