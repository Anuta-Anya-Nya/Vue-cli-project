<template>
    <article class="blogDetails">
        <h3 class="blogDetails__title">
            {{ article.title }}
        </h3>
        <img class="blogImg" :src="require(`@/assets/img/${article.img}`)" alt="blog" />
        <div class="blogDetails__info">
            <div class="blogDetails__data">{{ article.dataArticle }}</div>
            <nav class="breadCrumb">
                <a class="breadCrumb__link blogDetails__crumbs" href="#">Interior</a>
                <a class="breadCrumb__link blogDetails__crumbs" href="#">Home</a>
                <a class="breadCrumb__link blogDetails__crumbs" href="#">Decore</a>
            </nav>
        </div>
        <p>
            {{ article.text }}
        </p>
        <p>
            {{ article.simpleText }}
        </p>
    </article>
</template>

<script>
export default {
    name: 'BlogDetailsPost',
    props: ['article'],

};
</script>

<style lang="scss" scoped>
.blogDetails {
    margin-bottom: 35px;

    &__title {
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 21px;
    }

    &__info {
        margin: 48px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__data,
    &__crumbs {
        color: #4D5053;
        font-family: #4D5053;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }

    p {
        color: #4D5053;
        font-family: #4D5053;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

    p:first-of-type {
        margin-bottom: 40px;
    }
}

.breadCrumb {
    text-align: center;

    &__link {
        color: #4D5053;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;

        &:not(:last-child):after {
            content: '/';
            padding: 0 10px;
            color: #4D5053;
        }
    }

}
.blogImg {
    display: block;
    width: 100%;
    border-radius: 50px;
}
</style>