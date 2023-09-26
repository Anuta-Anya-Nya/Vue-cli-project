<template>
  <button @click="makeActive(tag.id)" class="tags__button" :class="activeClass">
    {{ tag.tag }}
  </button>
</template>

<script>
export default {
  name: "TagButton",
  props: ['tag'],
    methods: {
        makeActive(id) {
            this.$emit("makeActive", id);
        },
    },
    computed: {
        activeClass() {
            if (this.tag.isActive) {
                return "tags__button-active";
            } else {
                return '';
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.tags {
    &__button {
        padding: 9px 30px;
        border-radius: 10px;
        background: #F4F0EC;
        color: #000;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;
        border: none;
        transition: all 0.3s;

        &:hover {
            background: #292F36;
            color: #FFF;
        }

        &-active {
            background: #292F36;
            color: #FFF;
        }
    }
}

</style>
