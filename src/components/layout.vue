<template>
    <v-app id="keep">
        <m-header></m-header>
        <v-content>
            <v-container fluid fill-height pa-0 class="grey lighten-4">
                <v-layout justify-center align-center>
                    <v-flex style="background: #F2F2F4;">
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
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