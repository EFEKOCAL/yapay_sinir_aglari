/*
 * info-content.js — Sağ alttaki "Bilgi & Sözlük" paneli (modül başına bilgi + sınav soruları).
 */
(function (YSALab) {
  'use strict';

  const glossary = () => (YSALab.glossary || []).slice().sort((a, b) => a[0].localeCompare(b[0], 'tr'));

  YSALab.info = {
    learn: {
      theory: [
        {
          id: 'how',
          title: 'Bu site nasıl kullanılır?',
          html: `
            <ol>
              <li><b>Sırayla git:</b> Bölümler hocanın PDF'leri, kartlar da PDF'teki sıra. Her kartta slayt numarası yazıyor. ↓ / Boşluk ile ilerle.</li>
              <li><b>Önce düşün:</b> "🤔 Önce sen düşün" kutularına kendi cevabını yaz, sonra hocanın cevabını aç. Yazdıkların bu tarayıcıda saklanır.</li>
              <li><b>Bölüm girişi:</b> Her bölüm, amacını ve öğreteceği kavramları gösteren bir sayfayla açılır. Bir kavrama tıklarsan doğrudan onun anlatıldığı karta gidersin.</li>
              <li><b>Kendini yokla:</b> Ders sonundaki çoktan seçmeli sorular otomatik puanlanır; bölüm sonunda karışık tekrar var.</li>
              <li><b>Sınav Soruları:</b> Açık uçlu sorular; önce kendin yaz, sonra anahtar noktalarla karşılaştır.</li>
              <li><b>Sıfırlamak için:</b> Başlangıç ekranının altındaki ya da Genel Bakış'taki <b>↺ İlerlemeyi sıfırla</b> düğmesi.</li>
            </ol>`
        },
        {
          id: 'glossary',
          title: 'Kavram sözlüğü',
          html: `<input class="gl-search" type="search" placeholder="Ara: Turing, zayıf YZ, Çin odası…" aria-label="Sözlükte ara">
            <dl class="gl-list">${glossary().map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl>`
        },
        {
          id: 'exam',
          title: 'Sınav stratejisi',
          html: `
            <ul>
              <li>Hoca <b>mantığı sorgulatmayı</b> seviyor: tanımı yazdıktan sonra "neden?" ve "bir örnek" ekle.</li>
              <li>"Fark nedir?" sorularında iki kavramı <b>aynı ölçütlerle</b> karşılaştır (zayıf / kuvvetli YZ: düşünür mü, öğrenir mi, bugün var mı, örnek).</li>
              <li>Düşünce deneylerini (Turing testi, Çin odası) <b>kurgu → iddia → itiraz</b> sırasıyla anlat.</li>
              <li>Kartlardaki <b>"Hocanın cevabı"</b> kutuları slayttaki tanımlardır; kendi cümlenle yazsan da anahtar kelimeleri koru.</li>
            </ul>`
        }
      ],
      exam: [],
      examEmpty: 'Açık uçlu sorular için soldaki menüden <b>Sınav Soruları</b> sayfasını aç. Orada model cevaplar, anahtar noktalar ve aralıklı tekrar var.'
    }
  };
})(window.YSALab = window.YSALab || {});
