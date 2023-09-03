<template>
  <div class="round-btn">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
      <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'RoundBtn',

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
    circle {
      transition: all 0.3s;
    }

    .proj-item:hover circle {
      fill: #fff;
    }
</style>