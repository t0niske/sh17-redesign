/* СШ №17 — общая шапка, подвал, компоненты и поведение.
   В рабочей версии шапка и подвал станут серверными шаблонами (Razor/partial). */

/* ---------- Иконки (Lucide, stroke 1.6) ---------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  news: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/>',
  userplus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  ext: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  star: '<path d="M11.5 2.8a.6.6 0 0 1 1 0l2.7 5.5 6 .9a.6.6 0 0 1 .4 1l-4.4 4.3 1 6a.6.6 0 0 1-.8.6L12 18.3l-5.4 2.8a.6.6 0 0 1-.8-.6l1-6-4.4-4.3a.6.6 0 0 1 .3-1l6.1-.9z"/>',
  vk: '<path d="M3 7.5c.1 5.4 2.9 8.6 7.6 8.6h.3v-3.1c1.7.2 3 1.4 3.5 3.1H17c-.7-2.4-2.4-3.8-3.5-4.3 1.1-.6 2.6-2.1 3-4.3h-2.2c-.5 1.8-2 3.3-3.4 3.5V7.5H8.7v6.1C7.3 13.3 5.6 11.6 5.5 7.5Z"/>'
};
const ico = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ''}</svg>`;

/* ---------- Утилиты ---------- */
const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const MONTHS_N = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const dt = s => new Date(s + 'T12:00:00');
const fmtDate = s => { const d = dt(s); return `${d.getDate()} ${MONTHS[d.getMonth()]}`; };
const fmtDateY = s => { const d = dt(s); return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };
const resOf = m => m.us > m.them ? 'w' : m.us < m.them ? 'l' : 'd';
const RES_TXT = { w: 'Победа', d: 'Ничья', l: 'Поражение' };
const RES_S = { w: 'В', d: 'Н', l: 'П' };
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const initials = n => n.split(' ').slice(0, 2).map(w => w[0]).join('');
const plural = (n, f) => { const a = Math.abs(n) % 100, b = a % 10; return a > 10 && a < 20 ? f[2] : b > 1 && b < 5 ? f[1] : b === 1 ? f[0] : f[2]; };
const teamLabel =y => y === 'zhfk' || y === 'ЖФК' ? 'ЖФК' : `${y} г.р.`;

