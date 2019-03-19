<template>
    <div>
        <v-container fluid class="white">
            <v-container>
                <h4 class="font-weight-medium text-uppercase text-xs-center mb-3 custom-header">Наш преподаватель</h4>
                <v-layout wrap>
                    <v-flex class="xs12 md6">
                      <v-img src="img/teacher.png"></v-img>
                    </v-flex>
                    <v-flex class="xs12 md6">
                        <v-list class="description-teacher">
                            <div class="custom-subheader">Савинкина Елена Сергеевна</div>
                            <v-list-tile-content>
                                <v-list-tile-title>Финалистка чемпионата мира</v-list-tile-title>
                                <v-list-tile-sub-title>Германия 2011г</v-list-tile-sub-title>
                            </v-list-tile-content>

                        </v-list>
                    </v-flex>


                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "m-teacher"
    }
</script>

<style lang="scss">
    .custom-header {
        font-size: 18px !important;
        text-align: center !important;
        margin-bottom: 20px !important;
        font-weight: 600 !important;
        color: #121212;
        letter-spacing: 0px;
        @media all and (min-width: 600px){
            font-size: 20px !important;
        }
        @media all and (min-width: 960px){
            font-size: 30px !important;
        }
        @media all and (min-width: 1200px){
            font-size: 50px !important;

        }
    }
    .custom-subheader {
        font-size: 18px !important;
        font-weight: bold;
        margin-bottom: 20px !important;
        @media all and (min-width: 600px){
            font-size: 22px !important;
        }
        @media all and (min-width: 960px){
            font-size: 30px !important;
        }
        @media all and (min-width: 1200px){
            font-size: 36px !important;

        }
    }
    .description-teacher {
        @media all and (min-width: 960px){
            margin-left: 50px;
        }
        .v-list__tile__title {
            font-size: 20px;
        }
        .v-list__tile__sub-title {
            font-size: 20px;
        }
    }
</style>