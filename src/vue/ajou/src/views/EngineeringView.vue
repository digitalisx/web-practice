<template>
  <div>
    <Department/>
    <select @change="changeMajor" v-model="selectedMajor">
      <option value="">학과 선택</option>
      <option :key="major.name" v-for="major in majorList">{{ major.name }}</option>
    </select>
    <p></p>
    <img v-if="selectedMajor !== ''" :src="require(`@/assets/chitoh/${selectedMajor}.jpg`)">
  </div>
</template>

<script>
import Department from '@/components/DepartmentCategory.vue'
import data from '@/assets/department.js'

export default {
  name: 'DepartmentView',
  components: {
    Department
  },
  data() {
    return {
      selectedMajor: '',
      majorList: data
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeMajor() {
      console.log(this.selectedMajor)
    }
  }
}
</script>
