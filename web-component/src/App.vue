<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      style="z-index: 10000"
    >
      <v-toolbar-title class="d-flex pa-2 align-center">
        Web Component
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="py-4">
        <demoComponent></demoComponent>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import demoComponent from 'demo-component/demo-component.vue'
export default {
  components: {
    demoComponent,
  },
}
</script>

<style lang="sass" scoped></style>
