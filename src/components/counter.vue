<template lang="pug">
    div
        h3.primary Counter
        div {{counter}}

</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                msg: 'HEllo',
            }
        },
        computed: {
            counter () {
                return this.$store.state.counter.name
            }
        }
    }
</script>

<style scoped>

</style>