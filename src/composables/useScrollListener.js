import { onMounted, onUnmounted } from 'vue'
import { useGlobalStore, useScrollStore } from '@/stores'

export default function useScrollListener() {
  const globalStore = useGlobalStore()
  const scrollStore = useScrollStore()

  const updateScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    const raw = Math.min(window.scrollY / 300, 1)
    scrollStore.setScrollPercent(parseInt(raw * 100))

    globalStore.isFooterVisible = windowHeight + scrollTop >= fullHeight

    console.log(scrollStore.scrollPercent);

  }

  onMounted(() => {
    window.addEventListener('scroll', updateScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })
}
