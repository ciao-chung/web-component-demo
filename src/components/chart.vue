<template>
  <div dental-chart="root">
    <tooth
      v-for="i in 10"
    ></tooth>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  components: {
    tooth: () => import('./_tooth.vue'),
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[dental-chart="root"]
  border: 1px grey solid
  display: flex
</style>