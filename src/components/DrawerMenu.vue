<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { useGlobalStore } from '@/stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isDrawerOpen } = storeToRefs(globalStore)

const scrollPercent = ref(0)

const updateScroll = () => {
  const raw = Math.min(window.scrollY / 300, 1)
  scrollPercent.value = parseInt(raw * 100)
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <aside
    class="fixed -right-70 flex h-full w-1/6 justify-center bg-gray-200 p-20"
    :style="{
      transform: scrollPercent > 90 && isDrawerOpen ? 'translateX(-280px)' : 'translateX(0%)',
      opacity: `${scrollPercent > 90 && isDrawerOpen ? 100 : 0}%`,
    }"
  >
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Coffee</h1>
    </button>
  </aside>
</template>
