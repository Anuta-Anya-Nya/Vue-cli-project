<template>
    <div>
        <HeaderBlock />
        <BannerPages :isShowTitle="false" :classOfBanner="classOfBanner"/>
        
        <FooterBlock />
    </div>
</template>

<script>
import HeaderBlock from '../blocks/HeaderBlock.vue'
import BannerPages from '../blocks/BannerPages.vue'
import FooterBlock from '../blocks/FooterBlock.vue'

export default {
    name: 'ProjectDetailsPage',
    components: {
        HeaderBlock,          
        FooterBlock,
        BannerPages,
        
    },

    data() {
        return {
            classOfBanner: 'projectDetailsPage',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>