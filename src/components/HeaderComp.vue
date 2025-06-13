<script setup>
import { useGlobalStore, useScrollStore } from '@/stores'
const globalStore = useGlobalStore()
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { isDrawerOpen } = storeToRefs(globalStore)
const { scrollPercent } = storeToRefs(scrollStore)

const { onCheckDrawer } = globalStore
</script>

<template>
  <header
    class="fixed z-10 flex h-full w-1/6 justify-center bg-gray-200 p-20"
    :style="{
      transform: `translateX(${-scrollPercent}%)`,
      opacity: `${scrollPercent > 85 ? 0 : 100}%`,
    }"
  >
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Coffee</h1>
    </button>
  </header>

  <header
    class="fixed top-0 left-0 flex h-1/12 items-center justify-between bg-gray-200 px-[5%] shadow transition-transform ease-in-out"
    :class="{
      'w-5/6': isDrawerOpen && scrollPercent >= 90,
      'w-full': !isDrawerOpen || scrollPercent < 90,
    }"
    :style="{
      transform: `translateY(${-100 + scrollPercent}%)`,
      opacity: `${scrollPercent}%`,
    }"
  >
    <button class="cursor-pointer" @click="$router.push('/')">
      <h1 class="font-dancing text-4xl">Coffee</h1>
    </button>

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
  </header>
</template>
