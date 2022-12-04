<template>
  <div>
    <Home />
    <ScrollTop />
  </div>
</template>

<script>
import Home from './Home'
import ScrollTop from '../components/ScrollTop.vue'
export default {
  name: 'IndexPage',
  components: {Home, ScrollTop}
}
</script>
