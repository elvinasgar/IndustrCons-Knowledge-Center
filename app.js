/* =========================================================
   IndustrCons Knowledge — APPLICATION LOGIC
   Bu fayl CATEGORIES / ENTRIES / DICTIONARY massivlərini
   (bax: data.js) ekranda göstərir və axtarışı idarə edir.
   ========================================================= */

let activeCat = null;

function renderCategories(){
  const grid = document.getElementById('catGrid');
  grid.innerHTML = '';
  CATEGORIES.forEach(c=>{
    const count = ENTRIES.filter(e=>e.cat===c.key).length;
    const div = document.createElement('div');
    div.className = 'panel cat-card' + (activeCat===c.key ? ' active':'');
    div.onclick = ()=>{ activeCat = (activeCat===c.key) ? null : c.key; renderCategories(); renderEntries(); };
    div.innerHTML = `<div class="ic">${c.icon}</div><h3>${c.name}</h3><p>${count} mövzu</p>`;
    grid.appendChild(div);
  });
  document.getElementById('catCount').textContent = CATEGORIES.length + ' kateqoriya · ' + ENTRIES.length + ' mövzu';
}

function renderEntries(filterText){
  const list = document.getElementById('entryList');
  let filtered = activeCat ? ENTRIES.filter(e=>e.cat===activeCat) : ENTRIES;

  if(filterText){
    const f = filterText.toLowerCase();
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(f) ||
      e.kw.some(k=>k.toLowerCase().includes(f)) ||
      e.body.toLowerCase().includes(f)
    );
  }

  document.getElementById('listTitle').textContent = activeCat
    ? (CATEGORIES.find(c=>c.key===activeCat).name + ' mövzuları')
    : 'Bütün mövzular';
  document.getElementById('entryCount').textContent = filtered.length + ' nəticə';
  list.innerHTML = '';
  filtered.forEach((e)=>{
    const realIdx = ENTRIES.indexOf(e);
    const div = document.createElement('div');
    div.className = 'panel entry';
    div.onclick = ()=>openModal(realIdx);
    const catObj = CATEGORIES.find(c=>c.key===e.cat);
    div.innerHTML = `<div class="entry-top"><h3>${e.title}</h3><span class="tag">${catObj.icon} ${catObj.name}</span></div><p class="snippet">${e.body.slice(0,120).replace(/\n/g,' ')}…</p>`;
    list.appendChild(div);
  });
}

function renderDictionary(){
  const grid = document.getElementById('dictGrid');
  grid.innerHTML = '';
  DICTIONARY.forEach(([term, def])=>{
    const div = document.createElement('div');
    div.className = 'panel dict-item';
    div.innerHTML = `<b>${term}</b><div>${def}</div>`;
    grid.appendChild(div);
  });
  document.getElementById('dictCount').textContent = DICTIONARY.length + ' termin';
}

function openModal(idx){
  const e = ENTRIES[idx];
  const catObj = CATEGORIES.find(c=>c.key===e.cat);
  document.getElementById('modalCat').textContent = catObj.icon + ' ' + catObj.name.toUpperCase();
  document.getElementById('modalTitle').textContent = e.title;
  document.getElementById('modalBody').textContent = e.body;
  document.getElementById('overlay').classList.add('show');
}
function closeModal(){ document.getElementById('overlay').classList.remove('show'); }

/* Keyword-based assistant — no network calls, pure local matching */
function scoreEntry(entry, queryWords){
  const hay = (entry.title + ' ' + entry.kw.join(' ') + ' ' + entry.body).toLowerCase();
  let score = 0;
  queryWords.forEach(w=>{
    if(w.length < 2) return;
    if(entry.kw.some(k=>k.toLowerCase().includes(w))) score += 3;
    if(hay.includes(w)) score += 1;
  });
  return score;
}

function ask(customQuery){
  const input = document.getElementById('askInput');
  const q = (customQuery !== undefined ? customQuery : input.value).trim();
  if(!q) return;
  input.value = q;
  const words = q.toLowerCase().split(/[\s,.!?]+/).filter(Boolean);

  const scored = ENTRIES.map((e,i)=>({i, e, s: scoreEntry(e, words)}))
    .filter(x=>x.s>0)
    .sort((a,b)=>b.s-a.s)
    .slice(0,4);

  const box = document.getElementById('answerBox');
  box.style.display = 'block';
  let html = `<div class="bubble user"><b>Siz:</b> ${q}</div>`;

  if(scored.length === 0){
    html += `<div class="bubble"><span class="no-match">Bu sualla dəqiq uyğun mövzu tapılmadı. Aşağıdakı kateqoriyalara baxaraq axtarışı sadələşdirin (məs: "beton", "boya", "elektrik").</span></div>`;
  } else {
    scored.forEach(({e})=>{
      const catObj = CATEGORIES.find(c=>c.key===e.cat);
      html += `<div class="bubble"><h4>${catObj.icon} ${e.title}</h4>${e.body.slice(0,260).replace(/\n/g,' ')}…
        <div class="src">Tam mətn üçün klikləyin ↓</div></div>`;
    });
  }
  box.innerHTML = html;

  const bubbles = box.querySelectorAll('.bubble:not(.user)');
  scored.forEach(({i}, idx)=>{
    if(bubbles[idx]){
      bubbles[idx].style.cursor = 'pointer';
      bubbles[idx].onclick = ()=>openModal(i);
    }
  });
}

function renderChips(){
  const chips = ["armatur necə bağlanır","boya neçə qat","beton marka","hidroizolyasiya","qazbeton","kabel en kəsiyi","laminat vs parket"];
  const row = document.getElementById('chipRow');
  row.innerHTML = '';
  chips.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'chip';
    el.textContent = c;
    el.onclick = ()=>ask(c);
    row.appendChild(el);
  });
}

function initEvents(){
  document.getElementById('askInput').addEventListener('keydown', (ev)=>{
    if(ev.key === 'Enter') ask();
  });
  document.getElementById('goBtn').addEventListener('click', ()=>ask());
  document.getElementById('entrySearch').addEventListener('input', (ev)=>{
    renderEntries(ev.target.value);
  });
  document.getElementById('overlay').addEventListener('click', (ev)=>{
    if(ev.target.id==='overlay') closeModal();
  });
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
}

renderCategories();
renderEntries();
renderDictionary();
renderChips();
initEvents();
