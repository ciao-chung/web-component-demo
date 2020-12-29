<template>
  <div class="tooth-partial-root">

  </div>
</template>

<script lang="babel" type="text/babel">
import raphael from 'raphael'
export default {
  props: {
    size: Number,
    
    // 位置: top, bottom, left, right, center
    position: String,
  },
  data: () => ({
    paper: null,
    offset: {},
    element: null,
    hover: false,
  }),
  beforeDestroy() {
    this.clearAll()
  },
  mounted() {
    this.draw()
  },
  methods: {
    clearAll() {
      if(!this.paper) return
      if(typeof this.paper.clear != 'function') return;
      this.paper.clear()
    },
    async draw(hover = false) {
      this.clearAll()
      this.offset = $(this.$el).offset()
      this.paper = new raphael(this.offset.left, this.offset.top, $(this.$el).width(), $(this.$el).height())
      this.paper.clear()
      this.element = this.paper.path(this.path)
      this.element.hover((el) => this.onHover(el))
      this.element.click((el) => this.onClick(el))

      await this.$nextTick()
      $(this.element.node).attr('position', this.position)
      this.element.attr({
        fill: !hover ? 'white' : 'skyblue',
      })
    },
    onHover(el) {
      console.warn($(el.target), $(el.target).attr('position'))
      // this.draw(true)
    },
    onClick(el) {

    },
  },
  computed: {
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
  width: 100%
  height: 100%
  position: absolute
</style>