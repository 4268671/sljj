<template>
  <!-- Slider main container -->
  <div class="w3-margin-top swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <!-- <div class="swiper-slide" v-for="item in 3">Slide {{item}}</div> -->
      <div class="swiper-slide">
        <img :src="`${URLPREFIX}/static/bigpic01.jpg`" class="w3-block animated pulse infinite" alt="">
      </div>
      <div class="swiper-slide">
        <img :src="`${URLPREFIX}/static/bigpic06.jpg`" class="w3-block animated pulse infinite" alt="">
      </div>
      <div class="swiper-slide">
        <img :src="`${URLPREFIX}/static/bigpic03.jpg`" class="w3-block animated pulse infinite" alt="">
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev swiper-button-black"></div>
    <div class="swiper-button-next swiper-button-black"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
import { URL_PREFIX } from "../utils/consts";

export default {
  data() {
    return {
      URLPREFIX: URL_PREFIX
    };
  },
  mounted() {
    const mySwiper = new Swiper(".swiper-container", {
      // centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true,
      lazy: true
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ddd;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.pulse {
  animation-duration: 12s;
  animation-fill-mode: both;
}
</style>