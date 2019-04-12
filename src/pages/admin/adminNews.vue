<template>
    <div>
        <v-container>
            <div style="position: relative;">
                <h3 class="page-header">Admin новости</h3>
                <v-btn
                        absolute
                        dark
                        fab
                        right
                        color="primary"
                        style="top: 0 !important;"
                        :to="'/admin/createnews'"
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </div>

            <v-layout class="custom-lay" v-if="!loading">
                <v-flex xs12>
                    <v-card>
                        <v-list two-line>
                            <template v-for="(item, index) in newsList">
                                <v-list-tile
                                        :key="item.id"
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
                                                    :to="'/admin/editnews/' + item.id"
                                            >
                                                <v-icon>create</v-icon>
                                            </v-btn>
                                            <v-btn icon @click="deleteNews(item.id)">
                                                <v-icon>delete</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-list-tile-action>

                                </v-list-tile>
                                <v-divider
                                        v-if="index + 1 < newsList.length"
                                        :key="index"
                                ></v-divider>
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout v-else align-center justify-center>
                <v-flex class="text-xs-center pt-6">
                    <v-progress-circular
                            indeterminate
                            :size="70"
                            :width="7"
                            color="red"
                    ></v-progress-circular>
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
                resource: null
            }
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            },
            newsList () {
                return this.$store.getters['getNews'];
            },
        },
        methods: {
            // updateList (){
            //     this.resource.get().then(response => response.json())
            //         .then(news => this.newsList = news);
            // },
            // deleteNews (id) {
            //     var _this = this;
            //     this.resource.delete({id: id}).then(response => {
            //         console.log('Удалили успешно')
            //         _this.updateList();
            //     }, response => {
            //         console.log('Не удалось удалить')
            //     });
            // },
            deleteNews(id){
                this.$store.dispatch('deleteNews',id);
            }

        }
    }
</script>

<style lang="scss">
    .page-header {
        margin-bottom: 40px;
        font-size: 32px;
    }
</style>