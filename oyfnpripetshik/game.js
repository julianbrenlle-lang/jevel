
// ══════════════════════════════════════════
// AUDIO — embedded base64 mp3
// ══════════════════════════════════════════
const AUDIO_SRC = 'music.mp3';
let music = null;
let musicOn = true;

function initMusic() {
  music = new Audio(AUDIO_SRC);
  music.loop = true;
  music.volume = 0.55;
  music.play().catch(() => {
    // Autoplay blocked — start on very first user interaction of any kind
    const unlock = () => {
      if (musicOn) music.play().catch(()=>{});
    };
    document.addEventListener('pointerdown', unlock, { once: true });
    document.addEventListener('keydown',     unlock, { once: true });
  });
}

function toggleMusic() {
  musicOn = !musicOn;
  const btn = document.getElementById('music-btn');
  if (musicOn) {
    music.play().catch(()=>{});
    btn.textContent = '🎵';
    btn.title = 'Apagar música / Mute music';
  } else {
    music.pause();
    btn.textContent = '🔇';
    btn.title = 'Encender música / Play music';
  }
}

// ══════════════════════════════════════════
// I18N
// ══════════════════════════════════════════
let lang = 'es'; // default: Spanish

const T = {
  es: {
    tagline:      'El Juego · דאָס שפּיל',
    verse:        '"Repitan una y otra vez -<br><em>komets-alef: \'o\'.</em><br>En estas letras yacen lágrimas,<br>y en ellas - la fuerza."',
    catTitle:     'Elegí tus letras - קלײַב אויס',
    vowels:       'Vocales',
    diphthongs:   'Diptongos',
    consonants:   'Consonantes',
    clusters:     'Grupos de consonantes',
    loshnkoydesh: 'Loshn-Koydesh',
    finals:       'Finales',
    footer:       'Escribí el sonido fonético para atrapar cada letra',
    credits:      'Creado por el sello fonográfico Jevel. Argentina.',
    placeholder:  'Escribí acá y presioná enter...',
    errorEmpty:   'Por favor seleccioná al menos una categoría.',
    hudLevel:     (n) => `Nivel<br><span>${n}</span>`,
    hintMatch:    (t,l) => `"${t}" → ${l} - ¡no aparece todavía!`,
    hintNoMatch:  (t) => `"${t}" no coincide con ninguna letra`,
    winTitle:     'ברכות!',
    winEmoji:     '🕯️',
    winSub:       '¡Felicitaciones - mantuviste el fuego vivo!',
    loseEmoji:    '🕯️',
    loseSub:      '¿Probamos de nuevo?',
    backToTitle:  '← Volver al inicio',
    shareLabel:   '¿Te gustó? ¡Invitá a alguien!',
    shareText:    () => `Recién estuve jugando el juego de Oyfn Pripetshik\nLo recomiendo\nwww.jeveldiscos.com/oyfnpripetshik.html`,
    langBtn:      'EN',
    diffTitle:    'Dificultad — שווערקייט',
    easyLabel:    'Fácil',   easyDesc:   'Lento',
    medLabel:     'Medio',   medDesc:    'Normal',
    hardLabel:    'Difícil', hardDesc:   'Rápido',
    confirmText:  '¿Abandonar la partida y volver al inicio?',
    confirmYes:   'Sí, salir',
    confirmNo:    'Seguir jugando',
    leaveText:    '¿Querés ir a jeveldiscos.com?',
    leaveYes:     'Ir al sitio',
    leaveNo:      'Quedarse',
    scriptTitle:  'Tipografía — שריפֿט',
    printLabel:   'Imprenta',   printSub:   'Cuadrada',
    cursiveLabel: 'Cursiva',    cursiveSub: 'Yidish-khtav',
  },
  pt: {
    tagline:      'O Jogo · דאָס שפּיל',
    verse:        '"Repitam uma e outra vez -<br><em>komets-alef: \'o\'.</em><br>Nessas letras há lágrimas,<br>e nelas - a força."',
    catTitle:     'Escolha suas letras - קלײַב אויס',
    vowels:       'Vogais',
    diphthongs:   'Ditongos',
    consonants:   'Consoantes',
    clusters:     'Grupos de consoantes',
    loshnkoydesh: 'Loshn-Koydesh',
    finals:       'Finais',
    footer:       'Digite o som fonético para pegar cada letra',
    credits:      'Criado pelo selo fonográfico Jevel. Argentina.',
    placeholder:  'Escreva aqui e pressione enter...',
    errorEmpty:   'Por favor, selecione pelo menos uma categoria.',
    hudLevel:     (n) => `Nível<br><span>${n}</span>`,
    hintMatch:    (t,l) => `"${t}" → ${l} - ainda não apareceu!`,
    hintNoMatch:  (t) => `"${t}" não corresponde a nenhuma letra`,
    winTitle:     'ברכות!',
    winEmoji:     '🕯️',
    winSub:       'Parabéns - você manteve o fogo aceso!',
    loseEmoji:    '🕯️',
    loseSub:      'Tentamos de novo?',
    backToTitle:  '← Voltar ao início',
    shareLabel:   'Gostou? Convida alguém!',
    shareText:    () => `Acabei de jogar Oyfn Pripetshik\nRecomendo muito\nwww.jeveldiscos.com/oyfnpripetshik.html`,
    langBtn:      'PT',
    diffTitle:    'Dificuldade — שווערקייט',
    easyLabel:    'Fácil',   easyDesc:   'Lento',
    medLabel:     'Médio',   medDesc:    'Normal',
    hardLabel:    'Difícil', hardDesc:   'Rápido',
    confirmText:  'Abandonar a partida e voltar ao início?',
    confirmYes:   'Sim, sair',
    confirmNo:    'Continuar jogando',
    leaveText:    'Quer ir para jeveldiscos.com?',
    leaveYes:     'Ir ao site',
    leaveNo:      'Ficar aqui',
    scriptTitle:  'Tipografia — שריפֿט',
    printLabel:   'Imprensa',   printSub:   'Quadrada',
    cursiveLabel: 'Cursiva',    cursiveSub: 'Yidish-khtav',
  },
  pt: {
    tagline:      'O Jogo · דאָס שפּיל',
    verse:        '"Repitam uma e outra vez -<br><em>komets-alef: \'o\'.</em><br>Nessas letras há lágrimas,<br>e nelas - a força."',
    catTitle:     'Escolha suas letras - קלײַב אויס',
    vowels:       'Vogais',
    diphthongs:   'Ditongos',
    consonants:   'Consoantes',
    clusters:     'Grupos de consoantes',
    loshnkoydesh: 'Loshn-Koydesh',
    finals:       'Finais',
    footer:       'Digite o som fonético para pegar cada letra',
    credits:      'Criado pelo selo fonográfico Jevel. Argentina.',
    placeholder:  'Escreva aqui e pressione enter...',
    errorEmpty:   'Por favor, selecione pelo menos uma categoria.',
    hudLevel:     (n) => `Nível<br><span>${n}</span>`,
    hintMatch:    (t,l) => `"${t}" → ${l} - ainda não apareceu!`,
    hintNoMatch:  (t) => `"${t}" não corresponde a nenhuma letra`,
    winTitle:     'ברכות!',
    winEmoji:     '🕯️',
    winSub:       'Parabéns - você manteve o fogo aceso!',
    loseEmoji:    '🕯️',
    loseSub:      'Tentamos de novo?',
    backToTitle:  '← Voltar ao início',
    diffTitle:    'Dificuldade — שווערקייט',
    easyLabel:    'Fácil',   easyDesc:   'Lento',
    medLabel:     'Médio',   medDesc:    'Normal',
    hardLabel:    'Difícil', hardDesc:   'Rápido',
    confirmText:  'Abandonar a partida e voltar ao início?',
    confirmYes:   'Sim, sair',
    confirmNo:    'Continuar jogando',
    leaveText:    'Quer ir para jeveldiscos.com?',
    leaveYes:     'Ir ao site',
    leaveNo:      'Ficar aqui',
    scriptTitle:  'Tipografia — שריפֿט',
    printLabel:   'Imprensa',   printSub:   'Quadrada',
    cursiveLabel: 'Cursiva',    cursiveSub: 'Yidish-khtav',
  },
  en: {
    tagline:      'The Game · דאָס שפּיל',
    verse:        '"Say it again and again -<br><em>komets-alef: \'o\'.</em><br>In these letters lie tears,<br>and in them - strength."',
    catTitle:     'Choose your letters - קלײַב אויס',
    vowels:       'Vowels',
    diphthongs:   'Diphthongs',
    consonants:   'Consonants',
    clusters:     'Consonant clusters',
    loshnkoydesh: 'Loshn-Koydesh',
    finals:       'Finals',
    footer:       'Type the phonetic sound to catch each falling letter',
    credits:      'Created by Jevel record label. Argentina.',
    placeholder:  'Type here and press enter...',
    errorEmpty:   'Please select at least one category.',
    hudLevel:     (n) => `Level<br><span>${n}</span>`,
    hintMatch:    (t,l) => `"${t}" → ${l} - not on screen yet`,
    hintNoMatch:  (t) => `"${t}" doesn't match any letter`,
    winTitle:     'ברכות!',
    winEmoji:     '🕯️',
    winSub:       'Congratulations - you kept the fire alive!',
    loseEmoji:    '🕯️',
    loseSub:      'Ready to try again?',
    backToTitle:  '← Back to Title',
    shareLabel:   'Enjoyed it? Invite someone!',
    shareText:    () => `I just played the Oyfn Pripetshik game\nHighly recommend it\nwww.jeveldiscos.com/oyfnpripetshik.html`,
    langBtn:      'ES',
    diffTitle:    'Difficulty — שווערקייט',
    easyLabel:    'Easy',   easyDesc:   'Slow',
    medLabel:     'Medium', medDesc:    'Normal',
    hardLabel:    'Hard',   hardDesc:   'Fast',
    confirmText:  'Abandon the game and return to the title?',
    confirmYes:   'Yes, quit',
    confirmNo:    'Keep playing',
    leaveText:    'Do you want to go to jeveldiscos.com?',
    leaveYes:     'Go to site',
    leaveNo:      'Stay here',
    scriptTitle:  'Script — שריפֿט',
    printLabel:   'Print',      printSub:   'Square',
    cursiveLabel: 'Cursive',    cursiveSub: 'Yidish-khtav',
  }
};

