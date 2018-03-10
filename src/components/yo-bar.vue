<template>
    <div>
            <div class="w3-bar w3-panel">
                    <a href="#" class="w3-button w3-border">&laquo;</a>
                    <a href="#" class="w3-button" v-for="n in propbars" :key="n">{{n}}</a>
                    <a href="#" class="w3-button w3-border">&raquo;</a>
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
        }
    };
</script>

<style scoped>

</style>