<template>
  <section class="blog-banner blog-banner-blog" :class="classOfBanner">
    <div v-show="isShowTitle" class="blog-banner__text">
      <h3 class="blog-banner__title">Articles & News</h3>
      <nav class="breadCrumb">
        <router-link to="/main" class="breadCrumb__link">Home</router-link>
        <router-link :to="currentPath" class="breadCrumb__link">{{ currentPage }}</router-link>
        
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerPages",
  props: ["isShowTitle", "classOfBanner"],
  data() {
    return {
    };
  },
  
  computed: {
    currentPage() {      
      const page = this.$route.path.split('/')[1];
      return page[0].toUpperCase() + page.slice(1)      
    },
    currentPath() {      
        return this.$route.path
    }
  },
};
</script>

<style lang="scss" scoped>
.blog-banner {
  min-height: 356px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;

  &__text {
    background-color: #fff;
    border-radius: 37px 37px 0px 0px;
    padding: 41px 78px;
  }

  &__title {
    color: #292f36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
}
.projectDetailsPage {
  background: url(../../public/banner-proj-details.jpg) no-repeat bottom center;
}
.blogPage {
  background: url(@/assets/img/blog-banner.jpg) no-repeat bottom center;
}
.blogDetailsPage {
  background: url(@/assets/img/banner-blogdetails.jpg) no-repeat bottom center;
}
.projectsPage {
  background: url(@/assets/img/banner-project.jpg) no-repeat bottom center;
}

.breadCrumb {
  text-align: center;

  &__link {
    color: #4d5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;

    &:not(:last-child):after {
      content: "/";
      padding: 0 10px;
      color: #4d5053;
    }
  }
}
</style>
