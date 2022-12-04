<template>
  <div class="container">
    <div class="single_product">
      <div class="wrapper">
        <img :src="product.image" alt="product.name" />
        <h2>{{ product.name }}</h2>
        <h3>GhC {{ product.price }}</h3>
        <div class="btn_wrap">
          <span>{{ product.onSale ? "In-Stock" : "Out-Of-Stock" }} </span>
        </div>
        <nuxt-link :to="`/Products/${product.id}`">
          <button class="view_btn">view product</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.container {
  margin-bottom: 2rem;
}
.single_product {
  flex: 2;
  width: 100%;
  max-width: 400px;
  height: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.wrapper img {
  width: 100%;
  max-width: 500px;
  max-height: 300px;
  object-fit: cover;
}

.single_product h2 {
  font-size: 20px;
  font-family: "montserrat";
  font-weight: 700;
  color: #000000;
  margin: 1rem 10px;
}

.single_product h3 {
  font-size: 20px;
  font-family: "montserrat";
  font-weight: 400;
  color: #cb79f1;
  margin: 1rem 10px;
}

.btn_wrap {
  display: flex;
}

.btn_wrap button {
  width: 100px;
  padding: 5px;
  border: none;
  font-size: 15px;
  font-family: "montserrat";
  margin: 1rem;
  cursor: none;
}

.view_btn {
  width: 100%;
  padding: 5px;
  border: none;
  font-size: 15px;
  font-family: "montserrat";
  cursor: pointer;
  background-color: rgb(230, 44, 140);
  color: #fff;
}

@media screen and (max-width: 1200px) {
  .container {
    grid-gap: 3rem;
  }
}
</style>
