<template>
  <div class="filter-proj">
    <button
      @click="makeActive(button.id)"
      v-for="button in buttons"
      :key="button.id"
      class="filter-proj__button"
      :class="button.isActive ? 'filter-proj__button-active' : ''"
    >
      {{ button.value }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CategoryButtons",

  data() {
    return {
      buttons: [
        { id: 1, value: "Bathroom", isActive: false },
        { id: 2, value: "Bedroom", isActive: false },
        { id: 3, value: "Kitchan", isActive: false },
        { id: 4, value: "Kitchan", isActive: false },
      ],
    };
  },

  methods: {
    makeActive(id) {
      const selectBtn = this.buttons.find((el) => el.id == id);
      if (!selectBtn.isActive) {
        const previousSelectBtn = this.buttons.find(
          (el) => el.isActive == true
        );
        if (previousSelectBtn) {
          previousSelectBtn.isActive = false;
        }
        selectBtn.isActive = true;
        this.$emit("selectCategory", selectBtn.value);
      } else {
        selectBtn.isActive = false;
        this.$emit("selectCategory", "");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-proj {
  display: flex;
  justify-content: center;
  border: 1px solid #cda274;
  max-width: 825px;
  margin: 0 auto;
  border-radius: 18px;
  margin-bottom: 61px;

  &__button {
    padding: 26px 66px;
    color: #292f36;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
    border: 1px solid transparent;
    background-color: #fff;
    transition: all 0.3s;
    border-radius: 18px;
    &-active {
      background-color: #cda274;
      color: #fff;
    }
  }

  &__button:hover {
    background-color: #cda274;
    color: #fff;
  }
}
</style>
