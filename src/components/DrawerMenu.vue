<script setup>
import { useGlobalStore, useScrollStore } from '@/stores'
const globalStore = useGlobalStore()
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { isDrawerOpen } = storeToRefs(globalStore)
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>
  <aside
    class="fixed -right-70 flex h-full w-1/6 justify-center bg-gray-200 p-20"
    :style="{
      transform: scrollPercent > 90 && isDrawerOpen ? 'translateX(-280px)' : 'translateX(0%)',
      opacity: `${scrollPercent > 90 && isDrawerOpen ? 100 : 0}%`,
    }"
  >

  <!-- Profil bilgileri / Oturum Aç (App'e yönlendirilecek) / Ayarlar vb.-->
    <button class="cursor-pointer self-start" @click="$router.push('/')">
      <h1 class="font-dancing text-6xl">Coffee</h1>
    </button>
  </aside>
</template>
