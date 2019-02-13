<template>
    <h3>New {{id}}</h3>

</template>

<script>
    export default {
        name: "New",
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