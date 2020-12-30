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
      const items = []
      this.$bus.$emit(this.$CONSTANT.EVENT_GET_SELECTED, items)
      await this.$nextTick()
      console.warn('items', items)
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[dental-chart="items-root"]
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