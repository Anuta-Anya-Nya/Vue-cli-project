<template>
  <div id="app">
    <!-- <IndexPage />    -->
    <!-- <BlogPage />  -->
    <!-- <BlogDetailsPage /> -->
    <!-- <ProjectsPage /> -->
    <ProjectDetailsPage />
  </div>
</template>

<script>
// import IndexPage from './pages/IndexPage.vue'
// import BlogPage from './pages/BlogPage.vue'
// import BlogDetailsPage from './pages/BlogDetailsPage.vue'
// import ProjectsPage from './pages/ProjectsPage.vue'
import ProjectDetailsPage from './pages/ProjectDetailsPage.vue'

export default {
  name: 'App',
  components: {
    // IndexPage,
    // BlogPage,
    // BlogDetailsPage,    
    // ProjectsPage,
    ProjectDetailsPage
  },   

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
