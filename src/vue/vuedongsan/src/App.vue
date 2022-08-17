<template>

  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>내용</p>
      <button @click="모달창열렸니=false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="a in 메뉴들" :key="a"> {{ a }} </a>
  </div>
  <div v-for="(item, num) in 원룸들" :key="num">
    <img :src="원룸들[num].image" class="room-img">
    <h4> {{원룸들[num].title}} </h4>
    <p> {{원룸들[num].price}}</p>
  </div>    

</template>

<script>

import data from './assets/oneroom.js';

export default {
  name: 'App',
  data(){
    return {
      원룸들 : data,
      모달창열렸니 : false,
      신고수: [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods : {
  },
  components: {
  }
}
</script>

<style src="./style.css"></style>