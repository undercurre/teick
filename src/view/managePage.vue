<template>
  <div class="container">
    <h1>历史记录</h1>
    <el-card
      class="box-card"
      v-for="item in testStore.tests"
      :key="item.finishTime"
    >
      <div class="card-header">
        <span>测试结果：{{ item.result }}</span>
        <span>完成时间：{{ formatDateTime(item.finishTime.toString()) }}</span>
      </div>
      <h3 v-if="testStore.tests.length === 0">暂无记录</h3>
    </el-card>
    <el-button
      style="margin-top: 60px;"
      :plain="true"
      type="primary"
      @click="toTest"
      >再测一次</el-button
    >
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.card-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100vw;
}
</style>

<script lang="ts" setup>
import { useTestStore } from '../store/test'
import { useRouter } from 'vue-router';

const testStore = useTestStore()
const router = useRouter()

function formatDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function toTest() {
  router.push('/test')
}
</script>
