<template>
    <section class="banner container">
        <div class="banner__box">
          <div class="banner__content">
            <h2 class="banner__title">Let Your Home Be Unique</h2>
            <p class="banner__text">
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </p>
            <button class="button">
              Get Started
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
            </button>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'BannerMainPage',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.banner {
    margin-bottom: 96px;

    &__box {
        min-height: 758px;
        background: url(../assets/img/banner.jpg) center center no-repeat;
        background-size: cover;
        border-radius: 70px;
        padding-left: 52px;
        display: flex;
        align-items: center;
    }

    &__content {
        max-width: 434px;
    }

    &__title {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 65px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        margin-bottom: 18px;
    }

    &__text {
        color: #4D5053;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-bottom: 21px;
    }
}

.button {
    background-color: #292F36;
    padding: 26px 48px;
    border-radius: 18px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    transition: all 0.3s;

    svg {
        margin-left: 10px;
    }

    &:hover {
        color: #292F36;
        background-color: #FFFFFF;
    }
}
</style>