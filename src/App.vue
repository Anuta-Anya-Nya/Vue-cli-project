<template>
  <div id="app">
    <HeaderBlock />
  </div>
</template>

<script>
import HeaderBlock from './blocks/HeaderBlock.vue'


export default {
  name: 'App',
  components: {
    HeaderBlock
  }
}
</script>

<style lang="scss">
#app {
  margin-top: 53px;
}

  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

</style>
