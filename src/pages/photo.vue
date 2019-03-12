<template>
    <div>
        <v-container>
            <v-layout>
                <v-flex>
                    <div
                        class="image"
                        v-for="(image, i) in images"
                        :key="i"
                        @click="index = i"
                        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
                    ></div>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex>
                    <photo-folder></photo-folder>
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
                images: [
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff',
                ],
                index: null
            };
        },
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