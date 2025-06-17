<script setup>
const props = defineProps({
  pageId: {
    // Must start from 0
    type: Number,
    required: true,
  },
  pagesCount: {
    type: Number,
    required: true,
  },
})

import LoadingAnimation from './LoadingAnimation.vue'
import { useScrollStore } from '@/stores'
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>
  <LoadingAnimation v-if="props.pagesCount === 0" />

  <section
    :id="pageId"
    class="h-screen w-5/6 items-center justify-center self-end bg-red-500 p-2"
    :class="{
      flex: scrollPercent * pagesCount < 100 * pagesCount,
      hidden: scrollPercent * pagesCount === 100 * pagesCount,
    }"
    :style="{
      transform: `rotate(${scrollPercent * 50}deg) translateX(${scrollPercent * 50}%) translateY(${scrollPercent * 50}%)`,
      opacity: `${scrollPercent > 85 ? 0 : 100}%`,
    }"
  >
    <slot></slot>
  </section>
</template>
