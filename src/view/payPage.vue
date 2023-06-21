<template>
  <h1>pay</h1>
</template>

<style scoped></style>

<script lang="ts" setup>

import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    ElMessage({
      showClose: true,
      message: '支付成功',
      type: 'success',
    })
    router.push('/analysis')
  }, 5000);
})
</script>
