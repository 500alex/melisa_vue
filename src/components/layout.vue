<template lang="pug">
    div
        myheader
        //content
        <router-view></router-view>
        //content
        //footer
</template>

<script>
    export default {
        name: "layout",
        }

</script>

<style scoped>
    div {

    }

</style>