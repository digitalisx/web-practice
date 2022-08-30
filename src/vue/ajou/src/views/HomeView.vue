<template>
  <div class="home">
    <carousel :items-to-show="1">
      <slide v-for="index in 3" :key="index">
        <img :src="require(`@/assets/univ${index}.jpg`)">
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
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
