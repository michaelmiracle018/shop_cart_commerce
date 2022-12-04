<template>
  <div class="main-container">
    <div class="sub-container">
      <h1>Fair View Of Some Of The Products We Offer</h1>
      <!-- FLOWER CONTENT-->
      <div class="wrap">
        <div class="text-area">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            aliquam corrupti. Dolor quibusdam quas facilis eum vitae cupiditate
            facere nisi.
          </p>
          <div class="btn-wrap">
            <nuxt-link to="/Products" class="btn">View More</nuxt-link>
          </div>
        </div>
        <div class="content">
          <h2>Lily</h2>
          <div class="grid">
            <figure class="effect-lily">
              <img src="../assets/images/flower1.jpg" alt="img12" preload />
              <figcaption>
                <div>
                  <h2>Nice <span>Flower</span></h2>
                  <p>Lily flowers and more for you</p>
                </div>
                <p>View More</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <!-- SHIRT CONTENT-->
      <div class="wrap">
        <div class="content">
          <h2>SHOE</h2>
          <div class="grid">
            <figure class="effect-lily">
              <img src="../assets/images/shirt2.jpg" alt="img12" />
              <figcaption>
                <div>
                  <h2>Nice <span>Shirt</span></h2>
                  <p>best shirt to purchase from us</p>
                </div>
                <p>View More</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="text-area">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            aliquam corrupti. Dolor quibusdam quas facilis eum vitae cupiditate
            facere nisi.
          </p>
          <div class="btn-wrap">
            <nuxt-link to="/Products">
              <button class="btn">View More</button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- LAPTOP CONTENT -->
      <div class="wrap">
        <div class="text-area">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            aliquam corrupti. Dolor quibusdam quas facilis eum vitae cupiditate
            facere nisi.
          </p>
          <div class="btn-wrap">
            <nuxt-link to="/Products">
              <button class="btn">View More</button>
            </nuxt-link>
          </div>
        </div>
        <div class="content">
          <h2>LAPTOP</h2>
          <div class="grid">
            <figure class="effect-lily">
              <img src="../assets/images/laptop1.jpg" alt="img12" />
              <figcaption>
                <div>
                  <h2>Nice <span>Laptop</span></h2>
                  <p>For the laptops we offer the best of it kinds</p>
                </div>
                <p>View More</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <!-- HOUSE CONTENT -->
      <div class="wrap">
        <div class="content">
          <h2>HOUSE</h2>
          <div class="grid">
            <figure class="effect-lily">
              <img src="../assets/images/house1.jpg" alt="img12" />
              <figcaption>
                <div>
                  <h2>Nice <span>House</span></h2>
                  <p>Get your new home for cool price now</p>
                </div>
                <p>View More</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="text-area">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            aliquam corrupti. Dolor quibusdam quas facilis eum vitae cupiditate
            facere nisi.
          </p>
          <div class="btn-wrap">
            <nuxt-link to="/Products">
              <button class="btn">View More</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background-color: var(--background-color-primary);
  margin-top: -5px;
}
.sub-container {
  padding-top: 7rem;
}

.sub-container h1 {
  font-size: 2.5rem;
  color: var(--text-primary-color);
  font-weight: 700;
  font-style: italic;
  font-family: Phantomsans;
  text-align: center;
  text-transform: uppercase;
}


/* STYLE FOR TEXT */
.wrap .text-area {
  flex: 1;
}

.wrap .text-area p {
  font-size: 20px;
  color: var(--text-primary-color);
  font-weight: bold;
  text-align: center;
  font-style: italic;
  margin-top: 15rem;
}

.wrap .text-area .btn-wrap {
  padding: 40px 50px;
  margin: 0px 50px;
}

/* BUTTON STYLE*/
.wrap .text-area .btn {
  width: 150px;
  height: 50px;
  background-color: var(--background-color-white);
  font-size: 17px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
}

/* COMMON STYLE FOR IMG */
.grid figure {
  position: relative;

  overflow: hidden;
  margin: 10px;
  max-width: 780px;
  max-height: 460px;
  width: 100%;
  background: #3085a3;
  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: var(--text-primary-color);
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

figure.effect-lily img {
  max-width: none;
  width: -webkit-calc(100% + 50px);

  width: calc(100% + 50px);

  opacity: 0.7;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

figure.effect-lily figcaption {
  text-align: left;
}

figure.effect-lily figcaption > div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  height: 50%;
}

figure.effect-lily h2,
figure.effect-lily p {
  -webkit-transform: translate3d(0, 40px, 0);
  transform: translate3d(0, 40px, 0);
}

figure.effect-lily h2 {
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
}

figure.effect-lily p {
  color: var(--text-primary-color);
  opacity: 0;
  -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
  transition: opacity 0.2s, transform 0.35s;
}

figure.effect-lily:hover img,
figure.effect-lily:hover p {
  opacity: 1;
}

figure.effect-lily:hover img,
figure.effect-lily:hover h2,
figure.effect-lily:hover p {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

figure.effect-lily:hover p {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}

@media screen and (min-width: 800px) {
  .wrap {
    display: flex;
  }
}

@media screen and (max-width: 768px) {
  .text-area {
    display: none;
  }

  

  img {
    width: 100%;
  }
  
}
</style>
