/*
 * chapter-outlines.js — Bölümlerin giriş sayfası: amaç, hocanın PDF'indeki konu sırası ve öğrenilecek kavramlar.
 *   topics:   [başlık, [bu konuyu anlatan ders id'leri]]
 *   concepts: [kavram, ders id, arama ifadesi?] → çipe tıklayınca kavramın geçtiği ilk karta gidilir
 *             (ifade bir düzenli ifadedir; verilmezse kavramın kendisi aranır)
 * plannedChapters: henüz yazılmamış bölümler (Genel Bakış ve Nöral Bakış'ta "hazırlanıyor" olarak görünür).
 */
(function (YSALab) {
  'use strict';

  YSALab.chapterOutlines = {
    ch1: {
      slide: 'S1–69',
      aim: `<p>Bu bölüm bir <b>giriş</b> ve <b>akıl yürütme</b> bölümü. Hesap yok; amaç, dersin geri kalanında kullanacağın soruları kafanda kurmak:</p>
        <ul>
          <li><b>Zeka nedir</b> ve makinede ne anlama gelir? Öğrenme ile zeka neden ayrılamaz?</li>
          <li>Bir makinenin <b>düşündüğünü</b> nasıl anlarız? Turing "davranışına bak" der, Searle "yetmez" der. Sen kime katılıyorsun, neden?</li>
          <li>Bugünkü yapay zeka nerede başarılı, nerede zorlanıyor ve bunun <b>güvenlik ve etik</b> bedeli ne?</li>
        </ul>
        <p>Hoca tanımları soruyor ama asıl ilgilendiği <b>mantık</b>: Her kartta önce sen düşüneceksin, sonra hocanın cevabıyla karşılaştıracaksın.</p>`,
      topics: [
        ['Basit bir problem: su içmek', ['su-icmek']],
        ['Zeka nedir? Çoklu zeka, zeka ve öğrenme', ['zeka-nedir']],
        ['Yapay zeka nedir? Makine öğrenebilir mi, düşünebilir mi?', ['yapay-zeka-nedir']],
        ['Geleneksel programlama ve makine öğrenmesi', ['makine-ogrenmesi']],
        ['Akıllı sistem nedir? Ünlülerin görüşleri', ['akilli-sistem']],
        ['Zayıf ve kuvvetli yapay zeka yaklaşımları', ['zayif-kuvvetli']],
        ['Zeki davranışın ipuçları', ['zeki-davranis']],
        ['Alan Turing ve Turing testi', ['turing-kim', 'turing-testi', 'turing-gecmek', 'turing-sonuc']],
        ['Çin odası', ['cin-odasi']],
        ['ELIZA ve R.U.R.', ['eliza-rur']],
        ['Başarılar ve uygulama alanları', ['uygulamalar-1', 'uygulamalar-2']],
        ['Sophia, Watson, DELTU', ['sophia-watson-deltu']],
        ['Güvenli mi? Etik mi? Gerekli mi? Vazgeçmeli miyiz?', ['guvenli-mi', 'etik-mi', 'kaybedeceklerimiz']],
        ['Google I/O, Duplex, başarılı uygulamalar ve gelecek', ['google-duplex', 'basarili-gelecek']],
        ['YZ çalışmalarındaki sürprizler', ['surprizler']],
        ['Doğal zeka ve yapay zeka', ['dogal-yapay']],
        ['YZ dilleri ve güncel tartışmalar', ['guncel-tartismalar']],
        ['Yapay zeka ve etik, sürdürülebilirlik', ['etik']]
      ],
      concepts: [
        ['geri besleme', 'su-icmek', 'Geri besleme listede'],
        ['çoklu zeka', 'zeka-nedir', 'Çoklu zeka kuramı'],
        ['zeka (tanım)', 'zeka-nedir', 'zihinsel işlevlerine'],
        ['zeka ve öğrenme', 'zeka-nedir', 'Zeka değişebilir'],
        ['yapay zeka (tanım)', 'yapay-zeka-nedir', 'Hocanın üç tanımı'],
        ['makine öğrenmesi', 'makine-ogrenmesi', 'İki kutu \\(S8\\)'],
        ['akıllı sistem', 'akilli-sistem', 'Hocanın tanımı \\(S9\\)'],
        ['zayıf yapay zeka', 'zayif-kuvvetli', 'Zayıf yapay zeka \\(S12\\)'],
        ['kuvvetli yapay zeka', 'zayif-kuvvetli', 'Kuvvetli yapay zeka \\(S13\\)'],
        ['zeki davranış ipuçları', 'zeki-davranis', 'Hocanın listesi \\(S15\\)'],
        ['taklit oyunu', 'turing-testi', 'Üç faz \\(S17'],
        ['Turing testi ölçütü', 'turing-testi', 'Turing\'in ölçütü'],
        ['Loebner Ödülü', 'turing-gecmek', 'Loebner Ödülü \\(S21\\)'],
        ['Eugene Goostman', 'turing-gecmek', 'Dünyada bir ilk'],
        ['sorgulayıcı faktörü', 'turing-sonuc', 'Sonuç \\(S25\\)'],
        ['Çin odası', 'cin-odasi', 'Düşünce deneyi \\(S26\\)'],
        ['sentaks / semantik', 'cin-odasi', 'Searle\'ün sonucu'],
        ['ELIZA', 'eliza-rur', 'ELIZA \\(S27\\)'],
        ['robot (R.U.R.)', 'eliza-rur', 'kelimesi nereden'],
        ['akıllı şebeke', 'uygulamalar-1', 'Güç sistemleri \\(S32\\)'],
        ['ALVINN', 'guvenli-mi', 'ALVINN \\(S43\\)'],
        ['sorumluluk (suçlu kim?)', 'guvenli-mi', 'Kaza olursa'],
        ['ASR / TTS', 'google-duplex', 'Google Duplex \\(S57\\)'],
        ['Moravec paradoksu', 'surprizler', 'Moravec'],
        ['doğal vs yapay zeka', 'dogal-yapay', 'Hocanın karşılaştırması'],
        ['tekillik', 'guncel-tartismalar', 'Tekillik \\(singularity'],
        ['etik içerik / etik süreç', 'etik', 'Etik nedir'],
        ['sürdürülebilirlik', 'etik', 'enerji sürdürülebilirliği']
      ]
    }
  };

  // Sıradaki PDF'ler: içerik hazırlanınca lessons-chN.js eklenir ve buradaki kayıt kendiliğinden gizlenir
  YSALab.plannedChapters = [
    {
      id: 'ch2', num: 2, title: 'YZ, Makine Öğrenmesi ve YSA\'ya Giriş', source: '2_YSA_Giris.pptx',
      topics: ['Ajanlar ve ortamlar', 'Oyuncak problemler', 'Öğrenme türleri, kümeleme', 'Takviyeli öğrenme', 'Biyolojik sinir hücresi', 'Tarihçe: McCulloch-Pitts, Hebb', 'Rosenblatt, ADALINE, Minsky-Papert', 'YSA genel özellikleri ve dezavantajları', 'Yapay sinir hücresi ve çalışma prensibi', 'YSA\'nın yapısı', 'Kara kutu, öğrenme, bilgi ve zeka']
    },
    {
      id: 'ch3', num: 3, title: 'Tek Katmanlı Algılayıcılar', source: '3_Tek_katmanli_algilayicilar.pdf',
      topics: ['Tek katmanlı ağın yapısı, eşik değeri', 'Basit algılayıcı (perceptron)', 'Perceptron öğrenme kuralı', 'ADALINE ve hata (E = B − Ç)', 'Ağırlık güncelleme ve öğrenme katsayısı', 'MADALINE', 'Doğrusal ayrılabilirlik, perceptron limiti']
    },
    {
      id: 'ch4', num: 4, title: 'Çok Katmanlı Algılayıcılar', source: '4_cokkatmanlialgilayicilar.pdf · s.1–25',
      topics: ['ÇKA yapısı', 'YSA\'da bilgi: ağırlıklar', 'Hata fonksiyonu', 'Epoch', 'Öğrenme oranı ve momentum', 'Durdurma kriteri, örneklerin sunulması', 'MLP: katmanlar, ağırlıklar, bias', 'Aktivasyon fonksiyonları (ne zaman, neden?)', 'YSA çalışma adımları', 'YSA sınıflandırılması']
    }
  ];
})(window.YSALab = window.YSALab || {});
