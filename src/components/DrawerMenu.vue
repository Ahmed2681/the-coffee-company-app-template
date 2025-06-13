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
    class="fixed flex h-full w-1/6 justify-center bg-gray-200 p-20"
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
    <!-- Profil bilgileri / Oturum Aç (App'e yönlendirilecek) / Ayarlar vb.-->
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Drawer</h1>
    </button>
  </aside>
</template>
