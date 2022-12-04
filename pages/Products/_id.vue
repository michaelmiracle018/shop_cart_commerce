<template>
  <section>

    <div class="single_product" v-if="products">
      <div class="product_center">
        <h1>{{ products.name }}</h1>
        <div class="genre">
          <span class="price">GHC {{ products.price }}</span>
        </div>
        <img :src="products.image" alt="" />
        <p class="para">{{ products.description }}</p>
        <button class="cart_btn" @click="addToCart(products)" >Add To Cart</button>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
    <div class="empty-cart" v-else>
        <PageNotFound />
      </div>
  </section>
</template>

<script>
import Footer from "../../components/Footer.vue";
import PageNotFound from "../../components/PageNotFound.vue"
export default {
  components: { Footer, PageNotFound },
  methods: {
    addToCart(products) {
      this.$store.commit("AddToCart", products);
    },
  },
  data() {
    return {
      products: null,
    };
  },
  async created() {
    let item = await this.$content("products")
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch();

    this.products = item[0];
  },

  head() {
    return {
      title: "Products",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "products Page",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  background: rgba(158, 33, 64, 0.1);
  padding-top: 2rem;
}

.product_center {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.price {
  color: #000;
  font-family: "montserrat";
  font-size: 15px;
}

img {
  width: clamp(200px, 100%, 600px);
  object-fit: cover;
  display: block;
  height: 100%;
  max-height: 400px;
  border-radius: 10px;
}

.para {
  width: clamp(200px, 80%, 500px);
}

.cart_btn {
  width: 200px;
  height: 40px;
  padding: 5px;
  border: none;
  font-size: 15px;
  font-family: "montserrat";
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(232, 18, 125);
  color: white;
  margin-top: 1.5rem;
}

.footer {
  margin-top: 2rem;
}
</style>
