<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import LoadingAnimation from '@/components/LoadingAnimation.vue'
import { useGlobalStore } from './stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isLoading } = storeToRefs(globalStore)

import useScrollListener from '@/composables/useScrollListener.js'
useScrollListener()

onMounted(() => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <aside
    class="pointer-events-none fixed inset-0 z-50 bg-[url('@/assets/images/old-paper.jpg')] bg-cover opacity-25"
  ></aside>
  <LoadingAnimation v-if="isLoading" />

  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>
