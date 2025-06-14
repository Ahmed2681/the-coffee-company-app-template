<script setup>
import { useScrollStore } from '@/stores'
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>
  <section class="relative flex h-screen w-5/6 items-center bg-[#967259] px-10">
    <!--#region spirals -->
    <!-- first sprial -->
    <img
      class="absolute top-15 -right-5 z-10 w-8 rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      v-if="scrollPercent === 100"
      class="absolute top-19 -right-6 z-20 w-[25px] rotate-180"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- second sprial -->
    <img
      class="absolute -right-5 z-10 mt-12 w-8 rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      v-if="scrollPercent === 100"
      class="absolute -right-6 z-20 mt-15 w-[25px] rotate-180"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- third sprial -->
    <img
      class="absolute -right-5 bottom-3 z-10 w-8 rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      v-if="scrollPercent === 100"
      class="absolute -right-6 bottom-4 z-20 w-[25px] rotate-180"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!--#endregion -->
    <slot></slot>
  </section>
</template>
