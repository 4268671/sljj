<template>
  <div>
    <!-- The Modal -->
    <div id="id01" class="w3-modal">
      <div class="w3-modal-content w3-black w3-round-large">
        <!-- <header class="w3-container w3-teal">
          <span onclick="document.getElementById('id01').style.display='none'" class="w3-right w3-xxlarge">&times;</span>
          <h2>Modal Header</h2>
        </header> -->
        <div class="w3-container">
          <p>Some text..</p>
          <p>Some text..</p>
        </div>
        <footer class="w3-container w3-center">
          <p>
            <button class="w3-button" @click="closebtn">关闭</button>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propbars: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  methods: {
    closebtn() {
      document.getElementById("id01").style.display = "none";
    }
  }
};
</script>

<style scoped>
.w3-modal {
  padding-top: 25vh;
}
.w3-modal-content {
  width: 25vw;
}
</style>