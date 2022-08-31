<template>
  <div>
    아주대학교 도서관 삼총사를 소개합니다 !
    <div class="cat" id="mokju">
      <div class="main">
        <img src="@/assets/cat/mokju_main.jpg"/>
        <p class="cat-description">
          이름 : 대목주
          <br>특징 : 삼총사 중 유일한 하양이, 뚠뚠이, 게으름뱅이
        </p>
      </div>
      <div class="sub">
        <img v-for="index in 4" :key="index" :src="require(`@/assets/cat/mokju${index}.jpg`)"/>
      </div>
    </div>

    <div class="cat" id="ppiyak">
      <div class="main">
        <img src="@/assets/cat/ppiyak_main.jpg"/>
        <p class="cat-description">
          이름 : 삐약이
          <br>특징 : 애교쟁이, 각도에 굴하지 않는 귀여움
        </p>
      </div>
      <div class="sub">
        <img v-for="index in 4" :key="index" :src="require(`@/assets/cat/ppiyak${index}.jpg`)"/>
      </div>
    </div>

    <div class="cat" id="hakchi">
      <div class="main">
        <img src="@/assets/cat/hakchi_main.jpg"/>
        <p class="cat-description">
          이름 : 학치
          <br>특징 : 근육 고양이, 가끔 냥냥펀치
        </p>
      </div>
      <div class="sub">
        <img v-for="index in 4" :key="index" :src="require(`@/assets/cat/hakchi${index}.jpg`)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
  .cat{
    border-top: 1.5px solid rgb(53, 127, 236);
    padding: 5px;
  }

  .main {
    width: 100%;
    height: 100%;
  }

  .sub img{
    width: 25%;
    height: 25%;
  }

  .sub {
    padding: 5px;
  }
</style>
