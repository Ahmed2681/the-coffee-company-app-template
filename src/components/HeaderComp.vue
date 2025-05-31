<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { useGlobalStore } from '@/stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isDrawerOpen } = storeToRefs(globalStore)
const { onCheckDrawer } = globalStore

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
    class="fixed z-10 flex h-full w-1/6 justify-center bg-gray-200 p-20"
    :style="{
      transform: `translateX(${-scrollPercent}%)`,
      opacity: `${scrollPercent > 85 ? 0 : 100}%`,
    }"
  >
    <h1 class="font-dancing text-6xl">Coffee</h1>
  </aside>

  <aside
    class="fixed top-0 left-0 flex h-20 w-full items-center justify-between bg-gray-200 px-[5%] shadow transition-transform ease-in-out"
    :style="{
      transform: `translateY(${-100 + scrollPercent}%)`,
      opacity: `${scrollPercent}%`,
    }"
  >
    <h1 class="font-dancing text-4xl">Coffee</h1>

    <ul class="flex items-center gap-10">
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>

    <button class="size-10 cursor-pointer" @click="onCheckDrawer">
      <img
        :class="{ 'rotate-40': !isDrawerOpen, 'rotate-0': isDrawerOpen }"
        src="@/assets/images/coffee-bean.png"
        alt="coffee-bean"
        draggable="false"
      />
    </button>
  </aside>
</template>
