/*
 * diagrams-ai.js — Bölüm 1 (Yapay Zeka) için etkileşimli şekiller.
 *   sorter  → "hangisi?" sınıflandırma alıştırması: her öğe için kutu seçilir, gerekçe açılır
 *   tabs / stepper → diagrams.js motoru
 *   eliza   → kalıp eşleyen mini ELIZA: Çin odası fikrini elle tutulur yapar
 */
(function (YSALab) {
  'use strict';

  const { register, h } = YSALab.diagrams;
  const { b, ar, row, col } = h;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ------------------------------------------------------------ sınıflandırma alıştırması */

  // def: { bins: [etiket...], items: [{ t, bin (index), why }], hint }
  function sorter(id, def) {
    register(id, {
      kind: 'custom',
      render: () => `<figure class="dg dg-k-custom dg-sort" data-dg="${id}">
        <div class="sort-list">${def.items.map((it, i) => `<div class="sort-row" data-i="${i}">
          <span class="sort-t">${it.t}</span>
          <span class="sort-btns">${def.bins.map((bn, j) => `<button type="button" class="sort-b" data-j="${j}">${bn}</button>`).join('')}</span>
          <small class="sort-why" hidden></small>
        </div>`).join('')}</div>
        <div class="sort-foot"><span class="sort-score">0 / ${def.items.length}</span><button type="button" class="btn btn-sm btn-ghost" data-act="sort-reset">↺ Baştan</button></div>
        <figcaption class="dg-caption">${def.hint}</figcaption>
      </figure>`,
      init(el) {
        const score = () => {
          const done = el.querySelectorAll('.sort-row.ok, .sort-row.ko').length;
          const ok = el.querySelectorAll('.sort-row.ok').length;
          el.querySelector('.sort-score').textContent = done ? `${ok} doğru / ${done} cevaplandı · toplam ${def.items.length}` : `0 / ${def.items.length}`;
        };
        el.addEventListener('click', (e) => {
          const btn = e.target.closest('.sort-b');
          if (btn) {
            const r = btn.closest('.sort-row');
            if (r.classList.contains('ok') || r.classList.contains('ko')) return;
            const it = def.items[Number(r.dataset.i)];
            const ok = Number(btn.dataset.j) === it.bin;
            r.classList.add(ok ? 'ok' : 'ko');
            btn.classList.add('picked');
            r.querySelectorAll('.sort-b')[it.bin].classList.add('right');
            const why = r.querySelector('.sort-why');
            why.innerHTML = `${ok ? '✓' : '✗ Doğrusu: <b>' + def.bins[it.bin] + '</b>.'} ${it.why}`;
            why.hidden = false;
            score();
            return;
          }
          if (e.target.closest('[data-act="sort-reset"]')) {
            el.querySelectorAll('.sort-row').forEach((r) => {
              r.classList.remove('ok', 'ko');
              r.querySelectorAll('.sort-b').forEach((x) => x.classList.remove('picked', 'right'));
              r.querySelector('.sort-why').hidden = true;
            });
            score();
          }
        });
      }
    });
  }

  /* ------------------------------------------------------------ S8: geleneksel programlama vs makine öğrenmesi */

  const flow = (ins, out, note) => `<div class="ml-flow">
      ${col(...ins.map(([k, t, s, c]) => b(k, t, s, c)))}
      ${ar()}
      ${b('cpu', 'Bilgisayar', 'Computer', 'ml-cpu')}
      ${ar()}
      ${b(out[0], out[1], out[2], out[3])}
    </div>${note ? `<p class="ml-note">${note}</p>` : ''}`;

  register('dg-trad-ml', {
    kind: 'tabs',
    panes: [
      {
        label: 'Geleneksel programlama',
        html: flow([['d', 'Veri', 'Data'], ['p', 'Program', 'kuralları insan yazar', 'ml-hot']], ['o', 'Çıktı', 'Output'],
          'Örnek: "Konu satırında <i>BEDAVA</i> geçen e-posta spamdir" kuralını <b>sen</b> yazarsın. Bilgisayar sadece uygular.'),
        text: 'Kuralları (programı) insan yazar; bilgisayar veriye uygulayıp çıktıyı üretir.'
      },
      {
        label: 'Makine öğrenmesi',
        html: flow([['d', 'Veri', 'Data'], ['o', 'Çıktı', 'beklenen cevaplar (etiketler)']], ['p', 'Program', 'kuralları bilgisayar bulur', 'ml-hot'],
          'Örnek: Binlerce e-posta ve her birinin "spam / değil" etiketi verilir; <b>bilgisayar</b> spamı ayıran kuralı kendisi çıkarır.'),
        text: 'Veriyi ve doğru cevapları veririz; bilgisayar aradaki ilişkiyi, yani programı, kendisi öğrenir.'
      }
    ]
  });

  /* ------------------------------------------------------------ S17–19: Turing testinin üç fazı */

  register('dg-turing-faz', {
    kind: 'stepper',
    html: `<div class="tt-rooms">
        ${b('A', 'Oda 1', '<span data-v="a">?</span>', 'tt-room')}
        ${b('B', 'Oda 2', '<span data-v="b">?</span>', 'tt-room')}
      </div>
      <div class="tt-wire">${ar('up')}<span>yalnızca ekran + klavye (yazılı konuşma)</span>${ar('up')}</div>
      <div class="tt-judge">${b('C', 'Oda 3 · Hakem', '<span data-v="c">?</span>', 'tt-room tt-j')}</div>`,
    intro: 'Turing testi tek seferde ortaya çıkmadı: üç fazda değişti. <b>İleri</b> ile fazları sırayla gör. Her fazda kendine sor: <i>hakemin işi ne, kim onu yanıltmaya çalışıyor?</i>',
    initSet: { a: '?', b: '?', c: '?' },
    steps: [
      { on: ['A', 'B', 'C'], set: { a: 'Erkek · doğruyu söyler', b: 'Kadın · hakemi kandırır', c: 'Hangisi erkek?' }, text: '<b>1. faz, Taklit Oyunu (S17):</b> Üç oda yalnızca ekran ve klavyeyle bağlı. Hakem hangisinin erkek olduğunu bulmaya çalışır. Erkek fiziksel ipucu veremeden kendini kanıtlamaya çalışır; kadın ise hakemi kandırmaya çalışır.' },
      { on: ['B'], set: { a: 'İnsan (cinsiyet önemsiz)', b: 'MAKİNE', c: 'Hangisi makine?' }, text: '<b>2. faz (S18):</b> Erkek ile kadının yerine bir <b>insan</b> ve bir <b>makine</b> konur. Hakem hangisinin makine olduğunu bulmaya çalışır.' },
      { on: ['C'], text: '<b>Ölçüt (S18):</b> Hakemin isabeti %50\'den azsa, yani makineyi insandan ayırt edemiyorsa (yazı-tura atmaktan iyi değilse), makine insanın kabul edilebilir bir simülasyonudur; Turing\'e göre <b>zekidir</b>.' },
      { on: ['A', 'C'], hide: ['B'], set: { a: 'İnsan mı, bilgisayar mı?', c: 'Bu tek katılımcı ne?' }, text: '<b>3. faz (S19):</b> Test tek katılımcıya indirgenir. Hakem iki kişi arasından seçim yapmaz; karşısındakinin bilgisayar mı insan mı olduğunu anlamaya çalışır. Bugün "Turing testi" denince çoğunlukla bu kastedilir.' }
    ]
  });

  /* ------------------------------------------------------------ S26: Çin odası */

  register('dg-cin-odasi', {
    kind: 'stepper',
    html: `${row(b('out', 'Dışarıdaki Çinliler', 'Çince soru yazar'), ar(), b('room', 'Kilitli oda', 'içeride sen varsın (Çince bilmiyorsun)', 'co-room'), ar(), b('book', 'Kural kitabı', 'simge → simge eşlemesi'))}
      <div class="co-bottom">${b('ans', 'Yanıt kağıdı', '<span data-v="ans">…</span>')}${ar()}${b('judge', 'Dışarıdakilerin yargısı', '<span data-v="judge">…</span>')}</div>`,
    intro: 'Searle\'ün düşünce deneyi. Adımları izle ve her adımda kendine sor: <b>Odadaki kişi bu adımda bir şey "anladı" mı?</b>',
    initSet: { ans: '…', judge: '…' },
    steps: [
      { on: ['out'], text: 'Dışarıdan Çince yazılmış bir soru kağıdı içeri gelir. Senin için bunlar yalnızca <b>şekiller</b>.' },
      { on: ['room', 'book'], text: 'Kural kitabını açarsın: "Bu şekil dizisi gelirse şu şekil dizisini ver." Kurallar tamamen <b>biçimsel</b> (söz dizimi, sentaks); hiçbir şeyin anlamını söylemez.' },
      { on: ['ans'], set: { ans: '你好，我很好' }, text: 'Kurala uyan yanıt kağıdını seçip dışarı verirsin. Anlamını hâlâ bilmiyorsun.' },
      { on: ['judge'], set: { judge: '"İçerideki Çince biliyor!"' }, text: 'Dışarıdakiler yanıtlar kusursuz olduğu için senin Çince bildiğini düşünür. Dışarıdan bakınca davranış "anlayan" birininkiyle aynı.' },
      { on: ['room', 'book'], text: '<b>Searle\'ün iddiası:</b> Bilgisayar da tam olarak budur: simgeleri kurala göre işleyen biçimsel bir program. Ama bir dili anlamak simgeleri bilmek değil, <b>akıl durumlarına (anlama, niyet)</b> sahip olmaktır. Doğru cevap vermek, anlamak demek değildir. Bu, Turing testine ve kuvvetli YZ\'ye yöneltilen bir itirazdır.' }
    ]
  });

  /* ------------------------------------------------------------ S27: mini ELIZA */

  const RULES = [
    { rx: /baş(ım)? ağrı/, say: () => 'Neden başının ağrıdığını söylüyorsun?', name: '"baş ağrı" kalıbı → cümleyi soruya çevir' },
    { rx: /(annem|babam|abim|ablam|kardeşim).*(kız|bağır)/, say: () => 'Sizin ailede daha kimler sana kızgındır?', name: '"aile üyesi + kızmak" kalıbı → aileye genelle' },
    { rx: /(annem|babam|abim|ablam|kardeşim|ailem)/, say: (m) => `Bana ${m[1] === 'ailem' ? 'ailenden' : m[1].replace(/m$/, 'n')} biraz daha bahset.`, name: '"aile" anahtar kelimesi → konuyu aileye çek' },
    { rx: /(üzgün|mutsuz|kötü|yorgun|sıkıl)/, say: (m) => `Kendini ${m[1]} hissetmene ne sebep oluyor?`, name: '"duygu" kelimesi → kelimeyi aynen geri sor' },
    { rx: /(mutlu|iyi|harika|güzel)/, say: () => 'Seni bu kadar iyi hissettiren ne oldu?', name: '"olumlu duygu" kelimesi → sebebini sor' },
    { rx: /(sınav|vize|ders|hoca)/, say: (m) => `${m[1][0].toLocaleUpperCase('tr') + m[1].slice(1)} seni neden bu kadar düşündürüyor?`, name: '"okul" anahtar kelimesi → kelimeyi geri yansıt' },
    { rx: /(bilgisayar|makine|robot|yapay zeka)/, say: () => 'Makineler seni endişelendiriyor mu?', name: '"makine" anahtar kelimesi → hazır cümle' },
    { rx: /^(hayır|yok|asla)/, say: () => 'Neden bu kadar olumsuz konuşuyorsun?', name: '"hayır" ile başlıyor → hazır cümle' },
    { rx: /^(evet|tabii)/, say: () => 'Emin görünüyorsun. Biraz daha anlatır mısın?', name: '"evet" ile başlıyor → hazır cümle' },
    { rx: /\?$/, say: () => 'Bu soruyu neden soruyorsun?', name: 'soru işaretiyle bitiyor → soruyu geri çevir' }
  ];
  const FALLBACK = ['Devam et lütfen.', 'Bunu biraz açar mısın?', 'Bu sana ne hissettiriyor?', 'Anlıyorum. Sonra ne oldu?'];

  register('dg-eliza', {
    kind: 'custom',
    render: () => `<figure class="dg dg-k-custom dg-eliza" data-dg="dg-eliza">
      <div class="el-log" aria-live="polite"><div class="el-msg el-bot">Merhaba, ben ELIZA. Seni ne düşündürüyor?</div></div>
      <form class="el-form"><input class="el-in" type="text" maxlength="120" placeholder="Örn: babam bana kızmış" aria-label="ELIZA'ya yaz" autocomplete="off"><button class="btn btn-primary btn-sm" type="submit">Gönder</button></form>
      <label class="el-peek"><input type="checkbox"> Perdenin arkasını göster (hangi kural çalıştı?)</label>
      <figcaption class="dg-caption">1966'daki ELIZA'nın mantığıyla çalışan küçük bir taklit: anlam yok, yalnızca <b>kalıp eşleme</b> var. Önce birkaç cümle yaz, sonra "perdenin arkasını" aç.</figcaption>
    </figure>`,
    init(el) {
      const log = el.querySelector('.el-log');
      const peek = el.querySelector('.el-peek input');
      let n = 0;
      const add = (cls, html) => {
        log.insertAdjacentHTML('beforeend', `<div class="el-msg ${cls}">${html}</div>`);
        log.scrollTop = log.scrollHeight;
      };
      peek.addEventListener('change', () => el.classList.toggle('peek', peek.checked));
      el.querySelector('.el-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const inp = el.querySelector('.el-in');
        const text = inp.value.trim();
        if (!text) return;
        inp.value = '';
        add('el-you', esc(text));
        const low = text.toLocaleLowerCase('tr');
        const r = RULES.find((x) => x.rx.test(low));
        const reply = r ? r.say(low.match(r.rx)) : FALLBACK[n++ % FALLBACK.length];
        add('el-bot', `${esc(reply)}<small class="el-rule">${r ? 'kural: ' + r.name : 'hiçbir kalıp tutmadı → sıradaki hazır cümle'}</small>`);
      });
    }
  });

  /* ------------------------------------------------------------ alıştırmalar */

  sorter('sort-zayif-kuvvetli', {
    bins: ['Zayıf YZ', 'Kuvvetli YZ'],
    hint: 'Her örnek için yaklaşımı seç. Ölçüt: Sistem gerçekten <b>düşünüp</b> kendi çıkarımını mı yapıyor, yoksa önceden kurgulanmış davranışları mı sergiliyor?',
    items: [
      { t: 'iPhone\'daki Siri bir soruya cevap veriyor', bin: 0, why: 'Slayt 14: Siri, Cortana, Google Now "güçlü değil, zayıf yapay zeka". Belirli görevler için kurgulanmış.' },
      { t: 'Satranç programı dünya şampiyonunu yeniyor', bin: 0, why: 'Tek bir işte insandan iyi, ama düşündüğü ya da bilinçli olduğu söylenemez (S67–68: kaba işlem gücü + veritabanı).' },
      { t: 'Kimsenin göstermediği yeni çıkarımlar yapıp bilgi tabanına ekleyen ve dünyayı kendiliğinden öğrenen bir makine', bin: 1, why: 'Bu, S13\'teki kuvvetli YZ tanımının neredeyse aynısı. Bugün böyle bir sistem yok.' },
      { t: 'Asansör kontrol sistemi kat çağrılarını sıraya koyuyor', bin: 0, why: 'Olası durumlar önceden belirlenmiş; hangi durumda ne yapacağı kurgulanmış (S12).' },
      { t: 'Kendi düşünme yapısını geliştiren elektromekanik bir sistem', bin: 1, why: 'S13: "kendi düşünme yapısını geliştireceği" varsayımı kuvvetli YZ\'nin özüdür.' },
      { t: 'Go oynamakta insanları yenen AlphaGo', bin: 0, why: 'S67: AlphaGo yalnızca Go\'da insandan becerikli; bilinçli olmadığı için genel anlamda insandan zeki sayılmaz.' }
    ]
  });

  sorter('sort-kolay-zor', {
    bins: ['İnsana zor · makineye kolay', 'İnsana kolay · makineye zor'],
    hint: 'Tahmin et, sonra gerekçeyi oku. Bu ayrımı belirleyen şey ne olabilir? (Kural yazılabilir mi, yoksa milyonlarca yıllık evrimle kazanılmış bir beceri mi?)',
    items: [
      { t: 'Satranç oynamak', bin: 0, why: 'Kuralları kesin, durumları hesaplanabilir; makine olası hamleleri hızla tarar (S60).' },
      { t: 'Bir yüzü tanımak', bin: 1, why: 'Bebekler bile yapar, ama "bir yüzü tanıma kuralı" yazmak çok zor (S61).' },
      { t: 'Havayollarında uçuş saatlerini planlamak', bin: 0, why: 'Çok değişkenli ama kurallı bir optimizasyon: makinenin güçlü olduğu iş (S60).' },
      { t: 'Yürümek', bin: 1, why: 'Motor aktiviteler insana zahmetsiz gelir; robotlar için hâlâ zordur (S61).' },
      { t: 'Teorem ispatlamak', bin: 0, why: 'Biçimsel kurallarla adım adım ilerlenir (S60).' },
      { t: 'Konuşulan dili anlamak', bin: 1, why: 'Anlam, bağlam, çok anlamlılık: dil anlama makineler için zordur (S61).' },
      { t: 'İnternette kredi kartı yolsuzluğunu fark etmek', bin: 0, why: 'Milyonlarca işlemdeki örüntüyü insan göremez, makine görür (S60).' },
      { t: 'Beste yapmak / resim çizmek', bin: 1, why: 'Yaratıcılık: slayta göre makineler için zor (S61).' }
    ]
  });

  sorter('sort-gorev', {
    bins: ['Sınıflandırma (hangi sınıf?)', 'Kümeleme (benzerleri grupla)'],
    hint: 'Hoca S47–54\'te hep aynı soruyu soruyor: <b>"Görev ne?"</b> Önceden bilinen etiketler mi var (sınıflandırma), yoksa veriyi benzerliğe göre mi gruplayacağız (kümeleme)? <small>(Bu iki terim 2. PDF\'te ayrıntılı geliyor; burada sadece ısınma.)</small>',
    items: [
      { t: 'Amazon\'da kitapları konu, yazar ve birlikte satılma durumuna göre gruplamak (S47)', bin: 1, why: 'Slayt açıkça "kümelemek" diyor: gruplar önceden etiketli değil, benzerlikten çıkıyor.' },
      { t: '100 kişinin gen dizilimine bakıp yeni birinin hasta olup olmadığını söylemek (S51)', bin: 0, why: 'Elimizde "hasta / sağlam" etiketli örnekler var; yeni örneğin sınıfını tahmin ediyoruz.' },
      { t: 'Lösemi türünün ALL mi AML mi olduğuna karar vermek (S51)', bin: 0, why: 'İki bilinen sınıf (ALL / AML) arasında karar.' },
      { t: 'Bir parmak izinin kime ait olduğunu bulmak (S54)', bin: 0, why: 'Kayıtlı kişiler bilinen sınıflardır; izi bunlardan birine atıyoruz.' },
      { t: 'Röntgende lezyon var / yok demek (S53)', bin: 0, why: 'İki sınıflı karar: lezyon var mı, yok mu.' }
    ]
  });
})(window.YSALab = window.YSALab || {});
