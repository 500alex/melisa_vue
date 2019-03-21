<template>
    <v-app id="keep">
        <m-header></m-header>
        <v-content>
            <router-view></router-view>
        </v-content>
        <m-footer></m-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'layout',

    }
</script>

<style lang="scss">
    #keep
    .v-navigation-drawer__border {
        display: none;
    }
</style>