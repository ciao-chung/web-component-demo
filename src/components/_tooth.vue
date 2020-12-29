<template>
  <div
    dental-chart="tooth-root"
    :style="rootStyle"
  >
  </div>
</template>

<script lang="babel" type="text/babel">
import raphael from 'raphael'
export default {
  props: {
    index: Number,
  },
  data: () => ({
    toothSize: 90,
    leftPad: null,
    topPad: null,
    rightPad: null,
    bottomPad: null,
    centerPad: null,
    offset: {},
    positions: {
      left: {
        hover: false,
      },
      top: {
        hover: false,
      },
      right: {
        hover: false,
      },
      bottom: {
        hover: false,
      },
      center: {
        hover: false,
      },
    },
  }),
  beforeDestroy() {
    this.clearAll()
  },
  mounted() {
    this.drawPartials()
  },
  methods: {
    clearAll() {
      for(const position in this.positions) {
        if(this[`${position}Pad`] && typeof this[`${position}Pad`].clear == 'function') {
          this[`${position}Pad`].clear()
        }
      }
    },
    async drawPartials() {
      this.clearAll()
      await this.$nextTick()
      this.offset = $(this.$el).offset()
      for(const position in this.positions) {
        await this.drawPartial(position)
      }
    },
    async drawPartial(position) {
      let path = null
      switch (position) {
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

      this[`${position}Pad`] = new raphael(this.offset.left, this.offset.top, this.toothSize, this.toothSize)
      this[`${position}Pad`].clear()
      const element = this[`${position}Pad`].path(path)
      console.warn('element', position, element)
      element.hover((el) => this.onHover(el))
      element.click((el) => this.onClick(el))

      await this.$nextTick()
      $(element.node).attr('position', position)
      element.attr({
        fill: 'red',
      })
    },
    onHover(el) {
      console.warn('onHover', el.target, $(el.target).attr('position'))
    },
    onClick(el) {
      console.warn('onClick', el.target, $(el.target).attr('position'))
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
  //border: 1px red solid
  position: relative
</style>