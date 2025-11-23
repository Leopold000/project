<template>
    <div class="layout_container">
        <!-- 左侧菜单栏 -->
        <div class="layout_slider">
            <Logo></Logo>
            <!-- 展示菜单 -->
        </div>

        <!-- 顶部导航 -->
        <div class="layout_tabbar">3245</div>
        <!-- 内容展示区 -->
        <div class="layout_main">
            <p style="height: 100000px; background-color: beige;">这是内容展示区</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background: $color;

    .layout_slider {
        width: $base-menu-width;
        height: 100%;
        background: $base-menu-background;
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - #{$base-menu-width});
        height: $base-tabbar-height;
        background: cyan;
        top: 0px;
        left: $base-menu-width;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - #{$base-menu-width});
        height: calc(100vh - #{$base-tabbar-height});
        background: lightgray;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
    }
}
</style>