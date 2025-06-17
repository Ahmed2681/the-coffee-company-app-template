<script setup>
import { useGlobalStore, useScrollStore } from '@/stores'
const globalStore = useGlobalStore()
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { isFooterVisible } = storeToRefs(globalStore)
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>
  <footer
    class="fixed right-0 bottom-0 flex w-1/6 transform items-center justify-center bg-gray-200 p-20 outline-4 outline-[#453223] transition-all ease-in-out"
    :class="{
      'h-full': scrollPercent === 0,
      'h-11/12': scrollPercent !== 0,
      visible: isFooterVisible,
      invisible: !isFooterVisible,
    }"
    :style="{
      transform: isFooterVisible
        ? `rotate(0deg) translateX(0%) translateY(0%)`
        : `rotate(${scrollPercent * 1}deg) translateX(${scrollPercent * 5}%) translateY(${scrollPercent}%)`,
    }"
  >
    <img
      v-if="scrollPercent < 100"
      class="absolute top-1 left-0 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <img
      v-if="scrollPercent < 100"
      class="absolute left-0 z-20 mb-3 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <img
      v-if="scrollPercent < 100"
      class="absolute bottom-4 left-0 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Footer</h1>
    </button>
  </footer>
</template>
