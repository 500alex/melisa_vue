<template>
    <div>
        <h3>News</h3>
        <ul>
            <router-link
                    tag="li"
                    :to="'/new/' + item.id"
                    v-for="(item,i) in newsList"
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
            }
        },
        computed: {
            newsList () {
                return this.$store.getters['news/getNews'];
            }
        }
    }
</script>

<style scoped>

</style>