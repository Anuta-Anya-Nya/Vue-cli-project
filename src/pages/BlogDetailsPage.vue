<template>
    <div>
        <HeaderBlock />
        <BannerPages :isShowTitle="false" :classOfBanner="classOfBanner"/>
        <BlogDetails />
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
    data() {
        return {
            classOfBanner: "blogDetailsPage"
        }
    },
    
};
</script>

<style lang="scss" scoped>

</style>