<template>
    <v-app id="keep">
        <v-navigation-drawer
                v-model="drawer"
                fixed
                clipped
                class="grey lighten-4"
                app
                temporary
        >
            <v-list
                    dense
                    class="grey lighten-4"
            >
                <v-list>
                    <v-list-tile
                            v-for="(item,index) in links"
                            :key="index"
                            :to="item.url"
                    >
                        <v-list-tile-action>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.text"></v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>
                    <v-divider></v-divider>
                </v-list>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="amber" app absolute clipped-left>
            <v-toolbar-side-icon
                    @click="drawer = !drawer"
                    class="hidden-md-and-up"
            ></v-toolbar-side-icon>
            <span class="title ml-3 mr-5">
                <router-link :to="'/'">Melisa</router-link>
            </span>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    flat
                    v-for="(link,index) in links"
                    :key="index"
                    :to="link.url"
                >
                    <v-icon left>{{link.icon}}</v-icon>
                    {{link.text}}
                </v-btn>

            </v-toolbar-items>
            <v-btn icon>
                <!--<v-icon>more_vert</v-icon>-->
                <v-icon>android</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height class="grey lighten-4">
                <v-layout justify-center align-center>
                    <v-flex shrink>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'layout',
        data (){
            return {
                drawer: null,
            }
        },
        computed: {
            links (){
                return this.$store.getters.getLinks;
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