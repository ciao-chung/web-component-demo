<template>
  <div
    dental-chart="tooth-root"
    :style="rootStyle"
  >
    <toothPartial
      v-if="isReady"
      v-for="(position, index) in positions"
      :key="`${index}-${position}`"
      :size="size"
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
    toothSize: 90,
    positions: ['left', 'top', 'center', 'right', 'bottom'],
    paper: null,
    offset: {},
    isReady: false,
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
      this.paper = new raphael(this.offset.left, this.offset.top, this.toothSize, this.toothSize)
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
  margin-bottom: 40px
</style>