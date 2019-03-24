<template>
    <div>
        <v-container fluid>
            <v-container>
                <h4 class="font-weight-medium text-uppercase text-xs-center mb-3 custom-header">Фотогалерея</h4>
                <v-layout>
                    <v-flex>
                        <router-link :to="'/albums'">
                            <div class="swipper-slider">
                                <swipper>
                                    <div class="swiper-slide" v-for="(slide,i) in photoList" :key="i">
                                        <img :src="slide.url">
                                    </div>
                                </swipper>
                            </div>
                        </router-link>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "m-photo",
        computed: {
            photoList () {
                return this.$store.getters['photo/getPhoto'];
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
.swiper-slide img {
    width: 100%;
}
</style>