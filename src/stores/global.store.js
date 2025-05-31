import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(null)
  const isDrawerOpen = ref(false)

  const onCheckDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
    console.log('now open')
  }

  return { isLoading, isDrawerOpen, onCheckDrawer }
})
