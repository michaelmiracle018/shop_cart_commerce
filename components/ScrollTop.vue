<template>
  <div class="scroll_container" v-show="showFab">
    <button>
      <i class="fa-sharp fa-solid fa-angle-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFab: false,
    };
  },
  methods: {
    checkScroll() {
      const h = window.scrollY;
      if (h > 300) {
        this.showFab = true;
      } else {
        this.showFab = false;
      }
    },
  },
};
</script>

<style scoped>
button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(242, 16, 129);
  border: none;
  font-size: 20px;
}

.scroll_container {
  position: fixed;
  bottom: 10px;
  right: 0;
}
</style>
