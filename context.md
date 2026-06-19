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

### Live URL
`https://www.luiscadete.top`

---

## Pagina's

| Route | View | Beschrijving |
|-------|------|-------------|
| `/` | Home.vue | Hero met Three.js neural network, about sectie, featured projects, experiences |
| `/skills` | Skills.vue | Skill bars per categorie, tools grid, spoken languages |
| `/projects` | Projects.vue | Alle 5 projecten met images, tags, tech stack, filter op categorie |
| `/chat` | Chat.vue | AI chatbot "Ask Luis" — volledig werkend via DeepSeek API |
| `/contact` | Contact.vue | Contact info met SVG icons, mailto form, CV download |

---

## Componenten

- `Navbar.vue` — Fixed navbar met scroll-effect, CV download knop, mobile menu
- `Footer.vue` — Links naar GitHub, LinkedIn, email
- `NeuralCanvas.vue` — Three.js animated neural network (nodes + edges, roterend)
- `Lightbox.vue` — Fullscreen image viewer, opent bij klik op een afbeelding

---

## Chat functie (Ask Luis)

Volledig werkende AI chatbot die vragen beantwoordt over Luis.

### Architectuur
- **Frontend:** `src/views/Chat.vue` — chat UI met berichtgeschiedenis, suggestion chips, typing indicator, Luis's foto als avatar
- **Backend:** `api/chat.js` — Vercel serverless function die de DeepSeek API aanroept
- **Model:** `deepseek-chat` (DeepSeek V3)

### Configuratie
- API key opgeslagen als Vercel environment variable: `DEEPSEEK_API_KEY`
- `.env.example` aanwezig als referentie
- `.env` staat in `.gitignore` (nooit committen)

### Lokaal testen
```powershell
vercel dev   # start op http://localhost:3000
```
Vereist Vercel CLI (`npm install -g vercel`) en een `.env` bestand met de echte API key.

### System prompt
De chatbot kent alles over Luis: bio, persoonlijkheid, projecten, skills, ervaringen, hobby's. Beantwoordt alleen vragen over Luis. Antwoordt in de taal van de gebruiker (NL/EN/ES).

---

## Projecten op de website

1. **Gesture Drone Control** — ROS Noetic, Gazebo, MediaPipe, YOLO, Docker → `drone.png`
2. **Glue Inspector for WALLY Automation** — Mask2Former + SegFormer, FastAPI, Docker → `glue_inspector.png`
3. **Big Data MLOps Pipeline** — NiFi, Kafka, Spark, InfluxDB, Grafana, DVC → `bigdata_MLOps_pipeline.png`
4. **Neural Networks Portfolio** — TensorFlow, Keras, XAI, LIME, SHAP → `neural_networks.png`
5. **OCR Matching for H.ESSERS** — Spring Boot, PostgreSQL, MinIO, Docker → `OCR_matching.png`

---

## Experiences sectie (Home)

1. **Germany Study Trip** — Hannover Messe + Chaos Computer Club → `hannover_messe.jpg`
2. **Hack The Future** — Challenge 109, Antwerp → `hack_the_future.jpg`

---

## Afbeeldingen

Locatie: `public/images/`

| Bestand | Gebruikt in |
|---------|------------|
| `photo_of_luis.jpg` | Hero avatar + about sectie (Home) + chat avatar |
| `drone.png` | Project: Gesture Drone Control |
| `glue_inspector.png` | Project: Glue Inspector |
| `bigdata_MLOps_pipeline.png` | Project: Big Data MLOps Pipeline |
| `neural_networks.png` | Project: Neural Networks Portfolio |
| `OCR_matching.png` | Project: OCR Matching |
| `hannover_messe.jpg` | Experience: Germany Study Trip |
| `hack_the_future.jpg` | Experience: Hack The Future |

---

## CV

- Bestand: `public/Luis_Cadete_CV.pdf` (let op: hoofdlettergevoelig op Vercel)
- Download knop staat op: Navbar (desktop), Hero sectie (Home), Contact pagina
- Alle links verwijzen naar `/Luis_Cadete_CV.pdf` (exact zelfde casing als bestand)

---

## Deployment

- Platform: **Vercel**
- `vercel.json` bevat alleen de API rewrite regel
- GitHub repo: `LuisCadetePXL/LuisCadete-portfolio-website`
- Environment variables in Vercel dashboard: `DEEPSEEK_API_KEY`

---

## Problemen opgelost

### npm install in de verkeerde locatie
Er bestaat een `package.json` op `C:\Users\Luis\` (van Anaconda/andere tools) met daarin `vite@6`. Oplossing: `node_modules` deleten, dan opnieuw `npm install` uitvoeren vanuit de portfolio folder.

### CV download 404 op Vercel
Bestandsnaam `Luis_Cadete_CV.pdf` maar links verwezen naar `LUIS_CADETE_CV.pdf`. Vercel/Linux is case-sensitive. Alle links gecorrigeerd naar exacte bestandsnaam.

### Vite chunk size warning
`npm run build` geeft een warning dat de JS bundle > 500 kB is door Three.js. Geen functionele impact.

---

## Stijl & design beslissingen

- Dark theme: `bg-gray-950` als basis
- Accent kleuren: `cyan-400` en `violet-500` (gradient)
- Glassmorphism cards: `bg-white/5 border border-white/10 backdrop-blur-sm`
- Geen emojis
- Geen em dashes (`—`) in zichtbare tekst
- Afbeeldingen zijn klikbaar via een Lightbox component

---

## Hoe starten

```powershell
cd "C:\Users\Luis\Desktop\interessante projects\portfolio-website"
npm run dev        # development server op http://localhost:5173 (zonder API)
vercel dev         # development server op http://localhost:3000 (met API)
npm run build      # production build naar /dist
```
