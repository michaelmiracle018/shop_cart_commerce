<template>
  <section class="footer_container">
    <footer>
      <h1>Commerce <span>Shop</span></h1>
      <h3>Free eCommerce Site Built With NuxtJS ❤</h3>
      <div class="icons_container">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </footer>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_container { 
    width: 100%;
    height: 200px;
    background-color: rgb(13, 12, 12);
    display: flex;
    justify-content: center;
}
footer {
    margin-top: 30px;
}
footer h1, h3 {
    font-size: 20px;
    font-family: 'montserrat';
    font-weight: 500;
    color: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
}
i {
    font-size: 20px;
    color: #fff;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>
