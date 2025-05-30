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
    class="z-10 flex h-full w-1/6 justify-center rounded-2xl bg-gray-200 p-20"
    :style="{ opacity: `${scrollPercent > 85 ? 0 : 100}%` }"
  >
    <h1 class="font-dancing text-6xl text-black">Coffee</h1>
  </aside>

  <aside
    class="fixed top-0 left-0 flex h-fit w-full items-center justify-center rounded-2xl shadow transition-transform ease-in-out"
    :style="{
      transform: `translateX(${-100 + scrollPercent}%)`,
      opacity: `${scrollPercent}%`,
    }"
  ></aside>
</template>
