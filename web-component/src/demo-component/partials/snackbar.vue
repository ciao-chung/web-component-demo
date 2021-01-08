<template>
  <v-snackbar
    v-model="snackbarStatus"
    timeout="3000"
  >
    {{snackbarText}}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="green"
        text
        v-bind="attrs"
        @click="snackbarStatus = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="babel" type="text/babel">
import Vue from 'vue'
export default {
  data: () => ({
    snackbarText: false,
    snackbarStatus: false,
  }),
  created() {
    this.initSnackbar()
  },
  methods: {
    initSnackbar() {
      Vue.prototype.$snackbar = (text) => {
        this.snackbarText = text
        this.snackbarStatus = true
      }
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>