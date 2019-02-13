<template>
    <div>
        <h3>News</h3>
        <ul>
            <router-link
                    tag="li"
                    :to="'/new/' + item.id"
                    v-for="(item,i) in news"
                    :key="i"
            >
                <a>{{item.text}}</a>
            </router-link>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "News",
        data (){
            return {
                news: [
                    {text:'новость 1', id: 0},
                    {text:'новость 2', id: 1},
                    {text:'новость 3', id: 2},
                    {text:'новость 4', id: 3},
                ]
            }
        },
        computed: {
            newsList () {
                return this.$store.state.news;
            }
        }
    }
</script>

<style scoped>

</style>