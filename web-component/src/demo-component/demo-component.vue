<template>
  <v-app>
    <v-main>
      <div demo-compoent="root" class="pa-4 elevation-6">
        <div class="display-1">Demo Web Component</div>

        <div class="my-4">
          <v-btn color="green" class="ma-a" @click="setupStoreData">
            Get Store Data
          </v-btn>

          <div class="my-2 body-1 font-weight-light">
            storeData: {{storeData}}
          </div>
        </div>

        <div class="d-flex">
          <div v-for="i in 5" class="ma-4 orange--text">
            <div class="font-weight-light subtitle-1 flex-div pa-2 elevation-6">
              flex div {{i}}
            </div>
          </div>
        </div>

        <partialImage></partialImage>
        <slideGroup></slideGroup>

        <snackbar></snackbar>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="babel" type="text/babel">
import snackbar from './partials/snackbar.vue'
import './kernel.js'
import store from 'store'
import vuetify from 'plugins/vuetify'
export default {
  store,
  vuetify,
  methods: {
    setupStoreData() {
      const now = (new Date()).toLocaleString()
      this.$store.dispatch('setData', {
        foo: 'bar',
        now: now,
      })
      this.$snackbar(now)
    },
  },
  computed: {
    storeData() {
      return this.$store.getters['data']
    },
  },
  components: {
    snackbar,
    partialImage: () => import('./partials/image.vue'),
    slideGroup: () => import('./partials/slideGroup.vue'),
  },
}
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
<style lang="sass" type="text/sass" scoped>
*[demo-compoent="root"]
  border: 1px lightblue solid
  border-radius: 10px
.flex-div
  border: 1px lightgray solid
</style>