# Outlook Otomatik Yanıt Şablonu Eklentisi

Microsoft Outlook için geliştirilmiş bu eklenti, kullanıcıların otomatik yanıt mesajlarını hızlı ve kolay bir şekilde ayarlamalarını sağlar. Hem dahili hem de harici e-postalar için önceden hazırlanmış şablonlar sunar.

## 🚀 Özellikler

- **Hazır Şablonlar**: Dahili ve harici otomatik yanıtlar için önceden hazırlanmış Türkçe şablonlar
- **Tek Tıkla Uygulama**: Seçilen şablonu tek tıkla Outlook'ta uygulama
- **Çoklu Platform Desteği**: Outlook masaüstü ve web sürümleri ile uyumlu
- **Kullanıcı Dostu Arayüz**: Basit ve anlaşılır kullanıcı arayüzü
- **Otomatik Dağıtım**: GitHub Actions ile otomatik CI/CD pipeline

## 📋 Gereksinimler

- **Node.js** (v16 veya üzeri)
- **Microsoft Outlook** (masaüstü veya web)
- **Office.js** API desteği
- Modern web tarayıcısı (Outlook Web için)

## 🛠️ Kurulum ve Geliştirme

### Yerel Geliştirme

1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/ozridvan/outlook-auto-reply-addin.git
   cd outlook-auto-reply-addin
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm start
   ```

### Outlook'ta Eklentiyi Yükleme

1. **Outlook Web**: 
   - Ayarlar > Eklentileri Yönet > Özel Eklentiler
   - Manifest URL'sini ekleyin: `https://ozridvan.github.io/outlook-auto-reply-addin/manifest.xml`

2. **Outlook Masaüstü**:
   - Dosya > Eklentileri Yönet > Özel Eklentiler
   - Manifest dosyasını yükleyin

## 📁 Proje Yapısı

```
outlook-auto-reply-addin/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── src/
│   ├── assets/
│   │   ├── icon-32.png         # Eklenti ikonu (32x32)
│   │   ├── icon-64.png         # Eklenti ikonu (64x64)
│   │   └── style.css           # Stil dosyası
│   ├── taskpane.html           # Ana kullanıcı arayüzü
│   └── taskpane.js             # JavaScript işlevselliği
├── manifest.xml                # Office eklenti yapılandırması
├── package.json                # NPM yapılandırması
└── README.md                   # Bu dosya
```

## 🎯 Kullanım

1. Outlook'ta bir e-posta açın
2. Eklenti panelini açın
3. "Dahili Yanıtlar" veya "Harici Yanıtlar" bölümünden uygun şablonu seçin
4. "Uygula" butonuna tıklayın
5. Şablon otomatik olarak Outlook'unuzda ayarlanır

## 🔧 Geliştirme Komutları

- `npm start`: Geliştirme sunucusunu başlatır (GitHub Pages ile serve eder)
- `npm run deploy`: Projeyi GitHub Pages'e dağıtır

## 🌐 Canlı Demo

Eklenti şu adreste canlı olarak çalışmaktadır: [https://ozridvan.github.io/outlook-auto-reply-addin/](https://ozridvan.github.io/outlook-auto-reply-addin/)

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request açın

## 📝 Şablon Örnekleri

### Dahili Yanıtlar
- "Şu anda ofis dışında olduğum için e-postanıza dönüşümde yanıt vereceğim."
- "E-postanız için teşekkürler. Şu anda müsait değilim, en kısa sürede size geri döneceğim."

### Harici Yanıtlar
- "[Dönüş tarihi] tarihine kadar ofis dışında olacağım. Acil durumlar için lütfen [alternatif kişi] ile iletişime geçin."
- "Mesajınız için teşekkürler. Şu anda ofis dışında olduğum için en kısa sürede dönüş yapacağım."

## 🐛 Sorun Bildirimi

Herhangi bir sorun yaşarsanız, lütfen [GitHub Issues](https://github.com/ozridvan/outlook-auto-reply-addin/issues) sayfasından bildirin.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Öztiryakiler** tarafından geliştirilmiştir.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!