<template>
  <div>
    <Department/>
  </div>
</template>

<script>
import Department from '@/components/DepartmentCategory.vue'

export default {
  name: 'DepartmentView',
  components: {
    Department
  },
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
