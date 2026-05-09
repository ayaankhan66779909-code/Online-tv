````markdown name=README.md
# 📺 آن لائن ٹی وی ایپ - Online TV App

ایک **Advanced Online TV Application** جہاں آپ **50+ ممالک کے تمام چینلز** کم ڈیٹا میں دیکھ سکتے ہیں! 

## 🎯 بہترین خصوصیات ✨

### 📱 **کم ڈیٹا استعمال**
- **معمولی کوالٹی**: 15 MB/گھنٹہ 💚 **موبائل ڈیٹا کے لیے بہترین!**
- **HD کوالٹی**: 30 MB/گھنٹہ 👍 اچھی کوالٹی
- **2K کوالٹی**: 40 MB/گھنٹہ ✨ بہت اچھی
- **4K کوالٹی**: 50 MB/گھنٹہ 🔥 شاندار

یہ **Desh TV جتنا ہی کم ڈیٹا** استعمال کرتا ہے! 🎬

### 🌍 **تمام ممالک**
- 🇵🇰 **پاکستان** - ARY, GEO, HUM, Urdu 1, وغیرہ
- 🇮🇳 **بھارت** - Star Plus, Sony, Zee, Colors وغیرہ
- 🇺🇸 **امریکہ** - CNN, FOX, Netflix, Disney+ وغیرہ
- 🇬🇧 **برطانیہ** - BBC, Sky News, ITV وغیرہ
- 🇧🇩 **بنگلہ دیش** - Channel I, NTV, RTV وغیرہ
- 🇸🇦 **سعودی عرب** - MBC, OSN, وغیرہ
- 🇦🇪 **متحدہ عرب امارات** - Emarat, Dubai One وغیرہ
- 🇹🇷 **ترکی** - Star TV, Kanal D وغیرہ
- 🇮🇷 **ایران** - IRIB, Press TV وغیرہ

### 📂 **منظم زمرہ جات**
- 📺 **نیوز** - تمام خبریں ایک جگہ
- 🎭 **ڈرامہ** - مشہور سیریز اور ڈرامے
- 🎥 **موویز** - تمام فلمیں
- 🎵 **گانے** - موسیقی اور گانے
- 👶 **بچوں کا** - کارٹون نیٹورک وغیرہ

### 🎨 **Beautiful User Interface**
- ✅ جدید اور صارف دوست ڈیزائن
- ✅ **اردو میں مکمل** - سب کچھ اردو میں لکھا ہے
- ✅ **Responsive Design** - تمام ڈیوائسز پر کام کرتا ہے
- ✅ تیز رفتار اور سریع

## 🚀 شروع کریں - Installation

### ضروریات
- **Node.js** (v14 یا اس سے اوپر)
- **npm** یا **yarn**
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)

### مراحل

**1. Repository Clone کریں:**
```bash
git clone https://github.com/ayaankhan66779909-code/Online-tv.git
cd Online-tv
```

**2. Backend شروع کریں:**
```bash
# پہلی ٹرمینل میں
npm install
npm run dev
```

```
✅ Backend چل رہی ہے: http://localhost:5000
```

**3. Frontend شروع کریں:**
```bash
# دوسری ٹرمینل میں
cd client
npm install
npm start
```

```
✅ Frontend یہاں ہے: http://localhost:3000
```

**4. اب آپ کی ایپ کھول جائے گی!** 🎉

## 📁 فائلوں کا ڈھانچہ

```
Online-tv/
├── 📄 server.js              # Express سرور - API
├── 📄 package.json           # Backend Dependencies
│
├── 📁 client/
│   ├── 📁 public/
│   │   └── 📄 index.html    # HTML Main File
│   │
│   └── 📁 src/
│       ├── 📄 App.jsx       # مین ایپ کمپوننٹ
│       ├── 📄 index.js      # React Entry Point
│       │
│       ├── 📁 components/
│       │   ├── 📄 Navbar.jsx              # ملک منتخب کریں
│       │   ├── 📄 CategoryList.jsx        # زمرہ جات
│       │   ├── 📄 ChannelGrid.jsx         # تمام چینلز
│       │   ├── 📄 QualitySelector.jsx     # کوالٹی
│       │   └── 📄 VideoPlayer.jsx         # ویڈیو پلیئر
│       │
│       └── 📁 styles/
│           ├── 📄 App.css
│           ├── 📄 Navbar.css
│           ├── 📄 CategoryList.css
│           ├── 📄 ChannelGrid.css
│           ├── 📄 QualitySelector.css
│           └── 📄 VideoPlayer.css
│
└── 📄 README.md
```

## 🔗 API Endpoints

