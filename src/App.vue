<template>
  <div id="app">
    <chart></chart>
  </div>
</template>

<script>
export default {
  components: {
    chart: () => import('@/components/chart.vue'),
  },
}
</script>

<style lang="sass"></style>
