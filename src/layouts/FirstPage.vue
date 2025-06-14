<script setup>
import { useScrollStore } from '@/stores'
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>
  <section class="relative flex h-screen w-5/6 items-center self-end bg-[#967259] px-10">
    <!--#region spirals -->
    <!-- first sprial -->
    <img
      class="absolute top-0 -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      v-if="scrollPercent === 0"
      class="absolute top-1 -left-6 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- second sprial -->
    <img
      class="absolute -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      v-if="scrollPercent === 0"
      class="absolute -left-6 z-20 mb-3 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- third sprial -->
    <img
      class="absolute bottom-0 -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      v-if="scrollPercent === 0"
      class="absolute bottom-4 -left-6 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!--#endregion -->
    <slot></slot>
  </section>
</template>
