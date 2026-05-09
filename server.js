const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// تمام ممالک
const countries = [
  { code: 'pakistan', name: '🇵🇰 پاکستان', flag: '🇵🇰' },
  { code: 'india', name: '🇮🇳 بھارت', flag: '🇮🇳' },
  { code: 'usa', name: '🇺🇸 امریکہ', flag: '🇺🇸' },
  { code: 'uk', name: '🇬🇧 برطانیہ', flag: '🇬🇧' },
  { code: 'bangladesh', name: '🇧🇩 بنگلہ دیش', flag: '🇧🇩' },
  { code: 'saudi', name: '🇸🇦 سعودی عرب', flag: '🇸🇦' },
  { code: 'uae', name: '🇦🇪 متحدہ عرب امارات', flag: '🇦🇪' },
  { code: 'turkey', name: '🇹🇷 ترکی', flag: '🇹🇷' },
  { code: 'iran', name: '🇮🇷 ایران', flag: '🇮🇷' }
];

// تمام ممالک کے چینلز
const channelsData = {
  pakistan: {
    country: '🇵🇰 پاکستان',
    flag: '🇵🇰',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 1, name: 'ARY News', url: 'https://example.com/ary', views: '5.2M' },
          { id: 2, name: 'GEO News', url: 'https://example.com/geo', views: '4.8M' },
          { id: 3, name: 'Dawn News', url: 'https://example.com/dawn', views: '3.5M' },
          { id: 4, name: 'Express News', url: 'https://example.com/express', views: '3.2M' },
          { id: 5, name: 'Urdu 1', url: 'https://example.com/urdu1', views: '2.9M' },
          { id: 6, name: 'Dunya News', url: 'https://example.com/dunya', views: '2.7M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 7, name: 'ARY Digital', url: 'https://example.com/arydigital', views: '8.1M' },
          { id: 8, name: 'HUM TV', url: 'https://example.com/humtv', views: '7.5M' },
          { id: 9, name: 'GEO Entertainment', url: 'https://example.com/geoent', views: '7.2M' },
          { id: 10, name: 'Urdu 1 Drama', url: 'https://example.com/urdudrama', views: '6.8M' },
          { id: 11, name: 'A Plus', url: 'https://example.com/aplus', views: '5.9M' },
          { id: 12, name: 'Express Entertainment', url: 'https://example.com/expressdrama', views: '5.2M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 13, name: 'ARY Zindagi', url: 'https://example.com/aryzindagi', views: '6.3M' },
          { id: 14, name: 'Hum Masala', url: 'https://example.com/hummasala', views: '5.8M' },
          { id: 15, name: 'GEO Kahani', url: 'https://example.com/geokahani', views: '5.5M' },
          { id: 16, name: 'BOL Entertainment', url: 'https://example.com/bolgeo', views: '4.2M' },
          { id: 17, name: 'PTV Home', url: 'https://example.com/ptvhome', views: '3.9M' },
          { id: 18, name: 'Play House', url: 'https://example.com/playhouse', views: '3.5M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 19, name: 'ARY Musik', url: 'https://example.com/arymusik', views: '4.5M' },
          { id: 20, name: 'MTV Pakistan', url: 'https://example.com/mtvpk', views: '4.1M' },
          { id: 21, name: 'Indus Music', url: 'https://example.com/indusmusik', views: '3.8M' },
          { id: 22, name: 'GEO Musik', url: 'https://example.com/geomusik', views: '3.5M' },
          { id: 23, name: 'Aplus Music', url: 'https://example.com/aplusmusik', views: '3.1M' },
          { id: 24, name: 'Pop TV', url: 'https://example.com/poptv', views: '2.8M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 25, name: 'ARY Zauq', url: 'https://example.com/aryzauq', views: '3.2M' },
          { id: 26, name: 'Cartoon Network', url: 'https://example.com/cartoonnetwork', views: '5.6M' },
          { id: 27, name: 'Boomerang', url: 'https://example.com/boomerang', views: '4.3M' },
          { id: 28, name: 'Nickelodeon', url: 'https://example.com/nickelodeon', views: '4.8M' },
          { id: 29, name: 'Disney Channel', url: 'https://example.com/disneychannel', views: '5.2M' },
          { id: 30, name: 'PTV Kids', url: 'https://example.com/ptvkids', views: '2.5M' }
        ]
      }
    }
  },
  india: {
    country: '🇮🇳 بھارت',
    flag: '🇮🇳',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 31, name: 'Star News', url: 'https://example.com/starnews', views: '6.1M' },
          { id: 32, name: 'India Today', url: 'https://example.com/indiatoday', views: '5.9M' },
          { id: 33, name: 'NDTV 24x7', url: 'https://example.com/ndtv', views: '5.4M' },
          { id: 34, name: 'CNN-IBN', url: 'https://example.com/cnnibn', views: '5.1M' },
          { id: 35, name: 'Zee News', url: 'https://example.com/zeenews', views: '4.8M' },
          { id: 36, name: 'ABP News', url: 'https://example.com/abpnews', views: '4.5M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 37, name: 'Star Plus', url: 'https://example.com/starplus', views: '9.2M' },
          { id: 38, name: 'Sony TV', url: 'https://example.com/sonytv', views: '8.7M' },
          { id: 39, name: 'Colors TV', url: 'https://example.com/colors', views: '8.4M' },
          { id: 40, name: 'Zee TV', url: 'https://example.com/zeetv', views: '8.1M' },
          { id: 41, name: 'SAB TV', url: 'https://example.com/sabtv', views: '7.5M' },
          { id: 42, name: 'SONY SAB', url: 'https://example.com/sonysab', views: '7.2M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 43, name: 'Star Movies', url: 'https://example.com/starmovies', views: '7.1M' },
          { id: 44, name: 'HBO', url: 'https://example.com/hbo', views: '6.8M' },
          { id: 45, name: 'Sony Movies', url: 'https://example.com/sonymovies', views: '6.5M' },
          { id: 46, name: 'Zee Movies', url: 'https://example.com/zeemovies', views: '6.2M' },
          { id: 47, name: 'Colors Cineplex', url: 'https://example.com/colorscineplex', views: '5.8M' },
          { id: 48, name: 'Disney Movies', url: 'https://example.com/disneymovies', views: '5.5M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 49, name: 'MTV India', url: 'https://example.com/mtvindia', views: '5.3M' },
          { id: 50, name: 'Vh1 India', url: 'https://example.com/vh1india', views: '4.9M' },
          { id: 51, name: 'Zoom', url: 'https://example.com/zoom', views: '4.6M' },
          { id: 52, name: 'Mastiii', url: 'https://example.com/mastiii', views: '4.2M' },
          { id: 53, name: ' 9xM', url: 'https://example.com/9xm', views: '3.9M' },
          { id: 54, name: 'Radio Mirchi', url: 'https://example.com/radiomirchi', views: '3.6M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 55, name: 'Cartoon Network', url: 'https://example.com/cn', views: '6.2M' },
          { id: 56, name: 'Disney Channel', url: 'https://example.com/disneych', views: '5.9M' },
          { id: 57, name: 'Nickelodeon', url: 'https://example.com/nick', views: '5.6M' },
          { id: 58, name: 'Pogo', url: 'https://example.com/pogo', views: '4.8M' },
          { id: 59, name: 'Hungama', url: 'https://example.com/hungama', views: '4.3M' },
          { id: 60, name: 'Sonic', url: 'https://example.com/sonic', views: '3.9M' }
        ]
      }
    }
  },
  usa: {
    country: '🇺🇸 امریکہ',
    flag: '🇺🇸',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 61, name: 'CNN', url: 'https://example.com/cnn', views: '8.2M' },
          { id: 62, name: 'FOX News', url: 'https://example.com/foxnews', views: '7.9M' },
          { id: 63, name: 'MSNBC', url: 'https://example.com/msnbc', views: '7.4M' },
          { id: 64, name: 'BBC News', url: 'https://example.com/bbcnews', views: '6.8M' },
          { id: 65, name: 'Al Jazeera', url: 'https://example.com/aljazeera', views: '6.3M' },
          { id: 66, name: 'Reuters', url: 'https://example.com/reuters', views: '5.9M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 67, name: 'HBO', url: 'https://example.com/hbousa', views: '8.5M' },
          { id: 68, name: 'Netflix', url: 'https://example.com/netflix', views: '9.1M' },
          { id: 69, name: 'Showtime', url: 'https://example.com/showtime', views: '7.2M' },
          { id: 70, name: 'Amazon Prime', url: 'https://example.com/amazonprime', views: '8.8M' },
          { id: 71, name: 'AMC', url: 'https://example.com/amc', views: '6.9M' },
          { id: 72, name: 'Starz', url: 'https://example.com/starz', views: '6.4M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 73, name: 'Disney+', url: 'https://example.com/disneyplus', views: '8.7M' },
          { id: 74, name: 'Warner Bros', url: 'https://example.com/warnerbros', views: '7.8M' },
          { id: 75, name: 'Paramount+', url: 'https://example.com/paramount', views: '7.3M' },
          { id: 76, name: 'Hulu', url: 'https://example.com/hulu', views: '7.5M' },
          { id: 77, name: 'Peacock', url: 'https://example.com/peacock', views: '6.8M' },
          { id: 78, name: 'Apple TV+', url: 'https://example.com/appletv', views: '6.5M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 79, name: 'MTV', url: 'https://example.com/mtvusa', views: '6.1M' },
          { id: 80, name: 'Vh1', url: 'https://example.com/vh1usa', views: '5.8M' },
          { id: 81, name: 'Music Choice', url: 'https://example.com/musicchoice', views: '5.3M' },
          { id: 82, name: 'Spotify', url: 'https://example.com/spotify', views: '9.2M' },
          { id: 83, name: 'YouTube Music', url: 'https://example.com/youtubemusic', views: '8.9M' },
          { id: 84, name: 'Apple Music', url: 'https://example.com/applemusic', views: '8.4M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 85, name: 'Cartoon Network', url: 'https://example.com/cnusa', views: '7.3M' },
          { id: 86, name: 'Disney Channel', url: 'https://example.com/disneychusa', views: '7.8M' },
          { id: 87, name: 'Nickelodeon', url: 'https://example.com/nickusa', views: '7.5M' },
          { id: 88, name: 'PBS Kids', url: 'https://example.com/pbskids', views: '6.2M' },
          { id: 89, name: 'Animal Planet', url: 'https://example.com/animalplanet', views: '5.9M' },
          { id: 90, name: 'Discovery Kids', url: 'https://example.com/discoverykids', views: '5.4M' }
        ]
      }
    }
  },
  uk: {
    country: '🇬🇧 برطانیہ',
    flag: '🇬🇧',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 91, name: 'BBC News', url: 'https://example.com/bbcnewsuk', views: '7.8M' },
          { id: 92, name: 'Sky News', url: 'https://example.com/skynews', views: '7.2M' },
          { id: 93, name: 'ITV News', url: 'https://example.com/itv', views: '6.5M' },
          { id: 94, name: 'Channel 4', url: 'https://example.com/ch4', views: '5.9M' },
          { id: 95, name: 'Channel 5', url: 'https://example.com/ch5', views: '5.2M' },
          { id: 96, name: 'BBC 2', url: 'https://example.com/bbc2', views: '4.8M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 97, name: 'BBC 1', url: 'https://example.com/bbc1uk', views: '7.1M' },
          { id: 98, name: 'ITV 1', url: 'https://example.com/itv1', views: '6.8M' },
          { id: 99, name: 'Channel 4', url: 'https://example.com/ch4uk', views: '6.2M' },
          { id: 100, name: 'Sky Atlantic', url: 'https://example.com/skyatlantic', views: '6.9M' },
          { id: 101, name: 'E4', url: 'https://example.com/e4', views: '5.8M' },
          { id: 102, name: 'More4', url: 'https://example.com/more4', views: '5.1M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 103, name: 'Film4', url: 'https://example.com/film4', views: '6.3M' },
          { id: 104, name: 'Sky Movies', url: 'https://example.com/skymovies', views: '7.2M' },
          { id: 105, name: 'BritBox', url: 'https://example.com/britbox', views: '6.8M' },
          { id: 106, name: 'Netflix UK', url: 'https://example.com/netflixuk', views: '8.9M' },
          { id: 107, name: 'NOW TV', url: 'https://example.com/nowtv', views: '7.4M' },
          { id: 108, name: 'Disney+ UK', url: 'https://example.com/disneyuk', views: '8.2M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 109, name: 'MTV UK', url: 'https://example.com/mtvuk', views: '5.2M' },
          { id: 110, name: 'Vh1 UK', url: 'https://example.com/vh1uk', views: '4.7M' },
          { id: 111, name: 'Music Choice UK', url: 'https://example.com/musicuk', views: '4.3M' },
          { id: 112, name: 'Capital TV', url: 'https://example.com/capitaltv', views: '5.8M' },
          { id: 113, name: 'Kiss UK', url: 'https://example.com/kissuk', views: '5.1M' },
          { id: 114, name: 'Heart UK', url: 'https://example.com/heartuk', views: '4.9M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 115, name: 'CBBC', url: 'https://example.com/cbbc', views: '6.1M' },
          { id: 116, name: 'CBeebies', url: 'https://example.com/cbeebies', views: '5.9M' },
          { id: 117, name: 'Cartoon Network UK', url: 'https://example.com/cnuk', views: '6.5M' },
          { id: 118, name: 'Nickelodeon UK', url: 'https://example.com/nickuk', views: '6.2M' },
          { id: 119, name: 'Disney Channel UK', url: 'https://example.com/disneykids', views: '6.8M' },
          { id: 120, name: 'Boomerang UK', url: 'https://example.com/boomeranguk', views: '5.3M' }
        ]
      }
    }
  },
  bangladesh: {
    country: '🇧🇩 بنگلہ دیش',
    flag: '🇧🇩',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 121, name: 'Channel I', url: 'https://example.com/channeli', views: '5.4M' },
          { id: 122, name: 'RTV', url: 'https://example.com/rtv', views: '5.1M' },
          { id: 123, name: 'NTV', url: 'https://example.com/ntv', views: '4.8M' },
          { id: 124, name: 'Ekattor TV', url: 'https://example.com/ekattor', views: '4.3M' },
          { id: 125, name: 'Desh TV', url: 'https://example.com/deshtv', views: '3.9M' },
          { id: 126, name: 'ATN Bangla', url: 'https://example.com/atnbangla', views: '3.5M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 127, name: 'Channel i Drama', url: 'https://example.com/channeldrama', views: '6.2M' },
          { id: 128, name: 'RTV Drama', url: 'https://example.com/rtvdrama', views: '5.9M' },
          { id: 129, name: 'NTV Drama', url: 'https://example.com/ntvdrama', views: '5.6M' },
          { id: 130, name: 'Nagorik TV', url: 'https://example.com/nagorik', views: '5.2M' },
          { id: 131, name: 'Ekushey TV', url: 'https://example.com/ekushey', views: '4.8M' },
          { id: 132, name: 'ATV', url: 'https://example.com/atv', views: '4.4M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 133, name: 'Star Jalsha', url: 'https://example.com/starjalsha', views: '6.8M' },
          { id: 134, name: 'Sony Aath', url: 'https://example.com/sonyaath', views: '6.4M' },
          { id: 135, name: 'Zee Bangla', url: 'https://example.com/zeebangla', views: '6.1M' },
          { id: 136, name: 'Colors Bangla', url: 'https://example.com/colorsbangla', views: '5.8M' },
          { id: 137, name: 'Ruposhi Bangla', url: 'https://example.com/ruposhibangla', views: '5.3M' },
          { id: 138, name: 'SATV', url: 'https://example.com/satv', views: '4.9M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 139, name: 'Bangla Music', url: 'https://example.com/banglamusic', views: '4.6M' },
          { id: 140, name: 'Dhoomaal', url: 'https://example.com/dhoomaal', views: '4.2M' },
          { id: 141, name: 'Zee Bangla Music', url: 'https://example.com/zeebanglamusic', views: '3.9M' },
          { id: 142, name: 'Sony 6', url: 'https://example.com/sony6', views: '3.6M' },
          { id: 143, name: 'Star Music', url: 'https://example.com/starmusic', views: '3.3M' },
          { id: 144, name: 'Music Asia', url: 'https://example.com/musicasia', views: '3.0M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 145, name: 'Bangla Kids', url: 'https://example.com/banglakids', views: '5.1M' },
          { id: 146, name: 'Cartoon Network Bangla', url: 'https://example.com/cnbangla', views: '5.8M' },
          { id: 147, name: 'Hungama', url: 'https://example.com/hungamabangla', views: '5.3M' },
          { id: 148, name: 'Nick Bangla', url: 'https://example.com/nickbangla', views: '5.5M' },
          { id: 149, name: 'Sonic', url: 'https://example.com/sonic', views: '4.7M' },
          { id: 150, name: 'Pogo Bangla', url: 'https://example.com/pogobangla', views: '4.3M' }
        ]
      }
    }
  },
  saudi: {
    country: '🇸🇦 سعودی عرب',
    flag: '🇸🇦',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 151, name: 'Al Ekhbariya', url: 'https://example.com/alekhbariya', views: '4.8M' },
          { id: 152, name: 'MBC News', url: 'https://example.com/mbcnews', views: '5.2M' },
          { id: 153, name: 'Sky News Arabia', url: 'https://example.com/skyarabia', views: '4.5M' },
          { id: 154, name: 'Saudi 24', url: 'https://example.com/saudi24', views: '4.0M' },
          { id: 155, name: 'Rotana News', url: 'https://example.com/rotana', views: '3.7M' },
          { id: 156, name: 'Alarabiya', url: 'https://example.com/alarabiya', views: '3.4M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 157, name: 'MBC 1', url: 'https://example.com/mbc1', views: '6.1M' },
          { id: 158, name: 'OSN Drama', url: 'https://example.com/osndrama', views: '5.8M' },
          { id: 159, name: 'ART Aflam', url: 'https://example.com/artaflam', views: '5.4M' },
          { id: 160, name: 'Rotana Drama', url: 'https://example.com/rotanadrama', views: '5.1M' },
          { id: 161, name: 'STV', url: 'https://example.com/stv', views: '4.7M' },
          { id: 162, name: 'Zee Alwan', url: 'https://example.com/zeealwan', views: '4.3M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 163, name: 'MBC 4', url: 'https://example.com/mbc4', views: '6.5M' },
          { id: 164, name: 'OSN Movies', url: 'https://example.com/osnmovies', views: '6.2M' },
          { id: 165, name: 'Shahid VIP', url: 'https://example.com/shahid', views: '7.1M' },
          { id: 166, name: 'Netflix Arabic', url: 'https://example.com/netflixa', views: '7.8M' },
          { id: 167, name: 'Amazon Prime Arabic', url: 'https://example.com/amazonarb', views: '7.3M' },
          { id: 168, name: 'Rakuten Viki', url: 'https://example.com/rakuten', views: '6.0M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 169, name: 'Rotana Music', url: 'https://example.com/rotanamusic', views: '5.3M' },
          { id: 170, name: 'ART Aghani', url: 'https://example.com/artaghani', views: '4.9M' },
          { id: 171, name: 'Zoom Music', url: 'https://example.com/zoommusic', views: '4.5M' },
          { id: 172, name: 'Arab Music', url: 'https://example.com/arabmusic', views: '4.1M' },
          { id: 173, name: 'Talent Arabia', url: 'https://example.com/talentarabia', views: '3.8M' },
          { id: 174, name: 'Harmony Music', url: 'https://example.com/harmony', views: '3.4M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 175, name: 'Baraem', url: 'https://example.com/baraem', views: '5.9M' },
          { id: 176, name: 'Cartoon Network Arabic', url: 'https://example.com/cnarabic', views: '6.3M' },
          { id: 177, name: 'Disney Channel Arabic', url: 'https://example.com/disneya', views: '6.1M' },
          { id: 178, name: 'Nick Arabic', url: 'https://example.com/nicka', views: '5.8M' },
          { id: 179, name: 'Spacetoon', url: 'https://example.com/spacetoon', views: '5.5M' },
          { id: 180, name: 'Majid Kids', url: 'https://example.com/majidkids', views: '5.1M' }
        ]
      }
    }
  },
  uae: {
    country: '🇦🇪 متحدہ عرب امارات',
    flag: '🇦🇪',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 181, name: 'Emarat News', url: 'https://example.com/emarat', views: '4.5M' },
          { id: 182, name: 'Dubai One', url: 'https://example.com/dubaiOne', views: '4.2M' },
          { id: 183, name: 'Abu Dhabi TV', url: 'https://example.com/abudhabi', views: '4.0M' },
          { id: 184, name: 'OSN News', url: 'https://example.com/osnnews', views: '3.8M' },
          { id: 185, name: 'Al Fajr', url: 'https://example.com/alfajr', views: '3.5M' },
          { id: 186, name: 'Emirates 24/7', url: 'https://example.com/emirates247', views: '3.2M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 187, name: 'Dubai TV', url: 'https://example.com/dubaiptv', views: '5.8M' },
          { id: 188, name: 'OSN Drama', url: 'https://example.com/osndramauae', views: '5.5M' },
          { id: 189, name: 'Zee Aflam', url: 'https://example.com/zeeaflam', views: '5.1M' },
          { id: 190, name: 'MBC HD', url: 'https://example.com/mbchd', views: '4.8M' },
          { id: 191, name: 'Rotana Plus', url: 'https://example.com/rotanaplus', views: '4.4M' },
          { id: 192, name: 'StarPlus Arabia', url: 'https://example.com/starplusarabia', views: '4.1M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 193, name: 'OSN Movies First', url: 'https://example.com/osnfirst', views: '6.3M' },
          { id: 194, name: 'Shahid Premium', url: 'https://example.com/shahidprem', views: '7.0M' },
          { id: 195, name: 'Netflix UAE', url: 'https://example.com/netflixuae', views: '7.5M' },
          { id: 196, name: 'Disney+ UAE', url: 'https://example.com/disneyuae', views: '7.2M' },
          { id: 197, name: 'Amazon Prime UAE', url: 'https://example.com/amazonuae', views: '6.8M' },
          { id: 198, name: 'Starzplay Arabia', url: 'https://example.com/starzplayu', views: '6.4M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 199, name: 'Rotana Khaliji', url: 'https://example.com/rotanakhaliji', views: '5.0M' },
          { id: 200, name: 'Aghani Music', url: 'https://example.com/aghanimusic', views: '4.6M' },
          { id: 201, name: 'Arab Idol', url: 'https://example.com/arabidol', views: '4.3M' },
          { id: 202, name: 'Melody Hits', url: 'https://example.com/melodyhits', views: '3.9M' },
          { id: 203, name: 'Urban Nation', url: 'https://example.com/urbannation', views: '3.6M' },
          { id: 204, name: 'Music Zone', url: 'https://example.com/musiczone', views: '3.2M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 205, name: 'Baraem Plus', url: 'https://example.com/baraemplus', views: '6.0M' },
          { id: 206, name: 'Cartoon Network HD', url: 'https://example.com/cnhd', views: '6.5M' },
          { id: 207, name: 'Disney Channel HD', url: 'https://example.com/disneyhd', views: '6.2M' },
          { id: 208, name: 'Nickelodeon HD', url: 'https://example.com/nickhd', views: '5.9M' },
          { id: 209, name: 'Spacetoon Plus', url: 'https://example.com/spacetoonplus', views: '5.6M' },
          { id: 210, name: 'Kids Choice', url: 'https://example.com/kidschoice', views: '5.2M' }
        ]
      }
    }
  },
  turkey: {
    country: '🇹🇷 ترکی',
    flag: '🇹🇷',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 211, name: 'TRT Haber', url: 'https://example.com/trthaber', views: '5.1M' },
          { id: 212, name: 'CNN Turk', url: 'https://example.com/cnnturk', views: '4.8M' },
          { id: 213, name: 'NTV', url: 'https://example.com/ntvturkey', views: '4.5M' },
          { id: 214, name: 'Sky Turk', url: 'https://example.com/skyturk', views: '4.2M' },
          { id: 215, name: 'HaberTurk', url: 'https://example.com/haberturk', views: '3.9M' },
          { id: 216, name: 'A Haber', url: 'https://example.com/ahaber', views: '3.6M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 217, name: 'Star TV', url: 'https://example.com/startv', views: '6.8M' },
          { id: 218, name: 'Kanal D', url: 'https://example.com/kanald', views: '6.5M' },
          { id: 219, name: 'ATV', url: 'https://example.com/atvturk', views: '6.2M' },
          { id: 220, name: 'Fox TV', url: 'https://example.com/foxtv', views: '5.9M' },
          { id: 221, name: 'Show TV', url: 'https://example.com/showtv', views: '5.6M' },
          { id: 222, name: 'TRT 1', url: 'https://example.com/trt1', views: '5.2M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 223, name: 'BluTV', url: 'https://example.com/bluetv', views: '6.0M' },
          { id: 224, name: 'Gain', url: 'https://example.com/gain', views: '5.7M' },
          { id: 225, name: 'Netflix Turk', url: 'https://example.com/netflixturk', views: '7.4M' },
          { id: 226, name: 'Amazon Prime Turk', url: 'https://example.com/amazonturk', views: '7.0M' },
          { id: 227, name: 'Puhutv', url: 'https://example.com/puhutv', views: '6.3M' },
          { id: 228, name: 'Exxen', url: 'https://example.com/exxen', views: '5.9M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 229, name: 'Kral TV', url: 'https://example.com/kraltv', views: '4.9M' },
          { id: 230, name: 'O Turk', url: 'https://example.com/oturk', views: '4.5M' },
          { id: 231, name: 'Music Turkey', url: 'https://example.com/musicturkey', views: '4.2M' },
          { id: 232, name: 'Turk Trax', url: 'https://example.com/turktrax', views: '3.9M' },
          { id: 233, name: 'Turk FM', url: 'https://example.com/turkfm', views: '3.5M' },
          { id: 234, name: 'Beat', url: 'https://example.com/beat', views: '3.2M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 235, name: 'TRT Cocuk', url: 'https://example.com/trtcocuk', views: '5.5M' },
          { id: 236, name: 'Cartoon Network Turk', url: 'https://example.com/cnturk', views: '6.0M' },
          { id: 237, name: 'Nickelodeon Turk', url: 'https://example.com/nickturk', views: '5.8M' },
          { id: 238, name: 'Disney Channel Turk', url: 'https://example.com/disneyturk', views: '5.6M' },
          { id: 239, name: 'Kids Zone', url: 'https://example.com/kidszone', views: '5.0M' },
          { id: 240, name: 'Boomerang Turk', url: 'https://example.com/boomerangturk', views: '4.7M' }
        ]
      }
    }
  },
  iran: {
    country: '🇮🇷 ایران',
    flag: '🇮🇷',
    categories: {
      news: {
        name: '📰 نیوز',
        channels: [
          { id: 241, name: 'IRIB 1', url: 'https://example.com/irib1', views: '4.3M' },
          { id: 242, name: 'IRIB 2', url: 'https://example.com/irib2', views: '4.0M' },
          { id: 243, name: 'Press TV', url: 'https://example.com/presstv', views: '3.8M' },
          { id: 244, name: 'IRIB News', url: 'https://example.com/iribnews', views: '3.5M' },
          { id: 245, name: 'IRIB 3', url: 'https://example.com/irib3', views: '3.2M' },
          { id: 246, name: 'Channel One', url: 'https://example.com/chone', views: '2.9M' }
        ]
      },
      drama: {
        name: '🎭 ڈرامہ',
        channels: [
          { id: 247, name: 'IRIB Drama', url: 'https://example.com/iribdrama', views: '5.2M' },
          { id: 248, name: 'Filbox', url: 'https://example.com/filbox', views: '4.9M' },
          { id: 249, name: 'KhanFamily', url: 'https://example.com/khanfamily', views: '4.6M' },
          { id: 250, name: 'Setara', url: 'https://example.com/setara', views: '4.3M' },
          { id: 251, name: 'Sepehr', url: 'https://example.com/sepehr', views: '4.0M' },
          { id: 252, name: 'Azarbayjan', url: 'https://example.com/azar', views: '3.7M' }
        ]
      },
      movies: {
        name: '🎥 موویز',
        channels: [
          { id: 253, name: 'Ifilm', url: 'https://example.com/ifilm', views: '5.8M' },
          { id: 254, name: 'Filim Iran', url: 'https://example.com/filmiiran', views: '5.4M' },
          { id: 255, name: 'Irancell', url: 'https://example.com/irancell', views: '5.0M' },
          { id: 256, name: 'Rooyesh', url: 'https://example.com/rooyesh', views: '4.7M' },
          { id: 257, name: 'Aparat Plus', url: 'https://example.com/aparatplus', views: '6.2M' },
          { id: 258, name: 'Vimeo Iran', url: 'https://example.com/vimeiran', views: '4.4M' }
        ]
      },
      music: {
        name: '🎵 گانے',
        channels: [
          { id: 259, name: 'IRIB Music', url: 'https://example.com/iribmusic', views: '4.1M' },
          { id: 260, name: 'Taraneh', url: 'https://example.com/taraneh', views: '3.8M' },
          { id: 261, name: 'Looti Music', url: 'https://example.com/lootimusic', views: '3.5M' },
          { id: 262, name: 'Baghestan', url: 'https://example.com/baghestan', views: '3.2M' },
          { id: 263, name: 'Rhythm Iran', url: 'https://example.com/rhythmiiran', views: '2.9M' },
          { id: 264, name: 'Music Box', url: 'https://example.com/musicbox', views: '2.6M' }
        ]
      },
      kids: {
        name: '👶 بچوں کا',
        channels: [
          { id: 265, name: 'IRIB Kids', url: 'https://example.com/iribkids', views: '4.8M' },
          { id: 266, name: 'Koodkoo', url: 'https://example.com/koodkoo', views: '4.5M' },
          { id: 267, name: 'Baghestan Kids', url: 'https://example.com/baghestankids', views: '4.2M' },
          { id: 268, name: 'Salam Iran', url: 'https://example.com/salamiran', views: '3.9M' },
          { id: 269, name: 'Amouzeshi', url: 'https://example.com/amouzeshi', views: '3.6M' },
          { id: 270, name: 'Kids World', url: 'https://example.com/kidsworld', views: '3.3M' }
        ]
      }
    }
  }
};

