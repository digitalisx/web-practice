<template>
  <div class="home">
    <carousel>
      <carousel-slide v-for="slide in slides" :key="slide">
        <img :src="require(slide)"/>
      </carousel-slide>
    </carousel>
  </div>
</template>
<script>
import Carousel from "@/components/Carousel.vue"
import CarouselSlide from "@/components/CarouselSlide.vue"

export default {
  components: {
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      slides: [
        '@/assets/univ1.jpg',
        '@/assets/univ2.jpg',
        '@/assets/univ3.jpg'
      ],
      visibleSlide: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
