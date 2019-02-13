<template>
    <h3>Trend {{id}}</h3>
</template>

<script>
    export default {
        name: "Trend",
        data (){
            return {
                // id: this.$router.currentRoute.params['id'];
                id: this.$route.params['id']
            }
        },
        watch: {
            $route (toR,fromR) {
                this.id = toR.params['id']
            }
        }
    }
</script>

<style scoped>

</style>