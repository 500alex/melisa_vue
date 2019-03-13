<template>
    <div>
        <v-container>
            <h3>Album</h3>
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
                index: null
            };
        },
        methods: {
            goAlbums () {
                this.$router.push('/albums')
            }
        },
        computed: {
            imageList () {
                return this.$store.getters['photo/getPhoto']
            },
            images () {
                var imagesUrl = [];
                this.imageList.forEach(function (item) {
                    imagesUrl.push(item.url);
               });
                 return imagesUrl;
            }
        }
    }
</script>

<style>
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }
</style>