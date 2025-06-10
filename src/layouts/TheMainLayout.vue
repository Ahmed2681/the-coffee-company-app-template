<script setup>
import HeaderComp from '@/components/HeaderComp.vue'
import DrawerMenu from '@/components/DrawerMenu.vue'
</script>

<template>
  <HeaderComp />
  <DrawerMenu />

  <slot />
</template>
