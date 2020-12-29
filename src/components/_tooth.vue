<template>
  <div
    dental-chart="tooth-root"
    :style="rootStyle"
  >
<!--    <toothPartial :size="partialBaseSize" position="left"></toothPartial>-->
<!--    <toothPartial :size="partialBaseSize" position="top"></toothPartial>-->
<!--    <toothPartial :size="partialBaseSize" position="center"></toothPartial>-->
<!--    <toothPartial :size="partialBaseSize" position="right"></toothPartial>-->
<!--    <toothPartial :size="partialBaseSize" position="bottom"></toothPartial>-->
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
  }),
  beforeDestroy() {
    this.clearAll()
  },
  mounted() {
    this.drawPartials()
  },
  methods: {
    clearAll() {
      if(this.leftPad && typeof this.leftPad.clear == 'function') {
        this.leftPad.clear()
      }

      if(this.topPad && typeof this.topPad.clear == 'function') {
        this.topPad.clear()
      }

      if(this.rightPad && typeof this.rightPad.clear == 'function') {
        this.rightPad.clear()
      }

      if(this.bottomPad && typeof this.bottomPad.clear == 'function') {
        this.bottomPad.clear()
      }

      if(this.centerPad && typeof this.centerPad.clear == 'function') {
        this.centerPad.clear()
      }
    },
    async drawPartials() {
      this.clearAll()
      await this.$nextTick()
      this.offset = $(this.$el).offset()
      this.drawLeft()
      this.drawTop()
      this.drawRight()
      this.drawBottom()
      this.drawCenter()
    },
    drawLeft() {
      const path = `M0 0 L${this.size} ${this.size} L${this.size} ${this.size*2} L0 ${this.size*3} L0 0`
      this.leftPad = new raphael(this.offset.left, this.offset.top, this.toothSize, this.toothSize)
      this.leftPad.clear()
      this.leftPad
          .path(path)
          .hover(() => this.onHover())
          .click(() => this.onClick())
    },
    drawTop() {
      const path = `M0 0 L${this.size*3} 0 L${this.size*2} ${this.size} L${this.size} ${this.size} L0 0`
      this.topPad = new raphael(this.offset.left, this.offset.top, this.toothSize, this.toothSize)
      this.topPad.clear()
      this.topPad
          .path(path)
          .hover(() => this.onHover())
          .click(() => this.onClick())
    },
    drawRight() {
      const path = `M${this.size*3} 0 L${this.size*3} ${this.size*3} L${this.size*2} ${this.size*2} L${this.size*2} ${this.size} L${this.size*3} 0`
      this.rightPad = new raphael(this.offset.left, this.offset.top, this.toothSize, this.toothSize)
      this.rightPad.clear()
      this.rightPad
          .path(path)
          .hover(() => this.onHover())
          .click(() => this.onClick())
    },
    drawBottom() {
      const path = `M${this.size} ${this.size*2} L${this.size*2} ${this.size*2} L${this.size*3} ${this.size*3} L0 ${this.size*3} L${this.size} ${this.size*2}`
      this.bottomPad = new raphael(this.offset.left, this.offset.top, this.toothSize, this.toothSize)
      this.bottomPad.clear()
      this.bottomPad
          .path(path)
          .hover(() => this.onHover())
          .click(() => this.onClick())
    },
    drawCenter() {
      const path = `M${this.size} ${this.size} L${this.size*2} ${this.size} L${this.size*2} ${this.size*2} L${this.size} ${this.size*2} L${this.size} ${this.size}`
      this.centerPad = new raphael(this.offset.left, this.offset.top, this.toothSize, this.toothSize)
      this.centerPad.clear()
      this.centerPad
          .path(path)
          .hover(() => this.onHover())
          .click(() => this.onClick())
    },
    onHover() {
      console.warn('onHover')
    },
    onClick() {
      console.warn('onClick')
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
    partialBaseSize() {
      return this.toothSize
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