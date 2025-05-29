<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import LoadingAnimation from '@/components/LoadingAnimation.vue'
import { useGlobalStore } from './stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isLoading } = storeToRefs(globalStore)

onMounted(async () => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 15)
})
</script>

<template>
  <aside
    class="absolute z-10 bg-[url('@/assets/images/old-paper.jpg')] h-screen w-screen opacity-25 bg-cover"
  ></aside>
  <LoadingAnimation v-if="isLoading" />
  <RouterView />
</template>
