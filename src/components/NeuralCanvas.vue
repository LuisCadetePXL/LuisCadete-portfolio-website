<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-none" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasRef = ref(null)
let renderer, scene, camera, animId

function init() {
  const canvas = canvasRef.value
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  scene  = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.z = 5

  // --- Nodes ---
  const NODE_COUNT = 80
  const positions  = []
  const nodeGeo    = new THREE.BufferGeometry()
  const nodeMat    = new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.06, transparent: true, opacity: 0.8 })

  for (let i = 0; i < NODE_COUNT; i++) {
    positions.push((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6)
  }
  nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  scene.add(new THREE.Points(nodeGeo, nodeMat))

  // --- Edges ---
  const edgePositions = []
  const thresh2 = 4.5 * 4.5
  for (let i = 0; i < NODE_COUNT; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      const dx = positions[i*3]   - positions[j*3]
      const dy = positions[i*3+1] - positions[j*3+1]
      const dz = positions[i*3+2] - positions[j*3+2]
      if (dx*dx + dy*dy + dz*dz < thresh2) {
        edgePositions.push(
          positions[i*3], positions[i*3+1], positions[i*3+2],
          positions[j*3], positions[j*3+1], positions[j*3+2],
        )
      }
    }
  }
  const edgeGeo = new THREE.BufferGeometry()
  edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3))
  const edgeMat = new THREE.LineBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.2 })
  scene.add(new THREE.LineSegments(edgeGeo, edgeMat))

  animate()
}

function animate() {
  animId = requestAnimationFrame(animate)
  const t = Date.now() * 0.0003
  scene.rotation.y = t * 0.3
  scene.rotation.x = Math.sin(t * 0.2) * 0.1
  renderer.render(scene, camera)
}

function onResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  camera.aspect = canvas.clientWidth / canvas.clientHeight
  camera.updateProjectionMatrix()
}

onMounted(() => {
  init()
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  cancelAnimationFrame(animId)
  renderer?.dispose()
  window.removeEventListener('resize', onResize)
})
</script>
