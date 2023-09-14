<template>
    <section class="projectDetailsSection container">
        <div class="projectDetails ">
            <h3 class="projectDetails__title">{{ projectForDetails.title }}</h3>
            <p class="projectDetails__text">{{ projectForDetails.textDescription }}</p>
            <p class="projectDetails__text">{{ projectForDetails.textDescription2 }}</p>
        </div>
        <SliderComp :sliderImages="projectForDetails.imgForSlider"/>
    </section>
</template>

<script>
import SliderComp from '@/components/SliderComp.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'ProjectDetails',
    components: { SliderComp },
    data() {
        return {

        };
    },


    computed: {
        ...mapGetters(['projectForDetails']),
    },
};
</script>

<style lang="scss" scoped>
.projectDetails {
    max-width: 658px;
    margin: 0 auto;
    margin-bottom: 100px;

    &__title {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 10px;
    }

    &__text {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

    &__text:first-of-type {
        margin-bottom: 30px;
    }
}

.projectDetailsSection {
    margin-bottom: 130px;
}</style>