function applyLang() {
  const t = T[lang];
  document.getElementById('t-tagline').textContent   = t.tagline;
  document.getElementById('t-verse').innerHTML        = t.verse;
  document.getElementById('t-cat-title').textContent  = t.catTitle;
  document.getElementById('cn-vowels').textContent    = t.vowels;
  document.getElementById('cn-diphthongs').textContent= t.diphthongs;
  document.getElementById('cn-consonants').textContent= t.consonants;
  document.getElementById('cn-clusters').textContent  = t.clusters;
  document.getElementById('cn-loshnkoydesh').textContent= t.loshnkoydesh;
  document.getElementById('cn-finals').textContent    = t.finals;
  document.getElementById('t-footer').textContent     = t.footer;
  document.getElementById('t-credits').textContent    = t.credits;
  document.getElementById('phonetic-input').placeholder = t.placeholder;
  document.getElementById('t-diff-title').textContent = t.diffTitle;
  document.getElementById('dn-easy').textContent      = t.easyLabel;
  document.getElementById('dd-easy').textContent      = t.easyDesc;
  document.getElementById('dn-medium').textContent    = t.medLabel;
  document.getElementById('dd-medium').textContent    = t.medDesc;
  document.getElementById('dn-hard').textContent      = t.hardLabel;
  document.getElementById('dd-hard').textContent      = t.hardDesc;
  document.getElementById('confirm-text').textContent = t.confirmText;
  document.getElementById('confirm-yes').textContent  = t.confirmYes;
  document.getElementById('confirm-no').textContent   = t.confirmNo;
  document.getElementById('t-script-title').textContent = t.scriptTitle;
  document.getElementById('sn-print').textContent     = t.printLabel;
  document.getElementById('ss-print').textContent     = t.printSub;
  document.getElementById('sn-cursive').textContent   = t.cursiveLabel;
  document.getElementById('ss-cursive').textContent   = t.cursiveSub;
  document.getElementById('error-msg').textContent    = '';
  if (gameRunning) updateHUD();
}

