<template>
  <div>
    <h1>
      아주대학교 도서관 삼총사를 소개합니다 !
    </h1>
    <div class="cat" id="mokju">
      <div class="main" id="grid">
        <img src="@/assets/cat/mokju_main.jpg"/>
        <p class="cat-description" id="left">
          이름 : 대목주
          <br>특징 : 뚠뚠이, 하양이, 게으름뱅이
        </p>
      </div>
      <div class="sub">
        <img v-for="index in 4" :key="index" :src="require(`@/assets/cat/mokju${index}.jpg`)"/>
      </div>
    </div>

    <div class="cat" id="ppiyak">
      <div class="main" id="grid">
        <p class="cat-description" id="right">
          이름 : 삐약이
          <br>특징 : 애교쟁이, 각도에 굴하지 않는 귀여움
        </p>
        <img src="@/assets/cat/ppiyak_main.jpg"/>
      </div>
      <div class="sub">
        <img v-for="index in 4" :key="index" :src="require(`@/assets/cat/ppiyak${index}.jpg`)"/>
      </div>
    </div>

    <div class="cat" id="hakchi">
      <div class="main" id="grid">
        <img src="@/assets/cat/hakchi_main.jpg"/>
        <p class="cat-description" id="left">
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
    return { }
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
    margin: 10px;
  }

  .main img{
    width: 80%;
    height: 90%;
    justify-self: center;
    align-self: center;
    margin-top: 20px;

  }

  .sub img{
    width: 20%;
    height: 20%;
    padding: 5px;
    margin-top: 10px;
  }

  .cat-description{
    font-weight: bold;
    height: 50px;
    align-self: center;
    font-size: 150%;
  }

  #left { text-align: left; }

  #right { text-align: right; }

  #grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin-left: 120px;
    margin-right: 120px;
  }

</style>
