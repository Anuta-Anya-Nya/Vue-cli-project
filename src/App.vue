<template>
  <div id="app">
    <!-- <IndexPage :postsForIndex="postsForIndex" :projectForIndex='projectForIndex'/>    -->
    <!-- <BlogPage :latestPost="latestPost" :postsForBlog="postsForBlog"/>  -->
    <!-- <BlogDetailsPage :articles="articles" :postForDetails="postForDetails"/> -->
    <ProjectsPage :projects="projectArticles"/>
  </div>
</template>

<script>
// import IndexPage from './pages/IndexPage.vue'
// import BlogPage from './pages/BlogPage.vue'
// import BlogDetailsPage from './pages/BlogDetailsPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'

export default {
  name: 'App',
  components: {
    // IndexPage,
    // BlogPage,
    // BlogDetailsPage,    
    ProjectsPage
  }, 
  data() {
        return {
            // bannerImg: "@/assets/img/blog-banner.jpg",
            articles: [
                {
                    id: 1, img: 'blog1.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Kitchen']
                },
                {
                    id: 2, img: 'blog2.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Bedroom']
                },
                {
                    id: 3, img: 'blog3.jpg', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Building']
                },
                {
                    id: 4, img: 'blog4.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Architecture']
                },
                {
                    id: 5, img: 'blog5.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Kitchen Planning', 'Kitchen']
                },
                {
                    id: 6, img: 'blog6.png', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Bedroom']
                },
                {
                    id: 7, img: 'post-latest.jpg', groupArticle: 'Interior Design', title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', simpleText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.', dataArticle: '26 December,2022', tag: ['Kitchen Planning', 'Kitchen']
                }
            ],
            projectArticles: [        
        { id: 1, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project1.jpg', classHomepage: 'borderTopRight', category: 'Kitchan', classProjectPage: 'project-list-small' },
        { id: 2, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project2.jpg', classHomepage: 'borderTopLeft', category: 'Kitchan', classProjectPage: 'project-list-small' },
        { id: 3, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project3.jpg', classHomepage: 'borderBotRight', category: 'Bathroom', classProjectPage: 'project-list-small' },
        { id: 4, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project4.jpg', classHomepage: 'borderBotLeft', category: 'Kitchan', classProjectPage: 'project-list-small' },
        { id: 5, title: 'Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj1.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big'},
        { id: 6, title: 'Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj2.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small' },
        { id: 7, title: 'Classic Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj3.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small' },
        { id: 8, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj4.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big' },
        { id: 9, title: 'Minimal Bedroom table', text: 'Decor / Artchitecture', img: 'proj5.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big' },
        { id: 10, title: 'System Table', text: 'Decor / Artchitecture', img: 'proj6.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small' },
        { id: 11, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj7.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small' },   
        { id: 12, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj8.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small' },     
      ],
            
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
        postForDetails(){ 
            return this.articles[this.articles.length - 1]; //какая-то выбранная пользователем статья, допустим последняя из массива статей
        },
        projectForIndex(){
            return this.projectArticles.slice(0, 4);
        }


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
