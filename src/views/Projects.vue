<template>
  <div class="pt-24 pb-20 px-6 min-h-screen">
  <Lightbox v-if="lightbox" :src="lightbox.src" :alt="lightbox.alt" @close="lightbox = null" />
    <div class="max-w-6xl mx-auto">
      <p class="text-cyan-400 font-mono text-sm mb-3">// projects.list</p>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
      <p class="text-gray-400 text-lg mb-10 max-w-xl">
        Things I've built at school and on my own. Each one taught me something different.
      </p>

      <!-- Filter tags -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="activeTag = activeTag === tag ? null : tag"
          class="px-3 py-1.5 rounded-full text-sm font-mono transition-all border"
          :class="activeTag === tag
            ? 'bg-cyan-400/20 border-cyan-400/50 text-cyan-400'
            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Project grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="project in filtered"
          :key="project.title"
          class="card-glass p-6 hover:border-cyan-400/30 transition-all duration-300 group flex flex-col"
        >
          <!-- Project image -->
          <div
            class="w-full h-40 rounded-lg overflow-hidden mb-4 bg-gray-900 cursor-zoom-in"
            @click="lightbox = { src: project.image, alt: project.title }"
          >
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="flex items-start justify-between mb-4">
            <div class="flex flex-wrap gap-1 justify-end">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs font-mono bg-violet-500/15 text-violet-300 px-2 py-0.5 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-gray-500 text-xs font-mono mb-3">{{ project.context }}</p>
          <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{{ project.desc }}</p>

          <!-- Tech stack -->
          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded font-mono"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Lightbox from '../components/Lightbox.vue'

const lightbox = ref(null)

const activeTag = ref(null)

const projects = [
  {
    title: 'Gesture Drone Control',
    context: 'PXL · Smart Devices · 2025–2026',
    tags: ['Robotics', 'AI', 'Vision'],
    desc: 'AR.Drone simulation with full hand gesture recognition using MediaPipe and YOLO. Runs in a realistic Gazebo office environment via ROS Noetic inside Docker. Supports keyboard (QWERTY/AZERTY), gesture control, and finger-following modes.',
    stack: ['Python', 'ROS Noetic', 'Gazebo', 'MediaPipe', 'YOLO', 'Docker', 'OpenCV'],
    image: '/images/drone.png',
  },
  {
    title: 'Glue Inspector for WALLY Automation',
    context: 'Industry Project · 2025–2026',
    tags: ['Computer Vision', 'MLOps'],
    desc: 'Two-stage industrial quality control pipeline. Stage 1 uses Mask2Former (Swin-Tiny) to isolate brick surfaces via instance segmentation. Stage 2 uses SegFormer (MiT-b0) for semantic segmentation of glue coverage. Deployed as a FastAPI + Docker service.',
    stack: ['Python', 'PyTorch', 'Mask2Former', 'SegFormer', 'FastAPI', 'Docker', 'DVC'],
    image: '/images/glue_inspector.png',
  },
  {
    title: 'Big Data MLOps Pipeline',
    context: 'PXL · Big Data · 2025–2026',
    tags: ['MLOps', 'Big Data'],
    desc: 'End-to-end big data pipeline: NiFi for ingestion → Kafka for streaming → Spark for processing → InfluxDB for time-series storage → Grafana for monitoring. DVC for model and data versioning. Full infrastructure as Docker Compose.',
    stack: ['Apache NiFi', 'Kafka', 'Spark', 'InfluxDB', 'Grafana', 'DVC', 'Docker', 'Prometheus', 'Jenkins'],
    image: '/images/bigdata_MLOps_pipeline.png',
  },
  {
    title: 'Neural Networks Portfolio',
    context: 'PXL · Neural Networks · 2024–2025',
    tags: ['AI', 'Computer Vision', 'NLP'],
    desc: 'A collection of ML projects including credit card fraud detection, MNIST enhancement techniques, Buzzwatch (a CNN insect classifier with Explainable AI), transfer learning improvements and NLP fake/bias news classification with XAI interpretation.',
    stack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Jupyter', 'XAI', 'LIME', 'SHAP'],
    image: '/images/neural_networks.png',
  },
  {
    title: 'OCR Matching for H.ESSERS',
    context: 'Industry Project · H.ESSERS Logistics',
    tags: ['Backend', 'Computer Vision'],
    desc: 'Photo upload and OCR matching system for logistics quality control. Built with Spring Boot REST API, PostgreSQL for metadata, and MinIO S3-compatible object storage. Fully containerised with Docker Compose.',
    stack: ['Spring Boot', 'PostgreSQL', 'MinIO', 'Docker', 'Java', 'OCR'],
    image: '/images/OCR_matching.png',
  },
]

const allTags = computed(() => [...new Set(projects.flatMap(p => p.tags))])
const filtered  = computed(() =>
  activeTag.value ? projects.filter(p => p.tags.includes(activeTag.value)) : projects
)
</script>
