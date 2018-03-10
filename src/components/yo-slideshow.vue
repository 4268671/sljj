<template>
    <!-- Slider main container -->
    <div class="w3-margin-top swiper-container w3-round-large">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <!-- <div class="swiper-slide" v-for="item in 3">Slide {{item}}</div> -->
            <div class="swiper-slide w3-light-gray">Slide1</div>
            <div class="swiper-slide w3-light-gray">Slide2</div>
            <div class="swiper-slide w3-light-gray">Slide3</div>
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

export default {
  data() {
    return {};
  },
  mounted() {
    const mySwiper = new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
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
      loop: true
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
</style>