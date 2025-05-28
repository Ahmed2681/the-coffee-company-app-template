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
  }, 2000)
})
</script>

<template>
  <LoadingAnimation v-if="isLoading" />
  <RouterView />
</template>
