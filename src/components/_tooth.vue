<template>
  <div
    dental-chart="tooth-root"
    :style="rootStyle"
  >
    <toothPartial
      v-if="isReady"
      v-for="(position, index) in positions"
      ref="partial"
      @toggleSelectAll="toggleSelectAll"
      :key="`${index}-${position}`"
      :size="baseSize"
      :index="index"
      :paper="paper"
      :data="data"
      :rowIndex="rowIndex"
      :columnIndex="columnIndex"
      :position="position"
    ></toothPartial>
  </div>
</template>

<script lang="babel" type="text/babel">
import raphael from 'raphael'
export default {
  props: {
    data: Object,
    rowIndex: Number,
    columnIndex: Number,
    updateToothData: Function,
  },
  data: () => ({
    positions: [
      'outer-top', 'outer-bottom',
      'left', 'top', 'bottom', 'right',
      'center',
    ],
    paper: null,
    isReady: false,
    baseSize: 20,
    selectAll: false,
  }),
  beforeDestroy() {
    this.clearAll()
  },
  mounted() {
    this.setupPaper()
    this.$bus.$on(this.$CONSTANT.EVENT_GET_SELECTED, (items) => this.onGetEvent(items))
  },
  methods: {
    onGetEvent(items) {
      if(this.checkPartialAnySelected() === false) return
      let data = _cloneDeep(this.data)
      let item = {
        rowIndex: this.rowIndex,
        columnIndex: this.columnIndex,
        selectAll: this.checkPartialAllSelected(),
        symbol: data.symbol,
        marked: data.marked,
        partials: this.getSelectedPartials(),
      }
      items.push(item)
    },
    getSelectedPartials() {
      const partials = this.$refs
        .partial
        .filter(component => component.selected === true)
        .map(component => ({
          position: component.position,
          ..._cloneDeep(component.partialData),
        }))
      return _cloneDeep(partials)
    },
    checkPartialAllSelected() {
      if(!Array.isArray(this.$refs.partial)) return false
      return this.$refs.partial
        .filter(component => component.isOuter === false)
        .every(component => component.selected === true)
    },
    checkPartialAnySelected() {
      if(!Array.isArray(this.$refs.partial)) return false
      return this.$refs.partial.some(component => component.selected === true)
    },
    toggleSelectAll() {
      this.selectAll = !this.selectAll
      if(!Array.isArray(this.$refs.partial)) return
      for(const component of this.$refs.partial) {
        if(typeof component.onClick != 'function') continue
        if(component.isOuter === true) continue
        component.onClick(this.selectAll)
      }
    },
    async setupPaper() {
      const offset = $(this.$el).offset()
      this.paper = new raphael(offset.left, offset.top, this.rootStyle.width, this.rootStyle.height)
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

<style lang="sass" type="text/sass">
div[dental-chart="tooth-root"]
  position: relative
  margin-right: 10px
</style>