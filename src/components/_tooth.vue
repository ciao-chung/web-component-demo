<template>
  <div
    dental-chart="tooth-root"
    :style="rootStyle"
  >
    <toothPartial
      v-if="isReady"
      v-for="(position, index) in positions"
      :key="`${index}-${position}`"
      :size="baseSize"
      :index="index"
      :paper="paper"
      :data="data"
      :rowIndex="rowIndex"
      :columnIndex="columnIndex"
      :position="position"></toothPartial>
  </div>
</template>

<script lang="babel" type="text/babel">
import raphael from 'raphael'
export default {
  props: {
    data: Object,
    rowIndex: Number,
    columnIndex: Number,
  },
  data: () => ({
    positions: [
      'outer-top', 'outer-bottom',
      'left', 'top', 'right', 'bottom',
      'center',
    ],
    paper: null,
    offset: {},
    isReady: false,
    baseSize: 20,
  }),
  beforeDestroy() {
    this.clearAll()
  },
  mounted() {
    this.setupPaper()
  },
  methods: {
    async setupPaper() {
      this.offset = $(this.$el).offset()
      this.paper = new raphael(this.offset.left, this.offset.top, this.rootStyle.width, this.rootStyle.height)
      await this.$nextTick()
      this.isReady = true
    },
    clearAll() {
      if(!this.paper) return
      if(typeof this.paper.clear != 'function') return;
      this.paper.clear()
    },
  },
  computed: {
    rootStyle() {
      return {
        width: `${this.baseSize*3}px`,
        height: `${this.baseSize*5}px`,
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
  margin-right: 10px
</style>