<template>
  <section class="project container">
    <div class="heading">
      <h3 class="heading__title">Follow Our Projects</h3>
      <p class="heading__text">
        It is a long established fact that a reader will be distracted by
        the of readable content of page lookings at its layouts points.
      </p>
    </div>
    <div class="project__box">
      <ProjectArticle v-for="item in projectForIndex" :key="item.id" :item='item' :page="page" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectArticle from '../components/ProjectArticle.vue';
export default {

  name: 'ProjectBlog',
  components: { ProjectArticle },

  data() {
    return {
      page: 'homePage',
    };
  },

  computed: {
    ...mapGetters(['projectForIndex'])
  },
};
</script>

<style lang="scss" scoped>
.heading {
  max-width: 737px;
  margin: 93px auto;

  &__title {
    color: #292F36;
    text-align: center;
    font-family: 'DM Serif Display', serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
  }

  &__text {
    color: #4D5053;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }
}

.project {
  margin-bottom: 96px;

  &__box {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    column-gap: 104px;
    row-gap: 56px;
  }

}
</style>