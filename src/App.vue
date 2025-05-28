<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import { useGlobalStore } from './stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isLoading } = storeToRefs(globalStore)

onMounted(async () => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 4000)
})
</script>

<template>
  <RouterView />
</template>
