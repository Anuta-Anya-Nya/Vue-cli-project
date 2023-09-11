<template>
    <section class="project-list container">
        <CategoryButtons @selectCategory="changeCategory" />
        <ProjectList :selectCategory="category" />
        <PaginationComponent />
    </section>
</template>

<script>
import CategoryButtons from '../components/CategoryButtons.vue';
import ProjectList from '../components/ProjectList.vue';
import PaginationComponent from '../components/PaginationComponent.vue'
export default {
    name: 'ProjectFilterList',
    components: {
        CategoryButtons,
        ProjectList,
        PaginationComponent
    },
    data() {
        return {
            category: '',
        };
    },
    methods: {
        changeCategory(categoryValue) {
            this.category = categoryValue;
        }
    },
};
</script>

<style lang="scss" scoped>
.project-list{
    margin-bottom: 200px;
}
</style>