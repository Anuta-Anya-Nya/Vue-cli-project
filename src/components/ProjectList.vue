<template>
    <div class="project-list__box">
        <ProjectArticle v-for="item in filterProjectByCategory" :key="item.id" :item="item" :page='page'/>
    </div>
</template>

<script>
import ProjectArticle from '../components/ProjectArticle.vue';
export default {
    name: 'ProjectList',
    components: { ProjectArticle },
    props: ['articles', 'selectCategory'],
    data() {
        return {
            page: "projectPage",
        };
    },

    computed: {
        filterProjectByCategory() {
            if (this.selectCategory === '') {
                return this.articles;
            } else {
                return this.articles.filter(el => el.category.includes(this.selectCategory));
            }
        },
    },


};
</script>

<style lang="scss" scoped>
.project-list__box {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    gap: 30px;
    grid-auto-rows: 316px;
}
</style>