<template>
  <div class="tooth-partial-root">
    <div class="foobar"></div>
    <canvas
      class="tooth-partial"
      :position="position"
    ></canvas>

    <canvas
      class="tooth-partial-text"
      :position="position"
    ></canvas>
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
    textCtx: null,
    ctx: null,
    raphael: null,
  }),
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      console.warn($(this.$el))
      return
      this.raphael = new raphael($(this.$el))
      this.raphael
          .path(`M 0 0 L${this.size*3} 0 L${this.size*2} ${this.size} L${this.size} ${this.size} L0 0`)
          .hover(() => {
            console.warn(666)
          })
      return
      this.ctx = $(this.$el).find('.tooth-partial')[0].getContext('2d')
      this.textCtx = $(this.$el).find('.tooth-partial-text')[0].getContext('2d')
      this.textCtx.font = `${this.size}px Arial`
      this.textCtx.fillStyle = 'grey'
      this.textCtx.textAlign = 'center'
      this.textCtx.textBaseline = 'middle'
      this[this.position]() // 依照類型畫出區塊
      this.ctx.fill()
      this.ctx.stroke()
    },
    left() {
      this.ctx.fillStyle = 'pink'
      this.textCtx.fillText(this.text, this.size*0.5, this.size*1.5)
      this.ctx.beginPath()
      this.ctx.moveTo(0, 0)
      this.ctx.lineTo(this.size, this.size)
      this.ctx.lineTo(this.size, this.size*2)
      this.ctx.lineTo(0, this.size*3)
      this.ctx.lineTo(0, 0)
    },
    top() {
      this.textCtx.fillText(this.text, this.size*1.5, this.size/2)
      this.ctx.fillStyle = 'yellow'
      this.ctx.beginPath()
      this.ctx.moveTo(0, 0)
      this.ctx.lineTo(this.size*3, 0);
      this.ctx.lineTo(this.size*2, this.size)
      this.ctx.lineTo(this.size, this.size)
      this.ctx.lineTo(0, 0)
    },
    center() {
      this.textCtx.fillText(this.text, this.size*1.5, this.size*1.5)
      this.ctx.fillStyle = 'orange'
      this.ctx.beginPath()
      this.ctx.moveTo(this.size, this.size)
      this.ctx.lineTo(this.size*2, this.size)
      this.ctx.lineTo(this.size*2, this.size*2)
      this.ctx.lineTo(this.size, this.size*2)
      this.ctx.lineTo(this.size, this.size)
    },
    right() {
      this.ctx.fillStyle = 'lightblue'
      this.textCtx.fillText(this.text, this.size*2.5, this.size*1.5)
      this.ctx.beginPath()
      this.ctx.moveTo(this.size*3, 0)
      this.ctx.lineTo(this.size*2, this.size)
      this.ctx.lineTo(this.size*2, this.size*2)
      this.ctx.lineTo(this.size*3, this.size*3)
      this.ctx.lineTo(this.size*3, 0)
    },
    bottom() {
      this.ctx.fillStyle = 'lightgreen'
      this.ctx.beginPath()
      this.ctx.moveTo(0, this.size*3)
      this.textCtx.fillText(this.text, this.size*1.5, this.size*2.5)
      this.ctx.lineTo(this.size, this.size*2)
      this.ctx.lineTo(this.size*2, this.size*2)
      this.ctx.lineTo(this.size*3, this.size*3)
      this.ctx.lineTo(0, this.size*3)
    },
  },
  computed: {
    text() {
      return this.position.charAt(0)
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.tooth-partial-root
  position: relative
  .tooth-partial
    position: absolute
  .tooth-partial-text
    position: absolute
</style>