/* ---------- Шапка ---------- */
function renderHeader() {
  const page = document.body.dataset.page;
  const cur = p => page === p ? ' aria-current="page"' : '';
  const info = SCHOOLINFO.map(([t, s]) => `<li><a href="school.html#${s}">${t}</a></li>`).join('');
  const legal = LEGAL.slice(0, 7).map(([t, s]) => `<li><a href="school.html#${s}">${t}</a></li>`).join('');

  const html = `
  <a href="#main" class="visually-hidden">Перейти к содержанию</a>
  <div class="topbar">
    <div class="container">
      <a href="https://yandex.ru/maps/?text=${encodeURIComponent('Томск, ул. 5-й Армии, 15с1')}" target="_blank" rel="noopener">${ico('pin', 'i-16')}${SCHOOL.venue}, ул. 5-й Армии, 15</a>
      <a href="tel:${SCHOOL.phoneHref}">${ico('phone', 'i-16')}<span class="num">${SCHOOL.phone}</span></a>
      <span class="spacer"></span>
      <a href="${SCHOOL.quality}" target="_blank" rel="noopener">Оценка качества услуг</a>
      <a href="${SCHOOL.vk}" target="_blank" rel="noopener">${ico('vk', 'i-16')}ВКонтакте</a>
      <button type="button" data-a11y>${ico('eye', 'i-16')}<span>Версия для слабовидящих</span></button>
    </div>
  </div>
  <header class="header">
    <div class="container">
      <a class="brand" href="index.html" aria-label="СШ №17 — на главную">
        <img class="keep" src="${LOGO}" alt="" width="44" height="46">
        <span class="brand-text"><b>СШ №17</b><span>Футбол · Томск</span></span>
      </a>
      <nav class="nav" aria-label="Главное меню">
        <a href="teams.html"${cur('teams')}>Команды</a>
        <a href="matches.html"${cur('matches')}>Матчи</a>
        <a href="news.html"${cur('news')}>Новости</a>
        <a href="join.html"${cur('join')}>Поступающим</a>
        <a href="join.html#parents">Родителям</a>
        <div class="has-mega${page === 'school' ? ' current' : ''}">
          <button type="button" aria-expanded="false">О школе ${ico('down', 'i-16')}</button>
          <div class="mega">
            <div class="container">
              <div>
                <h4>Сведения об образовательной организации</h4>
                <ul style="columns:2;column-gap:32px;display:block">${info}</ul>
              </div>
              <div>
                <h4>Документы и программы</h4>
                <ul>${legal}<li><a href="join.html#faq">Вопрос — ответ</a></li></ul>
              </div>
              <div class="mega-card">
                <span class="kicker on-ink">С 1993 года</span>
                <b class="display h3">Муниципальная спортивная школа по футболу</b>
                <p>Бесплатное обучение по программам спортивной подготовки для детей Томска</p>
                <a class="link-arrow" href="school.html">Основные сведения ${ico('arrow', 'i-16')}</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="header-actions">
        <button class="icon-btn" type="button" data-search aria-label="Поиск по сайту">${ico('search', 'i-20')}</button>
        <a class="btn btn-primary btn-sm" href="join.html#apply">Записаться</a>
        <button class="icon-btn burger" type="button" data-drawer aria-label="Меню">${ico('menu', 'i-24')}</button>
      </div>
    </div>
  </header>

  <div class="search-panel" role="dialog" aria-label="Поиск">
    <div class="search-box">
      <form role="search" onsubmit="event.preventDefault()">
        ${ico('search', 'i-20')}
        <input type="search" placeholder="Команда, игрок, новость" aria-label="Поиск по сайту">
        <button class="icon-btn" type="button" data-search-close aria-label="Закрыть">${ico('x', 'i-20')}</button>
      </form>
      <div class="search-hints">
        <a class="chip" href="join.html">Как поступить</a>
        <a class="chip" href="team.html">Команда 2013</a>
        <a class="chip" href="matches.html">Результаты</a>
        <a class="chip" href="school.html">Сведения об организации</a>
        <a class="chip" href="join.html#groups">Расписание групп</a>
      </div>
    </div>
  </div>

  <div class="drawer" aria-hidden="true">
    <div class="drawer-head">
      <a class="brand" href="index.html"><img class="keep" src="${LOGO}" alt="" width="38" height="40"><span class="brand-text"><b>СШ №17</b><span>Футбол · Томск</span></span></a>
      <button class="icon-btn" type="button" data-drawer-close aria-label="Закрыть меню">${ico('x', 'i-24')}</button>
    </div>
    <nav aria-label="Мобильное меню">
      <a href="teams.html">Команды ${ico('right')}</a>
      <a href="matches.html">Матчи ${ico('right')}</a>
      <a href="news.html">Новости ${ico('right')}</a>
      <a href="join.html">Поступающим ${ico('right')}</a>
      <a href="join.html#parents">Родителям ${ico('right')}</a>
      <details><summary>Сведения об организации ${ico('down')}</summary><ul>${info}</ul></details>
      <details><summary>Документы ${ico('down')}</summary><ul>${legal}</ul></details>
    </nav>
    <div class="drawer-foot">
      <a class="btn btn-primary" href="join.html#apply">Записаться на просмотр</a>
      <a class="btn btn-line" href="tel:${SCHOOL.phoneHref}">${ico('phone', 'i-16')} ${SCHOOL.phone}</a>
      <button class="btn btn-line" type="button" data-a11y>${ico('eye', 'i-16')} Версия для слабовидящих</button>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', html);

  const tab = (href, icon, label, p, cls = '') =>
    `<a href="${href}" class="${cls}"${page === p ? ' aria-current="page"' : ''}>${cls ? `<span class="dot">${ico(icon)}</span>` : ico(icon, 'i-20')}${label}</a>`;
  document.body.insertAdjacentHTML('beforeend', `
  <nav class="tabbar" aria-label="Быстрая навигация"><div class="wrap">
    ${tab('index.html', 'home', 'Главная', 'home')}
    ${tab('teams.html', 'users', 'Команды', 'teams')}
    ${tab('matches.html', 'calendar', 'Матчи', 'matches')}
    ${tab('news.html', 'news', 'Новости', 'news')}
    ${tab('join.html#apply', 'userplus', 'Записаться', 'join', 'cta')}
  </div></nav>`);
}

/* ---------- Подвал ---------- */
function renderFooter() {
  const info = SCHOOLINFO.slice(0, 7).map(([t, s]) => `<li><a href="school.html#${s}">${t}</a></li>`).join('');
  const legal = LEGAL.map(([t, s]) => `<li><a href="school.html#${s}">${t}</a></li>`).join('');
  document.body.insertAdjacentHTML('beforeend', `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="about">
          <a class="brand" href="index.html"><img class="keep" src="${LOGO}" alt="" width="44" height="46"><span class="brand-text"><b>СШ №17</b><span>Футбол · Томск</span></span></a>
          <p>${SCHOOL.full}. Готовим футболистов с ${SCHOOL.founded} года.</p>
          <ul>
            <li><a href="tel:${SCHOOL.phoneHref}" class="num">${SCHOOL.phone}</a></li>
            <li><a href="mailto:${SCHOOL.email}">${SCHOOL.email}</a></li>
            <li>${SCHOOL.address}</li>
            <li>${SCHOOL.hours}</li>
          </ul>
          <div class="socials"><a href="${SCHOOL.vk}" target="_blank" rel="noopener">${ico('vk')} ВКонтакте</a></div>
        </div>
        <div>
          <h4>Футбол</h4>
          <ul>
            <li><a href="teams.html">Команды</a></li>
            <li><a href="matches.html">Матчи и результаты</a></li>
            <li><a href="matches.html#tournaments">Соревнования</a></li>
            <li><a href="matches.html?team=2011">ЮФЛ Сибирь</a></li>
            <li><a href="team.html">Игроки</a></li>
            <li><a href="news.html">Новости</a></li>
          </ul>
        </div>
        <div>
          <h4>Сведения об организации</h4>
          <ul>${info}<li><a href="school.html">Все разделы</a></li></ul>
        </div>
        <div>
          <h4>Документы</h4>
          <ul>${legal}</ul>
        </div>
      </div>
      <div class="gos">
        <p><b>Госуслуги. Решаем вместе</b><br>Есть предложения или не устраивает качество услуг — сообщите об этом на портале</p>
        <a class="btn btn-line-ink btn-sm" href="https://www.gosuslugi.ru/600365/1" target="_blank" rel="noopener">Написать ${ico('ext', 'i-16')}</a>
      </div>
      <div class="footer-bottom">
        <span>© ${SCHOOL.founded}–2026 МАУ ДО СШ №17</span>
        <nav>
          <a href="school.html#privacy-policy">Политика обработки персональных данных</a>
          <a href="${SCHOOL.quality}" target="_blank" rel="noopener">Оценка качества услуг</a>
          <button type="button" data-a11y style="color:inherit">Версия для слабовидящих</button>
        </nav>
      </div>
    </div>
  </footer>
  <div class="cookie" role="dialog" aria-label="Использование cookie">
    <p>Мы используем cookie и Яндекс Метрику, чтобы понимать, как пользуются сайтом. Подробнее — в <a href="school.html#privacy-policy">политике обработки персональных данных</a></p>
    <div class="row"><button class="btn btn-light btn-sm" data-cookie="yes">Согласен</button><button class="btn btn-line-ink btn-sm" data-cookie="no">Только необходимые</button></div>
  </div>`);
}

/* ---------- Поведение шапки ---------- */
function initChrome() {
  const mega = $('.has-mega');
  if (mega) {
    const btn = mega.querySelector('button');
    let t;
    const open = v => { mega.classList.toggle('open', v); btn.setAttribute('aria-expanded', v); };
    btn.addEventListener('click', () => open(!mega.classList.contains('open')));
    mega.addEventListener('mouseenter', () => { clearTimeout(t); open(true); });
    mega.addEventListener('mouseleave', () => { t = setTimeout(() => open(false), 160); });
    document.addEventListener('keydown', e => e.key === 'Escape' && open(false));
  }
  const sp = $('.search-panel');
  $$('[data-search]').forEach(b => b.addEventListener('click', () => { sp.classList.add('open'); sp.querySelector('input').focus(); }));
  $('[data-search-close]').addEventListener('click', () => sp.classList.remove('open'));
  sp.addEventListener('click', e => e.target === sp && sp.classList.remove('open'));
  document.addEventListener('keydown', e => e.key === 'Escape' && sp.classList.remove('open'));

  const dr = $('.drawer');
  $('[data-drawer]').addEventListener('click', () => { dr.classList.add('open'); dr.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; });
  $('[data-drawer-close]').addEventListener('click', () => { dr.classList.remove('open'); dr.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; });

  // Версия для слабовидящих
  const setA11y = v => { document.documentElement.classList.toggle('a11y', v); localStorage.setItem('a11y', v ? '1' : ''); };
  if (localStorage.getItem('a11y')) setA11y(true);
  $$('[data-a11y]').forEach(b => b.addEventListener('click', () => setA11y(!document.documentElement.classList.contains('a11y'))));

  // Cookie
  const ck = $('.cookie');
  if (!localStorage.getItem('cookie')) setTimeout(() => ck.classList.add('show'), 900);
  else ck.remove();
  $$('[data-cookie]').forEach(b => b.addEventListener('click', () => { localStorage.setItem('cookie', b.dataset.cookie); ck.classList.remove('show'); setTimeout(() => ck.remove(), 400); }));

  // Появление блоков
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  // Формы-заглушки
  $$('form[data-demo]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const ok = f.querySelector('.form-ok'); if (ok) ok.classList.add('show');
    f.querySelectorAll('input:not([type=checkbox]), textarea').forEach(i => i.value = '');
  }));
}

/* ---------- Компоненты ---------- */
const crest = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" width="52" height="52">`;

function matchCard(m) {
  const r = resOf(m);
  const us = `<div class="club">${crest(LOGO, 'СШ №17')}<span>СШ №17</span><small>${m.team} г.р.</small></div>`;
  const them = `<div class="club">${crest(m.logo, m.opp)}<span>${m.opp}</span><small>${m.oppCity}</small></div>`;
  const [a, b] = m.home ? [m.us, m.them] : [m.them, m.us];
  return `<a class="mcard" href="matches.html#m${m.id}">
    <div class="mcard-top"><div><b>${m.comp}</b>${fmtDate(m.date)} · ${m.city}</div></div>
    <div class="mcard-body">${m.home ? us : them}<div class="score"><span>${a}</span><i>:</i><span>${b}</span></div>${m.home ? them : us}</div>
    <div class="mcard-foot"><span class="res ${r}">${RES_TXT[r]}</span><span>${m.scorers ? m.scorers.join(', ') : 'Протокол матча'}</span></div>
  </a>`;
}

function matchRow(m) {
  const r = resOf(m);
  const us = `<span class="t">СШ №17 <img src="${LOGO}" alt=""></span>`;
  const usL = `<span class="t"><img src="${LOGO}" alt=""> СШ №17</span>`;
  const them = `<span class="t">${m.opp} <img src="${m.logo}" alt="" loading="lazy"></span>`;
  const themL = `<span class="t"><img src="${m.logo}" alt="" loading="lazy"> ${m.opp}</span>`;
  const [a, b] = m.home ? [m.us, m.them] : [m.them, m.us];
  const d = dt(m.date);
  return `<div class="mrow" id="m${m.id}">
    <div class="d"><b>${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}</b>${WD[d.getDay()]}, ${m.city}</div>
    <div class="c">${m.comp}</div>
    <div class="vs">${m.home ? us : them}<span class="sc">${a} : ${b}</span>${m.home ? themL : usL}</div>
    <div class="yr">${m.team}</div>
    <div class="r"><span class="res-pill ${r}">${RES_TXT[r]}</span></div>
  </div>`;
}

function newsImg(n) {
  return `<span class="crop"><img src="${n.img}" alt="" loading="lazy"></span>`;
}
function newsCard(n) {
  return `<a class="ncard" href="article.html?id=${n.id}">
    <div class="ph">${newsImg(n)}</div>
    <div class="meta"><b>${n.tag}</b><span>${fmtDate(n.date)}</span></div>
    <h3>${n.title}</h3>
    <p>${n.lead}</p>
  </a>`;
}

function teamCard(t) {
  const stage = STAGES[t.stage];
  const yr = t.girls ? 'ЖФК' : t.year;
  const sub = t.girls ? 'Женская команда' : 'год рождения';
  return `<a class="tcard${t.photo ? '' : ' nophoto'}" href="team.html?id=${t.id}" data-year="${t.year}" data-stage="${t.stage}">
    ${t.photo ? `<img class="bg" src="${t.photo}" alt="Команда ${yr}" loading="lazy">` : `<img class="ghost keep" src="${LOGO}" alt="">`}
    <div class="yr">${yr}<small>${sub}</small></div>
    <div class="info"><small>Тренер-преподаватель</small><span>${t.coach}</span>${t.league ? `<span class="league">${t.league}</span>` : `<span class="league">${stage.name}</span>`}</div>
  </a>`;
}

function formStrip(list) {
  return `<span class="form" aria-label="Форма">${list.map(m => { const r = resOf(m); return `<i class="${r}" title="${m.opp} ${m.us}:${m.them}">${RES_S[r]}</i>`; }).join('')}</span>`;
}

/* Горизонтальная лента с кнопками */
function initRail(root) {
  const rail = $('.rail', root);
  $$('[data-rail]', root).forEach(b => b.addEventListener('click', () => {
    rail.scrollBy({ left: (b.dataset.rail === 'next' ? 1 : -1) * rail.clientWidth * .8, behavior: 'smooth' });
  }));
}

/* Чипы-фильтры: onChange(value) */
function initChips(root, onChange) {
  $$('.chip', root).forEach(c => c.addEventListener('click', () => {
    $$('.chip', root).forEach(x => x.setAttribute('aria-pressed', x === c));
    onChange(c.dataset.v);
  }));
}

/* Табы */
function initTabs(root) {
  const tabs = $$('[role="tab"]', root);
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => { x.setAttribute('aria-selected', x === t); $('#' + x.getAttribute('aria-controls')).hidden = x !== t; });
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initChrome();
  if (window.page) window.page();
  $$('[data-ico]').forEach(e => { e.innerHTML = ico(e.dataset.ico); });
  $$('.link-arrow').forEach(a => { if (!a.querySelector('svg')) a.insertAdjacentHTML('beforeend', ico('arrow', 'i-16')); });
  // повторно для блоков, отрисованных страницей
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal:not(.in)').forEach(el => io.observe(el));
});
