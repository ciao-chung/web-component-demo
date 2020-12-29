<template>
  <div
    dental-chart="tooth-root"
    :style="rootStyle"
  >
    <toothPartial :size="partialBaseSize" position="left"></toothPartial>
    <toothPartial :size="partialBaseSize" position="top"></toothPartial>
    <toothPartial :size="partialBaseSize" position="center"></toothPartial>
    <toothPartial :size="partialBaseSize" position="right"></toothPartial>
    <toothPartial :size="partialBaseSize" position="bottom"></toothPartial>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    index: Number,
  },
  data: () => ({
    size: 30,
  }),
  computed: {
    rootStyle() {
      return {
        width: `${this.size*3}px`,
        height: `${this.size*3}px`,
      }
    },
    partialBaseSize() {
      return this.size
    },
  },
  components: {
    toothPartial: () => import('./_toothPartial.vue'),
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[dental-chart="tooth-root"]
  border: 1px red solid
  position: relative
</style>