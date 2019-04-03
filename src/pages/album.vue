<template>
    <div>
        <v-container>
            <h3>{{curAlbum.title}}</h3>
            <v-item-group>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex
                                v-for="(image, i) in imageList"
                                :key="i"
                                xs12
                                sm6
                                md3
                                @click="index = i"
                        >
                            <v-item>
                                <v-card
                                        slot-scope="{ active, toggle }"
                                >
                                    <v-img
                                            :src="image.url"
                                    ></v-img>
                                </v-card>

                            </v-item>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-item-group>

            <div>
                {{curAlbum.description}}
            </div>

            <v-layout>
                <v-flex>
                    <v-btn right round color="primary" dark @click="goAlbums" style="float: right;">К списку альбомов</v-btn>
                </v-flex>

            </v-layout>
        </v-container>
        <gallery :images="images" :index="index" @close="index = null"></gallery>

    </div>
</template>

<script>

    export default {
        name: 'photo',
        data: function () {
            return {
                index: null,
                id: this.$route.params['id'],
                curAlbum: undefined,
                resource: null,
                imageList: [],
                images: []
            };
        },
        watch: {
            $route (toR,fromR) {
                this.id = toR.params['id']
            }
        },
        methods: {
            goAlbums () {
                this.$router.push('/albums')
            }
        },
        created() {
            var _this = this;
            this.resource = this.$resource('albums{/id}');

            this.resource.get({id: _this.id}).then(response => response.json())
                .then(album => {
                    _this.curAlbum = album;

                });
        },
        mounted (){
            var _this = this;
            console.log(_this.curAlbum);
           //  var _this = this;
           //  this.imageList = this.curentAlbum.listPhoto;
           //
           //  this.imageList.forEach(function (item) {
           //      _this.images.push(item.url);
           // });
        },

    }
</script>

<style>

</style>