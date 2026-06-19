<template>
  <div class="pt-24 pb-20 px-6 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <p class="text-cyan-400 font-mono text-sm mb-3">// skills.json</p>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h1>
      <p class="text-gray-400 text-lg mb-14 max-w-xl">
        My core toolbox, built through real projects and not just tutorials.
      </p>

      <!-- Skill categories -->
      <div class="space-y-12">
        <div v-for="cat in categories" :key="cat.name">
          <h2 class="text-lg font-semibold text-gray-300 mb-5">
            {{ cat.name }}
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              class="card-glass p-5 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="font-medium text-white group-hover:text-cyan-400 transition-colors">{{ skill.name }}</span>
                <span class="text-xs font-mono text-gray-500">{{ skill.level }}%</span>
              </div>
              <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-700"
                  :style="{ width: skill.level + '%' }"
                />
              </div>
              <p class="text-gray-500 text-xs mt-2">{{ skill.note }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools / Ecosystem -->
      <div class="mt-16">
        <h2 class="text-lg font-semibold text-gray-300 mb-5">
          Tools & Ecosystem
        </h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="tool in tools"
            :key="tool"
            class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all cursor-default font-mono"
          >
            {{ tool }}
          </span>
        </div>
      </div>

      <!-- Languages -->
      <div class="mt-16 card-glass p-8">
        <h2 class="text-lg font-semibold text-white mb-6">
          Spoken Languages
        </h2>
        <div class="grid sm:grid-cols-3 gap-6">
          <div v-for="lang in languages" :key="lang.name" class="text-center">
            <div class="font-medium text-white">{{ lang.name }}</div>
            <div class="text-sm text-cyan-400 font-mono">{{ lang.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'Python',             level: 95, note: 'Primary language for AI, scripting and automation' },
      { name: 'Machine Learning',   level: 85, note: 'Supervised / unsupervised, model training' },
      { name: 'Computer Vision',    level: 80, note: 'CNN, YOLO, OpenCV, MediaPipe' },
      { name: 'NLP',                level: 75, note: 'Text classification, transformers, XAI' },
      { name: 'RAG Systems',        level: 70, note: 'Retrieval Augmented Generation, vector DBs' },
      { name: 'Local AI Pipelines', level: 75, note: 'Ollama, Llama 3, Faster-Whisper, OpenVoice' },
    ],
  },
  {
    name: 'Frontend & Web',
    skills: [
      { name: 'Vue 3 + Vite',    level: 80, note: 'Component-based UI, Composition API' },
      { name: 'TypeScript',      level: 70, note: 'Type-safe frontend development' },
      { name: 'Three.js',        level: 65, note: '3D experiences in the browser' },
      { name: 'TailwindCSS',     level: 85, note: 'Utility-first modern styling' },
      { name: 'JavaScript',      level: 80, note: 'ES2022+, async/await, DOM' },
    ],
  },
  {
    name: 'Data & Backend',
    skills: [
      { name: 'PostgreSQL / SQL', level: 78, note: 'Database design, tuning, queries' },
      { name: 'MLOps / DVC',      level: 70, note: 'Model versioning, data pipelines' },
      { name: 'Apache Kafka',     level: 60, note: 'Event streaming, real-time data' },
      { name: 'Apache Spark',     level: 60, note: 'Distributed data processing' },
      { name: 'Spring Boot',      level: 55, note: 'REST APIs, Java backend' },
    ],
  },
  {
    name: 'Robotics & Infrastructure',
    skills: [
      { name: 'ROS / Gazebo', level: 65, note: 'Robot Operating System, simulation' },
      { name: 'Docker',       level: 75, note: 'Containerisation, Docker Compose' },
      { name: 'Linux / Bash', level: 72, note: 'System admin, shell scripting' },
    ],
  },
]

const tools = [
  'Git', 'GitHub', 'VS Code', 'Jupyter', 'Postman', 'MinIO', 'InfluxDB',
  'Grafana', 'NiFi', 'Prometheus', 'Jenkins', 'SAP BTP', 'Ollama', 'DearPyGui',
]

const languages = [
  { name: 'Dutch',   level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Native' },
]
</script>
