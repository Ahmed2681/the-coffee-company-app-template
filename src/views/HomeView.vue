<script setup>
import LoadingAnimation from '@/components/LoadingAnimation.vue'

import { useGlobalStore } from '@/stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isLoading } = storeToRefs(globalStore)
</script>

<template>
  <LoadingAnimation v-if="isLoading" />
  <div class="h-[100vh] w-[100vw]">
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>
