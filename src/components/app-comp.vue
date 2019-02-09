<template lang="pug">
    div
        h4 Main App
        counter
        <router-view></router-view>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>