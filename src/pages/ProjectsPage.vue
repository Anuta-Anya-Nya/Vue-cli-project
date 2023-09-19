<template>
    <div>
        <BannerPages :isShowTitle="true" :classOfBanner="classOfBanner"/>
        <ProjectFilterList />        
    </div>
</template>

<script>
import BannerPages from '../blocks/BannerPages.vue'
import ProjectFilterList from '../blocks/ProjectFilterList.vue'
export default {
    name: 'ProjectsPage',
    components: {   
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