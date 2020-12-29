<template>
  <div dental-chart="tooth-root">
    <div dental-chart-tooth-partial="left"></div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    
  }),
  created() {},
}
</script>

<style lang="sass" type="text/sass" scoped>
$size: 50px
div[dental-chart="tooth-root"]
  width: $size*3
  height: $size*3
  border: 1px grey solid
  position: relative
  $trapezoidBaseWidth: $size
  $trapezoidBaseHeight: $size
  $trapezoidSideWidth: $size
  &>div[dental-chart-tooth-partial]
    //border: 1px red solid
    //width: 40px
    //height: 40px
    //border-bottom: 1px solid orange
    width: $trapezoidBaseWidth
    height: $trapezoidBaseHeight
    background: red
    margin-left: $trapezoidSideWidth
    position: relative
    &::before
      content: ''
      border-right: $trapezoidSideWidth solid blue
      border-bottom: $trapezoidBaseHeight solid transparent
      position: absolute
      left: -1*$trapezoidSideWidth
      top: 0
    &::after
      content: ''
      border-left: $trapezoidSideWidth solid green
      border-bottom: $trapezoidBaseHeight solid transparent
      position: absolute
      right: -1*$trapezoidSideWidth
      top: 0
</style>