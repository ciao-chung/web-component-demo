<template>
  <div dental-chart="root" v-if="teeth">
    <div
      v-for="(row, rowIndex) in teeth"
      dental-chart="row"
      :rowIndex="rowIndex"
      :row="row"
    >
      <tooth
        v-for="(data, columnIndex) in row"
        :key="`${rowIndex}-${columnIndex}`"
        :data="data"
        :rowIndex="rowIndex"
        :columnIndex="columnIndex"
      ></tooth>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import chart from './chart.js'
export default {
  data: () => ({
    teeth: null,
  }),
  created() {
    this.init()
  },
  methods: {
    init() {
      let teeth = [
        this.getRow(0),
        this.getRow(1),
      ]

      this.teeth = teeth
    },
    getRow(rowIndex) {
      let result = []
      for(let i=1; i<=6; i++) {
        result.push(this.getToothData(rowIndex, i))
      }

      return result
    },
    getToothData(rowIndex, columnIndex) {
      return {
        rowIndex,
        columnIndex,
        left: this.getPartialData(),
        top: this.getPartialData(),
        right: this.getPartialData(),
        bottom: this.getPartialData(),
        center: this.getPartialData(),
        'outer-top': this.getPartialData(),
        'outer-bottom': this.getPartialData(),
      }
    },
    getPartialData() {
      return {
        marked: false, // 是否已標記過
        backgroundColor: 'white',
        symbol: null,
      }
    },
  },
  components: {
    tooth: () => import('./_tooth.vue'),
  },
}
</script>

<style lang="sass" type="text/sass">
div[dental-chart="root"]
  div[dental-chart="row"]
    display: flex
    flex-wrap: wrap

*[dental-chart-partial="text"]
  user-select: none
</style>