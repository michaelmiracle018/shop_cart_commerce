<template>
  <section class="modal_container">
    <div class="modal_sub_container">
      <h2>{{ data.name }}</h2>
      <h3>{{ data.price }}</h3>
      <p>{{ data.description }}</p>
      <button @click="$router.push('/Products')">Check it out</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>

.modal_sub_container {
  width: clamp(200px, 100%, 700px);
  height: clamp(200px, 100%, 300px);
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem;
}

.modal_container h2,
h3 {
  font-family: "montserrat";
  font-size: 20px;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: black;
}

p {
  width: clamp(100px, 70vw, 600px);
  font-family: "montserrat";
  font-size: 15px;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: black;
}

button {
  border: none;
  font-family: "montserrat";
  font-size: 20px;
  font-weight: 500;
  background-color: rgb(247, 42, 117);
  color: #fff;
  border-radius: 5px;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
}
</style>
