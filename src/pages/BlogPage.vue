<template>
    <div>
        <HeaderBlock />
        <!-- <BannerPages :bannerImg="bannerImg"/> -->
        <BannerPages />        
        <PostLatest :post="latestPost"/>
        <PostList :postsForBlog="postsForBlog"/>
        <FooterBlock />
    </div>
</template>

<script>
import HeaderBlock from '../blocks/HeaderBlock.vue'
import BannerPages from '../blocks/BannerPages.vue'
import FooterBlock from '../blocks/FooterBlock.vue'
import PostLatest from '../blocks/PostLatest.vue'
import PostList from '../blocks/PostList.vue'



export default {
    name: 'BlogPage',
    components: {
        HeaderBlock,
        BannerPages,
        FooterBlock,
        PostLatest,
        PostList
    },
    props: ['latestPost', 'postsForBlog'],
    data() {
        return {
            // bannerImg: "@/assets/img/blog-banner.jpg"
            
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>