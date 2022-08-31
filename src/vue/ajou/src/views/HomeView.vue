<template>
  <div class="home">
    <carousel :items-to-show="1">
      <slide v-for="(asset, index) in mainAssetsArray" :key="index">
        <img class="main-image" :src="require(`@/assets/home/${asset.src}`)">
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination
  },
  data() {
    return {
      mainAssetsArray

    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
  }
}

const images = require.context('../assets/home/', false, /\.jpg$/);
const imagesArray = Array.from(images.keys());

const mainAssetsArray = imagesArray.map(fileName => {
  return { 'src': fileName.replace(/^.*[\\\/]/, '') }
})

</script>
