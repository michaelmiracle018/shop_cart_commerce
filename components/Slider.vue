<template>
  <div class="all-content">
    <div>
      <transition-group name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i" class="img_container">
          <img :src="currentImg.img" />
          <div class="modal_container">
            <Modal :data="currentImg" />
          </div>
        </div>
      </transition-group>
      <a class="prev" @click="prev" href="#">&#10094; </a>
      <a class="next" @click="next" href="#">&#10095; </a>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      data: [
        {
          img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Silky Smooth Beats",
          price: 20000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
        },
        {
          img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          desc: "somewhere",
          name: "Lady Luck Is Smiling",
          price: 20000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
        },
        {
          img: "https://images.pexels.com/photos/6062560/pexels-photo-6062560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          desc: "somewhere",
          name: "Lady Luck Is Smiling",
          price: 20000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
        },
        {
          img: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          desc: "somewhere",
          name: "Lady Luck Is Smiling",
          price: 20000,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
        },
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  methods: {
    next: function () {
      if (this.currentIndex > this.data.length - 1) {
        this.currentIndex = 0;
      }
      this.currentIndex++;
    },
    prev: function () {
      this.currentIndex--;
    },
  },

  computed: {
    currentImg: function () {
      return this.data[Math.abs(this.currentIndex) % this.data.length];
    },
  },
};
</script>

<style scoped>
.all-content {
  display: block;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 600px;
  width: clamp(200px, 100%, 100%);
  object-fit: cover;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: 50px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 50%;
  text-decoration: none;
  user-select: none;
  background-color: rgb(91, 88, 88);
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.img_container {
    position: relative;
}
/* STYLES FOR MODAL */

.modal_container {
    position: absolute;
    top: 80px;
    right: 30px;
}
</style>
