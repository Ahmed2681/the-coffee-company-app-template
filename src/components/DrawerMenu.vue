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
    class="fixed z-40 flex h-full w-1/6 justify-center bg-gray-200 p-20 outline-4 outline-[#453223]"
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
    class="absolute left-1/6 z-10 flex h-full w-1/6 items-center justify-center bg-gray-200 p-20 outline-4 outline-[#453223]"
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

    <!--#region spirals -->
    <!-- first sprial -->
    <img
      class="absolute top-0 -left-3 w-8 -rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />

    <!-- second sprial -->
    <img
      class="absolute -left-3 w-8 -rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />

    <!-- third sprial -->
    <img
      class="absolute bottom-0 -left-3 w-8 -rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <!--#endregion -->
  </aside>
</template>
