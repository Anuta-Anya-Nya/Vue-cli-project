<template>
  <div class="project-list__box">
    <ProjectArticle
      v-for="item in splitProjectsByPage"
      :key="item.id"
      :item="item"
      :page="page"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectArticle from "../components/ProjectArticle.vue";
export default {
  name: "ProjectList",
  components: { ProjectArticle },
  props: ["selectCategory", "currentPage"],
  data() {
    return {
      page: "projectPage",
      countProjectsOnList: 8,
    };
  },

  computed: {
    ...mapGetters(["projectArticles"]),
    filterProjectByCategory() {
        if (this.selectCategory === '') {
            
                return this.projectArticles;
            } else {
                
                return this.projectArticles.filter(el => el.category.includes(this.selectCategory));
            }



    //   let filtList = this.projectArticles;

    //   if (this.selectCategory !== "") {
    //     filtList = this.projectArticles.filter((el) =>
    //       el.category.includes(this.selectCategory)
    //     );
    //   }

    //   let quantityPages = Math.ceil(filtList.lenght / this.countProjectsOnList);
    //   this.$emit("howManyPages", quantityPages);
    //   console.log(filtList.lenght);
    //   console.log(quantityPages);
    //   return filtList;
    },

    splitProjectsByPage() {
    this.$emit("howManyPages", Math.ceil(this.filterProjectByCategory.length / this.countProjectsOnList));
      const startIndex = (this.currentPage - 1) * this.countProjectsOnList;
      const endIndex = startIndex + this.countProjectsOnList;
      return this.filterProjectByCategory.slice(startIndex, endIndex);
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
