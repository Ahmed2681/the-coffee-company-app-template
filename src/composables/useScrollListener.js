import { onMounted, onUnmounted } from 'vue'
import { useScrollStore } from '@/stores'

export default function useScrollListener() {
  const scrollStore = useScrollStore()

  const updateScroll = () => {
    const raw = Math.min(window.scrollY / 300, 1)
    scrollStore.setScrollPercent(parseInt(raw * 100))
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })
}
