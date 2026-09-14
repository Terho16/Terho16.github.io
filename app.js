const projects = {
  eunola: {
    kind: '01 / Application portfolio', title: 'Eunola', year: '2025', tone: 'lilac',
    subtitle: 'A wearable support system for older adults living with anxiety.',
    brief: 'Eunola uses body scanning, gentle light and vibration to make emotional reassurance tangible. The project combines user research, physiological mapping and soft wearable form to support self-regulation in daily life.',
    roles: ['Research', 'Wearable interaction', 'Service concept'],
    cover: 'cover-eunola-clean.png', images: ['application-01.jpg', 'application-02.jpg', 'application-03.jpg', 'application-04.jpg', 'application-05.jpg', 'application-06.jpg', 'application-07.jpg'],
    sections: [['The problem', 'Generalized anxiety can make daily routines feel unpredictable for older adults. The design question was how a non-screen-based object could offer immediate, calm support.'], ['The system', 'A sensing layer reads small bodily signals; an intervention layer translates them into body-scan guidance, soft light and haptic feedback.'], ['The outcome', 'The proposal frames care as an embodied rhythm rather than a command: quiet, legible and easy to return to.']]
  },
  wonderorb: {
    kind: '02 / Application portfolio', title: 'Wonderorb', year: '2025', tone: 'moss',
    subtitle: 'A tactile-training product for children with sensory sensitivity.',
    brief: 'Wonderorb turns gradual exposure to materials into a playful, trackable interaction. It brings sensory exercises from the clinic into a familiar home setting.',
    roles: ['Product concept', 'Fabric exploration', 'Physical prototyping'],
    cover: 'cover-wonderorb-clean.png', images: ['application-22.jpg', 'application-23.jpg', 'application-24.jpg', 'application-25.jpg', 'application-26.jpg', 'application-27.jpg', 'application-28.jpg', 'application-29.jpg'],
    sections: [['The problem', 'Tactile defensiveness can affect confidence, social participation and everyday routines. Conventional treatment is often difficult to sustain outside professional settings.'], ['The approach', 'A multi-sensory object introduces textures in manageable stages and records responses, allowing parents and children to notice progress together.'], ['The intent', 'The project treats therapy as play: a small domestic ritual rather than a clinical correction.']]
  },
  fadence: {
    kind: '03 / Application portfolio', title: 'Fadence', year: '2025', tone: 'coral',
    subtitle: 'A sensory wearable for the threshold between alertness and sleep.',
    brief: 'Inspired by the natural rhythm of forgetting, Fadence listens for micro-signals and responds through gentle warmth or vibration. There are no screens and no instructions—only a fading cadence that helps the body settle.',
    roles: ['Wearable design', 'Interaction narrative', 'Material direction'],
    cover: 'cover-fadence-clean.jpg', images: ['application-16.jpg', 'application-17.jpg', 'application-18.jpg', 'application-19.jpg', 'application-20.jpg', 'application-21.jpg'],
    sections: [['The question', 'How can a wearable intervene before overthinking becomes sleeplessness?'], ['The interaction', 'The object gives soft, peripheral feedback rather than asking for attention, allowing the body to lead the transition toward rest.'], ['The proposal', 'Fadence is designed as a quiet companion: soft, non-verbal and physically reassuring.']]
  },
  symbiotic: {
    kind: '04 / Application portfolio', title: 'Nature Designer', year: '2025', tone: 'green',
    subtitle: 'A post-human virtual clothing project where ecology, AI and fashion co-evolve.',
    brief: 'Nature Designer imagines a post-human society in which natural growth becomes a digital system. Ecological research, generative form and virtual clothing come together to question how humans might relate to nature differently.',
    roles: ['Speculative design', '3D form', 'System narrative'],
    cover: 'cover-nature-clean.png', images: ['application-08.jpg', 'application-09.jpg', 'application-10.jpg', 'application-11.jpg', 'application-12.jpg', 'application-13.jpg', 'application-14.jpg', 'application-15.jpg'],
    sections: [['The world', 'Biological and digital systems are treated as one distributed living network.'], ['The process', 'Material layers, node positions and growth patterns become data for iterative morphogenesis.'], ['The proposition', 'The boundary between organism, interface and environment dissolves into a shared field of feedback.']]
  },
  oracle: {
    kind: '05 / Fashion & material practice', title: 'Reconstruction of Oracle Bone', year: '2024', tone: 'blue',
    subtitle: 'Ancient inscriptions reconstructed as a contemporary four-look collection.',
    brief: 'Oracle-bone inscriptions become a wearable language through modular structures, lettering and Klein blue. The collection moves between record, ritual and the body.',
    roles: ['Fashion design', 'Silhouette development', 'Styling'],
    cover: 'oracle-look-blue.jpg', images: ['oracle-opening.jpg', 'oracle-editorial-01.jpg', 'oracle-editorial-02.jpg', 'oracle-editorial-03.jpg', 'oracle-look-blue.jpg', 'oracle-inspiration.png', 'oracle-specification.png', 'oracle-look-portrait.jpg'],
    sections: [['Research', 'The project begins with the visual grammar of oracle-bone writing: its sharp marks, ritual presence and connection to historical record.'], ['Translation', 'Tube structures and adjustable components reinterpret characters as volume, movement and modular function.'], ['Recognition', 'The collection received an Excellence Award in the 32nd China International Young Designers Fashion Competition.']]
  },
  ornament: {
    kind: '06 / Fashion & material practice', title: 'Ornament as Memory Device', year: '2023', tone: 'charcoal',
    subtitle: 'Accessories as intimate carriers of texture, gesture and personal meaning.',
    brief: 'This material study treats jewellery and body-scale objects as small narrative devices. The work combines metal, beads, found forms and graphic marks.',
    roles: ['Accessory design', 'Material study', 'Styling'],
    cover: 'accessory-earring.jpg', images: ['accessory-earring.jpg', 'accessory-detail.jpg'],
    editorial: true,
    sections: [['Starting point', 'Close observation of material, surface and gesture informed a set of accessories that sits near the face and body.'], ['Making', 'Each object brings together hand-built details and a deliberately imperfect visual language.'], ['Connection', 'The work establishes the tactile and narrative sensitivity that later informs the wearable projects.']]
  }
};

