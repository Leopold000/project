<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <div slot="header">
                        <span>{{ getTime() }}</span>
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="8">
                                <el-card>
                                    <div slot="header">
                                        <span>今日订单</span>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>