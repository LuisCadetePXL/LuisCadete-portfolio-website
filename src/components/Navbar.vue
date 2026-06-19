<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-xs font-bold font-mono text-gray-950">
          LC
        </div>
        <span class="font-mono font-semibold text-sm text-gray-300 group-hover:text-white transition-colors">
          luis.cadete<span class="text-cyan-400">()</span>
        </span>
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          active-class="text-cyan-400 bg-cyan-400/10"
        >
          {{ link.label }}
        </RouterLink>
        <a
          href="/LUIS_CADETE_CV.pdf"
          download="Luis_Cadete_CV.pdf"
          class="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          CV
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="menuOpen" class="md:hidden bg-gray-950/95 backdrop-blur-md border-b border-white/10 px-6 pb-4">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          active-class="text-cyan-400 bg-cyan-400/10"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled  = ref(false)
const menuOpen  = ref(false)

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/skills',   label: 'Skills'   },
  { to: '/projects', label: 'Projects' },
  { to: '/chat',     label: 'Chat'     },
  { to: '/contact',  label: 'Contact'  },
]

function onScroll() { scrolled.value = window.scrollY > 20 }
onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.2s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
