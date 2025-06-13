<script setup>
import HeaderComp from '@/components/HeaderComp.vue'
import DrawerMenu from '@/components/DrawerMenu.vue'
import FooterComp from '@/components/FooterComp.vue'

import { onMounted, ref } from 'vue'
const slotContainer = ref(null)

import { useGlobalStore } from '@/stores'
const globalStore = useGlobalStore()

import { storeToRefs } from 'pinia'
const { isFooterVisible } = storeToRefs(globalStore)

onMounted(() => {
  if (slotContainer.value) {
    const elementCount = Array.from(slotContainer.value.children).filter(
      (el) => el.nodeType === Node.ELEMENT_NODE,
    ).length

    // !!! DESCRIPTION !!!
    // console.log('Number of elements in the slot item:', elementCount)
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
  <div ref="slotContainer">
    <slot />
  </div>
  <FooterComp />
</template>
