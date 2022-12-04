<template>
  <section>
    <div class="product">
       <div class="single_category">
    <div class="form">
      <div class="form-item">
        <input type="text"  v-model="search"  placeholder="search for product"/>
      </div>
    </div>
    <header>
      <h1>Category</h1>
    </header>
    <div class="cat_img" v-for="category in categories" :key="category.id">
      <div>
        <img :src="category.image" alt="item.name" />
      </div>
      <div>
        <h1>{{ category.name }}</h1>
      </div>
    </div>
  </div>
      <div class="product_card" >
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      products: null,
      categories: null,
      search: null,
    };
  },
  async created() {
    try {
      this.products = await this.$content("products").fetch();
      this.categories = await this.$content("category").fetch();
      
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products;
      this.loadingProducts = true;
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        );
      });
    },
  },
};
</script>

<style scoped>
.product_card {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
section {
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
}
.product {
  margin-bottom: 7rem;
  margin-top: 5rem;
}

@media screen and (min-width: 700px) {
  .product {
    display: flex;
    justify-content: space-around;
    gap: 5rem;
  }
}


.form-item label {
  background-color: #fff;
  color: #000;
}

.form-item input:focus + label {
  color: #000;
}
.cat_img {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cat_img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.cat_img h1 {
  font-size: 20px;
  font-family: "montserrat";
}

header h1 {
  font-size: 30px;
  font-family: "montserrat";
  font-weight: 500;
  color: #000000;
  margin-bottom: 3rem;
}

@media screen and (max-width: 700px) {
  .cat_img,
  header {
    display: none;
  }
  .single_category {
    margin-left: 1rem;
  }
}
</style>
