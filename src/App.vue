<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import LoadingAnimation from '@/components/LoadingAnimation.vue'
import { useGlobalStore } from './stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isLoading } = storeToRefs(globalStore)

onMounted(() => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 15)
})
</script>

<template>
  <aside
    class="fixed inset-0 z-50 bg-[url('@/assets/images/old-paper.jpg')] opacity-25 bg-cover pointer-events-none"
  ></aside>
  <LoadingAnimation v-if="isLoading" />
  <RouterView />
</template>
