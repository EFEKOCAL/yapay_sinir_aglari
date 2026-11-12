/*
 * exam-questions.js — Sınav soruları (aralıklı tekrar sayfası ve bölüm tekrarları).
 *
 * src: 'class' → hoca bu konuyu derste sordu / üzerinde durdu (ders notlarından)
 *      'slide' → sorunun kendisi hocanın slaytında var
 *      'exam'  → slayt içeriğinden sınav formatında yazıldı
 * Yeni soru: { id, set, src, lesson: 'ch1/ders-id', focus: 'kartta aranacak ifade', q, a, keys: [...] }
 * id'ler ilerleme kaydına bağlıdır, sonradan değiştirmeyin.
 */
(function (YSALab) {
  'use strict';

  YSALab.teacherQuestions = [
    {
      id: 'c1-1', set: 'Bölüm 1 · ders notu', src: 'class', lesson: 'ch1/makine-ogrenmesi', focus: 'İki kutu',
      q: 'Makine (bilgisayar) öğrenmesi nedir? Geleneksel programlamadan farkını açıklayınız.',
      a: `<p>Geleneksel programlamada bilgisayara <b>veri</b> ve insanın yazdığı <b>program</b> (kurallar) verilir, bilgisayar <b>çıktıyı</b> üretir. Makine öğrenmesinde ise bilgisayara <b>veri</b> ve bu veriye karşılık gelen <b>doğru çıktılar</b> verilir; bilgisayar aradaki ilişkiyi, yani <b>programı</b>, kendisi öğrenir (S8).</p><p>Örnek: spam filtresi. Kuralları elle yazmak yerine binlerce etiketli e-postadan kuralı makineye buldurmak. Kuralını bilmediğimiz işlerde (yüz tanıma, konuşma tanıma) tek yol budur.</p>`,
      keys: ['Geleneksel: veri + program → çıktı', 'ML: veri + çıktı → program', 'Kuralı insan değil bilgisayar bulur', 'Bir örnek (spam, yüz tanıma…)']
    },
    {
      id: 'c1-2', set: 'Bölüm 1 · ders notu', src: 'class', lesson: 'ch1/zayif-kuvvetli', focus: 'Zayıf yapay zeka \\(S12\\)',
      q: 'Zayıf ve kuvvetli yapay zeka yaklaşımlarını karşılaştırınız, birer örnek veriniz.',
      a: `<p><b>Zayıf YZ:</b> Makineler düşünemez; doğru kurgulandıklarında istenen hareketleri sergilerler. Bu bir düşünme ya da sağduyu değil, olası durumların algılanıp hangi durumda ne yapılacağının önceden belirlendiği bir hareketler bütünüdür (S12). Örnek: Siri, Cortana, Google Now, satranç programı.</p><p><b>Kuvvetli YZ:</b> Makineler düşünerek karar verebilir; sistem kendi düşünme yapısını geliştirir, kendisine gösterilenin ötesinde yeni çıkarımlar yapıp bilgi tabanına ekler ve dünyayı kendiliğinden öğrenir (S13).</p><p>Günümüz teknolojisi kuvvetli YZ için yetersizdir; gerçekleştirilen tüm uygulamalar zayıf YZ\'dir (S14).</p>`,
      keys: ['Ayrım ölçütü: makine düşünebilir mi?', 'Zayıf: davranış önceden kurgulanmış', 'Kuvvetli: kendi düşünme yapısı, yeni çıkarım, kendiliğinden öğrenme', 'Bugünkü uygulamaların hepsi zayıf YZ', 'Örnek (Siri vb.)']
    },
    {
      id: 'c1-3', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/akilli-sistem', focus: 'Hocanın tanımı \\(S9\\)',
      q: 'Akıllı sistem nedir? Bir sistemi akıllı yapan özellikleri yazınız.',
      a: `<p>Akıllı sistemler: yapılmak istenen her şeyi yapan ve istenmeyen hiçbir şeyi yapmayan (insan benzeri muhakeme), başarısızlık durumunda kendini toparlayan (hatalarından öğrenen), çevresine adapte olan ve davranışlarının uygunluğu hakkında karar alabilen sistemlerdir (S9).</p>`,
      keys: ['İsteneni yapar, istenmeyeni yapmaz', 'Hatalarından öğrenir', 'Çevresine adapte olur', 'Davranışının uygunluğuna karar verir']
    },
    {
      id: 'c1-4', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/turing-testi', focus: 'Üç faz',
      q: 'Turing testini fazlarıyla anlatınız. Testin zekayı ölçme ölçütü nedir?',
      a: `<p><b>1. faz (taklit oyunu):</b> Ekran ve klavyeyle bağlı üç oda: erkek, kadın, hakem. Hakem hangisinin erkek olduğunu bulmaya çalışır; erkek yardım eder, kadın hakemi kandırmaya çalışır.</p><p><b>2. faz:</b> Erkek ile kadının yerine bir insan ve bir makine. Hakemin isabeti %50\'den azsa makine insanın kabul edilebilir bir simülasyonudur, yani zekidir.</p><p><b>3. faz:</b> Tek katılımcı; hakem onun insan mı bilgisayar mı olduğunu anlamaya çalışır.</p><p><b>Ölçüt (S20):</b> Sonuçların nasıl alındığı önemli değil, insanın aldığı sonuçlara benzer olması önemli. Yani davranışa bakan bir ölçüt.</p>`,
      keys: ['1. faz: erkek-kadın-hakem (taklit oyunu)', '2. faz: insan-makine, %50 eşiği', '3. faz: tek katılımcı', 'Ölçüt: sonuçların insana benzerliği, nasıl alındığı değil', 'Yalnızca yazılı kanal']
    },
    {
      id: 'c1-5', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/cin-odasi', focus: 'Searle',
      q: 'Çin odası deneyini anlatınız. Bu deney Turing testine nasıl bir itiraz getirir?',
      a: `<p>Searle\'ün düşünce deneyi: Çince bilmeyen bir kişi, Çince simgeleri biçimsel olarak eşleştiren bir kural kitabıyla odaya kapatılır. Dışarıdan gelen Çince sorulara kitaba bakarak doğru cevap kağıtlarını verir. Dışarıdakiler onun Çince bildiğini sanar, ama o hiçbir şey anlamamaktadır.</p><p>Bilgisayar da simgeleri işleten biçimsel bir programdır. Bir dili anlamak simgeleri bilmek değil, akıl durumlarına sahip olmaktır (S26). Turing testi "sonucun nasıl alındığı önemli değil" der; Çin odası ise doğru davranışın anlamak demek olmadığını gösterir: testi geçmek düşünmenin kanıtı değildir.</p>`,
      keys: ['Kural kitabı, Çince bilmeyen kişi', 'Dışarıdakiler Çince bildiğini sanar', 'Biçimsel simge işleme ≠ anlama (sentaks ≠ semantik)', 'Turing\'in davranışçı ölçütüne itiraz', 'Kuvvetli YZ\'ye karşı']
    },
    {
      id: 'c1-6', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/turing-gecmek', focus: 'Gereken dört',
      q: 'Bir programın Turing testini geçebilmesi için hangi yeteneklere sahip olması gerekir?',
      a: `<p>Doğal dil işleme, bilgi temsili, makine öğrenmesi ve otomatikleştirilmiş muhakeme (S21). Test yazılı yapıldığı için görme ya da robotik gerekmez. Ayrıca S25\'e göre program dili insan gibi kullanabilmeli ve yalan söyleyebilmelidir.</p>`,
      keys: ['Doğal dil işleme', 'Bilgi temsili', 'Makine öğrenmesi', 'Otomatik muhakeme']
    },
    {
      id: 'c1-7', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/zeka-nedir', focus: 'Zeka değişebilir',
      q: 'Zeka nedir? Zeka ile öğrenme arasındaki ilişkiyi açıklayınız.',
      a: `<p>Zeka, beynin öğrenme, anlama, soyut düşünme, sebeplendirme, planlama, problem çözme gibi zihinsel işlevlerine verilen isimdir (S4). Gardner\'a göre tek bir zeka değil farklı zeka türleri vardır (S3).</p><p>Zeka ve öğrenme çok yakın ilişkilidir: zeki varlıklar çevrelerine dikkat ederek, yani öğrenerek bilgi birikimlerini artırır ve bu onları daha zeki yapar (S5).</p>`,
      keys: ['Zihinsel işlevler (öğrenme, anlama, problem çözme…)', 'Çoklu zeka', 'Öğrenme bilgi birikimini artırır', 'Öğrenen varlık daha zeki olur']
    },
    {
      id: 'c1-8', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/surprizler', focus: 'Hocanın listesi',
      q: 'YZ çalışmalarındaki "sürprizler" nelerdir? İnsanlar için kolay olan bazı işlerin makineler için neden zor olduğunu açıklayınız.',
      a: `<p>İnsanlar için zor, makineler için kolay: satranç, taşıma planlama, uçuş saatlerini planlama, kredi kartı yolsuzluğu tanıma, teorem ispatlama, kare bulmaca (S60). İnsanlar için kolay, makineler için zor: konuşma tanıma, yüz tanıma, beste/resim yapma, yürümek, dil anlama (S61).</p><p>Sebep: İlk gruptakilerin kuralları kesin ve yazılabilir. İkinci gruptakileri ise farkında olmadan yaparız; kuralını bilmediğimiz için programlayamayız. Bu tür işler ancak örneklerden öğrenen sistemlerle (makine öğrenmesi, YSA) yapılabilir.</p>`,
      keys: ['Zor/kolay listelerinden örnekler', 'Kurallı işler makineye kolay', 'Bilinçsiz/evrimsel beceriler makineye zor', 'Kural yazılamadığı için öğrenme gerekir']
    },
    {
      id: 'c1-9', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/dogal-yapay', focus: 'Hocanın karşılaştırması',
      q: 'Doğal zeka ile yapay zekayı karşılaştırınız.',
      a: `<p>Yapay zeka daha kalıcıdır, kolayca kopyalanıp yayılabilir, birçok alanda daha ucuzdur ve tutarlıdır. Doğal zeka ise yaratıcıdır ve duyular yoluyla edinilen deneyimleri kullanır; yapay zeka sistemlerinin çoğu sembolik girdilerle çalışır ve bilgi sisteme özenle yerleştirilmelidir (S62–64).</p>`,
      keys: ['Kalıcılık', 'Kopyalanabilirlik', 'Maliyet', 'Tutarlılık', 'Yaratıcılık (doğal zeka)', 'Duyusal deneyim / sembolik girdi']
    },
    {
      id: 'c1-10', set: 'Bölüm 1', src: 'slide', lesson: 'ch1/guvenli-mi', focus: 'Kaza olursa',
      q: 'Sürücüsüz bir araç birine çarparsa suçlu kim olmalıdır: araba, şirket, sürücü? Görüşünüzü gerekçelendiriniz.',
      a: `<p>Tek bir doğru cevap yok; gerekçe önemli. Araba hukuken kişi değildir. Davranışı tasarlayan ve eğiten <b>şirket</b>tir (zayıf YZ\'de davranış önceden kurgulanmıştır). Sürücünün denetim yükümlülüğü varsa o da sorumlu olabilir. Slayttaki iki haber, hem makinenin (otobüse çarpma) hem insanın (en ağır kaza insan hatası) hata yapabildiğini gösteriyor; asıl soru hangisinin daha az hata yaptığı ve sorumluluğun nasıl paylaşılacağı.</p>`,
      keys: ['Araba hukuki kişi değil', 'Şirketin tasarım/eğitim sorumluluğu', 'Sürücünün denetim yükümlülüğü', 'İnsan da hata yapar, karşılaştırma gerekir']
    },
    {
      id: 'c1-11', set: 'Bölüm 1', src: 'exam', lesson: 'ch1/eliza-rur', focus: 'ELIZA \\(S27\\)',
      q: 'ELIZA programı nedir, nasıl çalışır? Çin odası ile ilişkisini kurunuz.',
      a: `<p>ELIZA, Joseph Weizenbaum\'un 1966\'da geliştirdiği, Rogerian terapisti taklit eden bir programdır. Hastanın cevaplarını biraz değiştirip soru biçiminde geri sorar ("başım ağrıyor" → "neden başının ağrıdığını söylüyorsun?"). Anahtar kelime ve kalıp eşlemeyle çalışır, hiçbir şey anlamaz. Bu yönüyle Çin odasındaki kural kitabının somut bir örneğidir: doğru görünen cevap, anlama olmadan üretilebilir.</p>`,
      keys: ['Weizenbaum, 1966', 'Rogerian terapist taklidi', 'Cevabı soruya çevirir (kalıp eşleme)', 'Anlama yok → Çin odası']
    },
    {
      id: 'c1-12', set: 'Bölüm 1 · ders notu', src: 'class', lesson: 'ch1/etik', focus: 'enerji sürdürülebilirliği',
      q: 'Yapay zekanın enerji sürdürülebilirliği açısından sorunu nedir? Veri merkezlerini uzaya taşıma fikrinin avantaj ve zorluklarını tartışınız.',
      a: `<p>Büyük modellerin eğitimi ve çalıştırılması binlerce işlemcide çok büyük miktarda elektrik tüketir; bu enerjinin neredeyse tamamı ısıya dönüşür ve soğutma için ek elektrik ve su harcanır. Bu, S69\'daki "etik süreç: etik sürdürülebilirlik" başlığına girer.</p><p>Uzay fikrinin avantajı: kesintisiz güneş enerjisi, dünyadaki şebeke ve su kaynaklarına yük olmaması. Zorlukları: vakumda ısı yalnızca ışınımla atılabildiği için büyük radyatörler gerekir; fırlatma maliyeti; kozmik radyasyonun çiplere zararı; bakımın imkansızlığı; verinin dünyaya iletilmesi.</p>`,
      keys: ['Eğitim ve kullanım çok enerji tüketir', 'Enerji ısıya döner, soğutma gerekir (su)', 'Etik süreç / sürdürülebilirlik', 'Uzay: sürekli güneş', 'Vakumda soğutma yalnızca ışınımla', 'Fırlatma, radyasyon, bakım zorlukları']
    }
  ];
})(window.YSALab = window.YSALab || {});
