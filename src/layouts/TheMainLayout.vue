<script setup>
import HeaderComp from '@/components/HeaderComp.vue'
import DrawerMenu from '@/components/DrawerMenu.vue'
import FooterComp from '@/components/FooterComp.vue'

import { onMounted, ref } from 'vue'
const slotContainer = ref(null)

import { useGlobalStore, useScrollStore } from '@/stores'
const globalStore = useGlobalStore()
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { isFooterVisible } = storeToRefs(globalStore)
const { scrollPercent } = storeToRefs(scrollStore)

onMounted(() => {
  if (slotContainer.value) {
    const elementCount = Array.from(slotContainer.value.children).filter(
      (el) => el.nodeType === Node.ELEMENT_NODE,
    ).length

    // !!! DESCRIPTION !!!
    console.log('Number of elements in the slot item:', elementCount)
    if (elementCount <= 1) {
      // It means that we can show the footer item, because the page has no or just 1 page component.
      isFooterVisible.value = true
    } // else // It means that we can show the footer item normally, because the page has more than 1 page components.
  }
})
</script>

<template>
  <HeaderComp />
  <DrawerMenu />
  <div ref="slotContainer" class="flex min-h-screen flex-col items-end bg-[#000]">
    <section class="relative flex h-screen w-5/6 items-center bg-[#967259]">
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
    </section>

    <slot />
  </div>
  <FooterComp />
</template>
