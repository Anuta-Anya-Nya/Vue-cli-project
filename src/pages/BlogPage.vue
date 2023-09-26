<template>
    <div>        
        <BannerPages :isShowTitle="true" :classOfBanner="classOfBanner"/>        
        <PostLatest />
        <PostList />
    </div>
</template>

<script>
import BannerPages from '../blocks/BannerPages.vue'
import PostLatest from '../blocks/PostLatest.vue'
import PostList from '../blocks/PostList.vue'



export default {
    name: 'BlogPage',
    components: {
        BannerPages,
        PostLatest,
        PostList
    },
    data() {
        return {            
            classOfBanner: "blogPage"
        };
    },

};
</script>

<style lang="scss" scoped></style>