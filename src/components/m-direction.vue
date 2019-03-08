<template>
    <div>
        <v-container fluid class="white">
            <v-container >
                <h4 class="display-1 .font-weight-medium text-uppercase text-sm-center mb-2">Наши основные направления</h4>
                <v-layout wrap>
                    <v-flex
                            v-for="(item,i) in directionList"
                            :key="i"
                            class="lg4 mb-1"

                    >
                        <v-card class="elevation-1 ma-2 pointer cardDirection">
                            <div style="text-align: center;">
                                <img :src="item.icon">
                            </div>
                            <v-card-title primary-title>
                                <div style="width: 100%;">
                                    <h3 class="headline mb-0 text-xs-center">{{item.label}}</h3>
                                    <div class="text-xs-center"> {{item.text}} </div>
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
                directionList: [
                    {icon: 'img/dance1.png',label: 'Бачата',text: 'Описание направления'},
                    {icon: 'img/dance2.png',label: 'Дискофокс',text: 'Описание направления'},
                    {icon: 'img/dance3.png',label: 'Меренга',text: 'Описание направления'},
                    {icon: 'img/dance1.png',label: 'Сальса',text: 'Описание направления'},
                    {icon: 'img/dance2.png',label: 'Танго',text: 'Описание направления'},
                    {icon: 'img/dance3.png',label: 'Групповые номера',text: 'Описание направления'}
                ]
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