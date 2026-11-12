/*
 * lessons-ch1.js — Bölüm 1: Yapay zeka ve makine öğrenmesine temel bakış (1_AI.pptx), slayt 1–28.
 * Devamı (slayt 29–69) lessons-ch1b.js'de. Sıra hocanın slayt sırasıdır.
 *
 * Blok türleri: p, h (yeni ekran), list, table, compare, def, note (teacher/why/key/trap/warn/extra/class/exam),
 *   img (hocanın görseli), link (hocanın bağlantısı + ne hakkında), quote, think (önce düşün), dg (şekil), br.
 * checks: { type:'mc', q, options, answer, a } — ilk soru dersin başında "okumadan önce düşün" olarak da çıkar.
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
  const Q = (text, who, role) => ({ t: 'quote', text, who, role });
  const THINK = (id, q, a, hint) => ({ t: 'think', id, q, a, hint });
  const DG = (id) => ({ t: 'dg', id });
  const TABLE = (head, rows) => ({ t: 'table', head, rows });
  const CMP = (...cols) => ({ t: 'compare', cols: cols.map(([title, items]) => ({ title, items })) });
  const MC = (q, options, answer, a) => ({ type: 'mc', q, options, answer, a });

  YSALab.lessons = YSALab.lessons || { chapters: [] };

  YSALab.lessons.chapters.push({
    id: 'ch1',
    num: 1,
    title: 'Yapay Zekaya Temel Bakış',
    en: 'A Basic Look at AI and Machine Learning',
    source: '1_AI.pptx',
    objectives: [
      'Zekayı ve yapay zekayı hocanın tanımlarıyla açıklamak; zeka ile öğrenme arasındaki bağı kurmak',
      'Geleneksel programlama ile makine öğrenmesini "program nereden gelir?" sorusuyla ayırmak',
      'Akıllı sistemin özelliklerini saymak ve zayıf / kuvvetli yapay zeka yaklaşımlarını örnekle karşılaştırmak',
      'Turing testini üç fazıyla, Çin odası itirazını ve ELIZA örneğini anlatıp birbirine bağlamak',
      'Uygulama alanlarını, güvenlik ve etik sorularını, doğal ve yapay zeka karşılaştırmasını tartışmak'
    ],
    lessons: [
      /* ============================================================ S1–2 */
      {
        id: 'su-icmek',
        title: 'Basit bir problem: Su içmek',
        en: 'A Simple Problem: Drinking Water',
        src: 'S1–2',
        minutes: 6,
        blocks: [
          P('Hoca derse bir tanımla değil, <b>sıradan bir eylemle</b> başlıyor: bir bardak su içmek. Amaç şu: "zeka" kelimesini tanımlamadan önce, en basit görünen bir işin bile ne kadar çok parçadan oluştuğunu görmek.'),
          THINK('su-adim',
            'Bir robota "masadaki bardaktan su iç" demek istiyorsun. Robotun bunu yapabilmesi için <b>hangi adımları</b> başarması gerekir? En az 5 adım yaz.',
            `<p>Hocanın listesi (S2) şöyle başlıyor: susadığının <b>farkına varmak</b>, bardağı ve suyu <b>tanımak</b>, ortamda su içmenin normal olduğuna <b>karar vermek</b>, eli bardağa uzatırken aradaki mesafeyi <b>geri beslemeyle</b> algılamak, bardağı doğru <b>kuvvetle</b> kavramak…</p><p>Sen 5 adım yazdıysan hoca 10 tane sayıyor ve sonunda "ve bunlara benzer <b>yüzlerce</b> davranışsal ve algısal süreç" diyor. Fark ettiğin gibi, bizim düşünmeden yaptığımız şeyler listenin büyük kısmını oluşturuyor.</p>`,
            'Bardağı görmeden önce ne olmalı? Bardağı tutarken ne ayarlanmalı? Ağza gelince ne koordine edilmeli?'),
          H('Hocanın listesi (S2)'),
          L([
            'Su gereksinimi olduğunun <b>farkına varması</b>',
            'Su bardağını ve içindeki suyu <b>tanıması</b>',
            'Bulunduğu sosyal koşullarda suyu içmesinin normal bir davranış olduğuna <b>karar vermesi</b>',
            'Eli bardağa uzanırken, el ile bardak arasında sürekli kısalan mesafeyi <b>geri besleme</b> sürecinden yararlanarak doğru algılaması ve bardağı yakalaması',
            'Bardağı belirli bir <b>kuvvet</b> derecesinde kavraması (çok sıkarsa kırılır, az sıkarsa düşer)',
            'Bardağı ağza uygun <b>hızla</b> getirmesi (yine geri beslemeyle)',
            'Ağzın açılışı ile bardağın dudağa dokunuşu arasında <b>koordinasyon</b>',
            'Yutkunma hızı ile ağza giren su miktarı arasında <b>denge</b>',
            'Yutkunma ile nefes alma arasında <b>koordinasyon</b>',
            'Ağza girecek su miktarı ile bardağın açısı arasında denge… ve <b>yüzlerce</b> benzer süreç'
          ], true),
          H('Listeyi gruplayalım'),
          P('On maddeyi ezberlemek yerine onları <b>ne tür bir iş</b> olduklarına göre gruplarsan hem akılda kalır hem de yapay zekanın alt alanları ortaya çıkar:'),
          CMP(
            ['Algılama', ['Susadığını fark etmek', 'Bardağı ve suyu tanımak', 'El–bardak mesafesini ölçmek']],
            ['Karar verme', ['Bu ortamda su içmek uygun mu?', 'Ne kadar su alınmalı?']],
            ['Kontrol ve koordinasyon', ['Kavrama kuvveti', 'Bardağı getirme hızı', 'Yutkunma–nefes dengesi']]
          ),
          N('why', '<b>Geri besleme</b> listede iki kez geçiyor. El bardağa yaklaşırken mesafe sürekli ölçülüyor ve hareket <b>hataya göre düzeltiliyor</b>. Bu fikri aklında tut: Yapay sinir ağları da çıktılarındaki hataya bakarak kendilerini düzeltir (3. ve 4. PDF).'),
          N('key', 'Bizim için "basit" olan bir iş, bir makine için yüzlerce algılama, karar ve kontrol sürecinin koordinasyonudur. Zekayı tanımlamak ve onu taklit etmek bu yüzden zordur.'),
          IMG('s02-zihin.png', 'Slayttaki "zihin–devre" görseli: insan zihni ile elektronik devrenin iç içe geçmesi, dersin ana sorusunu simgeliyor.', 'S2', true)
        ],
        checks: [
          MC('Hocaya göre bir bardak su içmek kaç sürecin koordinasyonunu gerektirir?',
            ['Bir iki basit refleks', 'Beş altı adım', 'Yüzlerce davranışsal ve algısal süreç', 'Hiçbiri, tamamen bilinçsiz bir eylemdir'], 2,
            'S2\'nin son maddesi: "…ve bunlara benzer yüzlerce davranışsal ve algısal süreç arasında dengeleme ve koordinasyon gerekir."'),
          MC('Slaytta "geri besleme" hangi süreç için vurgulanıyor?',
            ['Susadığını fark etme', 'Eli bardağa uzatırken kısalan mesafeyi algılayıp bardağı yakalama', 'Sosyal ortamda su içmenin uygunluğuna karar verme', 'Bardağı tanıma'], 1,
            'Mesafe sürekli ölçülür ve hareket buna göre düzeltilir. Aynı fikir bardağın ağza getirilmesinde de geçer.')
        ]
      },

      /* ============================================================ S3–5 */
      {
        id: 'zeka-nedir',
        title: 'Zeka nedir?',
        en: 'What Is Intelligence?',
        src: 'S3–5',
        minutes: 8,
        blocks: [
          THINK('zeka-tanim',
            '"Zeka nedir?" Tek cümleyle tanımla. Sonra tanımının <b>bir futbolcuyu, bir ressamı ve bir matematikçiyi</b> kapsayıp kapsamadığını kontrol et.',
            `<p>Çoğu kişi "problem çözme yeteneği" ya da "hızlı düşünme" gibi bir şey yazar. Bu tanım matematikçiyi kapsar ama futbolcunun sahadaki zekasını ya da ressamın görsel zekasını dışarıda bırakır.</p><p>Hoca da tam bu noktadan başlıyor: <b>Howard Gardner</b>'a göre tek bir zeka yoktur, <b>farklı zeka türleri</b> vardır (S3).</p>`),
          H('Çoklu zeka kuramı (S3)'),
          P('Prof. Howard Gardner <b>çoklu zeka</b> kavramını ileri sürmüştür. Slayttaki zeka türleri ve örnek meslekler:'),
          TABLE(['Zeka türü', 'Ne yapabilmek?', 'Örnek'], [
            ['Dilsel', 'Konuşma ve yazma dilinde sözcükleri etkili kullanmak', 'Politikacılar, yazarlar'],
            ['Sosyal', 'Başkalarının duygularını ve ruh hallerini anlamak', 'Politik liderler, danışmanlar'],
            ['Mantık-matematik', 'Sebep-sonuç ilişkisi kurmak, sayıları akıllıca kullanmak', 'Bilim insanları, matematikçiler, programcılar'],
            ['Görsel', 'Nesneleri hayalinde canlandırmak ve görmek', 'Ressam, mimar'],
            ['Müzik', 'Müziksel yetenek', 'Müzisyenler'],
            ['Dışa dönük (bedensel)', 'Bedeni ustaca kullanmak', 'Atletler, aktörler, dansçılar, heykeltıraşlar'],
            ['İçe dönük', 'Kendi iç dünyasını anlamak', 'Psikologlar, psikoterapistler']
          ]),
          N('teacher', 'Çoklu zeka teorisine göre <b>herkesin zeki olabilme ihtimali yüksektir</b>. Önemli olan, <b>hangi zeka türünden</b> söz edildiğidir.'),
          N('why', 'Bunu yapay zekaya uygula: "Bu makine zeki mi?" sorusu da "<b>hangi açıdan?</b>" sorusuna dönüşür. Satranç programı mantık-matematikte insanı geçebilir ama bedensel zekası sıfırdır. Bölümün ilerisinde (S67) hoca bu noktaya geri dönecek.'),
          H('Hocanın tanımı (S4)'),
          DEF('Zeka', 'Intelligence', 'Beynin <b>öğrenme, anlama, soyut düşünme, sebeplendirme, planlama, problem çözme</b> gibi zihinsel işlevlerine verilen isimdir.'),
          P('Zeka çok çeşitli kavramlardan oluşsa da en çok <b>IQ</b> (intelligence quotient, zeka katsayısı) testiyle değerlendirilir. Zeka araştırmalarının esas hedefi insandır, ama hayvanların öğrenme ve anlama yetenekleri üzerinde de çalışılır.'),
          N('trap', 'IQ, zekanın "en çok kullanılan" ölçüsüdür; zekanın kendisi değildir. Gardner\'ın kuramı tam olarak tek bir sayının yetersiz olduğunu söyler. Sınavda ikisini çelişkili sanma: slayt ikisini birlikte veriyor.'),
          H('Zeka değişebilir mi? (S5)'),
          THINK('zeka-degisir',
            'Çok çalışan biri <b>daha zeki</b> olur mu? Yoksa zeka doğuştan sabit midir? Gerekçeni yaz.',
            `<p>Hocanın cevabı (S5): Araştırmalar <b>zeka ve öğrenmenin birbiriyle çok yakın ilişkide</b> olduğunu gösteriyor. Zeki varlıklar çevrelerinde olup bitene dikkat ederek, yani <b>öğrenerek</b> bilgi birikimlerini artırır; bu da onları <b>daha zeki</b> yapar.</p>`),
          N('key', '<b>Öğrenme → bilgi birikimi → daha fazla zeka.</b> Bu döngü bütün dersin omurgası: bir yapay sinir ağı da veriden öğrendikçe "zekileşir". Zekayı öğrenmeden ayrı düşünemeyiz.')
        ],
        checks: [
          MC('Gardner\'ın çoklu zeka kuramına göre hangisi doğrudur?',
            ['Zeka tek bir sayıyla (IQ) tam olarak ölçülür', 'Farklı zeka türleri vardır; önemli olan hangi zeka türünden söz edildiğidir', 'Yalnızca mantık-matematik zekası gerçek zekadır', 'Zeka yalnızca insana özgüdür'], 1,
            'S3: "Herkesin zeki olabilme ihtimali yüksektir. Önemli olan, hangi zeka türünden söz edildiğidir."'),
          MC('S5\'e göre zeka ile öğrenme arasındaki ilişki nedir?',
            ['İlişkisizdir; zeka doğuştan sabittir', 'Çok yakın ilişkilidir; öğrenerek bilgi birikimini artıran varlık daha zeki olur', 'Öğrenme zekayı azaltır', 'Yalnızca hayvanlarda ilişkilidir'], 1,
            'Zeki varlıklar çevrelerine dikkat ederek, yani öğrenerek bilgi birikimini artırır; bu da onları daha zeki yapar.')
        ]
      },

      /* ============================================================ S6–7 */
      {
        id: 'yapay-zeka-nedir',
        title: 'Yapay zeka nedir?',
        en: 'What Is Artificial Intelligence?',
        src: 'S6–7',
        minutes: 6,
        blocks: [
          THINK('yz-tanim',
            'Zekayı tanımladık. Önüne "yapay" kelimesini koyunca ne değişir? Kendi <b>yapay zeka</b> tanımını yaz.',
            `<p>Hocanın tanımlarında iki ortak parça var: (1) <b>insan zekasına özgü yetenekler</b> (algılama, görme, düşünme, karar verme, bilgi edinme) ve (2) bunların <b>bilgisayarda</b> gerçekleştirilmesi. Tanımında bu ikisi varsa doğru yoldasın.</p>`),
          H('Hocanın üç tanımı (S6)'),
          DEF('Yapay zeka (1)', 'anlama ve taklit', 'İnsanın düşünme yapısını <b>anlamak</b> ve bunun benzerini ortaya çıkaracak bilgisayar işlemlerini geliştirmeye çalışmak.'),
          DEF('Yapay zeka (2)', 'donatılmış bilgisayar', 'Bilgi edinme, algılama, görme, düşünme ve karar verme gibi <b>insan zekasına özgü kapasitelerle donatılmış</b> bilgisayarlar.'),
          DEF('Yapay zeka (3)', 'bir bilim dalı olarak', 'Bilgisayarların algılama, görme, karar verme ve bilgi çıkarma gibi insan zekasına özgü yeteneklerle donatılması ve geliştirilmesi <b>bilimi</b>.'),
          N('why', 'Üç tanım üç farklı bakış açısı: ilki <b>insanı anlamaya</b> odaklanıyor (bilişsel bilim), ikincisi <b>ürüne</b> (akıllı bilgisayar), üçüncüsü <b>disipline</b> (bu işi yapan bilim). Sınavda birini yazman yeter, ama ortak parçayı mutlaka koru: <i>insan zekasına özgü yetenekler + bilgisayar</i>.'),
          H('İki büyük soru (S7)'),
          IMG('s07-ogrenen-robot.png', 'Hem kitap okuyan hem tornavidayla kendi devresini kurcalayan robot: öğrenme mi, programlanma mı?', 'S7', true),
          THINK('ogrenebilir-mi',
            '"Makine <b>öğrenebilir</b> mi?" ile "Makine <b>düşünebilir</b> mi?" aynı soru mu? Hangisini dışarıdan gözlemleyerek cevaplayabilirsin?',
            `<p>Aynı soru değiller. <b>Öğrenme</b> dışarıdan gözlemlenebilir: bir sistemin performansı deneyimle artıyorsa öğreniyordur. Bugün makineler bunu yapıyor (makine öğrenmesi, bir sonraki ders).</p><p><b>Düşünme</b> ise iç durumla ilgili ve dışarıdan doğrudan ölçülemez. Bölümün geri kalanı bu sorunun etrafında dönüyor: Turing "davranışa bakalım" diyecek (Turing testi), Searle "davranış yetmez" diyecek (Çin odası).</p>`)
        ],
        checks: [
          MC('Hocanın yapay zeka tanımlarının ortak noktası hangisidir?',
            ['Robotların insan gibi görünmesi', 'İnsan zekasına özgü yeteneklerin (algılama, görme, karar verme…) bilgisayarlarda gerçekleştirilmesi', 'Bilgisayarların daha hızlı hesap yapması', 'İnternete bağlı cihazlar'], 1,
            'Üç tanım da insan zekasına özgü kapasiteleri ve bilgisayarı birleştiriyor.'),
          MC('"Makine öğrenebilir mi?" sorusu neden "Makine düşünebilir mi?" sorusundan daha kolay cevaplanır?',
            ['Çünkü makineler hiç öğrenemez', 'Çünkü öğrenme, performansın deneyimle artmasından dışarıdan gözlemlenebilir; düşünme bir iç durumdur', 'Çünkü ikisi aynı sorudur', 'Çünkü düşünmeyi IQ testiyle ölçebiliriz'], 1,
            'Öğrenme davranıştan ölçülebilir; düşünmenin ölçülmesi tartışmalıdır (Turing testi ve Çin odası bunun tartışmasıdır).')
        ]
      },

      /* ============================================================ S8 */
      {
        id: 'makine-ogrenmesi',
        title: 'Geleneksel programlama ve makine öğrenmesi',
        en: 'Traditional Programming vs Machine Learning',
        src: 'S8',
        minutes: 6,
        blocks: [
          THINK('ml-fark',
            'Bir bilgisayara e-postaların spam olup olmadığını ayırt ettirmek istiyorsun. Bunu yapmanın <b>iki farklı yolu</b> ne olabilir?',
            `<p><b>1. yol:</b> Kuralları sen yazarsın ("konu satırında BEDAVA varsa spam"). Bu <b>geleneksel programlamadır</b>.</p><p><b>2. yol:</b> Bilgisayara binlerce e-posta ve her birinin "spam / değil" cevabını verirsin, kuralı <b>bilgisayar kendisi bulur</b>. Bu <b>makine öğrenmesidir</b>. Hocanın S8\'deki iki kutusu tam olarak bu farkı gösteriyor.</p>`),
          H('İki kutu (S8)'),
          DG('dg-trad-ml'),
          N('key', 'Farkı tek soruyla hatırla: <b>Program nereden geliyor?</b> Geleneksel programlamada programı insan yazar (Veri + Program → Çıktı). Makine öğrenmesinde programı bilgisayar veriden çıkarır (Veri + Çıktı → Program).'),
          DEF('Makine öğrenmesi', 'Machine learning', 'Bilgisayara <b>veri</b> ve bu veriye karşılık gelen <b>doğru çıktılar</b> verilir; bilgisayar aradaki ilişkiyi, yani <b>programı (kuralları)</b>, kendisi öğrenir. Öğrenilen program daha sonra yeni veriler için çıktı üretmekte kullanılır.'),
          N('class', 'Derste "<b>makine / bilgisayar öğrenmesi nedir?</b>" diye soruldu. Cevabın omurgası bu slayttaki iki kutu: girdiler ve çıktının yer değiştirmesi.'),
          H('Neden gerekli?'),
          THINK('ml-ne-zaman',
            'Hangi problemlerde kuralı <b>elle yazmak</b> neredeyse imkansızdır? İki örnek ver.',
            `<p>Yüz tanıma, el yazısı okuma, konuşmayı anlama… Bunları her gün yaparız ama <b>nasıl yaptığımızın kuralını</b> bilmeyiz; o yüzden yazamayız. Örnekleri gösterip kuralı makineye buldurmak tek çıkış yoludur.</p><p>Su içme örneğini (S2) hatırla: yüzlerce sürecin kuralını tek tek yazmak yerine sistemin deneyimden öğrenmesi gerekir. Bölümün sonunda (S60–61) hoca aynı noktaya "insanlar için kolay, makineler için zor görevler" olarak dönecek.</p>`),
          N('extra', 'İleriye bağlantı: Yapay sinir ağı bir makine öğrenmesi yöntemidir. Ağda "program" <b>ağırlıklardır</b>; "eğitim" de veriden doğru ağırlıkları bulmaktır. 4. PDF bunu "YSA zekası ağırlıklardır" diye söyleyecek.')
        ],
        checks: [
          MC('Makine öğrenmesinde bilgisayara ne verilir ve ne elde edilir?',
            ['Veri + program verilir, çıktı elde edilir', 'Veri + çıktı (doğru cevaplar) verilir, program elde edilir', 'Sadece program verilir, veri elde edilir', 'Sadece çıktı verilir, veri elde edilir'], 1,
            'S8: Machine Learning kutusunda Data ve Output girer, Program çıkar.'),
          MC('Aşağıdakilerden hangisi makine öğrenmesine en çok ihtiyaç duyulan probleme örnektir?',
            ['İki sayının toplamını hesaplamak', 'Bir fotoğraftaki yüzün kime ait olduğunu bulmak', 'Bir listeyi alfabetik sıralamak', 'Faiz hesabı yapmak'], 1,
            'Yüz tanımanın kuralını elle yazamayız; örneklerden öğrenmek gerekir. Diğerlerinin kuralları bellidir.')
        ]
      },

      /* ============================================================ S9–10 */
      {
        id: 'akilli-sistem',
        title: 'Akıllı sistem nedir?',
        en: 'What Is an Intelligent System?',
        src: 'S9–10',
        minutes: 7,
        blocks: [
          THINK('akilli-sistem',
            'Sıradan bir termostat ile "akıllı" bir termostatı ayıran ne? Bir sistemin <b>akıllı</b> sayılması için ondan neler beklersin?',
            `<p>Sıradan termostat yalnızca "sıcaklık 22'nin altındaysa ısıt" der. Akıllı olan ise evden çıkış saatlerini <b>öğrenir</b>, yanlış tahmin edince <b>kendini düzeltir</b>, mevsime <b>uyum</b> sağlar ve ne zaman ısıtmanın uygun olduğuna <b>karar verir</b>. Bu dört fiil hocanın tanımındaki dört maddeyle örtüşüyor.</p>`),
          H('Hocanın tanımı (S9)'),
          N('teacher', 'Akıllı sistemler şu özelliklere sahip sistemlerdir:<ul><li>Yapılmak istenen her şeyi yapan ve istenmeyen hiçbir şeyi yapmayan (<b>insan benzeri muhakeme</b>)</li><li>Başarısızlık durumunda kendini toparlayan (<b>hatalarından öğrenen</b>)</li><li><b>Çevresine adapte olan</b></li><li><b>Davranışlarının uygunluğu hakkında karar alabilen</b></li></ul>'),
          TABLE(['Özellik', 'Ne demek?', 'Akıllı termostatta'], [
            ['İnsan benzeri muhakeme', 'İsteneni yapar, istenmeyeni yapmaz', 'Kimse evde yokken boşuna ısıtmaz'],
            ['Hatalarından öğrenme', 'Başarısız olunca kendini düzeltir', 'Ev geç ısındıysa ertesi gün daha erken başlar'],
            ['Çevreye adaptasyon', 'Koşullar değişince davranışını değiştirir', 'Yaz-kış, tatil dönemine uyar'],
            ['Uygunluk kararı', 'Davranışının doğru olup olmadığını değerlendirir', 'Pencere açıkken ısıtmayı durdurur']
          ]),
          N('why', 'Dört maddeden ikisi doğrudan <b>öğrenmeyle</b> ilgili (hatalardan öğrenmek, çevreye adapte olmak). Zeka ile öğrenmenin iç içe olduğunu S5\'te görmüştük; akıllı sistem tanımı da aynı şeyi söylüyor.'),
          H('Ünlülerin görüşleri (S10)'),
          P('Hoca, yapay zekanın geleceği hakkında birbirinden çok farklı beş görüşü yan yana koyuyor:'),
          Q('Robots will take over the earth.', 'Kevin Warwick', 'Mühendis, dünyadaki ilk cyborg (sibernetik organizma)'),
          Q('Computers will never be intelligent.', 'Roger Penrose', 'Matematiksel fizikçi ve bilim felsefecisi'),
          Q('Humans will choose to become computers.', 'Ray Kurzweil', 'Yazar, mucit, fütürist'),
          Q('Rise of powerful AI will be either the best, or the worst thing, ever to happen to humanity.', 'Stephen Hawking', 'Fizikçi, evrenbilimci'),
          Q('Competition for AI superiority at national level most likely cause of WW3 imo.', 'Elon Musk', 'SpaceX kurucusu, Tesla ve PayPal kurucu ortaklarından'),
          THINK('gorusler',
            'Bu beş görüşten hangileri <b>birbiriyle çelişiyor</b>? Sen hangisine yakınsın ve neden?',
            `<p>En açık çelişki Penrose ile diğerleri arasında: Penrose "bilgisayarlar asla zeki olmayacak" derken Warwick ve Kurzweil makinelerin (ya da makineleşen insanların) üstünlüğünü öngörüyor. Hawking ikisini de mümkün görüyor; Musk ise riski makinede değil <b>devletler arası rekabette</b> görüyor.</p><p>Bu ayrışma bir sonraki dersin konusunun habercisi: "Makineler gerçekten düşünebilir mi?" sorusuna <b>hayır</b> diyenler zayıf yapay zeka, <b>evet</b> diyenler kuvvetli yapay zeka yaklaşımına yakındır.</p>`)
        ],
        checks: [
          MC('Hangisi hocanın saydığı akıllı sistem özelliklerinden biri <b>değildir</b>?',
            ['Başarısızlık durumunda kendini toparlaması', 'Çevresine adapte olması', 'Her zaman insandan hızlı çalışması', 'Davranışlarının uygunluğu hakkında karar alabilmesi'], 2,
            'Hız, akıllı sistem tanımında yok. Dört özellik: insan benzeri muhakeme, hatalardan öğrenme, çevreye adaptasyon, uygunluk kararı.'),
          MC('"Computers will never be intelligent" görüşü kime aittir?',
            ['Kevin Warwick', 'Roger Penrose', 'Ray Kurzweil', 'Stephen Hawking'], 1,
            'Roger Penrose, matematiksel fizikçi ve bilim felsefecisi (S10).')
        ]
      },

      /* ============================================================ S11–14 */
      {
        id: 'zayif-kuvvetli',
        title: 'Zayıf ve kuvvetli yapay zeka',
        en: 'Weak AI and Strong AI',
        src: 'S11–14',
        minutes: 9,
        blocks: [
          P('Yapay zeka araştırmacılarının benimsediği <b>iki yaklaşım</b> var (S11): <b>zayıf yapay zeka</b> ve <b>kuvvetli yapay zeka</b>.'),
          THINK('zk-tahmin',
            'Tanımlara bakmadan, yalnızca isimlerden tahmin et: "zayıf" ile "kuvvetli" arasındaki ayrımın <b>ölçütü</b> ne olabilir? Makinenin hızı mı, gücü mü, yoksa başka bir şey mi?',
            `<p>Ölçüt hız ya da işlem gücü <b>değil</b>. Asıl soru: <b>Makine gerçekten düşünebilir mi?</b> Zayıf yaklaşım "hayır, yalnızca zekiymiş gibi davranır" der; kuvvetli yaklaşım "evet, düşünerek karar verebilir" der. Yani bir önceki dersteki "makine düşünebilir mi?" sorusuna verilen iki farklı cevap.</p>`),
          H('Zayıf yapay zeka (S12)'),
          DEF('Zayıf yapay zeka', 'Weak AI', 'Makinelerin hiçbir zaman insanlar gibi düşünerek zekice hareketler yapamayacağını öngörür. Makineler <b>düşünemez</b>, ancak doğru şekilde kurgulandıklarında <b>istenen hareketleri sergilerler</b>.'),
          N('teacher', 'Bu yaklaşımda yapay zeka, makinelerin <b>zekice hareket etmesi</b> şeklindedir. Fakat bu hareket bir düşünme ya da sağduyu değildir: olası tüm durumlar makine tarafından algılanır ve <b>hangi durumda ne yapacağı önceden belirlenerek</b> ortaya çıkarılmış bir hareketler bütününün parçasıdır.'),
          H('Kuvvetli yapay zeka (S13)'),
          DEF('Kuvvetli yapay zeka', 'Strong AI', 'Makinelerin <b>düşünerek karar verebileceğini</b> öngörür.'),
          N('teacher', 'Elektromekanik veya biyomekanik bir sistemin <b>kendi düşünme yapısını geliştireceği</b>, insanların ona gösterdiklerinden öte <b>yeni çıkarımlar</b> elde edip bunları bilgi tabanına ekleyeceği ve daha sonra bu bilgilerin ışığında etrafındaki dünyayı <b>kendiliğinden öğrenebileceği</b> varsayılır.'),
          H('Bugün neredeyiz? (S14)'),
          L([
            'Her iki yaklaşımı da benimseyen araştırmacılar vardır.',
            'Günümüz teknolojisi kuvvetli yapay zekanın uygulanabilmesi için <b>yetersizdir</b>.',
            'Gerçekleştirilen YZ uygulamalarının <b>hepsi zayıf YZ</b>\'yi kullanmaktadır.',
            'Android\'deki Google Now, Windows\'taki Cortana, iPhone\'daki Siri: hepsi yapay zeka, ama teknik adıyla <b>güçlü değil, zayıf</b> yapay zeka.'
          ]),
          TABLE(['Ölçüt', 'Zayıf YZ', 'Kuvvetli YZ'], [
            ['Makine düşünebilir mi?', 'Hayır', 'Evet, düşünerek karar verebilir'],
            ['Davranış nereden gelir?', 'Önceden belirlenmiş: hangi durumda ne yapılacağı kurgulanmış', 'Kendi geliştirdiği düşünme yapısından'],
            ['Yeni bilgi', 'Kendisine gösterilenle sınırlı', 'Gösterilenin ötesinde yeni çıkarımlar yapar, bilgi tabanına ekler'],
            ['Bugün var mı?', 'Evet, tüm uygulamalar', 'Hayır, teknoloji yetersiz'],
            ['Örnek', 'Siri, Cortana, Google Now, satranç programı', '(Henüz yok) Dünyayı kendiliğinden öğrenen makine']
          ]),
          N('class', 'Derste "<b>zayıf / kuvvetli AI kavramları ve örnekleri</b>" üzerinde duruldu. Tanımı yazdıktan sonra mutlaka bir örnek ver ve "neden bu gruba girdiğini" bir cümleyle açıkla.'),
          H('Ayırt et'),
          DG('sort-zayif-kuvvetli'),
          H('Peki bugünkü sohbet botları?'),
          THINK('zk-llm',
            'ChatGPT gibi büyük dil modelleri neredeyse her konuda akıcı cevap veriyor. Hocanın tanımına göre bunlar <b>zayıf</b> mı, <b>kuvvetli</b> mi? Gerekçen hangi ölçüte dayanıyor?',
            `<p>Hocanın ölçütüne göre cevap <b>zayıf YZ</b>. Bu modeller metni <b>soldan sağa, bir sonraki kelimeyi tahmin ederek</b> üretir (derste "klasik LLM'ler soldan sağa doğru" diye geçti). Çok geniş bir alanda başarılılar, ama "düşündükleri", "anladıkları" ya da bilinçli oldukları gösterilmiş değil. Davranışları eğitim verisinden öğrenilmiş örüntülere dayanıyor.</p><p>Bu konu araştırmacılar arasında hâlâ tartışmalı. Sınavda <b>slayttaki tanıma sadık kal</b> ve gerekçeni "düşündüğü gösterilemiyor" ölçütüne dayandır. Bu soruya Çin odası dersinde (S26) yeniden döneceğiz.</p>`)
        ],
        checks: [
          MC('Zayıf ve kuvvetli yapay zekayı ayıran temel ölçüt hangisidir?',
            ['İşlemci hızı', 'Makinenin gerçekten düşünebilip düşünemediği', 'Robot gövdesi olup olmadığı', 'İnternete bağlı olup olmadığı'], 1,
            'Zayıf YZ: makine düşünemez, kurgulanmış hareketleri sergiler. Kuvvetli YZ: makine düşünerek karar verebilir.'),
          MC('S14\'e göre günümüzdeki yapay zeka uygulamaları için hangisi doğrudur?',
            ['Hepsi kuvvetli YZ\'dir', 'Hepsi zayıf YZ\'yi kullanır; teknoloji kuvvetli YZ için yetersizdir', 'Yarısı zayıf, yarısı kuvvetlidir', 'Siri kuvvetli YZ\'ye örnektir'], 1,
            '"Gerçekleştirilen YZ uygulamalarının hepsi zayıf YZ\'yi kullanmaktadır." Siri, Cortana, Google Now zayıf YZ örnekleridir.')
        ]
      },

      /* ============================================================ S15 */
      {
        id: 'zeki-davranis',
        title: 'Zeki davranışın ipuçları',
        en: 'Clues of Intelligent Behavior',
        src: 'S15',
        minutes: 5,
        blocks: [
          THINK('zeki-ipucu',
            'Bir çocuğun "zeki" olduğunu <b>hangi davranışlarından</b> anlarsın? En az 4 ipucu yaz.',
            `<p>Muhtemelen "çabuk öğreniyor", "yeni bir oyunu hemen kavrıyor", "sorunlara çözüm buluyor", "benzerlikleri fark ediyor" gibi şeyler yazdın. Hocanın listesi de neredeyse aynı (sonraki kart).</p>`),
          H('Hocanın listesi (S15)'),
          L([
            'Tecrübelerden <b>öğrenme</b>',
            'Yeni bir duruma başarılı ve çabuk <b>adaptasyon</b>',
            '<b>Problem çözebilme</b>',
            'Bilgiyi <b>bulma ve kullanma</b>',
            '<b>Muhakeme</b> edebilme',
            'Farklılar arasındaki <b>benzerlikleri</b> görebilme',
            'Benzerler arasındaki <b>farkları</b> görebilme',
            'Yeni fikirler / kavramlar <b>üretebilme</b>',
            'Çok anlamlı / <b>çelişki içeren bilgileri</b> kullanabilme'
          ], true),
          H('İpuçlarını makinelere uygula'),
          TABLE(['İpucu', 'Makinede karşılığı', 'Bugün durum'], [
            ['Tecrübelerden öğrenme', 'Makine öğrenmesi (S8)', 'Yapılabiliyor'],
            ['Yeni duruma adaptasyon', 'Akıllı sistemin "çevresine adapte olma" özelliği (S9)', 'Kısmen'],
            ['Benzerlik / fark görme', 'Sınıflandırma ve kümeleme', 'Yapılabiliyor'],
            ['Problem çözme, muhakeme', 'Arama, planlama, çıkarım', 'Belirli alanlarda'],
            ['Yeni fikir üretme', 'Yaratıcılık', 'Slayta göre YZ\'de yok (S64)'],
            ['Çelişkili bilgiyi kullanma', 'Belirsizlikle akıl yürütme', 'Zor']
          ]),
          N('why', 'Listedeki ilk iki madde (öğrenme, adaptasyon) akıllı sistem tanımında da vardı (S9). "Benzerlerdeki farkı, farklılardaki benzerliği görmek" ise ileride yapay sinir ağlarının asıl işi olacak: örnekleri sınıflara ayırmak.')
        ],
        checks: [
          MC('Hangisi hocanın saydığı zeki davranış ipuçlarından biridir?',
            ['Çok hızlı hesap yapabilme', 'Benzerler arasındaki farkları görebilme', 'Hiç hata yapmama', 'Çok fazla bilgi depolama'], 1,
            'S15: "Farklılar arasındaki benzerlikleri görebilme" ve "Benzerler arasındaki farkları görebilme" ayrı ayrı sayılır.'),
          MC('"Tecrübelerden öğrenme" ipucu makinede hangi kavrama karşılık gelir?',
            ['Geleneksel programlama', 'Makine öğrenmesi', 'Turing testi', 'Çin odası'], 1,
            'Deneyimle performansı artırmak, makine öğrenmesinin tanımıdır (S8).')
        ]
      },

      /* ============================================================ S16 */
      {
        id: 'turing-kim',
        title: 'Alan Turing kimdir?',
        en: 'Who Was Alan Turing?',
        src: 'S16',
        minutes: 4,
        blocks: [
          P('"Makine düşünebilir mi?" sorusunu ilk kez ölçülebilir bir teste çeviren kişi Alan Turing. Testi anlamadan önce onu tanıyalım.'),
          L([
            '<b>23 Haziran 1912</b>\'de Londra\'da doğdu.',
            '1938\'de ABD\'de Princeton Üniversitesi\'nde <b>Alonzo Church</b>\'ün yanında hazırladığı tezle doktor oldu.',
            'II. Dünya Savaşı sırasında Almanların <b>Enigma</b> şifrelerinin çözülmesinde önemli rol oynadı.',
            '1945\'te <b>ACE</b> (Automatic Computing Engine) adlı büyük bir bilgisayarın tasarım, yapım ve kullanım çalışmalarını yönetti.',
            '<b>1950</b>\'de <i>Mind</i> dergisinde yayımlanan "<b>Computing Machinery and Intelligence</b>" makalesinde bugün <b>Turing testi</b> olarak bilinen testi açıkladı.'
          ]),
          IMG(['s16-turing.jpeg', 's16-enigma.jpeg'], 'Turing\'in hayatını anlatan <i>The Imitation Game</i> (Taklit Oyunu) filminin afişi ve bir Enigma şifre makinesi.', 'S16'),
          N('why', 'Filmin adı tesadüf değil: Turing\'in 1950 makalesindeki test "<b>taklit oyunu</b>" (imitation game) adıyla başlar. Bir sonraki derste bu oyunun nasıl kurulduğunu göreceğiz.'),
          N('warn', 'Slaytta üniversite adı "Princetown" yazıyor; doğrusu <b>Princeton</b>. Ayrıca S17\'de testin "1951" yılında öne sürüldüğü yazıyor, ama makale (S16 ve S20\'de de yazdığı gibi) <b>1950</b> tarihli. Sınavda 1950 yaz.')
        ],
        checks: [
          MC('Turing testi hangi makalede açıklanmıştır?',
            ['"On Computable Numbers" (1936)', '"Computing Machinery and Intelligence" (1950, Mind dergisi)', '"Perceptrons" (1969)', '"Minds, Brains, and Programs" (1980)'], 1,
            'S16: 1950\'de Mind dergisinde yayımlanan "Computing Machinery and Intelligence".'),
          MC('Turing II. Dünya Savaşı sırasında hangi çalışmada önemli rol oynadı?',
            ['ACE bilgisayarının yapımı', 'Almanların Enigma şifrelerinin çözülmesi', 'İlk robotun yapımı', 'ELIZA programının yazılması'], 1,
            'Enigma kodlarının çözülmesi. ACE çalışmaları savaştan sonra, 1945\'te.')
        ]
      },

      /* ============================================================ S17–20 */
      {
        id: 'turing-testi',
        title: 'Turing testi: üç faz',
        en: 'The Turing Test in Three Phases',
        src: 'S17–20',
        minutes: 8,
        blocks: [
          THINK('zeka-olc',
            '"Makineler düşünebilir mi?" sorusunu cevaplamak için bir <b>deney</b> tasarlaman gerekse ne yapardın? "Düşünmek"i nasıl ölçerdin?',
            `<p>Sorun şu: "düşünmek"in herkesin kabul ettiği bir tanımı yok, makinenin içine bakıp düşünüp düşünmediğini göremiyoruz. Turing\'in hamlesi bu tanımsız soruyu <b>gözlemlenebilir bir soruyla</b> değiştirmek oldu: "Bir makine, yazılı bir sohbette <b>insandan ayırt edilemiyorsa</b>, onu zeki saymamız için bir sebep var mı?" Yani <b>iç süreç yerine davranışa</b> bakmak.</p>`),
          H('Üç faz (S17–19)'),
          DG('dg-turing-faz'),
          N('trap', 'Birinci fazda makine <b>yok</b>: erkek, kadın ve hakem var. Makine ikinci fazda erkek ile kadının yerine insan ile makine konarak giriyor. "Turing testi baştan beri insan–makine testiydi" demek yanlış olur.'),
          H('Neden %50?'),
          THINK('yuzde50',
            'İkinci fazda hakemin isabeti <b>%50\'den azsa</b> makine zeki sayılıyor. Neden tam olarak %50?',
            `<p>Hakem iki katılımcıdan birini seçiyor. Hiçbir ipucu olmadan <b>yazı-tura</b> atsa bile %50 isabet eder. Hakem %50\'yi geçemiyorsa, makineyi insandan ayırt etmede <b>şanstan daha iyi değildir</b>. Turing\'e göre bu, makinenin insanın kabul edilebilir bir simülasyonu, yani zeki olduğunu gösterir.</p>`),
          H('Turing\'in ölçütü (S20)'),
          IMG('s20-turing-testi.png', 'İnsan sorgulayıcı (solda), duvarın arkasında bir insan ve bir YZ sistemi. Sorgulayıcı yalnızca terminal üzerinden konuşur ve "?" ile kimin kim olduğunu bulmaya çalışır.', 'S20'),
          P('Turing (1950) iki soru soruyor: "Makineler <b>düşünebilir</b> mi?" ve "Makineler <b>akıllıca davranabilir</b> mi?" Ölçütü ise şu:'),
          N('teacher', '<ul><li>Sonuçların <b>nasıl</b> alındığı önemli değil.</li><li>Sonuçların <b>insanın aldığı sonuçlara benzer</b> olması önemli.</li></ul>'),
          N('why', 'Bu bir <b>davranışçı</b> ölçüt: makinenin içinde ne olduğuna bakmıyor, yalnızca dışarıdan görünen cevaplara bakıyor. Bu ölçütün zayıf noktası da burası: İleride Searle\'ün Çin odası tam olarak "sonucun nasıl alındığı önemlidir" diyerek bu fikre itiraz edecek.'),
          N('key', 'Turing testi = sorgulayıcı + yazılı kanal + gizlenmiş katılımcılar + "ayırt edilemezlik" ölçütü.')
        ],
        checks: [
          MC('Turing testinde bir makine neye göre "zeki" sayılır?',
            ['İç yapısının insan beynine benzemesine', 'Yazılı sohbette hakemin onu insandan ayırt edememesine', 'Matematik sorularını insandan hızlı çözmesine', 'Bir robot gövdesiyle hareket edebilmesine'], 1,
            'S18/S20: Hakem insan ile makineyi ayırt edemiyorsa (isabet %50\'nin altında), makine zekidir. Sonuçların nasıl alındığı önemli değildir.'),
          MC('Turing testinin <b>birinci fazında</b> hakemin görevi nedir?',
            ['Hangisinin makine olduğunu bulmak', 'Hangisinin erkek olduğunu bulmak', 'Tek katılımcının insan mı makine mi olduğunu bulmak', 'Makineye matematik sorusu sormak'], 1,
            'Birinci faz (taklit oyunu): erkek, kadın ve hakem. Hakem hangisinin erkek olduğunu belirlemeye çalışır; kadın onu yanıltmaya çalışır.')
        ]
      },

      /* ============================================================ S21–23 */
      {
        id: 'turing-gecmek',
        title: 'Turing testini geçmek',
        en: 'Passing the Turing Test',
        src: 'S21–23',
        minutes: 8,
        blocks: [
          THINK('tt-yetenek',
            'Bir program <b>yalnızca yazılı sohbette</b> insan gibi görünmek istiyor. Hangi yeteneklere ihtiyacı var? (İpucu: Hakem ne yazacak, program ne yapmalı?)',
            `<p>Hakemin yazdığını <b>anlamalı</b> ve insan gibi <b>cevap yazmalı</b>; konuştuğu konular hakkında bir şeyler <b>bilmeli</b> ve bunları saklamalı; bildiklerinden <b>çıkarım</b> yapmalı; sohbet ilerledikçe yeni duruma <b>uyum</b> sağlamalı. Hocanın listesi bu dördü (sonraki kart).</p>`),
          H('Gereken dört yetenek (S21)'),
          TABLE(['Yetenek', 'Neden gerekli?'], [
            ['Doğal dil işleme', 'Hakemin yazdıklarını anlamak ve insan gibi cümle kurmak'],
            ['Bilgi temsili', 'Bildiklerini ve sohbette öğrendiklerini saklamak'],
            ['Makine öğrenmesi', 'Yeni durumlara uyum sağlamak, örüntüleri yakalamak'],
            ['Otomatikleştirilmiş muhakeme', 'Sorulara cevap verebilmek için bilgiden çıkarım yapmak']
          ]),
          N('why', 'Listede <b>görme</b> ya da <b>robotik</b> yok. Neden? Çünkü testte fiziksel ipucu verilmiyor, konuşma yalnızca ekran ve klavyeyle yapılıyor (S17). Makinenin bir gövdesi olması gerekmiyor.'),
          H('Loebner Ödülü (S21)'),
          IMG('s21-loebner.jpeg', 'Loebner Ödülü madalyası.', 'S21', true),
          P('<b>1991</b>\'de Dr. Hugh Loebner, Turing testini geçen programa <b>100.000 $</b> ödül koydu. Loebner yarışması yıllarca her yıl düzenlendi; her yıl en insansı sohbet eden program ödüllendirildi, ama büyük ödülü kimse alamadı.'),
          LINK('site', 'Loebner Prize resmi sitesi', 'Hocanın verdiği bağlantı: Turing testi yarışmasının (Loebner Ödülü) kuralları ve geçmiş sonuçları. Site artık güncellenmiyor olabilir.', 'http://www.loebner.net/', 'S21'),
          H('2014: "Dünyada bir ilk" (S22)'),
          IMG(['s22-bbc-eugene.png', 's22-guardian-eugene.png'], 'BBC ve The Guardian haberleri (9 Haziran 2014): "Eugene Goostman" adlı program, hakemlerin %33\'ünü 13 yaşında bir çocuk olduğuna inandırdı.', 'S22'),
          THINK('eugene',
            'Haberler "Turing testi ilk kez geçildi" diyor. Sence gerçekten geçildi mi? Programın kendini <b>13 yaşında, anadili İngilizce olmayan</b> bir çocuk olarak tanıtması neden önemli olabilir?',
            `<p>Eleştirilecek iki nokta var:</p><ul><li><b>Eşik:</b> %33, hakemlerin üçte ikisinin makineyi <b>yakaladığı</b> anlamına geliyor. Organizatörler, Turing\'in 1950 makalesindeki "beş dakikalık sohbetten sonra ortalama sorgulayıcının doğru tahmin şansı %70\'i geçmeyecek" öngörüsünden yola çıkıp %30\'u eşik saydılar. Bu, ikinci fazdaki "%50" fikrinden çok daha gevşek.</li><li><b>Rol seçimi:</b> 13 yaşında, yabancı bir çocuk rolü dilbilgisi hatalarını, bilgi eksikliğini ve konu değiştirmeyi <b>mazur gösterir</b>. Hakemler beklentilerini düşürür. Bu, S25\'teki "<b>sorgulayıcı faktörü</b>" ile aynı şey: bazı insanları her zaman kandırabiliriz.</li></ul><p>Bu yüzden birçok araştırmacı bu sonucu Turing testinin geçilmesi olarak kabul etmedi.</p>`),
          H('Tersine Turing testi (S23)'),
          IMG('s23-minimal-turing.png', '"Minimal Turing Test" haberi (2018): İnsanlardan, insan olduklarını tek bir kelimeyle kanıtlamaları istendi.', 'S23', true),
          THINK('tek-kelime',
            'Bir hakeme <b>insan olduğunu tek kelimeyle</b> kanıtlaman gerekse hangi kelimeyi seçerdin? Neden o kelime?',
            `<p>2018\'deki çalışmada (MIT, McCoy ve Ullman) insanların en sık seçtiği kelimeler "love" (sevgi), "compassion" (şefkat), "human" (insan), "please" (lütfen) gibi <b>duygu</b> kelimeleriydi. Ama hakemleri en çok ikna eden kelime şaşırtıcı biçimde "poop" (kaka) oldu: <b>mizah ve tabu</b>, insan olmanın işareti sayıldı.</p><p>Testin yönü burada <b>tersine</b> dönüyor: Makinenin insanı taklit edip edemediği değil, insanın kendini makineden nasıl ayırdığı soruluyor. Bu da insanlara göre "insanı insan yapan" şeyin hesap değil duygu olduğunu gösteriyor.</p>`)
        ],
        checks: [
          MC('Hocanın listesine göre Turing testini geçmek için hangisi <b>gerekmez</b>?',
            ['Doğal dil işleme', 'Bilgi temsili', 'Bilgisayarla görme ve robot gövdesi', 'Otomatikleştirilmiş muhakeme'], 2,
            'Test yalnızca yazılı kanalla yapılır; fiziksel ipucu verilmez. Dört gereksinim: doğal dil işleme, bilgi temsili, makine öğrenmesi, otomatik muhakeme.'),
          MC('Loebner Ödülü için hangisi doğrudur?',
            ['1950\'de Turing tarafından konulmuştur', '1991\'de Dr. Hugh Loebner tarafından 100.000 $ olarak konulmuştur', 'Eugene Goostman büyük ödülü kazanmıştır', 'Bir satranç yarışmasıdır'], 1,
            'S21: 1991, Dr. Hugh Loebner, 100.000 $ ödül.')
        ]
      },

      /* ============================================================ S24–25 */
      {
        id: 'turing-sonuc',
        title: 'Turing\'in diyaloğu ve testin sonucu',
        en: 'Turing\'s Dialogue and Conclusions',
        src: 'S24–25',
        minutes: 6,
        blocks: [
          P('Turing makalesinde testi geçmeye çalışan bir programla şöyle bir konuşma hayal ediyor (S24):'),
          { t: 'code', text: 'Sorgulayıcı: "Please write me a sonnet on the topic of the Forth Bridge."\nProgram:     "Count me out on this one. I never could write poetry."\n\nSorgulayıcı: "Add 34957 to 70764."\nProgram:     (yaklaşık 30 saniye bekler, sonra)  "105621."' },
          THINK('diyalog',
            'Bu kısa diyalogda program insan gibi görünmek için <b>iki "hile"</b> yapıyor. İkisini de bul. (İpucu: Toplamayı kendin yap.)',
            `<p><b>1. hile:</b> Şiir yazmayı <b>reddediyor</b>: "Bu konuda beni sayma, hiç şiir yazamadım." Çoğu insan da soneyi anında yazamaz; reddetmek insanca.</p><p><b>2. hile:</b> Toplama için <b>30 saniye bekliyor</b> ve cevap <b>yanlış</b>! 34957 + 70764 = <b>105721</b>, program 105621 diyor. Bir bilgisayar bu toplamı anında ve hatasız yapar; insan gibi görünmek için hem yavaşlıyor hem de <b>hata yapıyor</b>.</p><p>Yani testi geçmek için makinenin bazen <b>daha az yetenekli görünmesi</b>, hatta <b>yalan söylemesi</b> gerekiyor. Hocanın sonuç slaytı tam buna varıyor.</p>`),
          H('Sonuç (S25)'),
          L([
            '<b>Sorgulayıcı faktörü:</b> Bazı insanları her zaman kandırabiliriz.',
            'Turing testini geçebilecek bir program <b>dili insan gibi</b> kullanabilmelidir.',
            'Turing testini geçebilecek bir program <b>yalan söyleyebilmelidir</b>.',
            'Yalan söyleyebilmek <b>bilinç ve irade</b> gerektirir.'
          ]),
          N('why', 'Bu bir akıl yürütme zinciri: testi geçmek → dili insan gibi kullanmak → (S24\'teki gibi) yalan söylemek → bilinç ve irade. Zincir doğruysa testi geçen bir makinenin bilinci olması gerekir. "Sorgulayıcı faktörü" ise testin zayıf noktası: sonuç <b>hakemin ne kadar kolay kandırıldığına</b> bağlı (Eugene örneği).'),
          THINK('yalan-bilinc',
            'Zincirin son halkasına itiraz et: "Yalan söylemek bilinç gerektirir" önermesi her zaman doğru mu? S24\'teki programa tekrar bak.',
            `<p>S24\'teki program "yalan" söylüyor ama bunu <b>programcı öyle kurguladığı için</b> yapıyor: "toplama sorulursa 30 sn bekle, bir basamağı değiştir." Bu, zayıf YZ tanımındaki "hangi durumda ne yapacağı önceden belirlenmiş" davranış (S12).</p><p>Yani yalan <b>davranışı</b> bilinç olmadan taklit edilebilir. Dışarıdan bakan için ikisi aynı görünür. "Doğru davranış anlamak demek değildir" fikri bir sonraki dersin konusu: <b>Çin odası</b>.</p>`)
        ],
        checks: [
          MC('S24\'teki diyalogda programın toplama sorusuna verdiği cevapla ilgili hangisi doğrudur?',
            ['Cevap doğrudur ve anında verilmiştir', 'Cevap yaklaşık 30 saniye beklenerek verilmiştir ve aslında yanlıştır (doğrusu 105721)', 'Program cevap vermeyi reddetmiştir', 'Program şiirle cevap vermiştir'], 1,
            '34957 + 70764 = 105721. Program 30 sn bekleyip 105621 diyor: insan gibi görünmek için yavaşlık ve hata.'),
          MC('S25\'e göre Turing testini geçebilecek bir program için hangisi <b>söylenmemiştir</b>?',
            ['Dili insan gibi kullanabilmelidir', 'Yalan söyleyebilmelidir', 'İnsandan daha hızlı hesap yapabilmelidir', 'Bazı insanları her zaman kandırabiliriz (sorgulayıcı faktörü)'], 2,
            'Hız bir gereksinim değil; tersine, insan gibi görünmek için yavaşlamak gerekebilir (S24).')
        ]
      },

      /* ============================================================ S26 */
      {
        id: 'cin-odasi',
        title: 'Çin odası',
        en: 'The Chinese Room',
        src: 'S26',
        minutes: 8,
        blocks: [
          THINK('cin-giris',
            'Çince bilmiyorsun. Ama elinde <b>mükemmel bir kural kitabı</b> var: her Çince soru için hangi Çince cevabı vereceğin yazıyor. Kapının altından gelen her soruya kusursuz cevap veriyorsun. <b>Çince biliyor musun?</b>',
            `<p>Çoğu kişinin sezgisi "hayır" der: Sen yalnızca şekilleri eşleştiriyorsun, hiçbir cümlenin anlamını bilmiyorsun. Ama dışarıdan bakan biri senin Çince bildiğini düşünür. John Searle\'ün düşünce deneyi tam olarak bu sezgiyi kullanıyor.</p>`),
          H('Düşünce deneyi (S26)'),
          IMG('s26-cin-odasi.jpg', 'Kilitli oda: içeride Çince bilmeyen bir kişi ve kural kitabı, dışarıda soru soran Çinliler.', 'S26', true),
          P('California Üniversitesi\'nden <b>John Searle</b>, bilgisayarların düşünemediğini göstermek için bu deneyi tasarladı. Adım adım izle:'),
          DG('dg-cin-odasi'),
          H('Searle\'ün sonucu'),
          N('teacher', 'Bilgisayarda da insanlarda olduğu gibi, açıklanmamış Çince simgeleri işleten <b>biçimsel bir program</b> vardır. Halbuki bir dili anlamak, bir takım biçimsel simgeleri bilmek demek değil, <b>akıl durumlarına sahip olmak</b> demektir.'),
          CMP(
            ['Turing (S20)', ['Sonucun nasıl alındığı önemli değil', 'Davranış insanınkinden ayırt edilemiyorsa makine zekidir', 'Dışarıdan bakış']],
            ['Searle (S26)', ['Sonucun nasıl alındığı önemli', 'Doğru davranış, anlamak demek değildir', 'İçeriden bakış: odadaki kişi hiçbir şey anlamıyor']]
          ),
          N('key', '<b>Söz dizimi (sentaks) ≠ anlam (semantik).</b> Simgeleri kurala göre doğru işlemek, onları anlamak değildir. Çin odası Turing testine ve <b>kuvvetli YZ</b>\'ye yöneltilmiş bir itirazdır; zayıf YZ ile çelişmez.'),
          H('Searle\'e itiraz edebilir misin?'),
          THINK('cin-itiraz',
            'Biri şöyle diyor: "Odadaki kişi Çince bilmiyor, doğru. Ama <b>kişi + kural kitabı + oda</b>dan oluşan sistemin bütünü Çince biliyor." Bu itiraz ikna edici mi?',
            `<p>Bu, literatürde "<b>sistem itirazı</b>" (systems reply) olarak bilinir (ek bilgi, slaytta yok). Fikir şu: Beynindeki tek bir nöron da Türkçe bilmez, ama beynin bütünü bilir.</p><p>Searle\'ün cevabı: "Kişi bütün kural kitabını <b>ezberlesin</b> ve odadan çıksın. Artık sistemin tamamı onun kafasında. Yine de tek bir Çince kelimenin anlamını bilmiyor." Tartışma bugün de sürüyor. Sınavda bu itirazı ve cevabını yazabilmek, hocanın sevdiği "mantığı sorgulama" türünden bir artı.</p>`)
        ],
        checks: [
          MC('Çin odası deneyiyle Searle neyi göstermeye çalışır?',
            ['Bilgisayarların Çince öğrenebildiğini', 'Simgeleri kurala göre doğru işlemenin anlamak demek olmadığını, yani bilgisayarların düşünmediğini', 'Turing testinin her zaman geçilebildiğini', 'Kural kitaplarının yanlış olduğunu'], 1,
            'Dili anlamak biçimsel simgeleri bilmek değil, akıl durumlarına sahip olmaktır.'),
          MC('Çin odası en çok hangi görüşe karşı bir itirazdır?',
            ['Zayıf yapay zeka', 'Kuvvetli yapay zeka ve Turing\'in davranışçı ölçütü', 'Makine öğrenmesi', 'Çoklu zeka kuramı'], 1,
            'Zayıf YZ zaten "makine düşünmez, zekiymiş gibi davranır" der. Çin odası, "doğru davranan makine düşünüyordur" fikrine karşıdır.')
        ]
      },

      /* ============================================================ S27–28 */
      {
        id: 'eliza-rur',
        title: 'ELIZA ve R.U.R.',
        en: 'ELIZA and R.U.R.',
        src: 'S27–28',
        minutes: 7,
        blocks: [
          H('ELIZA (S27)'),
          P('<b>ELIZA</b>, Joseph Weizenbaum\'un <b>1966</b>\'da geliştirdiği bir bilgisayar programıdır. Hastanın cevaplarını biraz değiştirip <b>soru biçimine dönüştürerek</b> geri soran bir <b>Rogerian terapisti</b> taklit eder:'),
          L([
            '"Başım ağrıyor" → "Neden başının ağrıdığını söylüyorsun?"',
            '"Babam bana kızmış" → "Sizin ailede daha kimler sana kızgındır?"'
          ]),
          LINK('wiki', 'Joseph Weizenbaum (Wikipedia)', 'Hocanın verdiği bağlantı: ELIZA\'yı geliştiren, bilgisayar bilimleri alanında MIT\'den emekli profesörün hayatı. Weizenbaum daha sonra insanların ELIZA\'ya bağlanmasından endişe edip YZ eleştirmeni oldu.', 'http://en.wikipedia.org/wiki/Joseph_Weizenbaum', 'S27'),
          LINK('wiki', 'Rogerian psychotherapy (Wikipedia)', 'Hocanın verdiği bağlantı: ELIZA\'nın taklit ettiği terapi yöntemi. Terapist yorum yapmaz; danışanın söylediklerini soruya çevirip geri yansıtır. Bu yüzden "anlamadan" taklit etmek kolaydır.', 'http://en.wikipedia.org/wiki/Rogerian_psychotherapy', 'S27'),
          H('Dene: mini ELIZA'),
          DG('dg-eliza'),
          THINK('eliza-cin',
            'ELIZA ile Çin odası arasında nasıl bir bağ var? ELIZA Turing testini geçebilir mi?',
            `<p>ELIZA, Çin odasındaki <b>kural kitabının</b> kendisi: Cümledeki anahtar kelimeyi yakalayıp hazır bir kalıba yerleştiriyor. Hiçbir şeyi anlamıyor. "Perdenin arkasını" açınca bunu görüyorsun.</p><p>Yine de 1966\'da bazı kullanıcılar ELIZA\'yla duygusal bağ kurdu; Weizenbaum\'un sekreterinin onunla yalnız konuşmak istediği anlatılır (bu olaya "ELIZA etkisi" denir). Kısa ve terapi gibi dar bir sohbette bazı insanları kandırabilir (<b>sorgulayıcı faktörü</b>, S25). Ama dikkatli bir hakem, birkaç soruda kalıpların tekrarlandığını fark eder.</p>`),
          H('"Robot" kelimesi nereden geliyor? (S28)'),
          L([
            'Çek yazar <b>Karel Čapek</b>\'in <b>1920</b>\'de yazdığı "<b>R.U.R.</b>" (Rossum\'un Akıllı Robotları) oyununda "robot" sözcüğü ilk kez kullanıldı.',
            'Çekçede "işçi" anlamına gelen kelimeyi Čapek, "insan yapısı, insan benzeri mekanik işçi" anlamında kullandı.',
            'Oyun, insanların çalışma zorunluluğundan kurtulduğu bir dünyayı anlatır. Bilgin Rossum robotu icat eder, oğlu mühendis Rossum seri üretime geçer.',
            'Robotlar insana çok benzer ama üreyemez. Düşünen varlıklar oldukları için, bütün bedensel işleri onlara yükleyen insanlara karşı bir süre sonra <b>ayaklanmaya</b> karar verirler.'
          ]),
          N('why', '1920\'de, bilgisayar bile yokken, "düşünen makineler insanlara karşı ayaklanır" kaygısı vardı. S10\'daki Warwick, Hawking ve Musk\'ın kaygılarıyla aynı tema. Bölümün sonundaki etik tartışmasının (S69) ilk örneği.')
        ],
        checks: [
          MC('ELIZA programı nasıl çalışır?',
            ['Konuşmanın anlamını derinlemesine anlayarak cevap üretir', 'Cevapları biraz değiştirip soru biçimine dönüştürerek geri sorar (kalıp eşleme)', 'İnternetten cevap arar', 'Bir yapay sinir ağıyla eğitilmiştir'], 1,
            'S27: Rogerian terapisti taklit eder; anahtar kelimelere göre cevabı soruya çevirir. Anlama yoktur.'),
          MC('"Robot" sözcüğü ilk kez nerede kullanılmıştır?',
            ['Turing\'in 1950 makalesinde', 'Karel Čapek\'in 1920 tarihli R.U.R. oyununda', 'Asimov\'un robot yasalarında', 'ELIZA programında'], 1,
            'S28: R.U.R. (Rossum\'un Akıllı Robotları), 1920. Çekçede "işçi" anlamına gelir.')
        ]
      }
    ]
  });
})(window.YSALab = window.YSALab || {});
