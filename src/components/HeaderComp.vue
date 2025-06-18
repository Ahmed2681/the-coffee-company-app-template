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

    <!--#region spirals -->
    <!-- first sprial -->
    <img
      v-if="!isDrawerOpen"
      class="absolute top-0 -right-3 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />

    <!-- second sprial -->
    <img
      v-if="!isDrawerOpen"
      class="absolute -right-3 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />

    <!-- third sprial -->
    <img
      v-if="!isDrawerOpen"
      class="absolute -right-3 bottom-0 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <!--#endregion -->
  </header>
</template>
