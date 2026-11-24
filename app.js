import { questions, styles, situations, buildPhrases, FREE_URL, BOOK_URL } from '/data.js';
const el = (t, a = {}, ...kids) => { const n = document.createElement(t); for (const [k, v] of Object.entries(a)) { if (k === 'class') n.className = v; else if (k.startsWith('on')) n.addEventListener(k.slice(2), v); else n.setAttribute(k, v); } for (const c of kids) n.append(c); return n; };
const ctaBox = (note) => el('aside', { class: 'cta' }, el('h3', {}, 'Read the first chapter free'), el('p', {}, note), el('p', { class: 'row' }, el('a', { class: 'btn', href: FREE_URL, rel: 'noopener' }, 'Get the free chapter'), el('a', { class: 'btn alt', href: BOOK_URL, rel: 'noopener' }, 'Get the full book')));
const quizRoot = document.getElementById('quiz');
if (quizRoot) {
  let answers = questions.map(() => null); let done = false;
  const render = () => {
    quizRoot.replaceChildren();
    if (done) {
      const counts = { fixer: 0, withdrawer: 0, pleaser: 0, debater: 0 }; answers.forEach((a) => { counts[a]++; });
      const top = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0]; const r = styles[top];
      quizRoot.append(el('h2', {}, 'Your result: ' + r.name), el('p', {}, r.summary), el('h3', {}, 'Try this tonight'), el('p', {}, r.tryThis),
        el('p', { class: 'note' }, 'Most people mix styles. This is the one you lean on most when things get tense, not a label for who you are.'),
        ctaBox('Your free chapter shows how to start talking differently. Gumroad will ask for your email to send it.'),
        el('button', { class: 'alt', onclick: () => { answers = questions.map(() => null); done = false; render(); } }, 'Retake the quiz'));
      return;
    }
    const n = answers.filter(Boolean).length;
    quizRoot.append(el('p', { class: 'note' }, `${n} of ${questions.length} answered`));
    questions.forEach((q, i) => {
      const fs = el('fieldset', {}, el('legend', {}, `${i + 1}. ${q.q}`)); const box = el('div', { class: 'opts' });
      q.options.forEach((o) => box.append(el('button', { type: 'button', 'aria-pressed': String(answers[i] === o.style), onclick: () => { answers[i] = o.style; render(); } }, o.label)));
      fs.append(box); quizRoot.append(fs);
    });
    const b = el('button', { type: 'button', onclick: () => { done = true; render(); window.scrollTo(0, 0); } }, n === questions.length ? 'See my result' : `Answer all ${questions.length} questions`);
    if (n < questions.length) b.disabled = true; quizRoot.append(b);
  };
  render();
}
const phrRoot = document.getElementById('phrases');
if (phrRoot) {
  let sid = situations[0].id; let detail = '';
  const list = el('div'); const box = el('div', { class: 'opts' });
  const input = el('input', { type: 'text', maxlength: '80', id: 'detail', placeholder: 'for example: you were on your phone at dinner' });
  const draw = () => {
    box.replaceChildren(...situations.map((s) => el('button', { type: 'button', 'aria-pressed': String(s.id === sid), onclick: () => { sid = s.id; draw(); } }, s.label)));
    const ph = buildPhrases(situations.find((s) => s.id === sid), detail);
    list.replaceChildren(...ph.map((p) => el('div', { class: 'phr' }, p)));
    copy.onclick = () => navigator.clipboard?.writeText(ph.join('\n')).then(() => { copy.textContent = 'Copied'; setTimeout(() => { copy.textContent = 'Copy all three'; }, 1500); });
  };
  const copy = el('button', { type: 'button', class: 'alt' }, 'Copy all three');
  input.addEventListener('input', () => { detail = input.value; draw(); });
  phrRoot.replaceChildren(el('p', {}, 'Pick what is happening. Optionally add one short detail. You get three phrases to adapt in your own words.'), el('fieldset', {}, el('legend', {}, 'Situation'), box), el('label', { for: 'detail' }, 'One detail, optional'), input, list, copy);
  draw();
}
