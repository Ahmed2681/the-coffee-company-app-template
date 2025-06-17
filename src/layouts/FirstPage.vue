<script setup>
import { useScrollStore } from '@/stores'
const scrollStore = useScrollStore()

import { storeToRefs } from 'pinia'
const { scrollPercent } = storeToRefs(scrollStore)
</script>

<template>

</template>
