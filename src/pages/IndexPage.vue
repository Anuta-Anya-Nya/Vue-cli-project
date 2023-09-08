<template>
    <div>
        <HeaderBlock />
        <BannerMainPage />
        <ProjectBlog :projectArticles="projectForIndex"/>
        <CounterBlock />
        <BlogBlock :posts="postsForIndex"/>
        <FooterBlock />
    </div>
</template>

<script>
import HeaderBlock from '../blocks/HeaderBlock.vue'
import BannerMainPage from '../blocks/BannerMainPage.vue'
import ProjectBlog from '../blocks/ProjectBlog.vue'
import CounterBlock from '../blocks/CounterBlock.vue'
import BlogBlock from '../blocks/BlogBlock.vue'
import FooterBlock from '../blocks/FooterBlock.vue'



export default {
    name: 'IndexPage',
    components: {
        HeaderBlock,
        BannerMainPage,
        ProjectBlog,
        CounterBlock,
        BlogBlock,
        FooterBlock},
    props: ['postsForIndex', 'projectForIndex'],    
};
</script>

<style lang="scss" scoped></style>