// Routes

// 1. تمام ممالک
app.get('/api/countries', (req, res) => {
  res.json(countries);
});

// 2. کسی ملک کے چینلز
app.get('/api/channels/:country', (req, res) => {
  const { country } = req.params;
  
  if (!channelsData[country]) {
    return res.status(404).json({ 
      error: 'ملک نہیں ملا',
      message: `${country} چینلز دستیاب نہیں ہیں`
    });
  }

  res.json(channelsData[country]);
});

// 3. کوالٹی کی معلومات
app.get('/api/quality-info', (req, res) => {
  res.json({
    qualities: [
      { value: 'normal', label: 'معمولی', dataPerHour: '15 MB', emoji: '💚' },
      { value: 'hd', label: 'HD', dataPerHour: '30 MB', emoji: '👍' },
      { value: '2k', label: '2K', dataPerHour: '40 MB', emoji: '✨' },
      { value: '4k', label: '4K', dataPerHour: '50 MB', emoji: '🔥' }
    ]
  });
});

// 4. سرور کی حالت
app.get('/api/status', (req, res) => {
  res.json({
    status: 'چل رہا ہے ✅',
    message: 'آن لائن ٹی وی سرور بہترین کام کر رہا ہے',
    countries: countries.length,
    totalChannels: 270,
    uptime: 'ہمیشہ'
  });
});

