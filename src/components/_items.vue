<template>
  <div dental-chart="items-root">
    <button class="green" @click="setupStyle">
      style1
    </button>

    <button class="pink" @click="setupStyle">
      style1
    </button>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    
  }),
  created() {},
  methods: {
    async setupStyle() {
      const teeth = []
      this.$bus.$emit(this.$CONSTANT.EVENT_GET_SELECTED, teeth)
      await this.$nextTick()
      for(const tooth of teeth) {
        this.handleToothData(tooth)
      }
    },
    handleToothData(tooth) {
      console.warn('tooth', tooth, tooth.selectAll)
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[dental-chart="items-root"]
  margin: 20px 0
  button
    background-color: white
    padding: 5px 10px
    border: 1px grey solid
    outline: none
    margin-right: 10px
    margin-bottom: 10px
    cursor: pointer
  button.green
    background-color: #00a65a
    color: white
    &:hover
      background-color: lighten(#00a65a, 10%)
  button.pink
    background-color: #de6764
    color: white
    &:hover
      background-color: lighten(#de6764, 10%)
</style>