<template>
  <div class="pa-4">
    bind: {{value}}
    <v-slide-group
      active-class="light-blue"
      show-arrows
      v-model="value"
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        :value="`item-${n}`"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            item: {{n}}
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  data: () => ({
    value: null,
  }),
  created() {},
}
</script>

<style lang="sass" type="text/sass" scoped></style>