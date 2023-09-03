<template>
  <div id="app">
    <!-- <IndexPage :postsForIndex="postsForIndex"/>    -->
    <!-- <BlogPage :latestPost="latestPost" :postsForBlog="postsForBlog"/>  -->
    <BlogDetails />
  </div>
</template>

<script>
// import IndexPage from './pages/IndexPage.vue'
// import BlogPage from './pages/BlogPage.vue'
import BlogDetails from './pages/BlogDetails.vue'

export default {
  name: 'App',
  components: {
    // IndexPage,
    // BlogPage,
    BlogDetails,    
  }, 
  data() {
        return {
            // bannerImg: "@/assets/img/blog-banner.jpg",
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
