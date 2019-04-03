<template>
    <div>
        <v-item-group>
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex
                            v-for="(item,i) in albumsList"
                            :key="i"
                            xs12
                            sm6
                            md3
                    >
                        <v-item>
                            <v-card
                                    slot-scope="{ active, toggle }"
                                    :to="'/album/' + item.id"
                            >
                                <v-img
                                        :src="item.previewPhoto"
                                        aspect-ratio="1.3"
                                ></v-img>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0" style="font-size: 18px !important;">{{item.title}}</h3>
                                    </div>
                                </v-card-title>
                            </v-card>

                        </v-item>
                    </v-flex>
                </v-layout>

            </v-container>
        </v-item-group>
    </div>
</template>

<script>
    export default {
        name: "albums",
        data (){
            return {
                albumsList: null,
                resource: null,
            }
        },
        computed: {
            // albums () {
            //     return this.$store.getters['albums/getAlbums'];
            // }
        },
        created() {
            this.resource = this.$resource('albums');

            this.resource.get().then(response => response.json())
                .then(albums => this.albumsList = albums);
            // this.$http.get('http://localhost:3000/news')
            //     .then(response =>{
            //         return response.json()
            //     })
            //     .then(data => {
            //         this.newsList = data;
            //     })
        }
    }
</script>

<style scoped>

</style>