# Portfolio Website — Session Context

## Wat er gebouwd is

Een persoonlijke portfolio website voor Luis Alberto Cadete Rosario, gebouwd met **Vue 3 + Vite + TailwindCSS 3 + Three.js + Vue Router**.

### Tech stack
- Vue 3 (Composition API, `<script setup>`)
- Vite 5
- TailwindCSS 3
- Three.js (animated neural network background op de Home pagina)
- Vue Router 4 (hash history)
- Fonts: Inter + JetBrains Mono via Google Fonts

### Projectlocatie
`C:\Users\Luis\Desktop\interessante projects\portfolio-website\`

---

## Pagina's

| Route | View | Beschrijving |
|-------|------|-------------|
| `/` | Home.vue | Hero met Three.js neural network, about sectie, featured projects, experiences |
| `/skills` | Skills.vue | Skill bars per categorie, tools grid, spoken languages |
| `/projects` | Projects.vue | Alle 5 projecten met images, tags, tech stack, filter op categorie |
| `/chat` | Chat.vue | Coming soon pagina voor de RAG chatbot (Virtual Me) |
| `/contact` | Contact.vue | Contact info met SVG icons, mailto form, CV download |

---

## Componenten

- `Navbar.vue` — Fixed navbar met scroll-effect, CV download knop, mobile menu
- `Footer.vue` — Links naar GitHub, LinkedIn, email
- `NeuralCanvas.vue` — Three.js animated neural network (nodes + edges, roterend)
- `Lightbox.vue` — Fullscreen image viewer, opent bij klik op een afbeelding

---

## Projecten op de website

1. **Gesture Drone Control** — ROS Noetic, Gazebo, MediaPipe, YOLO, Docker → `drone.png`
2. **Glue Inspector for WALLY Automation** — Mask2Former + SegFormer, FastAPI, Docker → `glue_inspector.png`
3. **Big Data MLOps Pipeline** — NiFi, Kafka, Spark, InfluxDB, Grafana, DVC → `bigdata_MLOps_pipeline.png`
4. **Neural Networks Portfolio** — TensorFlow, Keras, XAI, LIME, SHAP → `neural_networks.png`
5. **OCR Matching for H.ESSERS** — Spring Boot, PostgreSQL, MinIO, Docker → `OCR_matching.png`

Verwijderd: **AI Color Vision Robot** (op verzoek)

---

## Experiences sectie (Home)

1. **Germany Study Trip** — Hannover Messe + Chaos Computer Club → `hannover_messe.jpg`
2. **Hack The Future** — Challenge 109, Antwerp → `hack_the_future.jpg`

Verwijderd: **SAP AI Innovation Route** (op verzoek)

---

## Afbeeldingen

Locatie: `public/images/`

| Bestand | Gebruikt in |
|---------|------------|
| `photo_of_luis.jpg` | Hero avatar + about sectie (Home) |
| `drone.png` | Project: Gesture Drone Control |
| `glue_inspector.png` | Project: Glue Inspector |
| `bigdata_MLOps_pipeline.png` | Project: Big Data MLOps Pipeline |
| `neural_networks.png` | Project: Neural Networks Portfolio |
| `OCR_matching.png` | Project: OCR Matching |
| `hannover_messe.jpg` | Experience: Germany Study Trip |
| `hack_the_future.jpg` | Experience: Hack The Future |

Opmerking: origineel bestand heette `photo_of_luis.JPG` — hernoemd naar `.jpg` (lowercase) omdat Vite uppercase extensies niet herkent als image asset.

---

## CV

- Bestand: `public/LUIS_CADETE_CV.pdf`
- Gekopieerd vanuit `C:\Users\Luis\Desktop\interessante projects\LUIS_CADETE_CV.pdf`
- Download knop staat op: Navbar (desktop), Hero sectie (Home), Contact pagina

---

## Problemen opgelost

### npm install in de verkeerde locatie
Er bestaat een `package.json` op `C:\Users\Luis\` (van Anaconda/andere tools) met daarin `vite@6`. Hierdoor installeerde npm packages op user-level in plaats van lokaal in het project. Oplossing: processen killen, `node_modules` deleten, dan opnieuw `npm install` uitvoeren **vanuit de portfolio folder zelf**.

### Self-referencing dependency
Na sommige npm install pogingen werd automatisch `"luis-cadete-portfolio": "file:"` toegevoegd aan `package.json`. Dit veroorzaakte een circulaire dependency. Telkens manueel verwijderd. Oorzaak was een `.npmrc` bestand met `prefix=./` dat tussentijds aangemaakt was — dit bestand is verwijderd.

### Vite chunk size warning
`npm run build` geeft een warning dat de JS bundle > 500 kB is. Dit komt door Three.js. Heeft geen functionele impact, maar kan later opgelost worden met dynamic imports of `manualChunks` in `vite.config.js`.

---

## Stijl & design beslissingen

- Dark theme: `bg-gray-950` als basis
- Accent kleuren: `cyan-400` en `violet-500` (gradient)
- Glassmorphism cards: `bg-white/5 border border-white/10 backdrop-blur-sm`
- Geen emojis (op verzoek verwijderd — vervangen door SVG icons of gewoon weggelaten)
- Geen em dashes (`—`) of puntkomma's (`;`) in zichtbare tekst (op verzoek)
- Afbeeldingen zijn klikbaar via een Lightbox component

---

## Hoe starten

```powershell
cd "C:\Users\Luis\Desktop\interessante projects\portfolio-website"
npm run dev        # development server op http://localhost:5173
npm run build      # production build naar /dist
```

Om te hosten: sleep de `dist/` folder naar Netlify, of gebruik `vercel --prod`.
