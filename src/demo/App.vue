<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less">
    * {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    @import "../styles/index.less";
</style>
