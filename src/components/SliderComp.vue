<template>
  <div class="slider">
    <div class="slider__box">
      <img
        :src="require(`../assets/img/${showImg}`)"
        alt="img"
        class="slider__img"
      />
    </div>
    <div class="radio-button">
      <input
        v-for="img in sliderImages"
        :key="img.id"
        type="radio"
        id="img.id"
        name="slider"
        v-model="showImg"
        :value="img.url"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["sliderImages"],
  data() {
    return {
      showImg: this.sliderImages[0].url,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.slider {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &__box {
    margin-bottom: 16px;
  }
  &__img {
    display: block;
    border-radius: 70px;
  }
}
</style>
