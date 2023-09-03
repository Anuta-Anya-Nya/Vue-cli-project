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
            <BlogArticle v-for="post in postsForIndex" :key="post.id" :post="post" class="blog-item" />
        </div>
    </section>
</template>

<script>
import BlogArticle from '../components/BlogArticle.vue'
export default {
    name: 'BlogBlock',
    components: { BlogArticle },
    data() {
        return {
            articles: [
                {
                    id: 1, img: 'blog1.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022'
                },
                {
                    id: 2, img: 'blog2.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022'
                },
                {
                    id: 3, img: 'blog3.jpg', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022'
                },
                {
                    id: 4, img: 'blog4.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022'
                },
                {
                    id: 5, img: 'blog5.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022'
                },
                {
                    id: 6, img: 'blog6.png', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022'
                },
                {
                    id: 7, img: 'post-latest.jpg', groupArticle: 'Interior Design', title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', simpleText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.', dataArticle: '26 December,2022'
                }
            ]
        };
    },

    computed: {
        latestPost() {
            return this.articles[this.articles.length - 1];
        },
        postsForBlog() {
            return this.articles.slice(0, this.articles.length - 1);
        },
        postsForIndex() {
            return this.articles.slice(0, 3);
        },

    },

    methods: {

    },
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
}</style>