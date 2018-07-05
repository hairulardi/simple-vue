<template>
    <div class="loader-wrapper">
        <img src="../assets/loading.svg" alt="Loading...">
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style lang="scss" scoped>
    .loader-wrapper{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 999999;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }
</style>