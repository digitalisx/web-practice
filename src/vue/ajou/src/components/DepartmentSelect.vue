<template>
  <div margin-top="10px;">
    <select @change="changeDescription" v-model="selectedDepartment" style="width:200px;height:30px;">
      <option value=null>학과 선택</option>
      <option :key="major.department" v-for="major in majorList.filter(isCollege)">{{ major.department }}</option>
    </select>
    <div id=grid>
      <p id="department-image">
        <img v-if="selectedDepartment !== null" :src="require(`@/assets/chitoh/${selectedDepartment}.jpg`)">
      </p>
      <p id="department-description" v-if="description !== null">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
import Collegedata from '@/assets/colleges.js'

export default {
  components: {},
  data() {
    return {
      selectedDepartment: null,
      description: null,
      majorList: Collegedata,
      url: window.location.href
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    isCollege(element) {
      if (element.college === this.url.slice(this.url.indexOf('college') + 'college/'.length)) {
        return true
      }
    },
    isDepartment(element) {
      if (element.department === this.selectedDepartment) {
        return true
      }
    },
    changeDescription() {
      this.description = this.majorList.find(this.isDepartment).description
    }
  }
}
</script>

<style scoped>
  div { margin-top: 20px; }

  option {
    font-weight: bold;
  }

  #grid {
    display: grid;
    grid-template-rows: 2fr 1fr;
    row-gap: 20px;
  }

  #department-description{
    font-weight: bold;
    margin-left: 350px;
    margin-right: 350px;
    font-size: 130%;
    text-align: justify;
  }
</style>
