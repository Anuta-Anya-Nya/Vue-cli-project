<template>
  <section class="project-list container">
    <CategoryButtons @selectCategory="changeCategory" />
    <ProjectList :selectCategory="category" :currentPage="page" @howManyPages="howManyPages"/>
    <PaginationComponent :whatPage="`/project`" :quantityPages="quantityPages" @selectPage="selectPage" />
  </section>
</template>

<script>
import CategoryButtons from "../components/CategoryButtons.vue";
import ProjectList from "../components/ProjectList.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
export default {
  name: "ProjectFilterList",
  components: {
    CategoryButtons,
    ProjectList,
    PaginationComponent,
  },
  data() {
    return {
      category: "",
      page: 1,
      quantityPages: 3,
      
    };
  },
  methods: {
    changeCategory(categoryValue) {
      this.category = categoryValue;
      this.page = 1;
    },
    selectPage(pageValue) {
      this.page = +pageValue;
    },
    howManyPages(quantityPages){
        this.quantityPages = quantityPages;
    }
  },
};
</script>

<style lang="scss" scoped>
.project-list {
  margin-bottom: 200px;
}
</style>
