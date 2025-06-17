<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const pages = [1, 2, 3, 4, 5, 6]
const scrollY = ref(0)

const onScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// :style="{
//   transform: `rotate(${-scrollPercent * 0.5}deg) translateX(${-scrollPercent * 5}%) translateY(${scrollPercent}%)`,
//   opacity: `${scrollPercent > 85 ? 0 : 100}%`,
// }"
const getPageStyle = (index) => {
  const pageHeight = window.innerHeight
  const progress = scrollY.value / pageHeight - index

  if (progress < 0) {
    return {
      zIndex: pages.length - index,
      opacity: 1,
      transform: 'translateY(0)',
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: 'all 0.5s ease-out',
    }
  } else if (progress >= 0 && progress <= 1) {
    return {
      zIndex: pages.length - index,
      opacity: 1 - progress,
      transform: `translateY(${progress * 50}%) rotate(${progress * 50}deg)`,
      clipPath: `inset(${progress * 100}% 0% 0% 0%)`,
      transition: 'all 0.3s ease-out',
    }
  } else {
    return {
      opacity: 0,
      pointerEvents: 'none',
    }
  }
}
</script>

<template>
  <div class="relative">
    <div :style="{ height: `${pages.length * 100}vh` }" />

    <div
      v-for="(page, index) in pages"
      :key="index"
      class="fixed top-0 right-0 h-screen w-5/6 overflow-hidden shadow-xl"
      :class="{
        'bg-black': page % 2 === 0,
        'bg-[#967259]': page % 2 !== 0,
      }"
      :style="getPageStyle(index)"
    >
      <div class="p-10 text-4xl font-bold text-white">Page {{ index + 1 }}</div>
    </div>
  </div>
</template>
