<template></template>

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
    textElement: null,
    $node: null,
    selected: false,
  }),
  mounted() {
    this.draw()
    this.drawSymbol()
  },
  methods: {
    async draw(attr) {
      this.element = this.paper.path(this.path)
      this.element.dblclick(() => this.onDoubleClick())
      this.element.mouseover(() => this.onMouseover())
      this.element.mouseout(() => this.onMouseout())
      this.element.click(() => this.onClick())

      await this.$nextTick()
      this.$node = this.element.node
      $(this.element.node).attr('uid', this.uid)
      $(this.element.node).attr('position', this.position)
      this.element.attr({
        ...this.baseAttr,
        ...attr,
      })
    },
    async drawSymbol() {
      if(!this.text) return

      let x, y
      switch (this.position) {
        case 'outer-top':
          x = this.size*1.5
          y = this.size*0.5
          break
        case 'outer-bottom':
          x = this.size*1.5
          y = this.size*4.5
          break
        case 'left':
          x = this.size*0.5
          y = this.size*2.5
          break
        case 'top':
          x = this.size*1.5
          y = this.size*1.5
          break
        case 'right':
          x = this.size*2.5
          y = this.size*2.5
          break
        case 'bottom':
          x = this.size*1.5
          y = this.size*3.5
          break
      }
      if(x && y) {
        this.textElement = this.paper.text(x, y, this.text)
      }
    },
    onDoubleClick() {
      this.$emit('toggleSelectAll')
    },
    onClick(status) {
      this.selected = status != undefined ? status : !this.selected
      if(this.selected) {
        $(this.$node).attr({
          stroke: 'red',
          'stroke-dasharray': 0,
          'stroke-width': 3,
        })
      }

      else {
        $(this.$node).attr({
          stroke: !this.isOuter ? 'black' : null,
          'stroke-dasharray': 0,
          'stroke-width': 1,
        })
      }
    },
    onMouseover() {
      if(this.selected) return
      if(this.isOuter) {
        $(this.$node).attr({
          stroke: '#ff80ab',
          fill: '#f3c2d2',
          'stroke-dasharray': 5,
        })
      }
    },
    onMouseout() {
      if(this.selected) return
      if(this.isOuter) {
        $(this.$node).attr({
          stroke: 'white',
          fill: this.backgroundColor,
          'stroke-dasharray': 5,
        })
      }
    },
    getPathString(points, close = true) {
      let path = ``
      let startX = null
      let startY = null
      for(const index in points) {
        const point = points[index]
        const x = point[0]
        const y = point[1]
        if(index == 0) {
          startX = x
          startY = y
          path = `M ${this.size*x} ${this.size*y} `
        }

        else {
          path += `L ${this.size*x} ${this.size*y} `
        }
      }

      if(!close) return path
      path += `L ${this.size*startX} ${this.size*startY} `
      return path
    },
  },
  computed: {
    createOuterTop() {
      return this.rowIndex%2 == 0
    },
    createOuterBottom() {
      return this.rowIndex%2 == 1
    },
    isOuter() {
      return new RegExp(/outer/g).test(this.position)
    },
    baseAttr() {
      let attr = {
        cursor: 'pointer',
        fill: this.backgroundColor,
      }

      if(this.isOuter) {
        attr.stroke = 'white'
        attr['stroke-dasharray'] = '-'
      }

      return attr
    },
    uid() {
      return `${this.rowIndex}-${this.columnIndex}`
    },
    path() {
      let path = null
      switch (this.position) {
        case 'left':
          path = this.getPathString([ [0, 1], [1, 2], [1, 3], [0, 4] ])
          break
        case 'top':
          path = this.getPathString([ [0, 1], [3, 1], [2, 2], [1, 2] ])
          break
        case 'right':
          path = this.getPathString([ [2, 2], [3, 1], [3, 4], [2, 3] ])
          break
        case 'bottom':
          path = this.getPathString([ [0, 4], [1, 3], [2, 3], [3, 4] ])
          break
        case 'center':
          path = this.getPathString([ [1, 2], [2, 2], [2, 3], [1, 3] ])
          break
        case 'outer-top':
          if(this.createOuterTop) {
            path = this.getPathString([ [0, 1], [1, 0], [2, 0], [3, 1] ], false)
          }
          break
        case 'outer-bottom':
          if(this.createOuterBottom) {
            path = this.getPathString([ [0, 4], [1, 5], [2, 5], [3, 4] ], false)
          }
          break
      }
      return path
    },
    text() {
      if(!this.marked) return null
      if(!this.createOuterTop && this.position === 'outer-top') return null
      if(!this.createOuterBottom && this.position === 'outer-bottom') return null
      return this.position.charAt(0)
    },
    backgroundColor() {
      if(!this.marked) return null
      return 'skyblue'
    },
    marked() {
      return this.partialData.marked === true
    },
    partialData() {
      return this.data[this.position] || {}
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.tooth-partial-root
</style>