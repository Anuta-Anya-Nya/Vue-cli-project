<template>
    <div>
        <HeaderBlock />
        <BannerPages :isShowTitle="false" :backgroundImg="backgroundImg"/>
        
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