function pickLang(l) {
  lang = l;
  applyLang();
  document.getElementById('lang-picker-screen').classList.add('hidden');
  document.getElementById('title-screen').classList.remove('hidden');
  document.getElementById('lang-back-btn').style.display = 'flex';
}

function goToLangPicker() {
  document.getElementById('title-screen').classList.add('hidden');
  document.getElementById('lang-picker-screen').classList.remove('hidden');
  document.getElementById('lang-back-btn').style.display = 'none';
}

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const LETTER_DATA = {
  vowels:     [{letter:'אַ',phonetic:'a'},{letter:'אָ',phonetic:'o'},{letter:'ע',phonetic:'e'},{letter:'י',phonetic:'i'},{letter:'ו',phonetic:'u'}],
  diphthongs: [{letter:'ײ',phonetic:'ey'},{letter:'ײַ',phonetic:'ay'},{letter:'ױ',phonetic:'oy'}],
  consonants: [
    {letter:'ב',phonetic:'b'},{letter:'ג',phonetic:'g'},{letter:'ד',phonetic:'d'},
    {letter:'ה',phonetic:'h'},{letter:'ו',phonetic:'v'},{letter:'װ',phonetic:'v'},{letter:'ז',phonetic:'z'},
    {letter:'ט',phonetic:'t'},{letter:'י',phonetic:'y'},
    {letter:'כ',phonetic:'kh'},{letter:'ל',phonetic:'l'},{letter:'מ',phonetic:'m'},{letter:'נ',phonetic:'n'},
    {letter:'ס',phonetic:'s'},{letter:'פּ',phonetic:'p'},{letter:'פֿ',phonetic:'f'},{letter:'צ',phonetic:'ts'},
    {letter:'ק',phonetic:'k'},{letter:'ר',phonetic:'r'},{letter:'ש',phonetic:'sh'},
  ],
  clusters: [
    {letter:'דזש',phonetic:'j'},{letter:'זש',phonetic:'g'},{letter:'טש',phonetic:'ch'},
  ],
  loshnkoydesh: [
    {letter:'בֿ',phonetic:'v'},{letter:'ח',phonetic:'kh'},{letter:'כּ',phonetic:'k'},
    {letter:'שׂ',phonetic:'s'},{letter:'תּ',phonetic:'t'},{letter:'ת',phonetic:'s'},
  ],
  finals: [{letter:'ם',phonetic:'m'},{letter:'ן',phonetic:'n'},{letter:'ף',phonetic:'f'},{letter:'ץ',phonetic:'ts'}],
};

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let selectedCats  = new Set(['vowels','diphthongs','consonants','clusters','finals','loshnkoydesh']);
let difficulty    = 'medium'; // 'easy' | 'medium' | 'hard'
let scriptStyle   = 'print';  // 'print' | 'cursive'
let activeLetters = [];
let score=0, lives=5, level=1;
let gameRunning=false, paused=false;
let spawnTimer=0, levelTimer=0;
let animFrame=null, lastTime=0;
let pool=[], hintTimeout=null;
let visibleHeight = window.innerHeight;

