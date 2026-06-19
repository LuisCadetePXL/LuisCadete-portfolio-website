<template>
  <Teleport to="body">
    <Transition name="lb">
      <div
        v-if="src"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
        @click="$emit('close')"
      >
        <img
          :src="src"
          :alt="alt"
          class="max-w-full max-h-full rounded-xl shadow-2xl object-contain cursor-default"
          @click.stop
        />
        <button
          class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          @click="$emit('close')"
        >
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({ src: String, alt: String })
defineEmits(['close'])
</script>

<style scoped>
.lb-enter-active, .lb-leave-active { transition: opacity 0.2s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }
</style>
