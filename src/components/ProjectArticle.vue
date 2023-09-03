<template>
    <div class="proj-item">
        <img :class="item.class" :src="require(`../assets/img/${item.img}`)" alt="our projects" />
        <div class="proj-item__about">
            <div>
                <h4 class="proj-item__title">{{ item.title }}</h4>
                <p class="proj-item__text">{{ item.text }}</p>
            </div>
            <RoundBtn />
        </div>
    </div>
</template>

<script>
import RoundBtn from './RoundBtn.vue'
export default {
    name: 'ProjectArticle',
    components: { RoundBtn },
    props: ['item'],

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
.proj-item {
    transition: background-color 0.3s;

    img {
        width: 100%;
        display: block;
    }

    &__about {
        margin-top: 43px;
        display: flex;
        justify-content: space-between;
    }

    &__title {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 31.25px */
        letter-spacing: 0.5px;
    }

    &__text {
        color: #4D5053;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

    &:hover {
        background-color: #F4F0EC;
    }

    circle {
        transition: all 0.3s;
    }

    &:hover circle {
        fill: #fff;
    }


    .borderTopRight {
        border-top-right-radius: 80px;
    }

    .borderTopLeft {
        border-top-left-radius: 80px;
    }

    .borderBotRight {
        border-bottom-right-radius: 80px;
    }

    .borderBotLeft {
        border-bottom-left-radius: 80px;
    }
}
</style>