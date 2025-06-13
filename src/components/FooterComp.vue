<script setup>
import { useGlobalStore } from '@/stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isFooterVisible } = storeToRefs(globalStore)
</script>

<template>
  <footer
    class="fixed right-0 bottom-0 z-10 flex h-11/12 w-1/6 transform justify-center bg-gray-200 p-20 transition-transform ease-in-out"
    :class="{
      'translate-x-[100%]': !isFooterVisible,
      '-translate-x-0': isFooterVisible,
    }"
  >
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Footer</h1>
    </button>
  </footer>
</template>
