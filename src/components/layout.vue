<template>
    <v-app id="keep">
        <m-header></m-header>
        <v-content>
            <router-view></router-view>
        </v-content>
        <template v-if="error">
            <v-snackbar
                :timeout="5000"
                :multi-line="true"
                color="error"
                @input="closeError"
                :value="true"
            >
                {{error}}
                <v-btn flat dart @click.native="closeError">Close</v-btn>
            </v-snackbar>
        </template>
        <m-footer></m-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'layout',
        computed: {
            error () {
                return this.$store.getters['shared/error']
            },
            isUserLoggedIn () {
                return this.$store.getters['admin/isUserLoggedIn']
            }
        },
        methods: {
            closeError (){
                this.$store.dispatch('shared/clearError',null,{root:true})
            }
        }

    }
</script>

<style lang="scss">
    #keep
    .v-navigation-drawer__border {
        display: none;
    }
</style>