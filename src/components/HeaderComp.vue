<script setup>
import { useGlobalStore, useScrollStore } from '@/stores'
const globalStore = useGlobalStore()
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { isDrawerOpen, isFooterVisible } = storeToRefs(globalStore)
const { scrollPercent } = storeToRefs(scrollStore)

const { onCheckDrawer } = globalStore
</script>

<template>
  <header
    class="fixed z-10 flex h-full w-1/6 items-center justify-center bg-gray-200 p-20 outline-4 outline-[#453223] *:absolute"
    :style="{
      transform: `rotate(${-scrollPercent * 0.5}deg) translateX(${-scrollPercent * 5}%) translateY(${scrollPercent}%)`,
      opacity: `${scrollPercent > 85 ? 0 : 100}%`,
    }"
  >
    <a href="/" class="self-start">
      <!-- a tag is used because we need to refresh the page after redirection for the header and footer component -->
      <h1 class="font-dancing text-6xl">Coffee</h1>
    </a>

    <button class="size-10 cursor-pointer self-end" @click="onCheckDrawer">
      <img
        :class="{ 'rotate-40': !isDrawerOpen, 'rotate-0': isDrawerOpen }"
        src="@/assets/images/coffee-bean.png"
        alt="coffee-bean"
        draggable="false"
      />
    </button>

    <img
      v-if="scrollPercent > 0"
      class="absolute top-1 right-0 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <img
      v-if="scrollPercent > 0"
      class="absolute right-0 z-20 mb-3 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <img
      v-if="scrollPercent > 0"
      class="absolute right-0 bottom-4 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
  </header>

  <header
    class="fixed top-0 z-40 flex h-1/12 items-center justify-between bg-gray-200 px-[5%] shadow outline-4 outline-[#453223] transition-transform ease-in-out"
    :class="{
      'left-0': !isFooterVisible,
      'right-0': isFooterVisible,
      'w-5/6': isDrawerOpen && scrollPercent >= 90,
      'w-full': !isDrawerOpen || scrollPercent < 90,
    }"
    :style="{
      transform: `translateY(${-100 + scrollPercent}%)`,
      opacity: `${scrollPercent}%`,
    }"
  >
    <a href="/">
      <!-- a tag is used because we need to refresh the page after redirection for the header and footer component -->
      <h1 class="font-dancing text-4xl">Coffee</h1>
    </a>

    <ul class="flex items-center gap-10">
      <li>Home</li>

      <li><a href="/about">About Us</a></li>
      <!-- a tag is used because we need to refresh the page after redirection for the header and footer component -->

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
