/* Tianhao Wang portfolio: content and rendering.
   Copy comes from the content draft v2 (2026-11-21). Every claim comes from the project boards, the resume, or the user. */
const EMAIL = 'wang.t14@northeastern.edu';
const OPT = 'assets/opt/';
const VID = 'assets/video/';
const SIZES = {"accessory-earring.jpg":[1066,1600],"application-01.jpg":[1800,800],"application-02.jpg":[1800,800],"application-03.jpg":[1800,800],"application-04.jpg":[1800,800],"application-05.jpg":[1800,800],"application-06.jpg":[1800,800],"application-07.jpg":[1800,800],"application-08.jpg":[1800,800],"application-09.jpg":[1800,800],"application-10.jpg":[1800,800],"application-11.jpg":[1800,800],"application-12.jpg":[1800,800],"application-13.jpg":[1800,800],"application-14.jpg":[1800,800],"application-15.jpg":[1800,800],"application-16.jpg":[1800,713],"application-17.jpg":[1800,714],"application-18.jpg":[1800,713],"application-19.jpg":[1800,713],"application-20.jpg":[1800,713],"application-21.jpg":[1800,713],"application-22.jpg":[1800,711],"application-23.jpg":[1800,714],"application-24.jpg":[1800,713],"application-25.jpg":[1800,713],"application-26.jpg":[1800,713],"application-27.jpg":[1800,713],"application-28.jpg":[1800,713],"application-29.jpg":[1800,713],"cases/eunoia-clo3d.jpg":[1500,350],"cases/eunoia-electronics-IMG_5433.jpg":[1200,1600],"cases/eunoia-final-5S2A5337.jpg":[1067,1600],"cases/eunoia-fitting-IMG_4406.jpg":[1200,1600],"cases/eunoia-interviews-photos.jpg":[900,256],"cases/fabrics/DSCF1834.jpg":[480,480],"cases/fabrics/DSCF1839.jpg":[480,480],"cases/fabrics/DSCF1840.jpg":[480,480],"cases/fabrics/DSCF1841.jpg":[480,480],"cases/fabrics/DSCF1842.jpg":[480,480],"cases/fabrics/DSCF1843.jpg":[480,480],"cases/fabrics/DSCF1844.jpg":[480,480],"cases/fabrics/DSCF1848.jpg":[480,480],"cases/fabrics/DSCF1850.jpg":[480,480],"cases/fabrics/DSCF1851.jpg":[480,480],"cases/fabrics/DSCF1852.jpg":[480,480],"cases/fabrics/DSCF1853.jpg":[480,480],"cases/fabrics/DSCF1854.jpg":[480,480],"cases/fabrics/DSCF1855.jpg":[480,480],"cases/fadence-mockup.jpg":[768,998],"cases/fadence-tests.jpg":[598,252],"cases/wonderorb-fabrics.jpg":[1069,370],"cases/wonderorb-final-DSCF1863.jpg":[1027,1600],"cases/wonderorb-final.jpg":[1519,393],"cases/wonderorb-home-test-IMG_4400.jpg":[1600,1067],"cases/wonderorb-scenario.jpg":[458,569],"cases/wonderorb-sketch.jpg":[528,661],"cases/wonderorb-storyboard.jpg":[1600,1091],"cover-eunola-clean.jpg":[1200,534],"cover-fadence-clean.jpg":[1200,900],"cover-nature-clean.jpg":[1200,534],"cover-nature-designer.jpg":[1800,800],"cover-wonderorb-clean.jpg":[1200,475],"eunola-cover.jpg":[1800,800],"eunola-insights.jpg":[1800,800],"eunola-research.jpg":[1800,800],"eunola-system.jpg":[1800,800],"eunola/bodyscan.jpg":[1600,498],"eunola/features.jpg":[1600,495],"eunola/final.jpg":[844,1601],"eunola/interviews.jpg":[1575,633],"eunola/making.jpg":[1600,1572],"eunola/system.jpg":[1125,1600],"home-studio.jpg":[1600,1067],"oracle-editorial-01.jpg":[1600,1066],"oracle-editorial-02.jpg":[1600,2240],"oracle-editorial-03.jpg":[1600,1066],"oracle-inspiration.jpg":[1600,1131],"oracle-look-blue.jpg":[1200,800],"oracle-look-portrait.jpg":[1333,2000],"oracle-opening.jpg":[1600,1131],"oracle-specification.jpg":[1600,1131],"ornament-2026/green-earrings-cluster.jpg":[1400,933],"ornament-2026/green-earrings-pair.jpg":[1400,933],"ornament-2026/jade-amulet-body.jpg":[933,1400],"ornament-2026/jade-necklace-model.jpg":[933,1400],"ornament-2026/jade-necklace-still.jpg":[1059,1400],"ornament-2026/jade-pendant-detail.jpg":[933,1400],"ornament-2026/jade-ring-hand.jpg":[1400,933],"ornament-2026/jade-ring-model.jpg":[933,1400],"ornament-2026/model-earring-close.jpg":[823,1183],"ornament-2026/model-pair.jpg":[1117,806],"ornament-2026/silver-earrings.jpg":[1400,933]}; /*SIZES*/
const VSIZES = {
  'eunoia-ready': [1280, 720], 'eunoia-scan': [1280, 720], 'eunoia-air': [1280, 720], 'eunoia-sensor': [1280, 720], 'eunoia-profile': [1280, 720],
  'wonderorb-explore': [1280, 720], 'wonderorb-swap': [1280, 720], 'wonderorb-assemble': [720, 720],
  'fadence-object': [1280, 720], 'fadence-wear': [1280, 720], 'fadence-mockup-fit': [1280, 720],
  'fadence-cut': [720, 1280], 'fadence-sew': [720, 1280], 'fadence-sensor': [720, 1280], 'fadence-assemble': [720, 1280], 'fadence-mannequin': [720, 1280]
};

