<template>
  <section class="notFound">
    <div class="notFound-bcg"></div>
    <div class="container notFound__box">
      <div class="notFound__text">
        <h4 class="notFound__title">404</h4>
        <p class="notFound__content">
          We are sorry, but the page you requested was not found
        </p>
        <router-link to="/main" class="button">
          Back To Home
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.notFound-bcg {
  background: url(../assets/img/notFound.jpg) center left no-repeat;
  height: 70vh;
  border-bottom-left-radius: 353px;
  position: absolute;
  right: 0;
  width: 50vw;
  z-index: -999;
}

.notFound {
  position: relative;
  &__box{
    height: 70vh;
    display: flex;
    align-items: center;
  }
  
  &__text {
    max-width: 569px;
  }

  &__title {
    color: #cda274;
    font-family: "DM Serif Display", serif;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 312.5px */
  }

  &__content {
    color: #292f36;
    font-family: "DM Serif Display", serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 52.5px */
    letter-spacing: 0.35px;
    margin-bottom: 72px;
  }
}
.button {
  background-color: #292f36;
  padding: 26px 48px;
  border-radius: 18px;
  color: #ffffff;
  text-align: center;
  font-family: "Jost", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  transition: all 0.3s;
  border: 1px solid transparent;

  svg {
    margin-left: 10px;
  }

  &:hover {
    color: #292f36;
    background-color: #ffffff;
    border: 1px solid #292f36;
  }
}
</style>
