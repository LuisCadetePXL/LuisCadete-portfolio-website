<template>
  <div class="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center">
    <div class="max-w-lg w-full text-center">
      <!-- Animated neural node graphic -->
      <div class="relative mx-auto w-32 h-32 mb-8">
        <div class="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 animate-pulse-slow" />
        <div class="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 animate-pulse" />
        <div class="absolute inset-0 flex items-center justify-center">
          <svg class="w-12 h-12 text-cyan-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
      </div>

      <div class="inline-flex items-center gap-2 bg-violet-400/10 border border-violet-400/20 rounded-full px-4 py-1.5 text-sm text-violet-300 font-mono mb-6">
        <span class="w-2 h-2 bg-violet-400 rounded-full"></span>
        coming soon
      </div>

      <h1 class="text-4xl font-bold mb-4">Virtual Me</h1>
      <p class="text-gray-400 text-lg mb-4 leading-relaxed">
        An AI chatbot that knows everything about me, my projects, my skills, my experience and my personality.
      </p>
      <p class="text-gray-500 text-sm leading-relaxed mb-8">
        Built with a local RAG pipeline using Ollama + Llama 3, voice input via Faster-Whisper,
        and OpenVoice V2 for voice synthesis. Ask it anything.
      </p>

      <div class="card-glass p-6 text-left">
        <p class="text-xs font-mono text-gray-500 mb-3">// planned_features</p>
        <ul class="space-y-2">
          <li v-for="f in features" :key="f" class="flex items-center gap-3 text-sm text-gray-400">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
            {{ f }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  'Knows my full bio, projects, and experiences',
  'Voice input via Faster-Whisper speech recognition',
  'Voice output via OpenVoice V2 synthesis',
  'RAG over my portfolio documents',
  'Answers in English, Dutch, or Spanish',
  'Runs entirely locally with no cloud API needed',
]
</script>
