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
    $node: null,
    selected: false,
  }),
  mounted() {
    this.draw()
  },
  methods: {
    async draw(attr) {
      this.element = this.paper.path(this.path)
      this.element.mouseover((el) => this.onMouseover(el))
      this.element.mouseout((el) => this.onMouseout(el))
      this.element.hover((el) => this.onHover(el))
      this.element.click((el) => this.onClick(el))

      await this.$nextTick()
      this.$node = this.element.node
      $(this.element.node).attr('uid', this.uid)
      $(this.element.node).attr('position', this.position)
      this.element.attr({
        ...this.baseAttr,
        ...attr,
      })
    },
    onHover(el) {

    },
    onClick(el) {
      this.selected = !this.selected
      console.warn(this.$node)
      if(this.selected) {
        $(this.$node).attr({
          stroke: 'red',
          'stroke-dasharray': 0,
        })
      }

      else {
        $(this.$node).attr({
          stroke: 'black',
          'stroke-dasharray': 0,
        })
      }
    },
    onMouseover(el) {
      if(this.isOuter) {
        $(this.$node).attr({
          stroke: '#ff80ab',
          fill: '#f3c2d2',
          'stroke-dasharray': 5,
        })
      }

    },
    onMouseout(el) {
      if(this.isOuter) {
        $(this.$node).attr({
          stroke: 'white',
          fill: 'white',
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
        fill: 'white',
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
      return this.position.charAt(0)
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.tooth-partial-root
</style>