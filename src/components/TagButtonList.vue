<template>
  <section class="tags">
    <h4 class="tags__title">Tags</h4>
    <div class="tags__box">
      <tag-button
        v-for="button in tagList"
        :key="button.id"
        :tag="button"
        @makeActive="makeActive"
      ></tag-button>
    </div>
  </section>
</template>

<script>
import TagButton from "../components/TagButton.vue";
export default {
  name: "TagButtonList",
  components: {
    TagButton,
  },

  data() {
    return {
      tagList: [
        { id: 1, tag: "Kitchen", isActive: false },
        { id: 2, tag: "Bedroom", isActive: false },
        { id: 3, tag: "Building", isActive: false },
        { id: 4, tag: "Architecture", isActive: false },
        { id: 5, tag: "Kitchen Planning", isActive: false },
        { id: 6, tag: "Bedroom", isActive: false },
      ],
    };
  },
  methods: {
    makeActive(id) {
      const selectedTag = this.tagList.find((el) => el.id === id);
      if (selectedTag.isActive) {
        selectedTag.isActive = false;
        this.$emit("targetTag", "");
      } else {
        const activeTag = this.tagList.find((el) => el.isActive === true);
        if (activeTag) {
          activeTag.isActive = false;
        }
        selectedTag.isActive = true;
        this.$emit("targetTag", selectedTag.tag);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tags {
  &__title {
    color: #292f36;
    font-family: 'DM Serif Display', serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  &__box {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
