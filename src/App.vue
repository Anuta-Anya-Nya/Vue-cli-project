<template>
  <div id="app">
    <HeaderBlock />
    <main>
      <router-view />
    </main>
    <FooterBlock v-show="showFooter"/>
  </div>
</template>

<script>
import HeaderBlock from "@/blocks/HeaderBlock.vue";
import FooterBlock from "@/blocks/FooterBlock.vue";
export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
  },
  computed: {
    showFooter(){
      console.log(this.$routes);
      return false;
    }
  },
  mounted() {
    console.log(this.$route);
  },
};
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
  padding-left: 0px;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
