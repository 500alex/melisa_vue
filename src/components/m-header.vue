<template>
    <div class="mb-1">
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
                            v-for="(item,i) in links"
                            :key="i"
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

                    <v-list-group
                            prepend-icon="account_circle"
                            no-action
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>Направления</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list >
                            <v-list-tile
                                    :to="'/trend/'+ trend.url"
                                    v-for="(trend,i) in pagesList"
                                    :key="i"
                            >{{trend.title}}</v-list-tile>
                        </v-list>

                    </v-list-group>

                </v-list>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="blue-grey darken-4" app absolute dark clipped-left class="elevation-0">
            <v-toolbar-side-icon
                    @click="drawer = !drawer"
                    class="hidden-md-and-up"
            ></v-toolbar-side-icon>
            <span class="title ml-3 mr-5 logo">
                <router-link :to="'/'">MELISSA</router-link>
            </span>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" v-if="!isAdmin">
                <v-menu :nudge-width="100">
                    <v-toolbar-title slot="activator">
                        <span>Направления</span>
                        <v-icon dark>arrow_drop_down</v-icon>
                    </v-toolbar-title>

                    <v-list>
                        <v-list-tile
                                v-for="(trend,index) in trends"
                                :key="index"
                                :to="'/' + trend.url"
                        >
                            <v-list-tile-title v-text="trend.title"></v-list-tile-title>
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

            <v-toolbar-items class="hidden-sm-and-down" v-if="isAdmin">
                <v-btn
                        flat
                        v-for="(link,index) in adminLinks"
                        :key="index"
                        :to="link.url"
                >
                    <v-icon left>{{link.icon}}</v-icon>
                    {{link.text}}
                </v-btn>
            </v-toolbar-items>

            <v-btn icon @click="switchAdmin" v-if="isUserLoggedIn">
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-btn icon @click="onLogout" v-if="isUserLoggedIn">
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "m-header",
        data (){
            return {
                drawer: null,
                pagesList: []
            }
        },
        methods: {
            switchAdmin () {
                if (!this.isAdmin){
                    this.$store.commit('admin/setAdmin', true)
                }else {
                    this.$store.commit('admin/setAdmin', false)
                }
            },
            onLogout () {
                this.$store.dispatch('admin/logoutUser');
                this.$store.commit('admin/setAdmin', false);
                this.$router.push('/');
            },
            updateList (){
                this.resource.get().then(response => response.json())
                    .then(pages => this.pagesList = pages);
            },
        },
        computed: {
            links (){
                return this.$store.getters.getLinks;
            },
            adminLinks (){
                return this.$store.getters['admin/getAdminLinks'];
            },
            trends () {
                return this.$store.getters['trends/getTrends'];
            },
            isAdmin () {
                return this.$store.getters['admin/getAdmin'];
            },
            isUserLoggedIn () {
                return this.$store.getters['admin/isUserLoggedIn']
            }
        },
        created() {
            this.resource = this.$resource('pages{/id}');
            this.updateList();
        }
    }
</script>

<style lang="scss">
    span {
        a {
            font-weight: bold;
            text-decoration: none;
            font-size: 40px;
        }
    }
</style>