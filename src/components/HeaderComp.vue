<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollPercent = ref(0)

const updateScroll = () => {
  const raw = Math.min(window.scrollY / 300, 1)
  scrollPercent.value = parseInt(raw * 100)
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <aside
    class="w-1/6 bg-gray-200 z-10 h-full p-20 rounded-2xl justify-center flex"
    :style="{ opacity: `${scrollPercent > 85 ? 0 : 100}%` }"
  >
    <h1 class="text-black text-6xl font-dancing">Coffee</h1>
  </aside>

  <aside
    class="fixed top-0 left-0 w-full h-20 bg-gray-200 rounded-2xl shadow transition-transform ease-in-out"
    :style="{
      transform: `translateX(${-100 + scrollPercent}%)`,
      opacity: `${scrollPercent}%`,
    }"
  ></aside>
</template>
