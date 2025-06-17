<script setup>
import { useGlobalStore, useScrollStore } from '@/stores'
const globalStore = useGlobalStore()
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { isDrawerOpen, isFooterVisible } = storeToRefs(globalStore)
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>
  <aside
    class="fixed z-40 flex h-full w-1/6 justify-center bg-gray-200 p-20"
    :class="{
      '-right-70': !isFooterVisible,
      '-left-70': isFooterVisible,
    }"
    :style="{
      transform:
        scrollPercent > 90 && isDrawerOpen
          ? isFooterVisible
            ? 'translateX(280px)'
            : 'translateX(-280px)'
          : 'translateX(0%)',
      opacity: `${scrollPercent > 90 && isDrawerOpen ? 100 : 0}%`,
    }"
  >
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Drawer</h1>
    </button>
  </aside>

  <aside
    class="absolute left-1/6 z-10 flex h-full w-1/6 items-center justify-center border-l-4 border-[#453223] bg-gray-200 p-20"
    :style="{
      transformOrigin: 'left center',
      transform: !isDrawerOpen
        ? 'perspective(1500px) rotateY(180deg)'
        : 'perspective(1500px) rotateY(0deg)',
      transition: 'transform 0.5s ease-in-out',
      backfaceVisibility: 'hidden',
    }"
  >
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Drawer</h1>
    </button>
  </aside>
</template>
