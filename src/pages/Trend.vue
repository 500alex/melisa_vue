<template>
    <div>
        <v-container>
            <v-layout align-center>
                <v-flex>
                    <v-card flat>
                        <v-card-text>
                            <v-layout align-center mb-3>
                                <v-avatar color="grey" class="mr-3"></v-avatar>
                                <strong class="title">{{curentTrend.title}}</strong>
                                <v-spacer></v-spacer>
                            </v-layout>

                            <p style="font-size: 16px;">
                                {{curentTrend.description}}
                            </p>

                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Trend",
        data (){
            return {
                // id: this.$router.currentRoute.params['id'];
                id: this.$route.params['id'],
                curentPage: null
            }
        },
        watch: {
            $route (toR,fromR) {
                this.id = toR.params['id']
            }
        },
        computed: {
            curentTrend () {
                var curent = null;
                var _this = this;
               var allTrends = this.$store.getters['trends/getTrends'];
               allTrends.forEach(function (item) {
                   if(item.url == _this.id){
                       curent = item;
                   }
               });
               return curent;
            }
        },
        created() {
            var _this = this;
            this.resource = this.$resource('pages{/id}');

            this.resource.get({id: _this.id}).then(response => response.json())
                .then(pages => {
                    // _this.newsList = news
                    // _this.newsList.forEach(function (item,i) {
                    //     if(item.id == _this.id){
                    //         _this.curentNews = item;
                    //     }
                    // });
                    _this.curentPage = pages;
                });

            // this.$http.get('http://localhost:3000/news', {params: {id: _this.id}})
            // .then(response =>{
            //     return response.json()
            // })
            // .then(data => {
            //     _this.curentNews = data;
            // })
        }
    }
</script>

<style scoped>

</style>