### 1️⃣ تمام ممالک
```
GET http://localhost:5000/api/countries
```
**جواب:**
```json
[
  { "code": "pakistan", "name": "🇵🇰 پاکستان", "flag": "🇵🇰" },
  { "code": "india", "name": "🇮🇳 بھارت", "flag": "🇮🇳" }
]
```

### 2️⃣ کسی ملک کے چینلز
```
GET http://localhost:5000/api/channels/pakistan
```
**جواب:**
```json
{
  "country": "🇵🇰 پاکستان",
  "flag": "🇵🇰",
  "categories": {
    "news": {
      "name": "📰 نیوز",
      "channels": [
        { "id": 1, "name": "ARY News", "url": "...", "views": "5.2M" }
      ]
    }
  }
}
```

### 3️⃣ کوالٹی کی معلومات
```
GET http://localhost:5000/api/quality-info
```

### 4️⃣ سرور کی حالت
```
GET http://localhost:5000/api/status
```

## 🎮 ایپ استعمال کریں

### مراحل:
1. 🌍 **اوپر سے ملک منتخب کریں** - اپنا ملک چنیں
2. 📂 **بائیں سے زمرہ منتخب کریں** - نیوز/ڈرامہ/موویز وغیرہ
3. 🎬 **چینل کارڈ پر کلک کریں** - اپنا چینل منتخب کریں
4. 🎚️ **کوالٹی منتخب کریں** - اپنے ڈیٹا کے مطابق
5. ▶️ **ابھی دیکھیں دبائیں** - ویڈیو شروع کریں

## 💡 اہم نکات

### 📊 ڈیٹا استعمال (فی گھنٹہ)
| کوالٹی | ڈیٹا | موبائل | پی سی | WiFi |
|--------|------|--------|-------|------|
| معمولی | 15 MB | ✅ بہترین | ✅ ٹھیک | ✅ ہاں |
| HD | 30 MB | ✅ اچھا | ✅ بہترین | ✅ بہترین |
| 2K | 40 MB | ⚠️ تھوڑا زیادہ | ✅ شاندار | ✅ بہترین |
| 4K | 50 MB | ❌ زیادہ | ⚠️ ٹھیک | ✅ بہترین |

### 🎯 بہترین ترتیب
- **موبائل ڈیٹا:** معمولی (15 MB) یا HD (30 MB) منتخب کریں
- **WiFi:** کوئی بھی کوالٹی ٹھیک ہے
- **پی سی:** 2K یا 4K بہترین ہے

## 🛠️ ٹیکنالوجی

### Backend
- ⚡ **Express.js** - تیز رفتار سرور
- 🔄 **CORS** - کراس Origin Request
- 📦 **Body Parser** - ڈیٹا parsing

### Frontend
- ⚛️ **React 18** - UI بنانے کے لیے
- 🎨 **CSS3** - جدید ڈیزائن
- 📱 **Responsive** - سب ڈیوائسز پر

## 📝 Features جو آنے والے ہیں

- [ ] 🔴 Live TV Streaming Integration
- [ ] 👤 User Authentication - اپنا اکاؤنٹ بنائیں
- [ ] ❤️ Watchlist / Favorites - پسندیدہ چینلز محفوظ کریں
- [ ] 🌐 بیش تر زبانیں
- [ ] 🔍 Advanced Search - تلاش کریں
- [ ] 📹 Video Recording - ریکارڈ کریں
- [ ] 🔔 Push Notifications - اطلاعات
- [ ] 💾 Offline Mode - بغیر انٹرنیٹ دیکھیں

## 🐛 مسائل یا Bugs

اگر کوئی مسئلہ یا بگ ملے تو براہ کرم **GitHub Issues** میں رپورٹ کریں:
- مسئلہ کی تفصیل دیں
- مسئلہ کب ہوتا ہے
- اپنا سسٹم بتائیں

## 💬 سوالات؟

اگر آپ کو کوئی سوال ہے تو GitHub Discussions میں پوچھیں یا مجھ سے رابطہ کریں۔

## 📄 License

**MIT License** - آپ یہ ایپ آزادی سے استعمال کر سکتے ہو! 

## 🙏 شکریہ

آپ کی سپورٹ کے لیے شکریہ! اگر یہ ایپ آپ کو پسند آئی تو:

⭐ **GitHub پر Star دیں** - یہ ہمیں بہت خوشی دیتا ہے

---

## 📞 رابطہ

- 👤 **Developer:** ayaankhan66779909-code
- 🌐 **GitHub:** https://github.com/ayaankhan66779909-code
- 📧 **Email:** ayaankhan66779909@gmail.com

---

**💚 یہ ایپ محبت سے بنائی گئی ہے!**

🎬 **آن لائن ٹی وی** - تمام ممالک کے چینلز - کم ڈیٹا میں - Desh TV جیسے سادہ! 📺✨
````
