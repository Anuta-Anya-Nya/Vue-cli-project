<template>
  <div class="slider">
    <div class="slider__box">
      <img
        :src="require(`../assets/img/${showImg}`)"
        alt="img"
        class="slider__img"
      />
      <img
        src="../assets/img/zoom-icon.png"
        alt="zoom"
        class="zoom-icon"
        @click="showBigImg"
      />
    </div>
    <div>
      <input
        class="radio-button"
        v-for="img in sliderImages"
        :key="img.id"
        type="radio"
        id="img.id"
        name="slider"
        v-model="showImg"
        :value="img.url"
      />
    </div>
    <img
      v-show="bigImg"
      :src="require(`../assets/img/${showImg}`)"
      alt="big"
      class="bigPic"
      @click="hideBigImg"
    />
  </div>
</template>

<script>
export default {
  props: ["sliderImages"],
  data() {
    return {
      showImg: this.sliderImages[0].url,
      bigImg: false,
    };
  },
  methods: {
    showBigImg() {
      this.bigImg = true;
    },
    hideBigImg() {
      this.bigImg = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.slider {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  &__box {
    margin-bottom: 16px;
    position: relative;
  }
  &__img {
    display: block;
    border-radius: 70px;
  }
  .zoom-icon {
    position: absolute;

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 40%;
  }
}
.bigPic {
  position: absolute;
  width: 1560px;
  height: 1040px;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 70px;
}
.radio-button:not(:last-child) {
  margin-right: 10px;
}
</style>
