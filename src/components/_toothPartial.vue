<template>
  <div class="tooth-partial-root">

  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    data: Object,
    rowIndex: Number,
    columnIndex: Number,
    size: Number,
    position: String, // 位置: top, bottom, left, right, center
    paper: Object,
  },
  data: () => ({
    element: null,
  }),
  mounted() {
    this.draw()
  },
  methods: {
    async draw(attr) {
      this.element = this.paper.path(this.path)
      this.element.hover((el) => this.onHover(el))
      this.element.click((el) => this.onClick(el))

      await this.$nextTick()
      $(this.element.node).attr('uid', this.uid)
      $(this.element.node).attr('position', this.position)
      this.element.attr({
        fill: 'white',
        // 'stroke-dasharray': '-',
        ...attr,
      })
    },
    onHover(el) {
      const position = $(el.target).attr('position')
    },
    onClick(el) {
      const position = $(el.target).attr('position')
    },
  },
  computed: {
    uid() {
      return `${this.rowIndex}-${this.columnIndex}`
    },
    path() {
      let path = null
      switch (this.position) {
        case 'left':
          path = `M0 0 L${this.size} ${this.size} L${this.size} ${this.size*2} L0 ${this.size*3} L0 0`
          break
        case 'top':
          path = `M0 0 L${this.size*3} 0 L${this.size*2} ${this.size} L${this.size} ${this.size} L0 0`
          break
        case 'right':
          path = `M${this.size*3} 0 L${this.size*3} ${this.size*3} L${this.size*2} ${this.size*2} L${this.size*2} ${this.size} L${this.size*3} 0`
          break
        case 'bottom':
          path = `M${this.size} ${this.size*2} L${this.size*2} ${this.size*2} L${this.size*3} ${this.size*3} L0 ${this.size*3} L${this.size} ${this.size*2}`
          break
        case 'center':
          path = `M${this.size} ${this.size} L${this.size*2} ${this.size} L${this.size*2} ${this.size*2} L${this.size} ${this.size*2} L${this.size} ${this.size}`
          break
      }
      return path
    },
    text() {
      return this.position.charAt(0)
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.tooth-partial-root
</style>