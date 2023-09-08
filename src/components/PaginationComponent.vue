<template>
    <nav class="pagination">
          <ul class="pagination__list">
            <li><a class="pagination__link" href="#">01</a></li>
            <li><a class="pagination__link" href="#">02</a></li>
            <li><a class="pagination__link" href="#">03</a></li>
            <li>
              <a class="pagination__svg" href="#"
                ><svg
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
              </a>
            </li>
          </ul>
        </nav>
</template>

<script>
export default {
    name: 'PaginationComponent',
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
        color: #292F36;
        font-family: #4D5053;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        /* 24px */
        text-transform: capitalize;
        padding: 14px 18px;
        display: block;
        transition: all 0.3s;
        // border: 1px solid $color-details;
        // border-radius: 50%;
        background: url(@/assets/img/paginatEllipse.svg) center center no-repeat;

        &:hover {
            background: url(@/assets/img/paginatHover.svg) center center no-repeat;
        }
    }

    &__svg:hover svg {
        fill: #F4F0EC;
    }

    &__svg:hover circle {
        stroke: #F4F0EC;
    }
}
</style>