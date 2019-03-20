<template>
    <div>
       <div class="promo">
           <div class="promo__description">
                <v-container>
                    <div class="promo-block">
                        <div class="promo-block__label">Мы танцуем, чтобы стать лучше</div>
                        <div class="promo-block__text">Описание того что мы делаем</div>
                        <div class="promo-action">
                            <div>
                                <v-btn round color="primary" dark :to="'/albums'">Альбомы</v-btn>
                            </div>
                            <!--<div>-->
                                <!--<v-btn round color="primary" dark :to="'/photo'">Наше фото</v-btn>-->
                            <!--</div>-->
                        </div>
                    </div>
                </v-container>
           </div>
           <v-img
                src="./images/11.jpeg"
           ></v-img>

       </div> 
    </div>

</template>

<script>
    import '../images/11.jpeg'
    import '../images/dance1.png'
    import '../images/dance2.png'
    import '../images/dance3.png'
    import '../images/photo1.jpeg'
    import '../images/photo2.jpeg'
    import '../images/photo3.jpeg'
    import '../images/photo4.jpeg'
    import '../images/teacher.png'

    export default {
        name: "m-promo"
    }
</script>

<style lang="scss">
    .promo {
        text-align: center;
        position: relative;
        &__description {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            .main-text {
                text-align: left;
            }
        }
        img {
            max-width: 100%;
            max-height: 600px;
            margin: 0 auto;
        }
    }
    .promo-block {
        width: 50%;
        &__label {
            font-size: 55px;
            font-weight: 600;
            line-height: 1.2;
            color: #121212;
            text-align: left;
            margin-bottom: 20px;
            display: none;
            @media all and (min-width: 750px){
                display: block;
            }
        }
        &__text {
            text-align: left;
            font-size: 38px;
            display: none;
            @media all and (min-width: 1000px){
                display: block;
            }
        }
    }
    .promo-action {
        display: flex;
        flex-direction: column;
        @media all and (min-width: 530px){
            flex-direction: row;
            padding-top: 40px;
        }
    }
</style>