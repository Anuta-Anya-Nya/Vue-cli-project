<template>
    <section class="counter">
        <div class="counter__flex container">
          <div class="counter__item">
            <h3 class="counter__number">12</h3>
            <p class="counter__about">Years Of Experiance</p>
          </div>
          <div class="counter__item">
            <h3 class="counter__number">85</h3>
            <p class="counter__about">Success Project</p>
          </div>
          <div class="counter__item">
            <h3 class="counter__number">15</h3>
            <p class="counter__about">Active Project</p>
          </div>
          <div class="counter__item">
            <h3 class="counter__number">95</h3>
            <p class="counter__about">Happy CUstomers</p>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'CounterBlock',

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
.counter {
    background-color: #F4F0EC;
    padding: 151px 0;

    &__flex {
        display: flex;
        justify-content: space-between;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 76px;
        border-left: 1px solid #CDA274;

        &:first-child {
            border: none;
            padding-left: 0;
        }
    }

    &__number {
        color: #CDA274;
        font-family: 'DM Serif Display', serif;
        font-size: 85px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 106.25px */
        letter-spacing: 1.7px;
    }

    &__about {
        color: #4D5053;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }
}
</style>