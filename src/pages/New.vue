<template>
    <div>
        <v-container>
            <h3 class="page-header"> заголовок новости {{curentNews.title}}</h3>
            <v-layout>
                <v-flex>
                    <div class="news-container"> Полное описание  {{curentNews.description}}</div>
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

<style lang="scss">
.news-container {
    margin-bottom: 40px;
    font-size: 18px;
}
</style>