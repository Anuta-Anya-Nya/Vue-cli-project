<template>
  <li class="blogsList__li">
    <router-link :to="`/blogdetails/${article.id}`" class="blogsList__text">{{
      article.title
    }}</router-link>
  </li>
</template>

<script>
export default {
  name: "ArticleFilteredForTag",
  props: ["article"],
};
</script>

<style lang="scss" scoped>
.blogsList {
  &__text {
    color: #4d5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }

  &__li:not(:last-of-type) {
    margin-bottom: 32px;
  }

  &__li:last-of-type {
    margin-bottom: 44px;
  }
}
</style>
