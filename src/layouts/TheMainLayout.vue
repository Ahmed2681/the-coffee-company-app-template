<script setup>
import HeaderComp from '@/components/HeaderComp.vue'
import DrawerMenu from '@/components/DrawerMenu.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>

<template>
  <HeaderComp />
  <DrawerMenu />

  <slot />

  <FooterComp />
</template>
