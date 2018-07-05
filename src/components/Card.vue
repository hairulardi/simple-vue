<template>
    <article class="custom-card-wrapper">
        <div class="custom-card-header">
            <img v-bind:src="getImage()" alt="Play">
        </div>

        <div class="custom-card-content">
            <slot></slot>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Card',

    props: {
        image: String
    },
    
    methods: {
        getImage(){
            return require(`../assets/${this.image}`)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

$fontSize: 18px;

@mixin cardShadow(){
    box-shadow: 0 1px 5px rgba($color: #000000, $alpha: .3);
    -moz-box-shadow: 0 1px 5px rgba($color: #000000, $alpha: .3);
    -webkit-box-shadow: 0 1px 5px rgba($color: #000000, $alpha: .3);
}

.custom-card{
    &-wrapper{
        @include cardShadow();

        border-radius: 4px;
        margin-bottom: 15px;
    }

    &-header{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: blue;
        height: 100px;
        border-radius: 4px 4px 0 0;

        // > img{
        //     width: 25%;
        //     height: auto;
        // }
    }

    &-content{
        padding: 12px 12px 20px;

        > h3{
            color: $dark;
            font-size: $fontSize;
            //font-weight: 600;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap; 
        }

        p{
            color: $semi-dark;
            margin-bottom: .4px;
            font-weight: 600;
            font-size: $fontSize;
            line-height: 1.2;
        }
    }
}

.margin-top{
    margin-top: 10px;
}
</style>


