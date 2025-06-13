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
    class="fixed right-0 bottom-0 items-center z-10 flex w-1/6 transform justify-center bg-gray-200 p-20 transition-transform ease-in-out"
    :class="{
      'h-full': scrollPercent === 0,
      'h-11/12': scrollPercent !== 0,
      'translate-x-0': isFooterVisible,
      'translate-x-[100%]': !isFooterVisible,
    }"
  >
    <!-- <img
      class="absolute -left-6 w-[15%] rotate-0"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
    /> -->
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Footer</h1>
    </button>
  </footer>
</template>
