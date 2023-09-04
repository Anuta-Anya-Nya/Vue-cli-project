<template>
    <div>
        <HeaderBlock />
        <BannerPages :isShowTitle="false"/>
        <BlogDetails :articles="articles" :postForDetails="postForDetails"/>
        <FooterBlock />
    </div>
</template>

<script>
import HeaderBlock from '../blocks/HeaderBlock.vue'
import BannerPages from '../blocks/BannerPages.vue'
import FooterBlock from '../blocks/FooterBlock.vue'
import BlogDetails from '../blocks/BlogDetails.vue'
export default {
    name: 'BlogDetailsPage',
    components: {
        HeaderBlock,          
        FooterBlock,
        BannerPages,
        BlogDetails
    },
    props: ['articles', 'postForDetails'],
    
};
</script>

<style lang="scss" scoped>

</style>