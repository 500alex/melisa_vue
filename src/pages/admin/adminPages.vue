<template>
    <div>
        <v-container>
            <div style="position: relative;">
                <h3 class="page-header">Admin страницы</h3>
                <v-btn
                        absolute
                        dark
                        fab
                        right
                        color="primary"
                        style="top: 0 !important;"
                        :to="'/admin/createpage'"
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </div>

            <v-layout class="custom-lay">
                <v-flex xs12>
                    <v-card>
                        <v-list two-line>
                            <template v-for="(item, index) in pagesList">
                                <v-list-tile
                                        :key="item.title"
                                        avatar
                                        ripple

                                >
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{  }}</v-list-tile-sub-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-list-tile-action-text>{{  }}</v-list-tile-action-text>
                                        <div>
                                            <v-btn
                                                    icon
                                                    style="margin-right: 15px;"
                                                    :to="'/admin/editpage/' + item.id"
                                            >
                                                <v-icon>create</v-icon>
                                            </v-btn>
                                            <v-btn icon @click="deletepage(item.id)">
                                                <v-icon>delete</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-list-tile-action>

                                </v-list-tile>
                                <v-divider
                                        v-if="index + 1 < pagesList.length"
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
        name: "Pages",
        data (){
            return {
                pagesList: [],
                resource: null
            }
        },
        methods: {
            updateList (){
                this.resource.get().then(response => response.json())
                    .then(pages => this.pagesList = pages);
            },
            deletepage (id) {
                var _this = this;
                this.resource.delete({id: id}).then(response => {
                    console.log('Удалили успешно')
                    _this.updateList();
                }, response => {
                    console.log('Не удалось удалить')
                });
            },
        },
        created() {
            this.resource = this.$resource('pages{/id}');
            this.updateList();
        }
    }
</script>

<style lang="scss">
    .page-header {
        margin-bottom: 40px;
        font-size: 32px;
    }
</style>