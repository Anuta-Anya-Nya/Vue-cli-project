<template>
  <nav class="pagination">
    <div class="pagination__list">
      <router-link
        :to="`${whatPage}/${page}`"
        v-for="page in quantityPages"
        :key="page"
        class="pagination__link"
        >{{ page < 10 ? `0${page}` : `${page}` }}</router-link
      >
      <!-- <button class="pagination__svg" href="#">
        <svg
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          <path
            d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: ["whatPage", "quantityPages"],
  
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.$emit("selectPage", this.$route.params.page);
      // const { page } = this.$route.params; деструктуризация аналогична const page = this.$route.params.page
      // if(page) this.currentPage = +page; params это строка
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  margin: 0 auto;

  &__list {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  &__link {
    color: #292f36;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 24px */
    text-transform: capitalize;
    padding: 16px 18px;
    display: block;
    transition: all 0.3s;
    // border: 1px solid #CDA274;
    // border-radius: 50%;
    background: url(@/assets/img/paginatEllipse.svg) center center no-repeat;

    &:hover {
      background: url(@/assets/img/paginatHover.svg) center center no-repeat;
    }
  }
  &__svg {
    border: none;
    background: none;
  }
  &__svg:hover svg {
    fill: #f4f0ec;
  }

  &__svg:hover circle {
    stroke: #f4f0ec;
  }
}
</style>
