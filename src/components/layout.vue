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
                    <!--<v-expansion-panel>-->
                        <!--<v-expansion-panel-content>-->
                            <!--<div slot="header">Направления</div>-->
                            <!--<v-list>-->
                                <!--<v-list-tile-->
                                        <!--v-for="(trend,index) in trends"-->
                                        <!--:key="index"-->
                                        <!--:to="trend.url"-->
                                <!--&gt;-->
                                    <!--<v-list-tile-title v-text="trend.text"></v-list-tile-title>-->
                                <!--</v-list-tile>-->
                            <!--</v-list>-->

                        <!--</v-expansion-panel-content>-->
                    <!--</v-expansion-panel>-->


                    <v-list-group


                            prepend-icon="account_circle"
                            no-action
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>Направления</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list v-for="(trend,i) in trends" :key="i" >
                            <v-list-tile @click="">{{trend.text}}</v-list-tile>
                        </v-list>

                        </v-list-group>

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
                <v-menu :nudge-width="100">
                    <v-toolbar-title slot="activator">
                        <span>Направления</span>
                        <v-icon dark>arrow_drop_down</v-icon>
                    </v-toolbar-title>

                    <v-list>
                        <v-list-tile
                                v-for="(trend,index) in trends"
                                :key="index"
                                :to="trend.url"
                        >
                            <v-list-tile-title v-text="trend.text"></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
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
            },
            trends () {
                return this.$store.getters.getTrends;
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