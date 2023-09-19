<template>
    <section class="articles container">
        <h3 class="articles__title">Articles & News</h3>

        <div class="blog__box articles__margin">         
          <BlogArticle v-for="post in postsForBlog"
            :key="post.id"
            :post="post"
            class="blog-item"/>
        </div>
        <PaginationComponent :whatPage="`/blog`" :quantityPages="quantityPages"/>
      </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogArticle from '../components/BlogArticle.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
export default {
    name: 'PostList',
    components: {BlogArticle, PaginationComponent}, 
    data() {
        return {
            quantityPages: 3,
        }
    },   
    computed: {
        ...mapGetters(['postsForBlog'])
    }   
};
</script>

<style lang="scss" scoped>
.articles {
    margin-bottom: 200px;

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 30px;
    }

    &__margin {
        margin-bottom: 21px;
    }

}
.blog__box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

</style>