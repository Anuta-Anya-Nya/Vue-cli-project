<template>
    <div>
        
        <BannerPages :isShowTitle="false" :classOfBanner="classOfBanner"/>
        <ProjectDetails />
        
    </div>
</template>

<script>
import BannerPages from '../blocks/BannerPages.vue'
import ProjectDetails from '../blocks/ProjectDetails.vue'

export default {
    name: 'ProjectDetailsPage',
    components: {
        BannerPages,
        ProjectDetails
        
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