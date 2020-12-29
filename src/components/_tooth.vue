<template>
  <div dental-chart="tooth-root"></div>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    
  }),
  created() {},
}
</script>

<style lang="sass" type="text/sass" scoped>
$size: 80px
div[dental-chart="tooth-root"]
  width: $size
  height: $size
  border: 1px grey solid
</style>