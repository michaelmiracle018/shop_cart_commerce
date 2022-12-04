<template>
  <nav>
    <section class="nav_center">
      <div class="nav_content">
        <nuxt-link to="/">
          <h1>commerce <span>Shop</span></h1>
        </nuxt-link>
        <div class="icons_wrapper">
          <button class="btn">
            <nuxt-link to="/Products">
              <i class="fa-solid fa-shop"></i>
            </nuxt-link>
          </button>
          <button class="btn">
            <nuxt-link to="/Cart">
              <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            </nuxt-link>
            <span class="cart_num">{{cartNumber}}</span>
          </button>
          <button>
            <div class="mode-wrap">
              <label for="checkbox" class="switch-toggle switch">
                <input type="checkbox" id="checkbox" />
                <div class="slider round"></div>
              </label>
            </div>
          </button>
        </div>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
   computed: { 
    cartNumber() {
      return this.$store.state.cart.length
    }
  },
   
  methods: {
    // setTheme(theme) {
    //   localStorage.setItem("user-theme", theme);
    //   this.userTheme = theme;
    //   document.documentElement.className = theme;
    // },
    // toggleTheme() {
    //   const activeTheme = localStorage.getItem("user-theme");
    //   if (activeTheme === "light-theme") {
    //     this.setTheme("dark-theme");
    //   } else {
    //     this.setTheme("light-theme");
    //   }
    // },
    // getMediaPreference() {
    //   const hasDarkPreference = window.matchMedia(
    //     "(prefers-color-scheme: dark)"
    //   ).matches;
    //   if (hasDarkPreference) {
    //     return "dark-theme";
    //   } else {
    //     return "light-theme";
    //   }
    // },
    // getTheme() {
    //   return localStorage.getItem("user-theme");
    // },
  },
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home View",
        },
      ],
    };
  },
};
</script>

<style scoped>
:root {
  --background-color-primary: #ebebeb;
}

:root.dark-theme {
  --background-color-primary: #282c35;
}
nav {
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 80px;
}

.nav_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

nav h1 {
  font-size: clamp(1rem, 10vw, 1.2rem);
  font-family: "montserrat";
  font-weight: bold;
}

nav span {
  color: aqua;
}

button {
  border: none;
  background-color: transparent;
}

button i {
  font-size: 20px;
  color: black;
}

.btn:hover {
  background-color: rgba(196, 194, 194, 0.6);
  padding: 0.8rem;
}

.cart_num {
  position: relative;
  top: 0px;
  color: rgb(195, 24, 70);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  font-weight: 700;
}

/* MODE STYLE */
.mode-wrap {
  position: relative;
  top: 1rem;
  border-left: 2px solid black;
  margin-left: 1rem;
  padding-left: 0.6rem;
}

.switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.switch input {
  display: none;
}

.slider {
  background-color: #fff;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: var(--background-color-primary);
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}

input:checked + .slider {
  background-color: var(--background-color-primary);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
/* END OF MODE STYLE */

@media screen and (min-width: 800px) {
  .nav_center {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }
}
</style>
