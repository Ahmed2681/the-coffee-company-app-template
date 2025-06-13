<script setup>
import { useScrollStore } from '@/stores'
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>
  <section class="relative flex h-screen w-5/6 items-center bg-[#967259] pl-10">
    <!--#region spirals -->
    <!-- first sprial -->
    <img
      class="absolute top-0 -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
    />
    <img
      v-if="scrollPercent === 0"
      class="absolute top-2 -left-6 w-6"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
    />
    <!-- second sprial -->
    <img
      class="absolute -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
    />
    <img
      v-if="scrollPercent === 0"
      class="absolute -left-6 mb-4 w-6"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
    />
    <!-- third sprial -->
    <img
      class="absolute bottom-0 -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
    />
    <img
      v-if="scrollPercent === 0"
      class="absolute bottom-5 -left-6 w-6"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
    />
    <!--#endregion -->
    <slot></slot>
  </section>
</template>
