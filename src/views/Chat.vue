<template>
  <div class="pt-24 pb-20 px-6 min-h-screen flex flex-col">
    <div class="max-w-2xl w-full mx-auto flex flex-col flex-1">

      <!-- Header -->
      <div class="mb-8">
        <p class="text-cyan-400 font-mono text-sm mb-3">// virtual_me.init()</p>
        <h1 class="text-4xl font-bold mb-2">Ask Luis</h1>
        <p class="text-gray-400">
          An AI trained on everything about me. Ask about my projects, skills, background, or anything else.
        </p>
      </div>

      <!-- Chat window -->
      <div
        ref="chatWindow"
        class="card-glass flex-1 min-h-[420px] max-h-[520px] overflow-y-auto p-6 mb-4 space-y-5 scroll-smooth"
      >
        <!-- Empty state -->
        <div v-if="messages.length === 0" class="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
          <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 animate-pulse-slow blur-md" />
            <div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 flex items-center justify-center">
              <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-white font-medium mb-1">Hey, I'm Luis — or at least a version of me.</p>
            <p class="text-gray-500 text-sm">Ask me about my projects, skills, or background.</p>
          </div>
          <!-- Suggestion chips -->
          <div class="flex flex-wrap gap-2 justify-center mt-2">
            <button
              v-for="s in suggestions"
              :key="s"
              @click="sendSuggestion(s)"
              class="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400 hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all cursor-pointer"
            >
              {{ s }}
            </button>
          </div>
        </div>

        <!-- Messages -->
        <template v-else>
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="flex gap-3"
            :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <!-- Assistant avatar -->
            <div
              v-if="msg.role === 'assistant'"
              class="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5 ring-1 ring-cyan-400/30"
            >
              <img src="/images/photo_of_luis.jpg" alt="Luis" class="w-full h-full object-cover" />
            </div>

            <div
              class="max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
              :class="msg.role === 'user'
                ? 'bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/20 text-gray-100 rounded-tr-sm'
                : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-sm'"
            >
              {{ msg.content }}
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="loading" class="flex gap-3 justify-start">
            <div class="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5 ring-1 ring-cyan-400/30">
              <img src="/images/photo_of_luis.jpg" alt="Luis" class="w-full h-full object-cover" />
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
              <div class="flex gap-1 items-center h-4">
                <span class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0ms" />
                <span class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 150ms" />
                <span class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 300ms" />
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- Error -->
      <p v-if="error" class="text-red-400 text-xs mb-2 px-1">{{ error }}</p>

      <!-- Input row -->
      <div class="flex gap-3">
        <input
          v-model="input"
          @keydown.enter.prevent="sendMessage"
          :disabled="loading"
          type="text"
          placeholder="Ask me anything..."
          class="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all disabled:opacity-50"
        />
        <button
          @click="sendMessage"
          :disabled="loading || !input.trim()"
          class="px-5 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl font-medium text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </button>
      </div>

      <p class="text-gray-700 text-xs text-center mt-3">
        Powered by DeepSeek. Only knows about Luis and his work.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const messages = ref([])
const input = ref('')
const loading = ref(false)
const error = ref('')
const chatWindow = ref(null)

const suggestions = [
  'What projects have you built?',
  'What are your strongest skills?',
  'Tell me about your background',
  'Are you open to work?',
  'What tech stack do you use?',
]

async function scrollToBottom() {
  await nextTick()
  if (chatWindow.value) {
    chatWindow.value.scrollTop = chatWindow.value.scrollHeight
  }
}

async function sendMessage() {
  const text = input.value.trim()
  if (!text || loading.value) return

  error.value = ''
  messages.value.push({ role: 'user', content: text })
  input.value = ''
  loading.value = true
  await scrollToBottom()

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.value.map(m => ({ role: m.role, content: m.content })),
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || 'Something went wrong')
    }

    messages.value.push({ role: 'assistant', content: data.reply })
  } catch (err) {
    error.value = 'Failed to get a response. Try again in a moment.'
    messages.value.pop()
  } finally {
    loading.value = false
    await scrollToBottom()
  }
}

function sendSuggestion(text) {
  input.value = text
  sendMessage()
}
</script>
