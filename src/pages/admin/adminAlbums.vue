<template>
    <div>
        <v-container>
            <div style="position: relative;">
                <h3 class="page-header">Admin альбомы</h3>
                <v-btn
                        absolute
                        dark
                        fab
                        right
                        color="primary"
                        style="top: 0 !important;"
                        :to="'/admin/createalbum'"
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </div>

            <v-layout class="custom-lay">
                <v-flex xs12>
                    <v-card>
                        <v-list two-line>
                            <template v-for="(item, index) in albumsList">
                                <v-list-tile
                                        :key="item.title"
                                        avatar
                                        ripple

                                >
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{ item.shortDescription }}</v-list-tile-sub-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-list-tile-action-text>{{ item.data }}</v-list-tile-action-text>
                                        <div>
                                            <v-btn
                                                    icon
                                                    style="margin-right: 15px;"
                                                    :to="'/admin/editalbum/' + item.id"
                                            >
                                                <v-icon>create</v-icon>
                                            </v-btn>
                                            <v-btn icon @click="deleteAlbum(item.id)">
                                                <v-icon>delete</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-list-tile-action>

                                </v-list-tile>
                                <v-divider
                                        v-if="index + 1 < albumsList.length"
                                        :key="index"
                                ></v-divider>
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>



        </v-container>

    </div>

</template>

<script>
    export default {
        name: "News",
        data (){
            return {

            }
        },
        methods: {
            deleteAlbum (id) {
                this.$store.dispatch('deleteAlbum',id);

            },
        },
        computed: {
            albumsList () {
                return this.$store.getters['getAlbums'];
            },
            loading () {
                return this.$store.getters['shared/loading']
            }
        },

    }
</script>

<style lang="scss">
    .page-header {
        margin-bottom: 40px;
        font-size: 32px;
    }
</style>