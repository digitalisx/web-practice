<template>
  <div>
    <select @change="changeDescription" v-model="selectedDepartment">
      <option value=null>학과 선택</option>
      <option :key="major.department" v-for="major in majorList.filter(isCollege)">{{ major.department }}</option>
    </select>
    <p>
      <img v-if="selectedDepartment !== null" :src="require(`@/assets/chitoh/${selectedDepartment}.jpg`)">
    </p>
    <p v-if="description !== null">{{ description }}</p>
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
      if (element.college === this.url.slice(this.url.indexOf('college') + 8)) {
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
