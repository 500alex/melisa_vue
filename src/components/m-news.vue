<template>
    <div>
        <v-container fluid>
            <v-container>
                <h4 class="font-weight-medium text-uppercase text-xs-center mb-3 custom-header">Cвежие новости</h4>
                <v-layout wrap>
                    <v-flex v-for="(item,i) in newsList" :key="i" class="xs12 md4 news-item-wrap">
                        <v-card class="news-item elevation-0 ma-3" :to="'/new/' + item.id">
                            <div>
                                <h5 class="headline">{{item.title}}</h5>
                            </div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "m-news",
        computed: {
            newsList () {
                return this.$store.getters['getNews'];
            }
        }
    }
</script>

<style lang="scss">
    .news-item-wrap {
        border-bottom: 1px solid #cecece;
        @media all and(min-width: 960px){
        border-bottom: none;
    }
    }
    .news-item {
        text-align: center;
        background-color: inherit !important;
        &:hover {
            h3 {
                text-decoration: underline;
            }
        }
        h3 {
            font-weight: bold;
            font-size: 28px;
        }
        &__description {
            font-size: 24px;
        }
    }
</style>