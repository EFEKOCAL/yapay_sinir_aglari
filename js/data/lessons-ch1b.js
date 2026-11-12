/*
 * lessons-ch1b.js — Bölüm 1'in devamı (1_AI.pptx, slayt 29–69): uygulamalar, güvenlik ve etik soruları,
 * sürprizler, doğal / yapay zeka, güncel tartışmalar. Dersler lessons-ch1.js'deki bölüme eklenir.
 */
(function (YSALab) {
  'use strict';

  const P = (html) => ({ t: 'p', html });
  const H = (text) => ({ t: 'h', text });
  const L = (items, ordered) => ({ t: 'list', items, ordered });
  const N = (kind, html) => ({ t: 'note', kind, html });
  const DEF = (term, en, html) => ({ t: 'def', term, en, html });
  const IMG = (src, cap, slide, small) => ({ t: 'img', src: [].concat(src).map((s) => `assets/ch1/${s}`), cap, slide, small });
  const LINK = (kind, title, about, url, slide) => ({ t: 'link', kind, title, about, url, slide });
  const THINK = (id, q, a, hint) => ({ t: 'think', id, q, a, hint });
  const DG = (id) => ({ t: 'dg', id });
  const TABLE = (head, rows) => ({ t: 'table', head, rows });
  const CMP = (...cols) => ({ t: 'compare', cols: cols.map(([title, items]) => ({ title, items })) });
  const MC = (q, options, answer, a) => ({ type: 'mc', q, options, answer, a });

  const ch = YSALab.lessons.chapters.find((c) => c.id === 'ch1');

  ch.lessons.push(
    /* ============================================================ S29–32 */
    {
      id: 'uygulamalar-1',
      title: 'Başarılar ve uygulamalar: kontrol, sensörler, güç',
      en: 'Achievements and Applications I',
      src: 'S29–32',
      minutes: 7,
      blocks: [
        THINK('gunluk-yz',
          'Bugün farkında olmadan kullandığın <b>üç yapay zeka uygulaması</b> say.',
          `<p>Arama motoru, telefonun klavyesindeki kelime önerisi, navigasyonun trafik tahmini, fotoğraflardaki yüz gruplama, çamaşır makinesinin "akıllı" programı… Hocanın listesi de çoğunlukla bu tür <b>görünmez</b> uygulamalardan oluşuyor: yapay zeka çoğu zaman bir robot değil, bir cihazın içindeki karar mekanizması.</p>`),
        H('Yapay zekanın başarıları (S29)'),
        L([
          'Arama motorları', 'Yazı işleme sistemleri', 'Veri madenciliği',
          'Araç-gereçler (bulaşık ve çamaşır makineleri, buzdolapları, kameralar…)',
          'Arabalar (yakıt enjeksiyonu, navigasyon sistemleri)',
          'Doğal dil sistemleri (bilgi sistemleri, çeviri destek sistemleri)',
          'Kontrol sistemleri (asansörler, metrolar)'
        ]),
        H('Kontrol uygulamaları (S30)'),
        L([
          'Ağır endüstri (Matsushita, Siemens, Stora-Enso)',
          'Ev aletleri (Canon, Sony, Goldstar, Siemens)',
          'Otomobiller (Nissan, Mitsubishi, Daimler-Chrysler, BMW, Volkswagen)',
          'Uzay araçları (NASA)'
        ]),
        LINK('site', 'Mitsubishi Motors teknoloji sayfası', 'Hocanın verdiği bağlantı: otomobillerdeki akıllı kontrol sistemlerine örnek olarak Mitsubishi\'nin araç teknolojileri. Eski bir adres, artık açılmayabilir.', 'http://web1.mitsubishi-motors.co.jp/inter/technology/technology.html', 'S30'),
        H('Akıllı sensörler (S31)'),
        IMG('s31-sensor.jpeg', 'Akıllı sensör uygulamaları.', 'S31', true),
        L([
          'Uçak motorları için güvenilirliği yüksek motor kontrolü', 'Barkod kontrolü', 'Kağıt kalite tahmini', 'pH kontrolü',
          'Petrol damıtım kontrolü ve optimizasyonu', 'Medikal sensörler', 'Parmak iziyle tuş kilidi'
        ]),
        H('Güç sistemleri (S32)'),
        IMG('s32-guc.png', 'Güç sistemlerinde akıllı uygulamalar.', 'S32', true),
        L([
          'Ekonomik yük dağılımı, optimizasyon ve kayıp azaltılması', 'Arıza tespiti ve önceden haber verme', 'Yük-frekans kontrolü',
          'Güvenlik ve iyileştirme', '<b>Yük tahmini</b>', 'Reaktif güç ve gerilim kontrolü', 'Güç sistemlerinin işletilmesi ve planlanması',
          'Yük akış analizi, güç sistem analizi', 'Elektrik makinelerinin kontrol ve analizi', 'Harmonik kaynağını izleme', 'Güç sistem elemanlarının arıza tespiti',
          '<b>SMART GRID</b> (akıllı şebeke)'
        ]),
        N('why', 'Hoca "SMART GRID!!!!" diye vurguluyor. Akıllı şebekede üretim (güneş, rüzgar) ve tüketim sürekli değişir; yarın saat 18:00\'de ne kadar elektrik tüketileceğini <b>tahmin etmek</b> ve arızayı <b>önceden fark etmek</b> gerekir. İkisi de geçmiş veriden öğrenmeye dayanır: YSA\'ların en klasik kullanım alanlarından biri <b>yük tahminidir</b>.'),
        THINK('uygulama-ortak',
          'Bu listelerdeki uygulamaları üç türe ayırmaya çalış. Hangi uygulamalar bir şeyi <b>tahmin ediyor</b>, hangileri bir şeyi <b>tanıyor / sınıflandırıyor</b>, hangileri bir şeyi <b>kontrol ediyor</b>?',
          `<ul><li><b>Tahmin:</b> yük tahmini, kağıt kalite tahmini, arızayı önceden haber verme</li><li><b>Tanıma / sınıflandırma:</b> barkod, parmak izi, arıza tespiti</li><li><b>Kontrol / optimizasyon:</b> motor kontrolü, pH kontrolü, yük-frekans kontrolü, ekonomik yük dağılımı</li></ul><p>Bu üç tür ileride yapay sinir ağlarının üç temel kullanım biçimi olarak karşına çıkacak.</p>`)
      ],
      checks: [
        MC('Hangisi hocanın güç sistemleri listesinde yer alan bir uygulamadır?',
          ['Barkod kontrolü', 'Yük tahmini', 'Hisse senedi tahmini', 'Hedef tanıma'], 1,
          'S32: Yük tahmini güç sistemleri uygulamasıdır. Barkod akıllı sensörlerde, hisse senedi finansta, hedef tanıma askeri uygulamalarda.'),
        MC('"Parmak iziyle tuş kilidi" hangi uygulama başlığı altında verilmiştir?',
          ['Güç sistemleri', 'Akıllı sensörler', 'Finans', 'Kontrol'], 1,
          'S31: Akıllı sensörler.')
      ]
    },

    /* ============================================================ S33–37 */
    {
      id: 'uygulamalar-2',
      title: 'Uygulamalar: askeri, tıp, finans, iş, robotik',
      en: 'Achievements and Applications II',
      src: 'S33–37',
      minutes: 6,
      blocks: [
        H('Askeri uygulamalar (S33)'),
        IMG('s33-askeri.png', 'Askeri uygulamalar.', 'S33', true),
        L(['Keşif', 'Hedef bilgileri toplama', 'Otomatik hedef tanıma', 'Ateş kontrolü', 'Yön bulma', 'Güdümleme']),
        H('Tıp (S34)'),
        IMG('s34-tip.jpeg', 'Tıpta yapay zeka.', 'S34', true),
        L([
          'Birçok kanser teşhisinde', 'Karaciğer rahatsızlıklarının teşhisinde', 'Hepatit teşhisinde', 'Diyabet teşhisinde',
          'Kalp ve damar hastalıklarının teşhisinde', 'Tıbbi görüntülemede', 'Duyu organlarının analizinde',
          'Biyolojik sinyallerin analiz ve işlenmesinde', 'Tomografi görüntülerinin analizinde'
        ]),
        H('Finans (S35)'),
        IMG('s35-finans.jpeg', 'Finansta yapay zeka.', 'S35', true),
        L([
          'İpotek başvurularında bulanık skorlama', 'Krediye uygunluğun değerlendirilmesi', 'Risk profili analizi', 'Sigorta sahtekarlığı tespiti',
          'Nakit kaynak optimizasyonu', 'Borsa analizi', 'Hisse senedi tahmini', 'Ticaret gözetimi', 'Yatırımcı sınıflama'
        ]),
        H('İş dünyası (S36)'),
        IMG('s36-is.jpeg', 'İş dünyasında yapay zeka.', 'S36', true),
        L([
          'Kaynak değerlendirme, müşteri hedefleme', 'TV reklam kuşaklarının değerlendirilmesi', 'Bilgi tabanlı tahmin, bulanık veri analizi',
          'AR-GE optimizasyonu', 'Hastanede kalma süresi tahmini', 'Satış tahminleri'
        ]),
        H('Robotik (S37)'),
        L([
          'Üretim sektörü (kurabiye pişiriyorlar)',
          'Tehlikeli bölgeler (Mars\'ta örnek toplama)',
          'Otomotiv (artık arabaları boyuyorlar)',
          'Ulaşım (İstanbul\'da metroyu kullanıyorlar)',
          'Güvenlik (bomba imhasında kullanılıyorlar)',
          've binlerce başka görev'
        ]),
        THINK('teshis',
          'Tıp listesindeki maddelerin neredeyse hepsi "<b>teşhis</b>" ya da "<b>analiz</b>" ile bitiyor. Bir doktorun teşhis koyması ile bir YZ sisteminin teşhis koyması arasında, öğrenme açısından nasıl bir benzerlik var?',
          `<p>Doktor binlerce hasta görerek (tecrübe) belirtilerle hastalıklar arasındaki ilişkiyi öğrenir. YZ sistemi de binlerce <b>etiketli örnekten</b> (hasta verisi + teşhis) aynı ilişkiyi öğrenir: S8\'deki makine öğrenmesi kutusu (Veri + Çıktı → Program). Fark, makinenin insanın bir ömürde göremeyeceği kadar çok örnek görebilmesi.</p>`)
      ],
      checks: [
        MC('"Sigorta sahtekarlığı tespiti" hangi alanın uygulamasıdır?',
          ['Tıp', 'Finans', 'Askeri', 'Robotik'], 1, 'S35: Finans.'),
        MC('S37\'de İstanbul\'daki hangi robotik uygulamaya örnek verilir?',
          ['Bomba imhası', 'Metronun robotlarca kullanılması (sürücüsüz metro)', 'Kurabiye pişirme', 'Araba boyama'], 1,
          '"Ulaşım (İstanbul\'da metroyu kullanıyorlar)".')
      ]
    },

    /* ============================================================ S38–42 */
    {
      id: 'sophia-watson-deltu',
      title: 'Sophia, Watson ve DELTU',
      en: 'Sophia, Watson and DELTU',
      src: 'S38–42',
      minutes: 5,
      blocks: [
        P('Hoca bu slaytlarda üç örneği <b>videoyla</b> gösteriyor. Videoları izlerken aynı soruyu sor: <b>Zayıf mı, kuvvetli mi?</b>'),
        H('Sophia (S38–39)'),
        LINK('video', 'Sophia (slayttaki video)', 'Hocanın slayta gömdüğü video: Hanson Robotics\'in insansı robotu Sophia. Yüz ifadeleri yapabilen ve konuşabilen bu robot, 2017\'de Suudi Arabistan vatandaşlığı verilmesiyle çok tartışıldı.', 'https://www.youtube.com/watch?v=JAdZtjkSSSw', 'S39'),
        THINK('sophia',
          'Sophia\'nın konuşmalarını izlerken: Bu konuşmaların <b>ne kadarı önceden hazırlanmış</b> olabilir? Sophia zayıf mı kuvvetli YZ mi?',
          `<p>Sophia\'nın birçok konuşmasının önceden hazırlanmış senaryolara dayandığı, uzmanlar tarafından eleştirildi. İnsan gibi görünen bir yüz ve akıcı cümleler, "düşünüyor" izlenimini güçlendiriyor, ama hocanın ölçütüne göre Sophia bir <b>zayıf YZ</b> örneği: davranışları kurgulanmış ya da öğrenilmiş, düşündüğü gösterilemiyor. Görünüşün bizi nasıl etkilediği de Turing testindeki "sorgulayıcı faktörü"ne bir örnek.</p>`),
        H('Watson (S40)'),
        IMG('s40-watson.jpeg', 'IBM Watson, Jeopardy! bilgi yarışmasında iki insan şampiyonla (Ken Jennings ve Brad Rutter) yarışırken. Ortadaki ekran Watson.', 'S40'),
        LINK('video', 'IBM Watson, Jeopardy! (2011)', 'Hocanın verdiği video: IBM\'in Watson sisteminin, doğal dilde sorulan ipuçlarını cevaplayan Jeopardy! yarışmasında en başarılı iki insan şampiyonu yenmesi.', 'https://www.youtube.com/watch?v=WFR3lOm_xhE', 'S40'),
        N('why', 'Watson\'ın başarısı <b>doğal dil işleme + bilgi temsili + otomatik muhakeme</b> birleşimine dayanıyordu: Turing testi için gereken yeteneklerin üçü (S21). Yine de yalnızca bilgi yarışmasında başarılıydı: tek alanda uzman, yani <b>zayıf YZ</b>.'),
        H('DELTU (S41–42)'),
        LINK('video', 'DELTU (slayttaki video)', 'Hocanın slayta gömdüğü video: "DELTU" başlıklı slaytta gösterilen, insanlarla etkileşime giren bir robot. Videoyu izlerken robotun tepkilerinin kurgulanmış mı yoksa öğrenilmiş mi olduğunu düşün.', 'https://www.youtube.com/watch?v=DIru--1gkKA', 'S42')
      ],
      checks: [
        MC('IBM Watson hangi alanda insan şampiyonları yenmesiyle tanınır?',
          ['Satranç', 'Go', 'Jeopardy! bilgi yarışması', 'Poker'], 2,
          'S40: Watson, 2011\'de Jeopardy!\'de Ken Jennings ve Brad Rutter\'ı yendi.'),
        MC('Hocanın ölçütüne göre Watson hangi yaklaşıma örnektir?',
          ['Kuvvetli yapay zeka', 'Zayıf yapay zeka', 'Doğal zeka', 'Hiçbiri'], 1,
          'Tek bir alanda (bilgi yarışması) çok başarılı ama düşündüğü gösterilemiyor; bugünkü tüm uygulamalar zayıf YZ\'dir (S14).')
      ]
    },

    /* ============================================================ S43–45 */
    {
      id: 'guvenli-mi',
      title: 'Akıllı sistemler güvenli mi?',
      en: 'Are Intelligent Systems Safe?',
      src: 'S43–45',
      minutes: 8,
      blocks: [
        H('ALVINN (S43)'),
        IMG('s43-alvinn.png', 'ALVINN: otobanda saatte 70 mil hızla sürücüsüz gidebilen otomobil. Ortadaki şekil aracı süren sinir ağı. Tüm denemeler trafiğe kapalı alanlarda yapılmış.', 'S43'),
        N('warn', 'Slaytta "ALVIN" yazıyor; doğru adı <b>ALVINN</b> (Autonomous Land Vehicle In a Neural Network). Carnegie Mellon Üniversitesi\'nde Dean Pomerleau tarafından 1989\'da geliştirildi.'),
        P('Şekle dikkatli bak: Bu, dersin asıl konusu olan bir <b>yapay sinir ağı</b>. Altta <b>30×32 sensör</b>lü bir "giriş retinası" (kameradan gelen yol görüntüsü), ortada <b>4 gizli birim</b>, üstte <b>30 çıkış birimi</b> (en solda "keskin sol", ortada "düz", en sağda "keskin sağ").'),
        THINK('alvinn',
          'Ağın çıkışında neden <b>tek bir</b> "direksiyon açısı" birimi değil de <b>30 ayrı</b> birim var? Bir de girişteki sensör sayısını hesapla.',
          `<p>Giriş: 30 × 32 = <b>960</b> sensör, yani 960 giriş.</p><p>Her çıkış birimi bir direksiyon yönünü temsil ediyor. Ağ, yola en uygun yönün birimini en çok "yakıyor"; komşu birimler de biraz yanıyor. En aktif bölgenin ortası direksiyon açısı olarak seçiliyor. Böylece ağ yalnızca "sol mu sağ mı" değil, <b>ne kadar</b> döneceğini de yumuşak bir dağılımla söyleyebiliyor.</p><p>Bu yapı (giriş katmanı → gizli katman → çıkış katmanı) 4. PDF\'teki <b>çok katmanlı algılayıcının</b> ta kendisi. Bölüm 1\'de dersin sonunu görmüş oldun.</p>`),
        H('Sürücüsüz araç: tercih eder misin? (S44)'),
        IMG('s44-surucusuz.jpeg', 'Google\'ın sürücüsüz aracı.', 'S44', true),
        L([
          'Yüksek hızlarda sürücüden bağımsız çalışabiliyor.',
          'Trafiğin aktığı yol ve otobanlarda test ediliyor.',
          'Akan trafik var (diğer arabalar).',
          '<b>Tercih eder misin?</b>'
        ]),
        N('why', 'ALVINN\'den farkı: ALVINN\'in tüm denemeleri <b>trafiğe kapalı</b> alanlardaydı (slayttaki gülen yüz bunu ima ediyor). Bugünkü araçlar ise <b>gerçek trafikte</b>, öngörülemeyen diğer sürücülerle birlikte test ediliyor. Güvenlik sorusu tam burada ortaya çıkıyor.'),
        H('Kaza olursa suçlu kim? (S45)'),
        IMG(['s45-otobus.jpeg', 's45-insan-hatasi.jpeg'], 'Solda: Google\'ın sürücüsüz aracı bir otobüse çarptı. Sağda: "Google\'ın en kötü kazası yine de bir insanın hatasıydı" (karşıdan gelen sürücü kırmızı ışıkta geçti).', 'S45'),
        THINK('sucu-kim',
          'Sürücüsüz araba birine çarparsa suçlu kim? <b>A) Araba B) Şirket C) Sürücü</b>. Seçimini ve gerekçeni yaz.',
          `<p>Hocanın sorusunun tek doğru cevabı yok; amaç gerekçelendirmek. Tartışmanın ana noktaları:</p><ul><li><b>Araba:</b> Hukuken bir kişi değil; ceza alamaz, sorumluluk taşıyamaz. Ama kararı veren o.</li><li><b>Şirket:</b> Sistemi tasarlayan, hangi veriyle eğitileceğine ve hangi durumda ne yapılacağına karar veren o. Zayıf YZ tanımına göre davranış "önceden kurgulanmış"sa sorumluluk kurgulayana gider.</li><li><b>Sürücü / araçtaki kişi:</b> Sistemi denetlemekle yükümlüyse ve müdahale etmediyse sorumlu olabilir.</li></ul><p>Slayttaki iki haber de iki ucu gösteriyor: Birinde araç otobüse çarptı (şirket kısmen sorumluluk kabul etti), diğerinde en ağır kazaya bir <b>insan sürücü</b> sebep oldu. "Makine hata yapar" kadar "insan da hata yapar" da doğru: Soru, hangisinin <b>daha az</b> hata yaptığı.</p>`)
      ],
      checks: [
        MC('ALVINN şeklindeki ağın giriş retinası 30×32 sensörden oluşuyor. Ağın kaç girişi vardır?',
          ['62', '320', '960', '30'], 2, '30 × 32 = 960.'),
        MC('ALVINN için hangisi doğrudur?',
          ['Gerçek trafikte test edilen ilk ticari araçtır', 'Bir yapay sinir ağıyla sürülen, denemeleri trafiğe kapalı alanlarda yapılan sürücüsüz bir araçtır', 'Google tarafından geliştirilmiştir', 'Kural tabanlı bir uzman sistemdir'], 1,
          'S43: Otobanda 70 mil hızla sürücüsüz gidebilen, sinir ağıyla sürülen araç; tüm denemeler trafiğe kapalı alanlarda.')
      ]
    },

    /* ============================================================ S46–49 */
    {
      id: 'etik-mi',
      title: 'Etik mi? Her alanda gerekli mi?',
      en: 'Is It Ethical? Is It Necessary Everywhere?',
      src: 'S46–49',
      minutes: 8,
      blocks: [
        H('Adalet (S46)'),
        IMG(['s46-adalet.png', 's46-ai-law.jpeg'], 'Çin\'de pilot uygulama: bir şehrin mahkeme hakimleri bir bilgisayar programı kullanıyor.', 'S46'),
        L([
          'Çin\'de pilot uygulama: Bir şehrin mahkeme hakimleri bir bilgisayar programı kullanıyor.',
          'Amaç: <b>daha adil bir dünya</b>, yani aynı özelliklere sahip davalarda aynı kararların alınması.',
          'Sistemin eğitimi için ne gerekli? Milyonlarca, milyarlarca davaya ait verinin kategorilenmesi.'
        ]),
        THINK('adalet',
          'Amaç "aynı davalarda aynı karar". Peki sistemi eğitmek için kullanılan <b>geçmiş kararlar</b> önyargılıysa ne olur?',
          `<p>Sistem geçmiş kararlardan öğrenir (S8: Veri + Çıktı → Program). Geçmiş kararlarda belli bir gruba karşı önyargı varsa, sistem bu önyargıyı da öğrenir ve onu <b>tutarlı biçimde</b> tekrarlar. Yani "aynı davaya aynı karar" hedefi gerçekleşir, ama karar <b>adil olmayabilir</b>.</p><p>Bu, doğal ve yapay zeka karşılaştırmasındaki (S63) "yapay zeka tutarlıdır" maddesinin öbür yüzü: Tutarlılık, hata da tutarlıysa bir avantaj değildir.</p>`),
        H('e-ticaret (S47)'),
        IMG('s47-eticaret.png', 'Birisi Amazon\'dan bir kitap ya da ürün alıyor. Görev ne olabilir?', 'S47', true),
        THINK('eticaret',
          'Birisi Amazon\'dan bir kitap aldı. Sistemin burada <b>görevi</b> ne olabilir ve bunu nasıl yapar?',
          `<p>Hocanın cevabı: Müşteriye <b>alması muhtemel kitaplar önerilir</b>. Nasıl? Kitapları <b>konularına</b>, <b>yazarlarına</b> ve <b>birlikte satılışlarına</b> göre <b>kümelemek</b>. Bu kitabı alan, aynı kümedeki başka kitapları da alabilir.</p>`),
        H('Kişisel haklarımıza ne olacak? (S48)'),
        IMG('s48-kameralar.jpeg', 'Bir duvar dolusu güvenlik kamerası ve onlara bakan iki kişi.', 'S48'),
        P('Hoca soruyor: Akıllı sistemler <b>her alanda gerekli mi?</b> Her yerde yüz tanıyan kameralar güvenliği artırabilir, ama mahremiyeti ortadan kaldırabilir. Öneri sistemleri işimizi kolaylaştırır, ama bunun için alışkanlıklarımızın sürekli kaydedilmesi gerekir.'),
        H('Vazgeçmeli miyiz? (S49)'),
        IMG('s49-gelecek.jpeg', 'Akıllı sistemlerden vazgeçmeli miyiz?', 'S49', true),
        THINK('vazgecmek',
          '"Bir gün bilgisayarlar bizi anlarlarsa ve bütün bunları mükemmel bir şekilde yaparlarsa, nasıl bir dünya bizi bekler?" Sence akıllı sistemlerden <b>vazgeçmeli miyiz?</b>',
          `<p>Hoca bu soruya bir sonraki slaytlarda kendi cevabını veriyor: Vazgeçersek <b>kaybedeceklerimiz</b> var (S50–54). İnsanın tek başına yapamayacağı analizler (5000 özellikli hasta dosyası, gen dizilimleri) ancak bilgisayarla yapılabilir. Yani soru "vazgeçmek mi, kullanmak mı" değil, "<b>nasıl</b> güvenli ve etik kullanmak" (S69).</p>`)
      ],
      checks: [
        MC('S46\'daki Çin\'deki mahkeme uygulamasının amacı nedir?',
          ['Hakimleri işten çıkarmak', 'Aynı özelliklere sahip davalarda aynı kararların alınması (daha adil bir dünya)', 'Davaları hızlandırmak için hakimsiz karar vermek', 'Suçluları kameralarla bulmak'], 1,
          'S46: "Amaç: daha adil bir dünya. Aynı özelliklere sahip davalarda aynı kararların alınması."'),
        MC('S47\'ye göre Amazon kitap önerirken kitapları neye göre kümeler?',
          ['Fiyat ve sayfa sayısı', 'Konu, yazar ve birlikte satılış', 'Kapak rengi', 'Yayın yılı'], 1,
          'Kitapları konularına, yazarlarına ve birlikte satılışlarına göre kümelemek.')
      ]
    },

    /* ============================================================ S50–54 */
    {
      id: 'kaybedeceklerimiz',
      title: 'Vazgeçersek kaybedeceklerimiz',
      en: 'What We Would Lose',
      src: 'S50–54',
      minutes: 7,
      blocks: [
        H('5000 özellikli hasta dosyası (S50)'),
        THINK('5000-ozellik',
          'Bir hastalık dosyasında <b>5000 ayrı özellik</b> (ölçüm) olsaydı ya da bir kişinin <b>DNA dizisine</b> bakıp hasta olup olmadığına karar vermen gerekseydi: <b>Nerelere bakacağına</b> nasıl karar verirdin?',
          `<p>İnsan 5000 özelliği aynı anda tartamaz; hangisinin önemli olduğunu bile bilemez. Hocanın cevabı: <b>Burada bilgisayarları devreye sokmamız gerekir.</b> Bu, bir insanın hesap yapma kabiliyetini bir <b>hesap makinesininkiyle</b> karşılaştırmaya benzer.</p><p>Yani akıllı sistemlerden vazgeçmek, hesap makinesinden vazgeçip her şeyi elle hesaplamaya benzer: yapılabilecek bazı işler tamamen imkansız hale gelir.</p>`),
        H('Gen mikrodizilimleri (S51)'),
        IMG('s51-gen.png', 'ALL ve AML lösemi hücreleri ve gen mikrodizilim çipi.', 'S51'),
        P('100 kişinin (hasta / sağlam) gen dizilimleri elimizde. Bu dizilimleri analiz ederek hasta olup olmadığı bilinmeyen birinin <b>hasta olup olmadığını</b> ya da <b>hastalığının türünü</b> (ALL mi, AML mi) öğrenebilir miyiz? En iyi tedaviyi önerebilir miyiz? Nasıl? Elimizde hangi bilgiler olmalı?'),
        H('Beyin aktiviteleri (S52)'),
        IMG('s52-beyin.png', 'İnsanların farklı şeyler düşünürken, farklı duygular yaşarken ve problem çözerken kaydedilen beyin aktiviteleri. Görev?', 'S52'),
        H('Röntgen (S53)'),
        IMG('s53-rontgen.png', 'Radyologlardan daha başarılı lezyon tespiti yapan sistemler.', 'S53'),
        H('Parmak izi (S54)'),
        IMG('s54-parmakizi.png', '"Bu parmak izi kimin? Bu adamı tutuklayalım mı?"', 'S54', true),
        THINK('tutuklama',
          'Sistem parmak izini bir kişiyle %97 eşleştirdi. <b>Tutuklayalım mı?</b> Ne kadar emin olmamız gerekir?',
          `<p>Soru teknik değil, <b>etik</b>: %97 eşleşme milyonlarca kayıtlık bir veritabanında yüzlerce yanlış eşleşme demek olabilir. Yanlış birini tutuklamanın bedeli, gerçek suçluyu kaçırmanın bedelinden farklıdır. Akıllı sistem bir <b>karar desteği</b> verir; son kararın kimde olacağı ve hatanın sorumluluğunun kimde olduğu S45\'teki "suçlu kim?" sorusuyla aynı soru.</p>`),
        H('Görev ne?'),
        DG('sort-gorev'),
        N('key', 'Bu slaytların hepsinde hoca aynı şeyi soruyor: <b>Görev ne?</b> Bir akıllı sistem tasarlamadan önce görevi tanımlamak gerekir: Bir şeyi bilinen sınıflardan birine mi atayacağız, yoksa benzerlere göre mi gruplayacağız? Bu soru 2. PDF\'te makine öğrenmesi türleri olarak geri gelecek.')
      ],
      checks: [
        MC('S50\'de hoca, 5000 özellikli bir hasta dosyasını bilgisayarla incelemeyi neye benzetiyor?',
          ['Satranç oynamaya', 'İnsanın hesap yapma kabiliyetini bir hesap makinesininkiyle karşılaştırmaya', 'Turing testine', 'Su içmeye'], 1,
          '"Bu olay bir insanın hesap yapma kabiliyetiyle bir hesap makinesininkini karşılaştırmaya benziyor."'),
        MC('S51\'deki gen mikrodizilimi örneğinde amaç nedir?',
          ['Genleri kopyalamak', 'Gen dizilimlerinden hasta olup olmadığı bilinmeyen birinin hasta olup olmadığını ya da hastalığının türünü öğrenmek', 'Yeni gen üretmek', 'Hastanın yaşını tahmin etmek'], 1,
          'Etiketli 100 kişilik veriden yeni bir kişinin durumunu tahmin etmek.')
      ]
    },

    /* ============================================================ S55–57 */
    {
      id: 'google-duplex',
      title: 'Google I/O ve Duplex',
      en: 'Google I/O and Duplex',
      src: 'S55–57',
      minutes: 5,
      blocks: [
        IMG('s55-google-io.jpeg', 'Google I/O\'18 geliştirici konferansı.', 'S55', true),
        P('Google her yıl <b>I/O</b> adlı geliştirici konferansında yeni yapay zeka ürünlerini tanıtır. Hoca üç yılın açılış videolarını veriyor:'),
        LINK('video', 'Google I/O\'18', 'Hocanın verdiği video: 2018 konferansı. Google Duplex\'in telefonla kuaföre ve restorana gerçek insanlarla konuşarak randevu aldığı ünlü demo bu konferansta gösterildi.', 'https://www.youtube.com/watch?v=D5VN56jQMWM', 'S56'),
        LINK('video', 'Google I/O\'19', 'Hocanın verdiği video: 2019 konferansından yapay zeka duyuruları.', 'https://www.youtube.com/watch?v=lyRPyRKHO8M', 'S56'),
        LINK('video', 'Google I/O\'21', 'Hocanın verdiği video: 2021 konferansından yapay zeka duyuruları.', 'https://www.youtube.com/watch?v=_xLgXIhebxA', 'S56'),
        H('Google Duplex (S57)'),
        IMG('s57-duplex.png', 'Duplex\'in yapısı: ses → ASR (konuşma tanıma) → metin ve bağlam (context) bir sinir ağına girer → ağın ürettiği cevap → TTS (metinden konuşma) → ses.', 'S57'),
        TABLE(['Bileşen', 'Açılımı', 'Ne yapar?'], [
          ['ASR', 'Automatic Speech Recognition', 'Karşıdakinin sesini <b>metne</b> çevirir ("Okay, for what time?")'],
          ['Sinir ağı', '', 'Metni ve konuşmanın bağlamını alıp ne cevap verileceğine karar verir'],
          ['TTS', 'Text To Speech', 'Üretilen cevap metnini <b>insan sesine</b> çevirir ("For 7PM, please")']
        ]),
        THINK('duplex-turing',
          'Duplex telefonda konuşurken araya "hmm", "eee" gibi sesler ekliyordu ve karşıdaki insanlar bir makineyle konuştuklarını <b>fark etmedi</b>. Bu, Turing testini geçmek mi? Etik açıdan bir sorun var mı?',
          `<p>Dar bir alanda (randevu almak) ve hakem testten <b>habersizken</b>, evet, karşıdakiler onu insandan ayırt edemedi. Ama bu klasik Turing testi değil: Hakem sorgulamıyor, sadece randevu veriyor.</p><p>Etik sorun tam burada: İnsanlar <b>makineyle konuştuklarını bilmeden</b> kandırıldı. Demodan sonra gelen eleştiriler üzerine Google, Duplex\'in görüşmenin başında kendini tanıtacağını açıkladı. Turing testinde "kandırmak" başarı ölçütüydü; gerçek hayatta ise bir <b>etik sorun</b> (S69).</p>`)
      ],
      checks: [
        MC('Google Duplex\'te ASR ne işe yarar?',
          ['Metni sese çevirir', 'Konuşmayı (sesi) metne çevirir', 'Randevu takvimini tutar', 'İnternette arama yapar'], 1,
          'ASR = Automatic Speech Recognition, otomatik konuşma tanıma: ses → metin. TTS ise metin → ses.'),
        MC('Duplex\'in yapısında ASR ile TTS arasında ne vardır?',
          ['Bir kural kitabı', 'Metni ve bağlamı işleyen bir sinir ağı', 'Bir insan operatör', 'Hiçbir şey'], 1,
          'S57 şekli: ASR ve Context → sinir ağı → TTS.')
      ]
    },

    /* ============================================================ S58–59 */
    {
      id: 'basarili-gelecek',
      title: 'Başarılı uygulamalar ve yakın gelecek',
      en: 'Successful Applications and the Near Future',
      src: 'S58–59',
      minutes: 4,
      blocks: [
        H('Başarılı bazı YZ uygulamaları (S58)'),
        IMG(['s58-a.png', 's58-b.png', 's58-c.png', 's58-d.png'], 'Sony Aibo, hastanede malzeme taşıyan otomatik araç, HP akıllı ilaç bandajı ve resim yapan robot Salvador DaBot.', 'S58'),
        L([
          '<b>Sony Aibo:</b> Sahibinin sesini ve yüzünü tanıyan, ismini öğrenen ve oyun oynayan robot köpek',
          'Hastanelerde ilaç ve malzeme taşıyan <b>otomatik araçlar</b>',
          '<b>HP Smart Drug Delivery:</b> Deriye yapıştırılan ve zamanı gelince vücuda ilaç salgılayan bandajlar',
          '<b>Salvador DaBot:</b> Konuşabilen ve resim yapabilen bir robot'
        ]),
        H('Yakın gelecek (S59)'),
        L([
          'Doğal dilde iletişim kuran makineler', 'Otomatik robotlar', 'İnsansız taşıtlar',
          'Uzay araştırmalarında kullanılan otonom araçlar', 'Biyo-sibernetik uygulamalar (yapay kol, yapay göz)'
        ]),
        THINK('gelecek-simdi',
          'Bu "yakın gelecek" listesi yıllar önce yazıldı. Hangileri bugün (2026) <b>zaten gerçek</b>? Hangisi hâlâ uzak?',
          `<ul><li><b>Doğal dilde iletişim kuran makineler:</b> Büyük dil modelleri ve sesli asistanlarla büyük ölçüde gerçekleşti.</li><li><b>İnsansız taşıtlar:</b> Bazı şehirlerde sürücüsüz taksiler hizmet veriyor, ama her yerde değil.</li><li><b>Otonom uzay araçları:</b> Mars gezginleri yıllardır kısmen otonom çalışıyor.</li><li><b>Biyo-sibernetik uygulamalar:</b> Kas sinyalleriyle kontrol edilen protez kollar var; yapay göz hâlâ çok sınırlı.</li></ul><p>Dikkat: Listedeki hiçbir madde kuvvetli YZ gerektirmiyor. Hepsi zayıf YZ ile gerçekleşebiliyor (S14).</p>`)
      ],
      checks: [
        MC('Sony Aibo nedir?',
          ['İlaç salgılayan bandaj', 'Sahibinin sesini ve yüzünü tanıyan, ismini öğrenen robot köpek', 'Resim yapan robot', 'Sürücüsüz araç'], 1, 'S58.'),
        MC('Hangisi S59\'daki "yakın gelecek" listesinde yer alır?',
          ['Kuvvetli yapay zeka', 'Biyo-sibernetik uygulamalar (yapay kol, yapay göz)', 'Zaman yolculuğu', 'Turing testinin kaldırılması'], 1, 'S59.')
      ]
    },

    /* ============================================================ S60–61 */
    {
      id: 'surprizler',
      title: 'YZ çalışmalarındaki sürprizler',
      en: 'Surprises in AI Research',
      src: 'S60–61',
      minutes: 6,
      blocks: [
        P('Yapay zeka araştırmacıları başta, insanlar için zor olan işlerin makineler için de zor olacağını düşünüyordu. Sonuç tam tersi çıktı. Önce kendin tahmin et:'),
        DG('sort-kolay-zor'),
        H('Hocanın listesi (S60–61)'),
        CMP(
          ['İnsanlar için zor, makineler için kolay (S60)', ['Satranç', 'Taşıma planlama', 'Havayollarında uçuş saatlerini planlama', 'İnternette kredi kartı yolsuzluğu tanıma', 'Teorem ispatlama', 'Kare bulmaca']],
          ['İnsanlar için kolay, makineler için zor (S61)', ['Konuşma tanıma', 'Yüz tanıma', 'Beste / resim yapma', 'Motor aktiviteler (yürümek)', 'Dil anlama']]
        ),
        THINK('surpriz-neden',
          'İki listeyi karşılaştır. Soldakilerin ortak özelliği ne? Sağdakilerin ortak özelliği ne? <b>Neden</b> böyle bir ters ilişki var?',
          `<p><b>Soldakiler:</b> Kuralları kesin ve açıkça yazılabilen, adım adım hesaplanabilen işler. İnsan bunları yavaş ve bilinçli olarak yapar; makine ise hızla tarar.</p><p><b>Sağdakiler:</b> İnsanın <b>milyonlarca yıllık evrimle</b> kazandığı, farkında olmadan yaptığı beceriler. Bunları nasıl yaptığımızı bilmediğimiz için <b>kuralını yazamıyoruz</b>. Su içmek (S2) de bu gruba girer.</p><p>Bu gözleme literatürde <b>Moravec paradoksu</b> denir (ek bilgi). Sonuç: Sağ sütundaki işler için kural yazmak yerine makinenin <b>örneklerden öğrenmesi</b> gerekir, yani makine öğrenmesi ve yapay sinir ağları (S8). Bugün yüz tanıma ve konuşma tanımadaki başarıların neredeyse tamamı YSA\'lardan geliyor.</p>`),
        N('key', 'Kuralını yazabildiğimiz iş → makineye kolay. Kuralını bilmeden yaptığımız iş → makineye zor; çözüm örneklerden öğrenmek.')
      ],
      checks: [
        MC('Hangisi "insanlar için kolay, makineler için zor" görevlerdendir?',
          ['Satranç', 'Teorem ispatlama', 'Yüz tanıma', 'Uçuş saatlerini planlama'], 2, 'S61: Konuşma tanıma, yüz tanıma, beste/resim yapma, yürümek, dil anlama.'),
        MC('Yürümek, yüz tanımak gibi işlerin makineler için zor olmasının temel nedeni nedir?',
          ['Makinelerin işlem gücünün yetersiz olması', 'Bu işleri nasıl yaptığımızın kuralını bilmememiz, dolayısıyla elle yazamamamız', 'Bu işlerin hiç veri gerektirmemesi', 'İnsanların bu işlerde de yavaş olması'], 1,
          'Evrimle kazanılmış, bilinçsizce yapılan beceriler; kuralı açıkça bilinmediği için programlanamaz, örneklerden öğrenilmesi gerekir.')
      ]
    },

    /* ============================================================ S62–64 */
    {
      id: 'dogal-yapay',
      title: 'Doğal zeka ve yapay zeka',
      en: 'Natural vs Artificial Intelligence',
      src: 'S62–64',
      minutes: 6,
      blocks: [
        THINK('dz-yz',
          'Yapay zekanın doğal zekadan <b>üstün</b> olduğu bir yön, doğal zekanın yapay zekadan <b>üstün</b> olduğu bir yön yaz.',
          `<p>Hoca altı ölçüt veriyor (sonraki kart). Yapay zekanın üstünlükleri: kalıcılık, kopyalanabilirlik, ucuzluk, tutarlılık. Doğal zekanın üstünlükleri: yaratıcılık ve duyular yoluyla deneyimden öğrenme.</p>`),
        H('Hocanın karşılaştırması (S62–64)'),
        TABLE(['Ölçüt', 'Yapay zeka', 'Doğal zeka'], [
          ['Kalıcılık', '<b>Kalıcıdır.</b> Sistem ve program değişmedikçe kaybolmaz, unutulmaz.', 'İnsan bildiklerini unutabilir.'],
          ['Aktarma', '<b>Kolayca kopyalanır</b>, bir bilgisayardan diğerine aktarılıp geniş kitlelere yayılabilir.', 'Uzmanlığın aktarılması uzun bir çıraklık ister ve yine de tam aktarılamaz.'],
          ['Maliyet', 'Birçok alanda <b>daha ucuzdur</b> (bilgisayar satın almak ve kullanmak).', 'İnsanı eğitip çalıştırmak çoğu alanda daha pahalıdır.'],
          ['Tutarlılık', '<b>Bütünüyle tutarlıdır</b>, tutarsızlık yoktur.', 'Kararsız, değişken ve düzensizdir; insanın tabiatından kaynaklanır.'],
          ['Yaratıcılık', '<b>Yaratıcılık yoktur.</b> Bilgi sisteme özenle yerleştirilmelidir.', '<b>Yaratıcıdır.</b> Bilgi kazanma yeteneği doğal zekanın doğal halidir.'],
          ['Deneyim', 'Çoğu YZ sistemi <b>sembolik girdilerle</b> çalışır.', 'Duyular yoluyla öğrendiği deneyimleri kullanır ve onlardan faydalanır.']
        ]),
        N('why', 'İlk dört ölçütte YZ öne geçiyor, son ikisinde doğal zeka. Dikkat et: Son iki ölçüt <b>öğrenmeyle</b> ilgili (bilgiyi kendiliğinden kazanmak, deneyimden öğrenmek). Yani slayta göre yapay zekanın en zayıf yanı, zekanın özü saydığımız öğrenme (S5). Makine öğrenmesi ve YSA tam bu açığı kapatmaya çalışan alanlar.'),
        N('trap', '"Yapay zekada yaratıcılık yoktur" slaytın görüşü. Bugün resim ve metin üreten modeller bu cümleyi tartışmalı hale getirdi. Sınavda <b>slaytın görüşünü</b> yaz; istersen "günümüzde üretken modeller nedeniyle tartışmalıdır" diye ekleyebilirsin.'),
        THINK('tutarlilik',
          '"Yapay zeka tutarlıdır" maddesi her zaman bir <b>avantaj</b> mı?',
          `<p>Hayır. Sistem yanlış bir şey öğrendiyse (ör. S46\'daki önyargılı mahkeme verisi), aynı hatayı <b>her seferinde tutarlı olarak</b> tekrarlar. İnsanın "tutarsızlığı" bazen hatayı fark edip düzeltme fırsatıdır. Tutarlılık ancak doğru bir şey tutarlı yapılıyorsa avantajdır.</p>`)
      ],
      checks: [
        MC('Hocanın karşılaştırmasına göre hangisi <b>doğal zekanın</b> üstün olduğu bir yöndür?',
          ['Kalıcılık', 'Kopyalanabilirlik', 'Yaratıcılık', 'Tutarlılık'], 2, 'S64: Doğal zeka yaratıcıdır; YZ\'de yaratıcılık yoktur.'),
        MC('S64\'e göre çoğu yapay zeka sistemi ne tür girdilerle çalışır?',
          ['Duyusal deneyimlerle', 'Sembolik girdilerle', 'Duygusal girdilerle', 'Girdisiz çalışır'], 1,
          'Doğal zeka duyular yoluyla deneyim kullanır; YZ sistemlerinin çoğu sembolik girdilerle çalışır.')
      ]
    },

    /* ============================================================ S65–68 */
    {
      id: 'guncel-tartismalar',
      title: 'YZ dilleri ve güncel tartışmalar',
      en: 'AI Languages and Current Debates',
      src: 'S65–68',
      minutes: 7,
      blocks: [
        H('YZ programlama dilleri (S65)'),
        L(['Python', 'Java', 'C++', 'R', 'MATLAB']),
        H('Musk, OpenAI ve Neuralink (S66)'),
        P('SpaceX ile insanlığı Mars\'a taşımayı, Tesla ile fosil yakıt bağımlılığını bitirmeyi hedefleyen <b>Elon Musk</b>, yapay zekanın insan zekasına erişeceği <b>tekillik</b> gününden sonra akıllı yazılımların ve robotların insanlığı yok edeceğinden endişe ediyor. Bu yüzden yapay zekanın <b>açık</b> geliştirilmesinden yana.'),
        L([
          'Açık kaynak kodlu yapay zeka geliştiren <b>OpenAI</b> girişimine bağışta bulundu.',
          '<b>Neuralink</b> şirketiyle insan zekasını bilgisayarlarla birleştirmeyi istiyor. Ona göre bu yöntemle yapay zekanın insanlığı yok etmesi önlenebilir.'
        ]),
        LINK('site', 'Elon Musk Neuralink ile insan beyni ve bilgisayarları birleştirecek (Türkçe haber)', 'Hocanın verdiği bağlantı: Neuralink\'in beyin-bilgisayar arayüzü fikrini anlatan Türkçe bir haber yazısı.', 'http://khosann.com/elon-musk-neuralink-ile-insan-beyni-ve-bilgisayarlari-birlestirecek/', 'S66'),
        N('extra', '<b>Tekillik (singularity):</b> Yapay zekanın insan zekasını yakalayıp geçtiği ve kendini insan kontrolü dışında geliştirmeye başladığı varsayılan an. S10\'daki Kurzweil bu fikrin en bilinen savunucusudur.'),
        H('Brooks ve AlphaGo (S67)'),
        P('MIT robotbilim profesörü <b>Rodney Brooks</b>\'a göre, büyük veri analizi ya da derin öğrenme ile bir yazılıma insandan iyi satranç oynamayı öğretmek <b>insan zekası gerektirmez</b>. Otomatik sistemlerin bazı işleri tek tek insandan iyi yapması için insan gibi zeki ya da insan gibi bilinçli olması gerekmez.'),
        THINK('insandan-zeki',
          'Bir yapay zekanın "<b>insandan zeki</b>" sayılması için ne gerekir? AlphaGo Go\'da dünya şampiyonunu yendi; insandan zeki mi?',
          `<p>Hocanın cevabı (S67): İnsandan zeki bir yapay zeka <b>her alanda</b> insandan zeki olmak zorundadır: sanat, felsefe, edebiyat, ahlak, politika, din, bilim, aşk, teknoloji. AlphaGo yalnızca <b>Go oynamakta</b> insanlardan becerikli. Bilinçli bir yazılım olmadığı için genel anlamda insandan zeki olduğunu söyleyemeyiz.</p><p>Gardner\'ın çoklu zekasına (S3) bağla: AlphaGo tek bir zeka türünün tek bir alanında üstün.</p>`),
        H('Satranç (S68)'),
        P('Satrançta makineler oyuna hakim oluyor, çünkü <b>kaba işlem güçleri</b> insanlardan üstün ve büyük bir veritabanıyla olası hamleleri çözerek insanın önüne geçebiliyorlar. Özünde donanımları daha hızlı, algoritmaları daha becerikli. Ancak hayatta yalnızca insanların anlayabileceği birçok şey var.'),
        N('key', 'Tek bir işte insanı geçmek ≠ insandan zeki olmak. Bu, zayıf YZ ile kuvvetli YZ ayrımının (S12–13) güncel örneklerle söylenişi.')
      ],
      checks: [
        MC('S67\'ye göre AlphaGo neden genel anlamda "insandan zeki" sayılamaz?',
          ['Go\'da insanları yenemediği için', 'Yalnızca Go oynamakta becerikli olduğu ve bilinçli bir yazılım olmadığı için', 'Çok yavaş olduğu için', 'Açık kaynak olmadığı için'], 1,
          'İnsandan zeki bir YZ her alanda (sanat, felsefe, ahlak…) insandan zeki olmalıdır.'),
        MC('Elon Musk\'a göre Neuralink\'in amacı nedir?',
          ['Daha hızlı arabalar üretmek', 'İnsan zekasını bilgisayarlarla birleştirerek yapay zekanın insanlığı yok etmesini önlemek', 'Mars\'ta yaşamak', 'Satranç programı yazmak'], 1, 'S66.')
      ]
    },

    /* ============================================================ S69 + ders notu */
    {
      id: 'etik',
      title: 'Yapay zeka ve etik, sürdürülebilirlik',
      en: 'AI, Ethics and Sustainability',
      src: 'S69 · ders notu',
      minutes: 9,
      blocks: [
        H('Etik nedir? (S69)'),
        DEF('Etik', 'Ethics', '<b>İyi ve kötü</b> davranışların ne olduğunu <b>sistematik</b> bir şekilde analiz eden ve belirleyen felsefe dalı.'),
        P('Hocanın yapay zeka için sorduğu iki etik soru:'),
        L([
          'Algoritmalar nasıl yazılırsa toplum ve birey için <b>iyi ve doğru kararlar</b> ve eylemlerle sonuçlanır?',
          'Yapay zeka kullanan teknolojilerin araştırma, geliştirme, tasarım ve üretim <b>süreci</b> nasıl iyi ve doğru şekilde ilerler?'
        ], true),
        CMP(
          ['Etik içerik', ['Teknolojinin kendisinin etik olması', 'Ne karar veriyor? (S45 kaza, S46 mahkeme, S54 tutuklama)', 'Önyargı, mahremiyet (S48), şeffaflık']],
          ['Etik süreç', ['Etik sürdürülebilirlik', 'Nasıl üretiliyor? (veri nasıl toplandı, ne kadar kaynak tüketildi)', 'Enerji, su, çevre etkisi']]
        ),
        N('why', 'Bölüm boyunca hoca etik soruları dağınık olarak sordu: suçlu kim (S45), adil mi (S46), mahremiyet (S48), kandırmak (Duplex, S57). S69 bunları iki başlıkta topluyor: <b>ne</b> yaptığı (içerik) ve <b>nasıl</b> üretildiği (süreç).'),
        H('Derste: enerji sürdürülebilirliği'),
        N('class', 'Derste <b>enerji sürdürülebilirliği</b> ve <b>veri merkezlerinin uzaya taşınması</b> fikirleri konuşuldu. Bunlar S69\'daki "etik süreç: etik sürdürülebilirlik" maddesinin güncel karşılığı.'),
        THINK('enerji',
          'Büyük bir yapay zeka modelini eğitmek ve onu milyonlarca kullanıcıya çalıştırmak neden bu kadar çok <b>enerji</b> ister? Harcanan elektrik sonunda <b>nereye gider</b>?',
          `<p>Bir YSA\'yı eğitmek, milyarlarca ağırlık üzerinde tekrar tekrar çarpma-toplama yapmak demektir (4. PDF\'teki epoch\'ları hatırla: bütün veri defalarca ağdan geçirilir). Bu iş binlerce grafik işlemcide (GPU) haftalarca sürer. Model kullanıma açıldıktan sonra her soru da yeniden hesap gerektirir.</p><p>Harcanan elektriğin neredeyse tamamı sonunda <b>ısıya</b> dönüşür. Bu ısıyı atmak için veri merkezleri soğutmaya da elektrik ve çoğu zaman büyük miktarda <b>su</b> harcar. Yani enerji sorunu iki katmanlı: hesap + soğutma.</p>`),
        H('Veri merkezlerini uzaya taşımak'),
        P('Önerilen fikir şu: Veri merkezlerini <b>yörüngeye</b> koymak. Uzayda güneş neredeyse kesintisizdir, bulut ve gece yoktur (uygun yörüngede); dünyadaki elektrik şebekesine ve su kaynaklarına yük binmez.'),
        THINK('uzay-sogutma',
          'Uzay çok soğuk (−270 °C civarı). Öyleyse veri merkezini uzayda soğutmak <b>çok kolay</b> olmalı, değil mi?',
          `<p>Şaşırtıcı biçimde <b>hayır</b>. Dünyada ısıyı havaya ya da suya veririz (taşınım ve iletim). Uzayda <b>hava yok</b>; ısıyı alıp götürecek bir ortam yok. Geriye tek yol kalır: <b>ışınım</b> (radyasyon). Işınımla ısı atmak yavaştır, bu yüzden çok büyük <b>radyatör panelleri</b> gerekir. Termos şişesinin içi de vakum olduğu için ısıyı tutar.</p><p>Diğer zorluklar:</p><ul><li><b>Fırlatma maliyeti:</b> Her kilogramı yörüngeye çıkarmak pahalı.</li><li><b>Radyasyon:</b> Kozmik ışınlar çiplere zarar verir ve hesap hatalarına yol açar.</li><li><b>Bakım:</b> Bozulan bir parçayı değiştirmek için teknisyen gönderemezsin.</li><li><b>Veri aktarımı:</b> Sonuçların dünyaya iletilmesi gerekir.</li></ul><p>Yani fikir enerji sorununu çözerken yeni mühendislik sorunları doğuruyor. Hocanın sevdiği türden bir "mantığını sorgula" sorusu.</p>`),
        N('extra', 'Bu fikir ciddi olarak çalışılıyor: 2025\'te Google <b>Project Suncatcher</b> adıyla güneş enerjili uydu takımlarında yapay zeka hesaplaması araştırmasını duyurdu; <b>Starcloud</b> gibi girişimler de yörüngeye GPU taşıyan uydular fırlattı. Henüz deneme aşamasındalar.'),
        N('key', 'YZ\'nin etiği yalnızca verdiği kararlar (içerik) değil; nasıl ve hangi bedelle üretildiği (süreç, sürdürülebilirlik) de etik bir sorudur.')
      ],
      checks: [
        MC('S69\'a göre "etik süreç" neyi ifade eder?',
          ['Teknolojinin kendisinin etik olmasını', 'Etik sürdürülebilirliği (araştırma, geliştirme, üretim sürecinin iyi ve doğru ilerlemesi)', 'Algoritmanın hızını', 'Turing testini'], 1,
          'Etik içerik: teknolojinin etik olması. Etik süreç: etik sürdürülebilirlik.'),
        MC('Uzaydaki bir veri merkezini soğutmanın zor olmasının temel nedeni nedir?',
          ['Uzayın çok sıcak olması', 'Vakumda ısıyı taşıyacak hava olmadığı için ısının yalnızca ışınımla atılabilmesi', 'Güneş ışığının olmaması', 'Bilgisayarların uzayda çalışmaması'], 1,
          'Taşınım ve iletimle ısı atılamaz; yalnızca ışınım kalır, bu da büyük radyatörler gerektirir.')
      ]
    }
  );
})(window.YSALab = window.YSALab || {});
