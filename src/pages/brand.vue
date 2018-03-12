<template>
    <div>
        <div class="w3-padding-16">
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
        <div class="w3-padding-16">
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
        <div class="w3-padding-16">
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
        <div class="w3-padding-16">
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
        <div class="w3-padding-16">
            <img :src="imgsrc" alt="" class="w3-block">
        </div>
    </div>
</template>

<script>
    export default {
        name: "brand",
        data() {
            return {
                imgsrc: Mock.Random.image("1920x500", "#eeeeee"),
                imgp: Mock.Random.image("400x300", "#eeeeee")
            };
        },
        components: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>