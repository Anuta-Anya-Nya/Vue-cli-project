<template>
    
        <header class="header">
            <div class="header__box container">
                <a href="index.html" class="logo">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                            fill="#CDA274" />
                    </svg>
                    {{ logoBrand }}
                </a>
                <nav class="header__menu">
                    <ul class="header__list">
                        <li v-for="(link, index) in headerMenuLinks" :key="index"><a :href="link.url">{{ link.text }}</a></li>                        
                    </ul>
                </nav>
            </div>
        </header>
    
</template>

<script>
export default {
    name: 'HeaderBlock',

    data() {
        return {
            logoBrand: 'Interno',
            headerMenuLinks: [
                {url:"index.html", text: 'Home'},
                {url:"projects.html", text: 'Project'},
                {url:"blog.html", text: 'Blog'},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
    

    .header {
        margin-top: 53px;
        margin-bottom: 53px;

        &__box {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__list {
            display: flex;
            gap: 30px;

            a {
                color: #292F36;
                text-align: center;
                font-family: 'Jost', sans-serif;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                transition: color 0.3s;
            }

            a:hover {
                color: #CDA274;
            }
        }

    }

    .logo {
        font-family: 'DM Serif Display', serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        color:#292F36;
    }
</style>