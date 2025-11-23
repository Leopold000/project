<template>
    <div>
        <svg :style="{ width: width, height: height }">
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
// 接受父组件传递的属性
defineProps({
    // xlink href前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    // 提供使用的图标名称
    name: String,
    // 颜色
    color: {
        type: String,
        default: ''
    },
    // 宽度
    width: {
        type: String,
        default: '16px'
    },
    // 高度
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style scoped lang="scss"></style>