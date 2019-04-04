<template>
    <div>
        <v-container>
            <h3 class="page-header">{{curentNews.title}}</h3>
            <v-layout>
                <v-flex>
                    <div>
                        <div v-html="curentNews.description"></div>
                    </div>
                    <v-btn right round color="primary" dark @click="goNews" style="float: right;">К списку новостей</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <!--Дочерний роут-->
        <!--<router-link :to="{name: 'newFull', params:{id: id}, query:{name: 'mazda'}}">полное описание</router-link>-->
        <!--<router-link :to="'/new/'+ id + '/full'">полное описание</router-link>-->
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    export default {
        name: "New",
        data (){
            return {
                // id: this.$router.currentRoute.params['id'];
                id: this.$route.params['id'],
                curentNews: null,
                newsList: [],
                resource: null
            }
        },
        methods: {
            goNews () {
                this.$router.push('/news')
            },

        },
        watch: {
            $route (toR,fromR) {
                this.id = toR.params['id']
            }
        },
        mounted (){
            console.log('mounted' + this.curentNews);
        },
        created() {
             var _this = this;
            this.resource = this.$resource('news{/id}');

            this.resource.get({id: _this.id}).then(response => response.json())
                .then(news => {
                    // _this.newsList = news
                    // _this.newsList.forEach(function (item,i) {
                    //     if(item.id == _this.id){
                    //         _this.curentNews = item;
                    //     }
                    // });
                    _this.curentNews = news;
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

<style lang="scss">
.news-container {
    margin-bottom: 40px;
    font-size: 18px;
}
</style>