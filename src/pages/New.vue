<template>
    <div>
        <h3>New {{id}}</h3>
        <v-btn color="primary" @click="goNews">К списку новостей</v-btn>
        <!--Дочерний роут-->
        <router-link :to="{name: 'newFull', params:{id: id}, query:{name: 'mazda'}}">полное описание</router-link>
        <!--<router-link :to="'/new/'+ id + '/full'">полное описание</router-link>-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "New",
        data (){
            return {
                // id: this.$router.currentRoute.params['id'];
                id: this.$route.params['id']
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
        }
    }
</script>

<style scoped>

</style>