const app = document.querySelector('#app');
const card = (key) => { const p = projects[key]; return `<a class="project-card ${p.tone}" style="--cover:url('assets/${p.cover}')" href="?project=${key}"><span>${p.kind}</span><div><h3>${p.title}</h3><p>${p.subtitle}</p></div><b>Open project <i>↗</i></b></a>`; };

function home() {
  app.innerHTML = `
    <section class="hero hero-portrait">
      <h1>I'm Tianhao Wang</h1>
    </section>
    <section class="section main-work"><div class="section-head"><p class="eyebrow">01 / Primary work</p><h2>Application portfolio</h2><p>Human-centred systems and speculative wearable futures.</p></div><div class="grid primary-grid">${['eunola','wonderorb','fadence','symbiotic'].map(card).join('')}</div></section>
    <section class="section practice"><div class="section-head"><p class="eyebrow">02 / Supporting practice</p><h2>Fashion & material</h2><p>Projects that developed a visual, tactile and narrative language for the work above.</p></div><div class="grid secondary-grid">${['oracle','ornament'].map(card).join('')}</div></section>`;
}

function project(key) {
  const p = projects[key]; if (!p) return home();
  const imgs = p.images || [p.image];
  app.innerHTML = `<section class="detail ${p.tone}"><a class="back" href="./">← All projects</a><div class="detail-intro"><p class="eyebrow">${p.kind} / ${p.year}</p><h1>${p.title}</h1><p class="lede">${p.subtitle}</p><p class="brief">${p.brief}</p><ul>${p.roles.map(x=>`<li>${x}</li>`).join('')}</ul></div><p class="image-note">Click any image to view it at full size.</p><div class="image-rail">${imgs.map((img,i)=>`<a class="image-link" href="assets/${img}?v=2" target="_blank" rel="noopener" aria-label="Open ${p.title} visual ${i+1} at full size"><img src="assets/${img}?v=2" alt="${p.title} visual ${i+1}" loading="${i ? 'lazy' : 'eager'}"></a>`).join('')}</div><div class="story">${p.sections.map(([h,b],i)=>`<article><span>0${i+1}</span><h2>${h}</h2><p>${b}</p></article>`).join('')}</div><a class="next" href="./">Return to selected work →</a></section>`;
}
const selected = new URLSearchParams(location.search).get('project'); selected ? project(selected) : home();
if (selected === 'oracle') {
  const rail = app.querySelector('.image-rail');
  if (rail) {
    rail.className = 'oracle-editorial';
    rail.innerHTML = '<a class="oracle-shot opening" href="assets/oracle-opening.jpg" target="_blank" rel="noopener"><img src="assets/oracle-opening.jpg" alt="Oracle Bone collection overview"></a><a class="oracle-shot portrait" href="assets/oracle-editorial-02.jpg" target="_blank" rel="noopener"><img src="assets/oracle-editorial-02.jpg" alt="Oracle Bone editorial look"></a><a class="oracle-shot landscape" href="assets/oracle-editorial-01.jpg" target="_blank" rel="noopener"><img src="assets/oracle-editorial-01.jpg" alt="Oracle Bone editorial portrait"></a><a class="oracle-shot landscape" href="assets/oracle-editorial-03.jpg" target="_blank" rel="noopener"><img src="assets/oracle-editorial-03.jpg" alt="Oracle Bone editorial look"></a><a class="oracle-shot board" href="assets/oracle-look-blue.jpg" target="_blank" rel="noopener"><img src="assets/oracle-look-blue.jpg" alt="Oracle Bone collection image"></a><a class="oracle-shot board" href="assets/oracle-inspiration.png" target="_blank" rel="noopener"><img src="assets/oracle-inspiration.png" alt="Oracle Bone inspiration board"></a><a class="oracle-shot board" href="assets/oracle-specification.png" target="_blank" rel="noopener"><img src="assets/oracle-specification.png" alt="Oracle Bone specification board"></a>';
  }
}
if (selected === 'ornament') {
  const rail = app.querySelector('.image-rail');
  if (rail) {
    rail.className = 'ornament-editorial';
    rail.innerHTML = '<a class="ornament-shot model-main" href="assets/model-earring.png" target="_blank" rel="noopener"><img src="assets/model-earring.png" alt="Model wearing green accessory earrings"></a><a class="ornament-shot model-ring" href="assets/model-ring.png" target="_blank" rel="noopener"><img src="assets/model-ring.png" alt="Model wearing ring and necklace"></a><a class="ornament-shot still-life" href="assets/necklace-still.png" target="_blank" rel="noopener"><img src="assets/necklace-still.png" alt="Necklace still life"></a><a class="ornament-shot small-detail" href="assets/ring-hand.png" target="_blank" rel="noopener"><img src="assets/ring-hand.png" alt="Ring detail on hand"></a><a class="ornament-shot small-detail" href="assets/object-04.png" target="_blank" rel="noopener"><img src="assets/object-04.png" alt="Green earring pair"></a><a class="ornament-shot profile" href="assets/model-profile.png" target="_blank" rel="noopener"><img src="assets/model-profile.png" alt="Model profile with accessory"></a>';
  }
}