const canvas   = document.getElementById('game-canvas');
const ctx      = canvas.getContext('2d');
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx    = bgCanvas.getContext('2d');

// ══════════════════════════════════════════
// VIEWPORT / KEYBOARD
// ══════════════════════════════════════════
function updateVisibleHeight() {
  visibleHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
}
function repositionInputBar() {
  const bar=document.getElementById('input-bar'), hint=document.getElementById('hint-bar');
  if (!bar) return;
  if (window.visualViewport) {
    const vv=window.visualViewport;
    const gap=window.innerHeight-(vv.offsetTop+vv.height);
    bar.style.bottom=gap+'px';
    if (hint) hint.style.bottom=(gap+58)+'px';
  } else { bar.style.bottom='0'; }
}
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', ()=>{ updateVisibleHeight(); repositionInputBar(); });
  window.visualViewport.addEventListener('scroll', ()=>{ updateVisibleHeight(); repositionInputBar(); });
}
updateVisibleHeight();

function resizeCanvas() {
  canvas.width=bgCanvas.width=window.innerWidth;
  canvas.height=bgCanvas.height=window.innerHeight;
  updateVisibleHeight();
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// ══════════════════════════════════════════
// FIRE / EMBER BACKGROUND
// ══════════════════════════════════════════
let fireT=0;
const embers=[];
function resetEmber(e) {
  const W=bgCanvas.width, H=bgCanvas.height;
  e.x=W/2+(Math.random()-.5)*W*0.65; e.y=H+Math.random()*15;
  e.vy=0.28+Math.random()*0.65; e.r=0.5+Math.random()*1.8;
  e.alpha=0.35+Math.random()*0.5; e.life=0.6+Math.random()*1.6;
  e.decay=0.22+Math.random()*0.38; e.freq=0.6+Math.random()*2;
  e.phase=Math.random()*Math.PI*2; e.drift=0.12+Math.random()*0.3;
}
for (let i=0;i<30;i++) { const e={}; resetEmber(e); e.y=Math.random()*bgCanvas.height; embers.push(e); }

function drawBackground(dt) {
  fireT+=dt;
  const W=bgCanvas.width, H=bgCanvas.height;
  bgCtx.clearRect(0,0,W,H);
  bgCtx.fillStyle='#120a04'; bgCtx.fillRect(0,0,W,H);
  const g1=bgCtx.createRadialGradient(W/2,H+60,10,W/2,H+60,H*1.3);
  const f1=0.15+0.045*Math.sin(fireT*1.8)+0.025*Math.sin(fireT*3.5+0.5);
  const f2=0.08+0.03*Math.sin(fireT*2.3+1)+0.015*Math.sin(fireT*4.2);
  g1.addColorStop(0,`rgba(210,85,18,${f1})`); g1.addColorStop(0.3,`rgba(160,50,8,${f2})`);
  g1.addColorStop(0.65,'rgba(60,18,4,0.035)'); g1.addColorStop(1,'rgba(0,0,0,0)');
  bgCtx.fillStyle=g1; bgCtx.fillRect(0,0,W,H);
  const g2=bgCtx.createRadialGradient(W*0.1,H*0.6,5,W*0.1,H*0.6,H*0.55);
  g2.addColorStop(0,`rgba(200,90,20,${0.06+0.02*Math.sin(fireT*2.7+2)})`); g2.addColorStop(1,'rgba(0,0,0,0)');
  bgCtx.fillStyle=g2; bgCtx.fillRect(0,0,W,H);
  const gt=bgCtx.createLinearGradient(0,0,0,H*0.35);
  gt.addColorStop(0,'rgba(0,0,0,0.42)'); gt.addColorStop(1,'rgba(0,0,0,0)');
  bgCtx.fillStyle=gt; bgCtx.fillRect(0,0,W,H);
  for (const e of embers) {
    e.y-=e.vy*(dt*60); e.x+=Math.sin(fireT*e.freq+e.phase)*e.drift; e.life-=dt*e.decay;
    if (e.life<=0||e.y<-20) resetEmber(e);
    const a=Math.min(1,e.life)*e.alpha;
    bgCtx.beginPath(); bgCtx.arc(e.x,e.y,e.r,0,Math.PI*2);
    bgCtx.fillStyle=e.r>1.4?`rgba(230,115,28,${a})`:`rgba(255,195,75,${a})`; bgCtx.fill();
  }
}

let bgFrame=null, bgLastT=0;
function bgLoop(ts) {
  const dt=Math.min((ts-bgLastT)/1000,0.1); bgLastT=ts;
  drawBackground(dt); bgFrame=requestAnimationFrame(bgLoop);
}
bgLastT=performance.now(); bgFrame=requestAnimationFrame(bgLoop);

// ══════════════════════════════════════════
// TITLE LOGIC
// ══════════════════════════════════════════
function toggleCat(el) {
  el.classList.toggle('active');
  selectedCats[el.classList.contains('active')?'add':'delete'](el.dataset.cat);
  document.getElementById('error-msg').textContent='';
}

function buildPool() {
  const seen=new Set(); pool=[];
  for (const cat of selectedCats)
    for (const item of LETTER_DATA[cat])
      if (!seen.has(item.letter)) { seen.add(item.letter); pool.push(item); }
}

function setScript(s) {
  scriptStyle = s;
  ['print','cursive'].forEach(k => {
    document.getElementById('script-'+k).classList.toggle('active', k===s);
  });
}

function setDifficulty(d) {
  difficulty = d;
  ['easy','medium','hard'].forEach(k => {
    document.getElementById('diff-'+k).classList.toggle('active', k===d);
  });
}

function startGame() {
  const t=T[lang];
  if (!selectedCats.size) { document.getElementById('error-msg').textContent=t.errorEmpty; return; }
  buildPool();
  score=0;lives=5;level=1;activeLetters=[];spawnTimer=999;levelTimer=0;
  cancelAnimationFrame(bgFrame); bgFrame=null;
  document.getElementById('title-screen').classList.add('hidden');
  document.getElementById('overlay-screen').classList.add('hidden');
  document.getElementById('music-btn').classList.remove('on-title');
  document.getElementById('hud').classList.remove('hidden');
  document.getElementById('input-bar').classList.remove('hidden');
  document.getElementById('pause-btn').style.display='flex';
  document.getElementById('home-btn').style.display='flex';
  document.getElementById('lang-back-btn').style.display='none';
  updateHUD(); resizeCanvas();
  gameRunning=true; paused=false; lastTime=performance.now();
  animFrame=requestAnimationFrame(gameLoop);
  const inp=document.getElementById('phonetic-input');
  inp.value=''; inp.placeholder=t.placeholder; inp.focus();
  repositionInputBar();
}

// ══════════════════════════════════════════
// GAME LOOP
// ══════════════════════════════════════════
function gameLoop(ts) {
  if (!gameRunning) return;
  const dt=Math.min((ts-lastTime)/1000,0.1); lastTime=ts;
  drawBackground(dt);
  if (!paused) { updateGame(dt); drawGame(); }
  animFrame=requestAnimationFrame(gameLoop);
}

function getLevelParams() {
  // Speed expressed as fraction of visibleHeight per second — fully screen-size independent.
  // A value of 0.18 means the letter crosses the play area in ~5.5s regardless of device height.
  const presets = {
    easy:   { baseSpeed:0.10, speedInc:0.028, baseSpawn:5.2, spawnDec:0.18 },
    medium: { baseSpeed:0.16, speedInc:0.048, baseSpawn:3.6, spawnDec:0.26 },
    hard:   { baseSpeed:0.22, speedInc:0.064, baseSpawn:3.0, spawnDec:0.32 },
  };
  const p = presets[difficulty];
  const H = visibleHeight;
  return {
    speed:         (p.baseSpeed + (level-1)*p.speedInc) * H,
    spawnInterval: Math.max(1.1, p.baseSpawn - (level-1)*p.spawnDec),
    maxLetters:    Math.min(3+Math.floor((level-1)*0.8),9)
  };
}

function updateGame(dt) {
  const {speed,spawnInterval,maxLetters}=getLevelParams();
  const W=canvas.width, floor=visibleHeight-60;
  levelTimer+=dt;
  if (levelTimer>20) { level++;levelTimer=0;updateHUD(); }
  spawnTimer+=dt;
  if (spawnTimer>=spawnInterval && activeLetters.length<maxLetters) { spawnTimer=0; spawnLetter(W,speed); }
  for (let i=activeLetters.length-1;i>=0;i--) {
    const l=activeLetters[i];
    l.y+=l.speed*dt; l.wobble+=dt*1.1;
    if (l.y>=floor) { activeLetters.splice(i,1); loseLife(); }
  }
}

function spawnLetter(W,speed) {
  const item=pool[Math.floor(Math.random()*pool.length)];
  const size=W<480?34:48; const margin=size*1.5;
  const variance = visibleHeight * 0.03; // ±3% of screen height — consistent across devices
  activeLetters.push({ letter:item.letter, phonetic:item.phonetic, x:margin+Math.random()*(W-margin*2), y:-52, speed:speed+(Math.random()-.5)*2*variance, size, wobble:Math.random()*Math.PI*2, flash:0 });
}

function drawGame() {
  const W=canvas.width, floor=visibleHeight-60;
  ctx.clearRect(0,0,W,canvas.height);
  ctx.save(); ctx.strokeStyle='rgba(200,110,35,0.2)'; ctx.lineWidth=1; ctx.setLineDash([5,10]);
  ctx.beginPath(); ctx.moveTo(0,floor); ctx.lineTo(W,floor); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
  for (const l of activeLetters) {
    ctx.save(); ctx.translate(l.x+Math.sin(l.wobble)*2.5,l.y);
    const isFlash=l.flash>0;
    ctx.beginPath(); ctx.arc(0,0,l.size*0.66,0,Math.PI*2);
    ctx.fillStyle=isFlash?`rgba(90,15,8,${0.38+l.flash*0.42})`:'rgba(28,15,6,0.84)'; ctx.fill();
    ctx.strokeStyle=isFlash?`rgba(192,57,43,${0.65+l.flash*0.35})`:`rgba(195,115,38,${0.42+0.14*Math.sin(l.wobble)})`;
    ctx.lineWidth=1.5; ctx.shadowColor=isFlash?'rgba(192,57,43,0.6)':'rgba(215,95,25,0.3)'; ctx.shadowBlur=isFlash?20:11; ctx.stroke();
    ctx.font=`${l.size}px ${scriptStyle==='cursive'?"'Playpen Sans Hebrew',serif":"'Frank Ruhl Libre',serif"}`; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillStyle=isFlash?'#ff8070':'#faf0dc'; ctx.shadowColor=isFlash?'rgba(255,80,50,0.5)':'rgba(240,160,30,0.22)'; ctx.shadowBlur=isFlash?13:5;
    ctx.fillText(l.letter,0,2);
    ctx.restore();
    if (l.flash>0) l.flash=Math.max(0,l.flash-0.06);
  }
}

// ══════════════════════════════════════════
// INPUT
// ══════════════════════════════════════════
const inp=document.getElementById('phonetic-input');
inp.addEventListener('keydown',e=>{ if(e.key==='Enter') submitAnswer(); });

function submitAnswer() {
  if (!gameRunning||paused) return;
  const val=inp.value.trim().toLowerCase(); if (!val) return;
  let bestIdx=-1,bestY=-Infinity;
  for (let i=0;i<activeLetters.length;i++) { const l=activeLetters[i]; if (l.phonetic===val&&l.y>bestY) { bestY=l.y; bestIdx=i; } }
  if (bestIdx>=0) {
    const l=activeLetters[bestIdx]; burstParticles(l.x,l.y,l.letter); scorePopup(l.x,l.y,'+'+getPoints());
    score+=getPoints(); activeLetters.splice(bestIdx,1); flashInput('correct');
  } else { flashInput('wrong'); showHint(val); }
  inp.value=''; updateHUD();
}

function getPoints() { return 10+(level-1)*5; }
function flashInput(type) { inp.classList.remove('correct','wrong'); void inp.offsetWidth; inp.classList.add(type); setTimeout(()=>inp.classList.remove(type),360); }
function showHint(typed) {
  const h=document.getElementById('hint-bar'); clearTimeout(hintTimeout);
  const m=pool.find(x=>x.phonetic===typed); const t=T[lang];
  h.textContent=m?t.hintMatch(typed,m.letter):t.hintNoMatch(typed);
  h.style.display='block'; hintTimeout=setTimeout(()=>h.style.display='none',2200);
}

// ══════════════════════════════════════════
// LIVES
// ══════════════════════════════════════════
function loseLife() { lives--; updateHUD(); shakeScreen(); if (lives<=0) endGame(false); }

function endGame(won) {
  gameRunning=false; cancelAnimationFrame(animFrame);
  document.getElementById('hud').classList.add('hidden');
  document.getElementById('input-bar').classList.add('hidden');
  document.getElementById('pause-btn').style.display='none';
  document.getElementById('home-btn').style.display='none';
  const t=T[lang];
  document.getElementById('overlay-emoji').textContent   =won?t.winEmoji:t.loseEmoji;
  document.getElementById('overlay-title').textContent   =won?t.winTitle:'אַ שאָד…';
  document.getElementById('overlay-title').className     ='overlay-title '+(won?'win':'game-over');
  document.getElementById('overlay-subtitle').textContent=won?t.winSub:t.loseSub;
  document.getElementById('overlay-score').textContent   =score;
  document.getElementById('again-btn').textContent       =t.backToTitle;
  document.getElementById('overlay-screen').classList.remove('hidden');
  // Share section: only on loss
  const shareSection = document.getElementById('share-section');
  const shareLabel   = document.getElementById('share-label');
  const copyBtnLabel = document.getElementById('copy-btn-label');
  const copyConfirm  = document.getElementById('copy-confirm');
  if (!won) {
    shareSection.style.display = 'block';
    shareLabel.textContent     = t.shareLabel;
    copyBtnLabel.textContent   = t.copyBtn;
    copyConfirm.textContent    = '';
  } else {
    shareSection.style.display = 'none';
  }
}

function getShareText() {
  return T[lang].shareText();
}

function shareWhatsApp() {
  window.open('https://wa.me/?text=' + encodeURIComponent(getShareText()), '_blank');
}

function shareEmail() {
  const t = T[lang];
  const subject = encodeURIComponent('Oyfn Pripetshik');
  const body    = encodeURIComponent(getShareText());
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function returnToTitle() {
  cancelAnimationFrame(animFrame); gameRunning=false;paused=false;activeLetters=[];
  document.getElementById('overlay-screen').classList.add('hidden');
  document.getElementById('hud').classList.add('hidden');
  document.getElementById('input-bar').classList.add('hidden');
  document.getElementById('pause-btn').style.display='none';
  document.getElementById('home-btn').style.display='none';
  document.getElementById('lang-picker-screen').classList.add('hidden');
  document.getElementById('title-screen').classList.remove('hidden');
  document.getElementById('lang-back-btn').style.display = 'flex';
  document.getElementById('music-btn').classList.add('on-title');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  bgLastT=performance.now(); bgFrame=requestAnimationFrame(bgLoop);
}

function confirmLeave() {
  const t = T[lang];
  document.getElementById('leave-text').textContent = t.leaveText;
  document.getElementById('leave-yes').textContent  = t.leaveYes;
  document.getElementById('leave-no').textContent   = t.leaveNo;
  document.getElementById('leave-modal').classList.add('show');
}

function confirmLeaveYes() {
  document.getElementById('leave-modal').classList.remove('show');
  window.open('https://www.jeveldiscos.com', '_blank');
}

function confirmLeaveNo() {
  document.getElementById('leave-modal').classList.remove('show');
}

function confirmHome() {
  // Pause silently while modal is open
  if (!gameRunning) return;
  if (!paused) { paused=true; document.getElementById('pause-btn').textContent='▶'; }
  document.getElementById('confirm-modal').classList.add('show');
}

function confirmYes() {
  document.getElementById('confirm-modal').classList.remove('show');
  paused=false;
  returnToTitle();
}

function confirmNo() {
  document.getElementById('confirm-modal').classList.remove('show');
  // Resume game
  paused=false;
  lastTime=performance.now();
  document.getElementById('pause-btn').textContent='⏸';
}

function togglePause() {
  paused=!paused;
  document.getElementById('pause-btn').textContent=paused?'▶':'⏸';
  if (!paused) lastTime=performance.now();
}

// ══════════════════════════════════════════
// HUD
// ══════════════════════════════════════════
function updateHUD() {
  const ld=document.getElementById('lives-display'); ld.innerHTML='';
  for (let i=0;i<5;i++) { const h=document.createElement('span'); h.className='heart'+(i>=lives?' lost':''); h.textContent='🕯️'; ld.appendChild(h); }
  document.getElementById('score-display').textContent=score;
  document.getElementById('level-display').innerHTML=T[lang].hudLevel(level);
}

// ══════════════════════════════════════════
// FX
// ══════════════════════════════════════════
function burstParticles(x,y,letter) {
  const cols=['#e8621a','#f5a623','#ffd166','#faf0dc','#c97d2e'];
  for (let i=0;i<7;i++) {
    const p=document.createElement('div'); p.className='particle';
    p.textContent=['✦','✧','·','∗','•','✸'][Math.floor(Math.random()*6)];
    p.style.cssText=`left:${x+(Math.random()-.5)*46}px;top:${y+(Math.random()-.5)*24}px;font-size:${9+Math.random()*14}px;color:${cols[Math.floor(Math.random()*cols.length)]};animation-duration:${.5+Math.random()*.45}s;`;
    document.body.appendChild(p); setTimeout(()=>p.remove(),900);
  }
  const lp=document.createElement('div'); lp.className='particle'; lp.textContent=letter;
  lp.style.cssText=`left:${x-20}px;top:${y-22}px;font-family:'Frank Ruhl Libre',serif;font-size:42px;color:rgba(245,166,35,0.92);text-shadow:0 0 18px rgba(245,166,35,0.8);`;
  document.body.appendChild(lp); setTimeout(()=>lp.remove(),900);
}

function scorePopup(x,y,txt) {
  const el=document.createElement('div'); el.className='score-pop';
  el.textContent=txt; el.style.left=(x-20)+'px'; el.style.top=(y-28)+'px';
  document.body.appendChild(el); setTimeout(()=>el.remove(),950);
}

function shakeScreen() {
  canvas.style.transition='transform 0.05s';
  const mv=[[5,-3],[-5,3],[4,4],[-4,-4],[2,-2],[-2,2],[0,0]]; let i=0;
  const iv=setInterval(()=>{ if(i>=mv.length){canvas.style.transform='';clearInterval(iv);return;} canvas.style.transform=`translate(${mv[i][0]}px,${mv[i][1]}px)`;i++; },50);
}

// ══════════════════════════════════════════
// EASTER EGG - long press flame 5 seconds
// ══════════════════════════════════════════
let flamePressTimer = null;

function flamePress(e) {
  if (e) e.preventDefault();
  flamePressTimer = setTimeout(() => {
    document.getElementById('easter-egg').classList.add('show');
  }, 5000);
}

function flameRelease() {
  clearTimeout(flamePressTimer);
  flamePressTimer = null;
}

function closeEasterEgg() {
  document.getElementById('easter-egg').classList.remove('show');
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
initMusic();
document.getElementById('music-btn').classList.add('on-title');

// ── BROWSER EXIT WARNING ──────────────────────────────────────────────────────
window.addEventListener('beforeunload', function(e) {
  if (gameRunning) {
    e.preventDefault();
    e.returnValue = '';
  }
});
