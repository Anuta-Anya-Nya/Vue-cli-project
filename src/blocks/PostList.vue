<template>
    <section class="articles container">
        <h3 class="articles__title">Articles & News</h3>

        <div class="blog__box articles__margin">
            <BlogArticle v-for="post in splitArticlesByPage" :key="post.id" :post="post" class="blog-item" />
        </div>
        <PaginationComponent :whatPage="`/blog`" :quantityPages="quantityPages" @selectPage="selectPage" />
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogArticle from '../components/BlogArticle.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
export default {
    name: 'PostList',
    components: { BlogArticle, PaginationComponent },
    data() {
        return {
            currentPage: 1,
            countProjectsOnList: 6,
        }
    },
    computed: {
        ...mapGetters(['postsForBlog']),
        splitArticlesByPage() {
            const startIndex = (this.currentPage - 1) * this.countProjectsOnList;
            const endIndex = startIndex + this.countProjectsOnList;
            return this.postsForBlog.slice(startIndex, endIndex);
        },
        quantityPages() {
            return Math.ceil(this.postsForBlog.length / this.countProjectsOnList)
        }

    },
    methods: {
        selectPage(pageValue) {
            this.currentPage = +pageValue;
        },
    },
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