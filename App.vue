<template>
  <div id="app">
    <appHeader></appHeader>
    <mainContent></mainContent>
    <appFooter></appFooter>
  </div>
</template>

<script>

import appHeader from './header.vue'
import mainContent from './content.vue'
import appFooter from './footer.vue'

export default {

  data() {
    return {

    }
  },

  components: {
    appHeader,
    mainContent,
    appFooter
  },

  methods: {

  }

}
</script>

<style lang="scss">

</style>
