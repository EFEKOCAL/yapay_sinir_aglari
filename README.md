# YSA Interactive Lab

**Yapay Sinir Ağları** dersi (Prof. Dr. Serhat Özekes) için hocanın PDF sırasıyla ilerleyen, önce düşündüren interaktif ders notları. Saf HTML, CSS ve JavaScript ile yazıldı; kurulum gerekmez. `index.html` dosyasını açman yeterli.

Tasarım ve altyapı, *OOP Interactive Lab* (Java) ve *OS Interactive Lab* (İşletim Sistemleri) sitelerinden geliyor.

## Nasıl çalışır?

- **Her PDF bir bölüm**, her bölüm bir **giriş sayfasıyla** açılır: Bölüm neyi amaçlıyor, hangi konular hangi sırayla işlenecek, hangi kavramlar öğrenilecek. Bir kavrama tıklarsan doğrudan onun anlatıldığı karta gidersin.
- Dersler **tek ekranlık kartlar** halinde, slayt sırasıyla ilerler (↓, Boşluk ya da **Devam**). Her kartta slayt numarası yazar.
- **🤔 Önce sen düşün** kutuları: Önce kendi cevabını yazarsın (tarayıcıda saklanır), sonra hocanın cevabını ve mantığını açarsın.
- Hocanın **görselleri** aynen kullanıldı; verdiği **bağlantılar** slayttaki yerinde, ne hakkında olduklarıyla birlikte duruyor.
- Etkileşimli şekiller: geleneksel programlama ve makine öğrenmesi, Turing testinin üç fazı, Çin odası, mini ELIZA, sınıflandırma alıştırmaları.
- Her dersin sonunda **kendini yokla**, her bölümün sonunda **karışık tekrar**, ayrıca **Sınav Soruları** (model cevap + anahtar noktalar + aralıklı tekrar).
- **Nöral Bakış:** Bütün ders tek bir ağ haritasında. Hazırlanmakta olan bölümler soluk görünür.
- **İlerlemeyi sıfırla:** Başlangıç ekranında ve Genel Bakış'ta.

## Bölümler

| Bölüm | Kaynak | Durum |
|---|---|---|
| 1 · Yapay Zekaya Temel Bakış | 1_AI.pptx (S1–69) | Hazır · 25 ders |
| 2 · YZ, ML ve YSA'ya Giriş | 2_YSA_Giris.pptx | Hazırlanıyor |
| 3 · Tek Katmanlı Algılayıcılar | 3_Tek_katmanli_algilayicilar.pdf | Hazırlanıyor |
| 4 · Çok Katmanlı Algılayıcılar | 4_cokkatmanlialgilayicilar.pdf (s.1–25) | Hazırlanıyor |

Ders kaynakları (PDF, pptx) ve kişisel notlar depoya eklenmez (`.gitignore`).

## Dosya yapısı

```
index.html                 uygulama kabuğu (menü, üst bar, bilgi paneli)
style.css                  şablonun koyu teması
ysa.css                    YSA'ya özgü bloklar (görsel, bağlantı, önce düşün, alıştırmalar)
assets/ch1/                hocanın slaytlarından görseller (sNN-… = slayt numarası)
js/app.js                  yönlendirme, bilgi paneli
js/views/learn-view.js     ders akışı, bölüm girişi, tekrar, sınav soruları, ilerleme kaydı
js/views/map-view.js       Nöral Bakış haritası
js/views/diagrams.js       şekil motoru (explorer, stepper, tabs, custom)
js/views/diagrams-ai.js    Bölüm 1 şekilleri ve alıştırmaları
js/data/lessons-ch1*.js    Bölüm 1 dersleri
js/data/chapter-outlines.js bölüm giriş sayfaları + hazırlanan bölümler
js/data/exam-questions.js  sınav soruları
js/data/glossary.js        kavram sözlüğü
```
