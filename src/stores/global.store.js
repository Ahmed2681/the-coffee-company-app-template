import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const isLoading = ref(null)
  const isDrawerOpen = ref(false)
  const isFooterVisible = ref(false)

  const onCheckDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }

  return { isLoading, isDrawerOpen, isFooterVisible, onCheckDrawer }
})
