<template>
  <el-descriptions
    title="分析结果"
    direction="vertical"
    :column="4"
    size="default"
    border
  >
    <div
      v-for="item in answerStore.answers"
      :key="item.id"
    >
      <el-descriptions-item
        label="Question"
        >{{ item.attributes.content }}</el-descriptions-item
      >
      <el-descriptions-item
        label="Answer"
        >{{ item.answer }}</el-descriptions-item
      >
      <el-descriptions-item
        label="偏向"
        :span="2"
        >+</el-descriptions-item
      >
    </div>
  </el-descriptions>

  <h1>{{ calcResult() }}</h1>
  <el-button
    style="margin-top: 60px;"
    :plain="true"
    type="primary"
    @click="toTest"
    >以往记录</el-button
  >
</template>

<style scoped></style>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAnswerStore } from '../store/answer'
import { useTestStore } from '../store/test'
import { useRouter } from 'vue-router';

const answerStore = useAnswerStore()

onMounted(() => {
    useTestStore().tests.push({
        answers: answerStore.answers,
        finishTime: new Date(),
        result: calcResult()
    })
})

function calcResult() {
    return '你很迷茫'
}

const router = useRouter()

function toTest() {
  router.push('/manage')
}
</script>
