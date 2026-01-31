// data.js

const comics = [
  {
    id: 1,
    title: "کلی و دوستان",
    cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361",
    teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361", // می‌تونی کاور اول رو تیزر بذاری یا عکس جدا
    summary: "کلی، دونده سریع و پرجنب‌وجوش دبیرستانی، همراه دوستان نزدیکش کارولین، میشا و مکاسیم، در ماجراهای هیجان‌انگیز و چالش‌برانگیز قرار می‌گیرند. کلی همیشه با سرعت و اراده‌اش جلو می‌رود و هیچ مانعی نمی‌تواند او را متوقف کند!",
    chaptersCount: 10,
    chapters: [
      { id: 1, title: "آغاز", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1_${String(i+1).padStart(3,'0')}.jpeg?_t=1767784477`) },
      { id: 2, title: "کلی تازه وارد", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/Ch2.jpeg?_t=1767811692", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/Ch2_${String(i+1).padStart(3,'0')}.jpeg?_t=1767811724`) },
      { id: 3, title: "دیدار دوستانه", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3.jpeg?_t=1767875324", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3_${String(i+1).padStart(3,'0')}.jpeg?_t=1767875335`) },
      { id: 4, title: "گروه تشویق کننده", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4.jpeg?_t=1767955112", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4_${String(i+1).padStart(3,'0')}.jpeg?_t=1767955125`) },
      { id: 5, title: "خوش گذرونی", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5.jpeg?_t=1768060336", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5_${String(i+1).padStart(3,'0')}.jpeg`) }, // _t رو اگر لازم بود اضافه کن
      { 
  id: 6, 
  title: "از دور", 
  cover: "https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل ششم/CH6.jpeg?_t=1769142455", 
  pageCount: 12, 
  pages: Array.from({length: 12}, (_, i) => 
    `https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل ششم/CH6_${String(i+1).padStart(3,'0')}.jpeg`
  ) 
},

{ 
  id: 7, 
  title: "ملکه مسابقات ماشینی", 
  cover: "https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل هفتم/CH7.jpeg?_t=1769406286", 
  pageCount: 11, 
  pages: Array.from({length: 11}, (_, i) => 
    `https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل هفتم/CH7_${String(i+1).padStart(3,'0')}.jpeg`
  ) 
},

{ 
  id: 8, 
  title: "تفریح در سالن بازی", 
  cover: "https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل هشتم/CH8.jpeg?_t=1769419222", 
  pageCount: 11, 
  pages: Array.from({length: 11}, (_, i) => 
    `https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل هشتم/CH8_${String(i+1).padStart(3,'0')}.jpeg`
  ) 
},

{ 
  id: 9, 
  title: "خط پایان ۱", 
  cover: "https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل نهم/CH9.jpeg?_t=1769448219", 
  pageCount: 12, 
  pages: Array.from({length: 12}, (_, i) => 
    `https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل نهم/CH9_${String(i+1).padStart(3,'0')}.jpeg`
  ) 
},

{ 
  id: 10, 
  title: "خط پایان ۲", 
  cover: "https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل دهم/CH10.jpeg?_t=1769490433", 
  pageCount: 10, 
  pages: Array.from({length: 10}, (_, i) => 
    `https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/فصل دهم/CH10_${String(i+1).padStart(3,'0')}.jpeg`
  ) 
},
    ]
  },

  // کمیک‌های دیگر (placeholder – بعداً پر کن)
  { id: 2, title: "کمیک هایتو", chaptersCount: 3, cover: "https://via.placeholder.com/300x420?text=Hayato", summary: "...", chapters: [] },
  { id: 3, title: "رافائل و لورا", chaptersCount: 6, cover: "https://via.placeholder.com/300x420?text=Rafael+Laura", summary: "...", chapters: [] },
  { id: 4, title: "استفانی", chaptersCount: 4, cover: "https://via.placeholder.com/300x420?text=Stephanie", summary: "...", chapters: [] },
  { id: 5, title: "موکو", chaptersCount: 7, cover: "https://via.placeholder.com/300x420?text=Moco", summary: "...", chapters: [] }, // شامل فصل صفر
  { id: 6, title: "موکو و استفانی", chaptersCount: 4, cover: "https://via.placeholder.com/300x420?text=Moco+Stephanie", summary: "...", chapters: [] }
];