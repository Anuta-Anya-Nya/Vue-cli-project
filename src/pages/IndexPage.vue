<template>
  <div>
    <BannerMainPage />
    <ProjectBlog />
    <CounterBlock />
    <BlogBlock />
  </div>
</template>

<script>
import BannerMainPage from "../blocks/BannerMainPage.vue";
import ProjectBlog from "../blocks/ProjectBlog.vue";
import CounterBlock from "../blocks/CounterBlock.vue";
import BlogBlock from "../blocks/BlogBlock.vue";

export default {
  name: "IndexPage",
  components: {
    BannerMainPage,
    ProjectBlog,
    CounterBlock,
    BlogBlock,
  },
};
</script>

<style lang="scss" scoped></style>
