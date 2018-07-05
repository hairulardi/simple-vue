<template>
    <section class="profile">
        <b-row>
            <b-col class="photo-wrapper" sm="4" md="3" lg="2">
                <div class="photo-main">
                    <img v-bind:src="getImage()" alt="Image Header">
                </div>
            </b-col>
            <b-col sm="8" md="9" lg="10">
                <slot></slot>
            </b-col>
        </b-row>
    </section>
</template>

<script>
export default {
    name: 'Header',

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

.profile{
    padding: 35px 20px 15px;
    background-color: $backgroundDark;
    margin-bottom: 25px;

    .photo{
        &-wrapper{
            display: flex;
            justify-content: center;
        }

        &-main{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $semi-dark;
            height: 175px;
            border-radius: 3px;
            width: 140px;
            margin-bottom: 35px;

            > img{
                width: 40%;
                height: auto;
            }
        }
    }
}
</style>


