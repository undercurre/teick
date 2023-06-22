<template>
  <div class="container">
    <h2>只需要1元，马上知道你的他是不是渣男</h2>
    <el-button
      :plain="true"
      type="primary"
      @click="toAnalysis"
      >支付</el-button
    >
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function toAnalysis() {
  router.push('/analysis')
}
</script>
