<template>
    <h1>{{ title || '-' }}</h1>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

h1{
    color: $dark;
    border-left: 7px solid $accent;
    padding: 0 20px;
    letter-spacing: 1px;
    line-height: 0.9;
    margin-bottom: 30px;
    
    font : {
        size: 35px;
        weight: 600;
    }
}
</style>


