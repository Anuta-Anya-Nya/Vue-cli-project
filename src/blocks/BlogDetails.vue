<template>
    <section class="blogDetails-box container">        
                    <div>
                        <BlogDetailsPost :article="postForDetails"/>
                        <BlogFilteredArticles :activeTag="activeTag" :articles="articles"/>
                    </div>  
                    <TagButtonList @targetTag="getActiveTag" />
                </section>
</template>

<script>
import TagButtonList from '@/components/TagButtonList.vue'
import BlogDetailsPost from '@/components/BlogDetailsPost.vue'
import BlogFilteredArticles from '@/components/BlogFilteredArticles.vue'
export default {
    name: 'BlogDetails',
    components: {
        TagButtonList,
        BlogDetailsPost,
        BlogFilteredArticles
    },
    props: ['postForDetails', 'articles'],
    data() {
        return {
            activeTag: '',
        }
    },
    methods: {
        getActiveTag(tag) {
            this.activeTag = tag;
        },
    },
};
</script>

<style lang="scss" scoped>
    .blogDetails-box {
    display: grid;
    grid-template-columns: minmax(100px, 800px) minmax(50px, 345px);
    gap: 4.5%;
    justify-content: space-between;
    margin-bottom: 96px;
}
</style>