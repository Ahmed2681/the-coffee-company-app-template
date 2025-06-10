import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScrollStore = defineStore('scrollStore', () => {
  const scrollPercent = ref(0)
  const setScrollPercent = (val) => {
    scrollPercent.value = val
  }

  return {
    scrollPercent,
    setScrollPercent,
  }
})
