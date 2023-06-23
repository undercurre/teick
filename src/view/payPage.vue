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
import { useAnswerStore } from '../store/answer';
import { CreateAnswer } from '../api/answer';
import { createTest } from '../api/test'
import { getAnalysisResult } from '../config/analysis'

const router = useRouter()

const answerStore = useAnswerStore()

async function toAnalysis() {
  const reqList = answerStore.answers.map(item => CreateAnswer(item.answer, item.id.toString()))
  const res = await Promise.all(reqList)
  const answerIds = res.map(item => item.data.id);
  const createRes = await createTest(getAnalysisResult(answerStore.answers), answerIds)
  if (createRes.data.id) {
    router.push('/analysis')
  }
}
</script>
