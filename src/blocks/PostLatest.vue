<template>
    <section class="latest-post">
        <div class="container">
            <h3 class="latest-post__title">Latest Post</h3>
            <article class="latest-post__box">
                <img class="latest-post__img" :src="require(`@/assets/img/${post.img}`)" alt="Latest Post" />
                <div class="latest-post__content">
                    <h4>{{ post.title }}</h4>
                    <p>{{ post.text }}</p>
                    <p>{{ post.simpleText }}</p>
                    <div class="blog-item__line">
                        <div class="blog-item__data">{{ post.dataArticle }}</div>
                        <a href="#" class="latest-post__button">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PostLatest',
    props: ['post'],
    data() {
        return {

        };
    },

};
</script>

<style lang="scss" scoped>
.latest-post {
    margin-bottom: 150px;

    &__title {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 33px;
    }

    &__box {
        padding: 22px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 65px;
    }

    &__img {
        display: block;
        border-radius: 50px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h4 {
            color: #292F36;
            font-family: 'DM Serif Display', serif;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
            letter-spacing: 0.5px;
            margin-bottom: 22px;
        }

        p {
            color: #4D5053;
            font-family: 'Jost', sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
            margin-bottom: 40px;
        }

    }

    &__button {
        transition: all 0.3s;

        &:hover svg {
            fill: #FFF;
        }

        &:hover circle {
            stroke: #F4F0EC;
        }
    }
    .blog-item {
    
    &__line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    &__data {
        color: #4D5053;
        font-family: 'Jost', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}
}
</style>