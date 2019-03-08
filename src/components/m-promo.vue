<template>
    <div>
       <div class="promo">
           <v-img
                src="img/11.jpg"
           ></v-img>
           <!--<img src="img/11.jpg">-->
       </div> 
    </div>

</template>

<script>
    export default {
        name: "m-promo"
    }
</script>

<style lang="scss">
.promo {
    text-align: center;
    img {
        max-width: 100%;
        max-height: 600px;
        margin: 0 auto;
    }
}
</style>