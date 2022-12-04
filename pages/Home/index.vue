<template>
  <div>
    <Slide />
    <Advert />
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Slide from "../../components/Slider.vue";
import Advert from '../../components/Advert.vue'
import Newsletter from '../../components/NewsLetter.vue'
import Footer from '../../components/Footer.vue'
export default {
  components: { Slide, Advert, Newsletter, Footer },
};
</script>

<style scoped></style>
