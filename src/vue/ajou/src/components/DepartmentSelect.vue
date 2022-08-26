<template>
  <div>
    <select @change="changeDescription" v-model="selectedDepartment">
      <option value="">학과 선택</option>
      <option :key="major.department" v-for="major in majorList.filter(isCollege)">{{ major.department }}</option>
    </select>
    <p>
      <img v-if="selectedDepartment !== ''" :src="require(`@/assets/chitoh/${selectedDepartment}.jpg`)">
    </p>
    <p v-if="description !== ''">{{ description }}</p>
  </div>
</template>
<script>
import data from '@/assets/colleges.js'

export default {
  components: {},
  data() {
    return {
      selectedDepartment: '',
      description: '',
      majorList: data,
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
      if (element.name === this.selectedDepartment) {
        return true
      }
    },
    changeDescription() {
      this.description = this.majorList.find(this.isDepartment).description
    }
  }
}
</script>
