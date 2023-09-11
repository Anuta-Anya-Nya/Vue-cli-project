<template>
    <div>
        <HeaderBlock />
        <BannerPages :isShowTitle="true" :classOfBanner="classOfBanner"/>
        <ProjectFilterList />
        <FooterBlock />
        
    </div>
</template>

<script>
import HeaderBlock from '../blocks/HeaderBlock.vue';
import FooterBlock from '../blocks/FooterBlock.vue';
import BannerPages from '../blocks/BannerPages.vue'
import ProjectFilterList from '../blocks/ProjectFilterList.vue'
export default {
    name: 'ProjectsPage',
    components: {
        HeaderBlock,          
        FooterBlock,
        ProjectFilterList,
        BannerPages,
    },
    data() {
        return {
            classOfBanner: "projectsPage"
        };
    },
    
};
</script>

<style lang="scss" scoped>

</style>