<template>
  <section>
    <ProductView />
    <Footer />
  </section>
</template>

<script>
import ProductView from "../../components/ProductView.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: { ProductView, Footer },
};
</script>

<style scoped>
section {
}
</style>