// 5. ہوم پیج
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>📺 آن لائن ٹی وی - Backend API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #1a1a1a;
            color: white;
            padding: 20px;
            text-align: center;
          }
          h1 { color: #ffd89b; }
          .container { max-width: 800px; margin: 0 auto; }
          .endpoint { 
            background: #2d2d2d; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            text-align: left;
          }
          code { color: #ffd89b; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>📺 آن لائن ٹی وی - Backend API</h1>
          <p>خوش آمدید! یہ Backend API ہے۔</p>
          
          <h2>دستیاب Endpoints:</h2>
          
          <div class="endpoint">
            <p><strong>1. تمام ممالک:</strong></p>
            <code>GET /api/countries</code>
          </div>
          
          <div class="endpoint">
            <p><strong>2. کسی ملک کے چینلز:</strong></p>
            <code>GET /api/channels/:country</code><br>
            <small>مثال: /api/channels/pakistan</small>
          </div>
          
          <div class="endpoint">
            <p><strong>3. کوالٹی کی معلومات:</strong></p>
            <code>GET /api/quality-info</code>
          </div>
          
          <div class="endpoint">
            <p><strong>4. سرور کی حالت:</strong></p>
            <code>GET /api/status</code>
          </div>
          
          <h2>ممالک کی فہرست:</h2>
          <ul style="text-align: left; display: inline-block;">
            <li>🇵🇰 pakistan</li>
            <li>🇮🇳 india</li>
            <li>🇺🇸 usa</li>
            <li>🇬🇧 uk</li>
            <li>🇧🇩 bangladesh</li>
            <li>🇸🇦 saudi</li>
            <li>🇦🇪 uae</li>
            <li>🇹🇷 turkey</li>
            <li>🇮🇷 iran</li>
          </ul>
        </div>
      </body>
    </html>
  `);
});

// Server شروع کریں
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
    ╔═══════════════════════════════════════════════╗
    ║                                               ║
    ║   📺 آن لائن ٹی وی Backend Server            ║
    ║                                               ║
    ║   🚀 سرور چل رہا ہے:                         ║
    ║   http://localhost:${PORT}                        ║
    ║                                               ║
    ║   ✅ 9 ممالک                                  ║
    ║   ✅ 270+ چینلز                              ║
    ║   ✅ 5 زمرہ جات                              ║
    ║   ✅ 4 کوالٹی                                ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝
  `);
});
