<template>
  <div
    dental-chart="tooth-root"
    :style="rootStyle"
  >
    <toothPartial :size="size" position="left"></toothPartial>
    <toothPartial :size="size" position="top"></toothPartial>
    <toothPartial :size="size" position="center"></toothPartial>
    <toothPartial :size="size" position="right"></toothPartial>
    <toothPartial :size="size" position="bottom"></toothPartial>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    index: Number,
  },
  data: () => ({
    toothSize: 90,
  }),
  computed: {
    size() {
      return this.toothSize/3
    },
    rootStyle() {
      return {
        width: `${this.toothSize}px`,
        height: `${this.toothSize}px`,
      }
    },
  },
  components: {
    toothPartial: () => import('./_toothPartial.vue'),
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[dental-chart="tooth-root"]
  position: relative
  margin: 10px 10px
</style>