<template>
  <div>
    <Lightbox v-if="lightbox" :src="lightbox.src" :alt="lightbox.alt" @close="lightbox = null" />
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralCanvas class="opacity-60" />

      <!-- Gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-transparent to-gray-950 pointer-events-none" />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-950/40 via-transparent to-gray-950/40 pointer-events-none" />

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <!-- Avatar -->
        <div class="mx-auto mb-6 w-20 h-20 rounded-full overflow-hidden ring-2 ring-cyan-400/30">
          <img src="/images/photo_of_luis.jpg" alt="Luis Cadete" class="w-full h-full object-cover" />
        </div>

        <div class="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-1.5 text-sm text-cyan-400 font-mono mb-6">
          <span class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          Open to work · AI Engineer
        </div>

        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
          Hi, I'm <span class="text-gradient">Luis</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 font-light mb-2">
          AI Engineer · Robotics Enthusiast · Builder
        </p>
        <p class="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Final-year Applied Computer Science student (AI track) at PXL University College.
          I turn neural networks into real-world systems, from gesture-controlled drones to MLOps pipelines.
        </p>

        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink
            to="/projects"
            class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
          >
            View Projects
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-6 py-3 border border-white/20 rounded-lg font-semibold text-gray-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Get in Touch
          </RouterLink>
          <a
            href="/LUIS_CADETE_CV.pdf"
            download="Luis_Cadete_CV.pdf"
            class="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download CV
          </a>
        </div>

        <!-- Scroll hint -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
          <span>scroll</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- About snippet -->
    <section class="py-24 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-cyan-400 font-mono text-sm mb-3">// about_me.json</p>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Calm under pressure.<br/>Driven by curiosity.
          </h2>
          <p class="text-gray-400 leading-relaxed mb-4">
            Born in the Dominican Republic and raised in Spain and Belgium, I've always had to adapt fast.
            That same mindset carries into everything I build.
          </p>
          <p class="text-gray-400 leading-relaxed mb-6">
            My specialty is AI: training models, building RAG systems, and deploying local pipelines.
            My goal is to bridge the gap between smart software and physical robotics.
          </p>
          <RouterLink to="/skills" class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            See my skills
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </RouterLink>
        </div>

        <!-- Profile photo placeholder -->
        <div class="flex flex-col items-center gap-10 py-100">
          <div class="relative">
            <div class="w-56 h-56 rounded-2xl overflow-hidden">
              <img src="/images/photo_of_luis.jpg" alt="Luis Cadete" class="w-full h-full object-cover mt-0" />
            </div>
            <!-- Decorative glow ring -->
            <div class="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 blur-md -z-10" />
          </div>
          <!-- Stats below photo -->
          <div class="grid grid-cols-2 gap-3 w-full">
            <div v-for="stat in stats" :key="stat.label" class="card-glass p-4 glow-border text-center">
              <div class="text-2xl font-bold text-gradient mb-0.5">{{ stat.value }}</div>
              <div class="text-gray-500 text-xs">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured projects -->
    <section class="py-16 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-end justify-between mb-10">
          <div>
            <p class="text-cyan-400 font-mono text-sm mb-2">// featured_work</p>
            <h2 class="text-3xl font-bold">Recent Projects</h2>
          </div>
          <RouterLink to="/projects" class="text-sm text-gray-400 hover:text-white transition-colors hidden md:block">
            View all →
          </RouterLink>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="project in featured"
            :key="project.title"
            class="card-glass p-6 hover:border-cyan-400/30 hover:bg-white/8 transition-all duration-300 group cursor-default"
          >
            <div class="flex items-start justify-between mb-4">
              <span class="text-xs font-mono bg-violet-500/20 text-violet-300 px-2 py-1 rounded-full">
                {{ project.tag }}
              </span>
            </div>
            <h3 class="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiences -->
    <section class="py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <p class="text-cyan-400 font-mono text-sm mb-3">// experiences</p>
        <h2 class="text-3xl font-bold mb-10">Beyond the Classroom</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="exp in experiences" :key="exp.title" class="card-glass p-6">
            <div
              class="w-full h-32 rounded-lg overflow-hidden mb-4 bg-gray-900 cursor-zoom-in"
              @click="lightbox = { src: exp.image, alt: exp.title }"
            >
              <img :src="exp.image" :alt="exp.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 class="font-semibold text-white mb-1">{{ exp.title }}</h3>
            <p class="text-cyan-400 text-xs font-mono mb-3">{{ exp.org }}</p>
            <p class="text-gray-400 text-sm leading-relaxed">{{ exp.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import NeuralCanvas from '../components/NeuralCanvas.vue'
import Lightbox from '../components/Lightbox.vue'
import { ref } from 'vue'

const lightbox = ref(null)

const stats = [
  { value: '3+',  label: 'Years of AI/ML development' },
  { value: '6',   label: 'Projects shipped' },
  { value: '5+',  label: 'Technologies mastered' },
  { value: '1',   label: 'Hackathon completed' },
]

const featured = [
  {
    tag: 'Robotics / AI',
    title: 'Gesture Drone Control',
    desc: 'AR.Drone simulation with hand gesture recognition via MediaPipe + YOLO inside ROS/Gazebo.',
  },
  {
    tag: 'Computer Vision',
    title: 'Glue Inspector',
    desc: 'Two-stage deep learning pipeline (Mask2Former + SegFormer) for industrial glue quality control.',
  },
  {
    tag: 'MLOps / Big Data',
    title: 'Big Data MLOps Pipeline',
    desc: 'End-to-end pipeline: NiFi to Kafka to Spark to InfluxDB to Grafana with DVC model versioning.',
  },
]

const experiences = [
  {
    title: 'Germany Study Trip',
    org: 'Hannover Messe · Chaos Computer Club',
    desc: 'Visited Europe\'s largest industrial fair and Berlin\'s legendary hacker space. Bridged AI theory to physical robotics.',
    image: '/images/hannover_messe.jpg',
  },
  {
    title: 'Hack The Future',
    org: 'Challenge 109 · Antwerp',
    desc: 'Database rescue hackathon with SQL injection, privilege escalation and Linux forensics all under time pressure.',
    image: '/images/hack_the_future.jpg',
  },
]
</script>
