<template>
    <div>
        <HeaderBlock />
        <ProjectFilterList :projects="projects"/>
        <FooterBlock />
        
    </div>
</template>

<script>
import HeaderBlock from '../blocks/HeaderBlock.vue';
import FooterBlock from '../blocks/FooterBlock.vue';
import ProjectFilterList from '../blocks/ProjectFilterList.vue'
export default {
    name: 'ProjectsPage',
    components: {
        HeaderBlock,          
        FooterBlock,
        ProjectFilterList,
    },
    props: ['projects'],
    
};
</script>

<style lang="scss" scoped>

</style>