<template>
    <div id="app">
        <b-container>
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'app'
}
</script>

<style lang="scss">
@import "./styles/variables";

#app {
    font-family: calibri, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 25px 0;
}

.container{
    max-width: 1300px;
}

//override warna card-header
.card-wrapper-home:nth-child(odd) .custom-card-wrapper > .custom-card-header{
    background-color: $purple;
}
.card-wrapper-home:nth-child(even) .custom-card-wrapper > .custom-card-header{
    background-color: $orange;
}
</style>
