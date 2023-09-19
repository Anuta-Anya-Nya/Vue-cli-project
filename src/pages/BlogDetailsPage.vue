<template>
    <div>
        <BannerPages :isShowTitle="false" :classOfBanner="classOfBanner"/>
        <BlogDetails />
    </div>
</template>

<script>
import BannerPages from '../blocks/BannerPages.vue'
import BlogDetails from '../blocks/BlogDetails.vue'
export default {
    name: 'BlogDetailsPage',
    components: {
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