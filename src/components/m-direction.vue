<template>
    <div>
        <v-container fluid class="white">
            <v-container >
                <h4 class="display-1 .font-weight-medium text-uppercase text-sm-center mb-2 custom-header">Основные направления</h4>
                <v-layout wrap>
                    <v-flex
                            v-for="(trend,i) in trends"
                            :key="i"
                            class="lg4 mb-1"
                    >
                        <v-card class="elevation-1 ma-2 pointer cardDirection" :to="'/trend/'+ trend.url">
                            <div style="text-align: center;">
                                <img :src="trend.icon">
                            </div>
                            <v-card-title primary-title>
                                <div style="width: 100%;">
                                    <h3 class="headline mb-0 text-xs-center">{{trend.text}}</h3>
                                    <div class="text-xs-center"> {{trend.description}} </div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "m-direction",
        data (){
            return {

            }
        },
        computed: {
            trends () {
                return this.$store.getters['trends/getTrends'];
            }
        }
    }
</script>

<style lang="scss">;
    .cardDirection {
        img {
            transition: all .5s;
        }
        &:hover {
            img {
                opacity: .6;
            }
        }
    }
</style>