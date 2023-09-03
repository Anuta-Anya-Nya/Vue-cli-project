<template>
    <article>
            <div class="blog-item__pic">
              <img :src="require(`@/assets/img/${post.img}`)" alt="article-pic" />
              <div class="blog-item__group">{{post.groupArticle}}</div>
            </div>
            <h4 class="blog-item__title">{{post.title}}</h4>
            <div class="blog-item__line">
              <div class="blog-item__data">{{post.dataArticle}}</div>
              <svg
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </article> 
</template>

<script>
export default {
    name: 'BlogArticle',
    props: ['post'],

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
.blog-item {
    padding: 21px;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
    transition: background-color 0.3s;
    margin-bottom: 30px;

    circle {
        transition: all 0.3s;
    }

    &:hover {
        background-color: #F4F0EC;
    }

    &:hover circle {
        fill: #fff;
    }

    &__pic {
        position: relative;
        margin-bottom: 21px;

        img {
            display: block;
            width: 100%;
            border-radius: 45px 45px 0 0;
        }
    }

    &__group {
        position: absolute;
        bottom: 20px;
        left: 20px;
        padding: 4px 5px 8px 11px;
        background-color: #fff;
        border-radius: 8px 8px 8px 0px;
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

    &__title {
        max-width: 285px;
        color: #292F36;
        font-family: 'DM Serif Display', serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 31.25px */
        letter-spacing: 0.5px;
        margin-bottom: 30px;
    }

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
</style>