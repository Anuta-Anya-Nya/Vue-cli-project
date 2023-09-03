<template>
    <section class="blog container">
        <div class="heading blog__heading">
            <h3 class="heading__title">Articles & News</h3>
            <p class="heading__text">
                It is a long established fact that a reader will be distracted by
                the of readable content of a page when lookings at its layouts the
                points of using.
            </p>
        </div>
        <div class="blog__box">
            <BlogArticle v-for="post in posts" :key="post.id" :post="post" class="blog-item" />
        </div>
    </section>
</template>

<script>
import BlogArticle from '../components/BlogArticle.vue'
export default {
    name: 'BlogBlock',
    components: { BlogArticle },
    props:['posts'],    
};
</script>

<style lang="scss" scoped>
.blog {
    margin-bottom: 66px;

    &__heading {
        margin-bottom: 52px;
    }

    &__box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
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
</style>