const app = document.querySelector('#app');
const PDF = new URLSearchParams(location.search).has('pdf');
if (PDF) document.documentElement.classList.add('pdf');
const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function img(path, alt, opts = {}) {
  const s = SIZES[path];
  const wh = s ? ` width="${s[0]}" height="${s[1]}"` : '';
  const load = opts.eager || PDF ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"';
  return `<img src="${OPT}${path}" alt="${alt}"${wh}${load} decoding="async">`;
}

/* Short silent loops. They play only while on screen, and each one has a pause button.
   In the offline PDF the poster frame stands in for the video. */
function vid(name, alt) {
  const [w, h] = VSIZES[name];
  if (PDF) return `<img src="${VID}${name}.jpg" alt="${alt}" width="${w}" height="${h}" loading="eager">`;
  return `<div class="vid"><video muted loop playsinline preload="none" poster="${VID}${name}.jpg" width="${w}" height="${h}" aria-label="${alt}" data-loop><source src="${VID}${name}.mp4" type="video/mp4"></video><button class="vid-btn" type="button" aria-pressed="false">Pause</button></div>`;
}

const fig = (path, alt, caption) => `<figure class="figure">${img(path, alt)}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
const figV = (name, alt, caption) => `<figure class="figure">${vid(name, alt)}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
/* Several media in one figure, with one shared caption. */
const group = (items, caption, cls = '') => `<figure class="figure"><div class="media-row ${cls}">${items.join('')}</div>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
const quote = (text, cite, big) => `<blockquote class="quote${big ? ' big' : ''}">"${text}"<cite>${cite}</cite></blockquote>`;
const list = (items) => `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
const table = (head, rows, caption) => `<figure class="figure"><div class="table-wrap"><table class="table"><thead><tr>${head.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
/* A step-by-step flow. Each step can carry the condition that leads into it. */
const flow = (steps, caption, label) => `<figure class="figure"><ol class="flow" aria-label="${label}">${steps.map(([s, cond]) => `<li>${cond ? `<span class="cond">${cond}</span>` : ''}<span class="step">${s}</span></li>`).join('')}</ol>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
const bars = (rows, caption) => `<figure class="figure"><div class="bars">${rows.map(([label, pct]) => `<div class="bar-row"><span class="bar-label">${label}</span><span class="bar-track"><span class="bar-fill" style="--w:${pct}%"></span></span><span class="bar-value">${pct}%</span></div>`).join('')}</div>${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;

/* ---------- Home ---------- */
const work = [
  {
    // its own motion page lives in eunoia/, so the card links there
    key: 'eunoia', href: 'eunoia/', title: 'Eunoia', tag: '2025',
    line: 'A screen-free garment designed to ease anxiety in older adults',
    proof: 'I surveyed 30 older adults, then built a working garment that guides a body scan with light, air, and vibration.',
    chips: ['User research', 'Wearable', 'Prototyping', 'Arduino'], more: 'Read the case',
    cover: 'cover-eunola-clean.jpg', coverAlt: 'An older woman wearing the Eunoia garment with soft light lines across the body'
  },
  {
    // its own motion page lives in wonderorb/, so the card links there
    key: 'wonderorb', href: 'wonderorb/', title: 'Wonderorb', tag: '2025',
    line: 'A soft play orb for children with touch sensitivity',
    proof: 'Task success dropped from 60% in a simple room to 40% in a home-like room. The room itself seemed to get in the way.',
    chips: ['Fabric', 'User testing', 'Machine learning'], more: 'Read the case',
    cover: 'cover-wonderorb-clean.jpg', coverAlt: 'A child playing with the soft, textured Wonderorb'
  },
  {
    // its own motion page lives in fadence/, so the card links there
    key: 'fadence', href: 'fadence/', title: 'Fadence', tag: '2025',
    line: 'A bedtime wearable that answers racing thoughts with warmth, then a soft pulse',
    more: 'See the project',
    cover: 'cover-fadence-clean.jpg', coverAlt: 'A model wearing the sculptural Fadence wearable on the upper back'
  },
  {
    // its own motion page lives in nature-designer/, so the card links there; wide fills the last row
    key: 'nature-designer', href: 'nature-designer/', wide: true, title: 'Nature Designer', tag: 'Virtual clothing design · 2025',
    line: 'Exploring how mycelium and slime molds can generate form and structure',
    chips: ['Material experiment', 'Sketching', '3D modeling'], more: 'See the project',
    cover: 'cover-nature-designer.jpg', coverAlt: 'A 3D rendering of a figure in translucent blue clothing built from plant-like forms, in an icy blue landscape'
  }
];

const experience = [
  ['Shandong Jovision Technology', 'Interaction Design Intern, AI Companion Robot', 'Jun to Sep 2025',
    'Designed the look and feel of an AI companion robot for children: form, color, materials, and surface details. Worked with engineers on sensor and speaker placement, and took the design from sketches to 3D models to a working prototype.',
    ['Read the summary', '?project=jovision']],
  ['MIAMING DESIGN', 'Racing Visual Design Intern', 'Jan to Mar 2026', 'Created visual concepts for 10 racing helmets and 2 vehicle liveries for racing clients.'],
  ['Independent Fashion Studio, Beijing', 'Design Assistant', 'Jul to Oct 2023', 'Built mood boards, sketched garments, sampled fabrics and trims, and helped make patterns and samples for a collection.']
];

const awards = [
  'Excellence Award, Hempel Award: 32nd China International Young Fashion Designers Contest (<i>Reconstruction of Oracle Bone</i>), 2024',
  'Bronze Award (Provincial), “Internet+” College Students’ Innovation and Entrepreneurship Competition (<i>Smart Pregnancy Care</i>), 2025',
  'Best Color Coordination Award, Huanghelou Cup Fashion Design Competition, 2024',
  'Excellence Award, Beijing Qipao Design Competition, 2021'
];

const card = (p, lead) => `
  <a class="card${lead ? ' lead' : ''}" href="${p.href || `?project=${p.key}`}">
    ${img(p.cover, p.coverAlt)}
    <div class="card-body">
      <p class="tag">${p.tag}</p>
      <h3>${p.title}</h3>
      <p class="line">${p.line}</p>
      ${p.proof ? `<p class="proof">${p.proof}</p>` : ''}
      ${p.chips ? `<ul class="chips">${p.chips.map(c => `<li>${c}</li>`).join('')}</ul>` : ''}
      <span class="more">${p.more}</span>
    </div>
  </a>`;

const contact = () => `
  <section class="contact" id="contact">
    <div class="contact-inner">
      <p class="eyebrow">Contact</p>
      <h2>Let's talk</h2>
      <p>I'm looking for a Summer 2027 product design internship or a 6-month co-op. I'm available from May to December 2027.</p>
      <div class="actions">
        <a class="btn primary" href="mailto:${EMAIL}">Email me</a>
      </div>
      <p class="contact-mail"><a href="mailto:${EMAIL}">${EMAIL}</a></p>
    </div>
  </section>`;

function home(anchor) {
  document.title = 'Tianhao Wang | Product & Experience Designer';
  app.innerHTML = `
  <section class="hero solo" aria-labelledby="hero-title">
    <div>
      <p class="eyebrow">Product &amp; Experience Designer</p>
      <h1 id="hero-title">Hi, I'm Tianhao Wang</h1>
      <div class="actions">
        <a class="btn primary" href="#work">See my work</a>
      </div>
    </div>
  </section>

  <section class="section" id="work">
    <div class="section-head"><p class="eyebrow">Selected work</p></div>
    <div class="cards">${work.map((p, i) => card(p, i === 0 || p.wide)).join('')}</div>
  </section>

  <section class="section" id="experience">
    <div class="section-head"><p class="eyebrow">Experience</p></div>
    <ol class="xp">${experience.map(([org, role, when, what, link]) => `
      <li><div><p class="org">${org}</p><p class="role">${role} · ${when}</p></div><div><p class="what">${what}</p>${link ? `<a class="text-link inline" href="${link[1]}">${link[0]}</a>` : ''}</div></li>`).join('')}
    </ol>
  </section>

  <section class="section" id="about">
    <div class="section-head"><p class="eyebrow">About</p></div>
    <div class="about">
      <div class="about-text">
        <p>I'm a first-year M.S. student in Experience Design at Northeastern University in Boston.</p>
        <p>Before that, I studied fashion design at Wuhan Textile University for four years. Fashion taught me how materials feel and how things sit on the body. Now I design products that people wear and touch, and I build prototypes with sensors and code to test my ideas.</p>
        <h3>Awards</h3>
        <ul class="awards">${awards.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
      <figure class="about-photo">${img('home-studio.jpg', 'Tianhao working in the studio')}</figure>
    </div>
    <div class="craft">
      <p class="eyebrow">Before product design</p>
      <h3>Fashion and craft</h3>
      <p class="craft-lede">Four years of fashion training shaped how I see material, color, and the body.</p>
      <div class="strip">
        <div class="strip-item">
          ${img('oracle-editorial-02.jpg', 'Editorial photo of one look from Reconstruction of Oracle Bone')}
          <p class="strip-title">Reconstruction of Oracle Bone</p>
          <p class="strip-meta">Excellence Award, Hempel Award 2024</p>
          <p>A four-look collection that turns oracle-bone script into modular structures and Klein blue.</p>
        </div>
        <div class="strip-item">
          ${img('ornament-2026/jade-necklace-still.jpg', 'A jade necklace with metal and beads')}
          <p class="strip-title">Ornament as Memory Device</p>
          <p class="strip-meta">Jewelry, 2023</p>
          <p>Jade, metal, and beads, made to be worn close to the face and body.</p>
        </div>
      </div>
    </div>
  </section>
  ${contact()}`;
  if (anchor) requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView());
}

/* ---------- Case pages ---------- */
const chapter = (label, title, body) => `
  <section class="chapter">
    <div><p class="num">${label}</p><h2>${title}</h2></div>
    <div class="body">${body}</div>
  </section>`;
const head = (p) => `
  <a class="back" href="./#work">All work</a>
  <header class="case-head">
    <p class="eyebrow">${p.tag}</p>
    <h1>${p.title}</h1>
    <p class="lede">${p.line}</p>
    <dl class="facts">${p.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    ${p.links ? `<div class="links">${p.links.map(([t, u]) => `<a class="btn" href="${u}" target="_blank" rel="noopener">${t}</a>`).join('')}</div>` : ''}
  </header>
  ${p.hero ? `<figure class="case-hero">${img(p.hero[0], p.hero[1], { eager: true })}</figure>` : ''}`;
const next = (label, href) => `<nav class="next" aria-label="More work"><a href="./#work">All work</a>${label ? `<a href="${href}">${label}</a>` : ''}</nav>`;
const page = (title, html) => { document.title = `${title} | Tianhao Wang`; app.innerHTML = `<article class="case">${html}</article>`; };

function eunoia() {
  page('Eunoia', `${head({
    title: 'Eunoia', tag: '2025',
    line: 'A screen-free garment designed to ease anxiety in older adults through a guided body scan',
    facts: [['Role', 'Research, garment design, electronics, coding, and testing'], ['Team', 'Solo project'], ['Timeline', 'Jan to Jul 2025'], ['Tools', 'CLO 3D, Arduino, GSR sensor'], ['Result', 'A working prototype, tested with an older adult living with anxiety, plus a demo video']],
    links: [['Watch the demo', 'https://www.youtube.com/watch?v=WlQs1hbSqt8']],
    hero: ['cover-eunola-clean.jpg', 'An older woman wearing the Eunoia garment with soft light lines across the body']
  })}
  ${chapter('At a glance', 'A garment that guides a body scan without a screen', `
    <p>When a skin sensor reads signs of stress, the garment starts a body scan. Light moves from the feet to the head to show where to focus, and an air chamber fills and empties to set the pace of breathing. Soft vibration marks key points along the way.</p>
    ${figV('eunoia-ready', 'A woman sits cross-legged in the garment as its light lines glow', 'The working prototype')}`)}
  ${chapter('01 · Problem', 'Anxiety in older adults often goes unnoticed', `
    <p>Anti-anxiety drugs can cause dizziness and falls at this age. Memory loss and mistrust also make it harder to accept therapy. So I asked: can a gentle, drug-free object help them calm down on their own?</p>
    ${quote('My racing heart and health worries keep me awake, yet I avoid going to the hospital.', 'Interview participant', true)}`)}
  ${chapter('02 · Research', 'I surveyed 30 older adults, then interviewed some of them', `
    <p>I started with a questionnaire for 30 older adults. Then I talked with some of them face to face and by phone.</p>
    <p>What I found:</p>
    ${list(['Their worries came from health, money, family, and loneliness.', 'They calmed down by walking, talking with family or friends, listening to music, or praying.', 'Many avoided medication.', 'Most were open to wearing a device.'])}
    ${quote('Walking or talking helps, but when I’m alone I overthink and grow more anxious.', 'Interview participant')}
    ${fig('cases/eunoia-interviews-photos.jpg', 'Two face-to-face interviews with older adults', 'Face-to-face interviews with older adults')}`)}
  ${chapter('03 · Insight', 'They needed a sense of calm they could feel, even when alone', `
    <p>Walking and talking helped. But when they were alone, the worry grew, and many didn't want pills. So the design had to work without a pill and without another person.</p>
    <p class="goals-label">Design goals</p>
    <ul class="goals"><li>Drug-free</li><li>Works when alone</li><li>Guided by the body</li><li>Simple to follow</li></ul>`)}
  ${chapter('04 · Key decisions', 'Three decisions that shaped the design', `
    <h3>1. A full-body scan, not a single breathing exercise</h3>
    <p>A body scan is a mindfulness exercise. It moves your attention step by step from your feet to your head. I chose it because it works with the whole body. A breathing or vibration exercise on its own uses only one channel.</p>
    ${figV('eunoia-scan', 'Light moves up along the leg of the garment', 'The light follows the body scan path')}
    <h3>2. Light, air, and vibration, each with one job</h3>
    <p>With no screen, the garment itself has to lead the exercise. So I gave each channel one job:</p>
    ${list(['Light flows along the garment and shows where to focus.', 'Air fills and empties a soft chamber to set the breathing rhythm.', 'Vibration gives a gentle cue at key points.'])}
    ${group([vid('eunoia-air', 'The light strip glows around the air chamber on the torso'), vid('eunoia-sensor', 'A small sensor on the sleeve near the wrist')], 'Light and air move with the breath')}
    <h3>3. A close fit that still lets you move</h3>
    <p>The cues follow the path of the body scan, so they have to sit close to the body. But the garment also has to let people move. I drafted 2D patterns, refined the fit in CLO 3D, and made mock-ups. For stretch, I chose 66% nylon and 34% spandex. For the air chamber, I used a PVC inflatable composite.</p>
    ${fig('cases/eunoia-clo3d.jpg', 'The garment simulated in CLO 3D from six angles', 'Refining the fit in CLO 3D')}`)}
  ${chapter('05 · Prototype and test', 'I built a working prototype and tested it with an older adult living with anxiety', `
    <p>How it works: A GSR sensor picks up tiny changes in skin sweat, which tend to rise with stress. When the reading passes a threshold, an Arduino starts the body scan. The light moves through eight segments on the garment. I wrote the code that keeps the air pump and the light in step with a breathing rhythm. When it's time to breathe out, the light dims and the pump stops.</p>
    ${fig('cases/eunoia-electronics-IMG_5433.jpg', 'The electronics laid out on a table: GSR sensor, Arduino, light ring, vibration motor module, and air pump', 'The parts: GSR sensor, Arduino, light, vibration motor, and air pump')}
    ${flow([['Stress rises'], ['GSR passes the threshold'], ['Arduino starts the scan'], ['Light moves from feet to head, air sets the breath, vibration cues key points'], ['When it’s time to breathe out, the light dims and the pump stops']], 'How the garment responds', 'How the garment responds, step by step')}
    <p>Then I ran a fitting and test session with an older adult living with anxiety.</p>
    <p>What the test showed:</p>
    ${list(['The light flow felt calming and easy to follow.', 'The vibration was too soft.', 'The breathing cue had no clear start.'])}
    <p>It was a small test: one person, one session. But it showed me what to fix first.</p>
    ${fig('cases/eunoia-fitting-IMG_4406.jpg', 'Adjusting the electronics on the sleeve of the gray prototype during a fitting', 'Fitting and testing the prototype')}`)}
  ${chapter('06 · Result', 'What I made', `
    ${list(['A working prototype: the garment, sensor, light, air chamber, and vibration', 'A demo video', 'Three clear findings for the next version'])}
    <p>What I learned: Even one session changed my plan. The light worked, but the vibration and the breathing cue needed more work.</p>
    ${fig('cases/eunoia-final-5S2A5337.jpg', 'The finished garment with glowing light lines across the chest and torso', 'The finished garment')}`)}
  ${chapter('07 · Next', 'What I’d change next', list(['Make the vibration stronger, and let people adjust it.', 'Add a clear signal before each breath begins.', 'Test with more older adults, at home, over several days.']))}
  ${next('Next: Wonderorb', '?project=wonderorb')}`);
}

function fadence() {
  page('Fadence', `${head({
    title: 'Fadence', tag: '2025',
    line: 'A wearable for the moment before sleep, when racing thoughts won’t stop. No screen, no commands.',
    facts: [['Role', 'Research, form design, electronics, and coding'], ['Team', 'Solo project'], ['Timeline', 'Apr to Jun 2025'], ['Tools', 'PPG sensor, graphene heating patch, vibration motor, Arduino Nano'], ['Result', 'A working prototype: the sensor, heating patch, and vibration motor built into the shell, plus a video']],
    links: [['Watch the video', 'https://youtu.be/Hr81NE6ey_Y']],
    hero: ['cover-fadence-clean.jpg', 'A model wearing the sculptural Fadence wearable on the upper back']
  })}
  ${figV('fadence-object', 'A hand sets the Fadence prototype back on its bedside stand', 'The working prototype')}
  ${chapter('01 · Problem', 'A mind that won’t slow down', `
    <p>Short-term insomnia often starts with racing thoughts. Most sleep aids still ask for your attention: a light to follow, a sound to listen to, or a headset to wear.</p>
    ${table(['Product', 'What it does', 'Why it falls short here'], [
      ['Dodow', 'Blue light to guide breathing', 'You have to focus on it'],
      ['Kokoon', 'Headphones with sound', 'In-ear and intrusive'],
      ['Muse S', 'EEG headband with a meditation coach', 'Too many instructions'],
      ['Philips SmartSleep', 'Headband with sound during deep sleep', 'Bulky, expensive, not for falling asleep']
    ], 'What other sleep aids miss')}`)}
  ${chapter('02 · Key decision', 'Listen quietly, then answer in two gentle steps', `
    <p>A PPG sensor near the neck, the same kind smartwatches use, tracks heart-rate variability (HRV). When HRV suggests the mind is still busy, Fadence first warms up. If that doesn't help, a soft vibration pulse follows. When HRV settles, it fades out.</p>
    <p>Why the neck: blood flow is stable there, the artery is close to the skin, and the sensor stays out of the way during sleep.</p>
    ${flow([['Idle'], ['Monitoring', 'skin contact'], ['Warmth', 'HRV rises'], ['Vibration', 'HRV stays high'], ['Fade out', 'HRV settles or time is up']], 'Designed for calm, not control', 'Fadence states and what moves it from one to the next')}
    ${figV('fadence-wear', 'A man asleep on a sofa wearing the prototype on his neck and back', 'Wearing the prototype to sleep')}`)}
  ${chapter('03 · Form', 'Shaped to rest on the neck and back, with no straps', `
    <p>The form was inspired by an octopus's soft grip and the structure of insect shells. I drew the pattern, cut the pieces, and sewed a soft mock-up. Then I tested it for fit and comfort around the neck and back.</p>
    ${group([vid('fadence-cut', 'Marking and cutting the pattern pieces on fabric'), vid('fadence-sew', 'Sewing the shell fabric on a sewing machine')], '', 'tall')}
    ${figV('fadence-mockup-fit', 'The soft mock-up worn on the back of the neck, seen from behind', 'Cutting, sewing, and fitting the mock-up')}`)}
  ${chapter('04 · Prototype tests', 'Prototype tests', `
    <p>The graphene patch reached 36.5°C in 90 seconds, close to body temperature. A simulated high-HRV signal triggered the vibration motor as intended. Then I built the sensor, heating patch, and motor into the shell, and they worked together. Next, I'd test it with people at bedtime.</p>
    ${group([vid('fadence-sensor', 'Wiring a small vibration motor module'), vid('fadence-assemble', 'Building the electronics into the soft shell'), vid('fadence-mannequin', 'The soft shell on a mannequin, wired to the circuit')], 'Wiring the parts and building them into the shell', 'tall three')}`)}
  ${next('', '')}`);
}

function jovision() {
  page('Jovision', `${head({
    title: 'AI companion robot for children', tag: 'Internship · 2025',
    line: 'At Jovision, I worked on an AI companion robot for children.',
    facts: [['Company', 'Shandong Jovision Technology'], ['Role', 'Interaction Design Intern'], ['Timeline', 'Jun to Sep 2025']]
  })}
  ${chapter('What I did', 'From sketches to a working prototype', `
    ${list(['Designed the look and feel: form, color, materials, and surface details.', 'Worked with engineers to fit the design around sensor placement, speaker openings, and structural limits.', 'Took the design from sketches to 3D models to a working prototype, and presented each stage to the team.'])}
    <p>I don't have images from this project, but I'm happy to walk you through it in an interview.</p>`)}
  ${next('', '')}`);
}

const routes = {
  eunoia: () => location.replace('eunoia/'), eunola: () => location.replace('eunoia/'), // the motion page replaces the summary page; old ?project=eunoia and ?project=eunola links still land there
  wonderorb: () => location.replace('wonderorb/'), // the motion page replaces the summary page; old ?project=wonderorb links still land there
  fadence: () => location.replace('fadence/'), // the motion page replaces the summary page; old ?project=fadence links still land there
  jovision: jovision,
  'nature-designer': () => location.replace('nature-designer/'), symbiotic: () => location.replace('nature-designer/'), // old link to the same project
  fashion: () => location.replace('fashion/'), oracle: () => location.replace('fashion/#oracle'), ornament: () => location.replace('fashion/#ornament')
};
const key = new URLSearchParams(location.search).get('project');
(routes[key] || (() => location.replace('./')))(); // this shell only serves ?project= pages; the homepage is index.html

/* Loops: play while at least a third is on screen, pause when it leaves.
   The pause button wins until the reader presses play again. Reduced motion starts paused. */
const loops = [...document.querySelectorAll('video[data-loop]')];
const playLoop = v => { const p = v.play(); if (p) p.catch(() => {}); };
const setBtn = (v, paused) => {
  const b = v.parentElement.querySelector('.vid-btn');
  if (!b) return;
  b.textContent = paused ? 'Play' : 'Pause';
  b.setAttribute('aria-pressed', String(paused));
};
if (loops.length) {
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      const v = e.target;
      if (v.dataset.hold === 'true') continue;
      if (e.isIntersecting) playLoop(v); else v.pause();
    }
  }, { threshold: 0.35 });
  loops.forEach(v => {
    if (REDUCE) { v.dataset.hold = 'true'; setBtn(v, true); }
    io.observe(v);
    v.parentElement.querySelector('.vid-btn')?.addEventListener('click', () => {
      const hold = v.dataset.hold !== 'true';
      v.dataset.hold = String(hold);
      if (hold) v.pause(); else playLoop(v);
      setBtn(v, hold);
    });
  });
}

/* Offline PDF mode (?pdf=1): one tall page per screen, sized to the rendered content. */
if (PDF) (async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  const st = document.createElement('style');
  st.textContent = `@page { size: ${innerWidth}px ${Math.ceil(document.documentElement.scrollHeight * 1.3) + 400}px; margin: 0; }`;
  document.head.appendChild(st);
})();
