// data.js - کامل با کمیک‌های جدید

const comics = [
  {
    id: 1,
    title: "کلی و دوستان",
    cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361",
    teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361",
    summary: "کلی، دونده سریع و پرجنب‌وجوش دبیرستانی، همراه دوستان نزدیکش کارولین، میشا و مکاسیم، در ماجراهای هیجان‌انگیز و چالش‌برانگیز قرار می‌گیرند. کلی همیشه با سرعت و اراده‌اش جلو می‌رود و هیچ مانعی نمی‌تواند او را متوقف کند!",
    chaptersCount: 10,
    chapters: [
      { id: 1, title: "آغاز", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1_${String(i+1).padStart(3,'0')}.jpeg?_t=1767784477`) },
      { id: 2, title: "کلی تازه وارد", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/Ch2.jpeg?_t=1767811692", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/Ch2_${String(i+1).padStart(3,'0')}.jpeg?_t=1767811724`) },
      { id: 3, title: "دیدار دوستانه", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3.jpeg?_t=1767875324", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3_${String(i+1).padStart(3,'0')}.jpeg?_t=1767875335`) },
      { id: 4, title: "گروه تشویق کننده", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4.jpeg?_t=1767955112", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4_${String(i+1).padStart(3,'0')}.jpeg?_t=1767955125`) },
      { id: 5, title: "خوش گذرونی", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5.jpeg?_t=1768060336", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5_${String(i+1).padStart(3,'0')}.jpeg?_t=1768060336`) },
      { id: 6, title: "از دور", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455", pageCount: 12, pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6_${String(i+1).padStart(3,'0')}.jpeg?_t=1769142455`) },
      { id: 7, title: "ملکه مسابقات ماشینی", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D9%81%D8%AA%D9%85/CH7.jpeg?_t=1769406286", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D9%81%D8%AA%D9%85/CH7_${String(i+1).padStart(3,'0')}.jpeg?_t=1769406286`) },
      { id: 8, title: "تفریح در سالن بازی", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D8%B4%D8%AA%D9%85/CH8.jpeg?_t=1769419222", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D8%B4%D8%AA%D9%85/CH8_${String(i+1).padStart(3,'0')}.jpeg?_t=1769419222`) },
      { id: 9, title: "خط پایان ۱", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%86%D9%87%D9%85/CH9.jpeg?_t=1769448219", pageCount: 12, pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%86%D9%87%D9%85/CH9_${String(i+1).padStart(3,'0')}.jpeg?_t=1769448219`) },
      { id: 10, title: "خط پایان ۲", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%87%D9%85/CH10.jpeg?_t=1769490433", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%87%D9%85/CH10_${String(i+1).padStart(3,'0')}.jpeg?_t=1769490433`) }
    ]
  },

  // کمیک جدید: هایاتو
  {
    id: 2,
    title: "هایاتو",
    cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455", // فصل اول = فصل ۶ کلی
    teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455",
    summary: "هایاتو، شمشیرزن مرموز و خونسرد، با گذشته‌ای تاریک و مهارت‌های بی‌نظیر شمشیرزنی، در جستجوی انتقام و حقیقت است. او با قدرت‌های آتشین و اراده آهنینش، در برابر دشمنان قدرتمند می‌ایستد و هیچ‌وقت تسلیم نمی‌شود.",
    chaptersCount: 3,
    chapters: [
      {
        id: 1,
        title: "از دور", // همان فصل ۶ کلی
        cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455",
        pageCount: 12,
        pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6_${String(i+1).padStart(3,'0')}.jpeg?_t=1769142455`)
      },
      {
        id: 2,
        title: "نمایش هایاتو",
        cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH11.jpeg?_t=1769505919",
        pageCount: 12,
        pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH11_${String(i+1).padStart(3,'0')}.jpeg?_t=1769505930`)
      },
      {
        id: 3,
        title: "برای خانواده",
        cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH12.jpeg?_t=1769535055",
        pageCount: 12,
        pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH12_${String(i+1).padStart(3,'0')}.jpeg?_t=1769535065`)
      }
    ]
  },

  // کمیک جدید: رافائل و لورا

{
  id: 3,
  title: "رافائل و لورا",
  cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1.jpeg?_t=1769594744",
  teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1.jpeg?_t=1769594744",
  summary: "رافائل، تک‌تیرانداز خونسرد و دقیق، و لورا، دختر مرموز با قدرت‌های جادویی، در دنیایی پر از خطر و راز با هم آشنا می‌شوند. رابطه‌شان از یک همکاری ساده شروع می‌شود، اما به مرور به عشقی عمیق و پر از چالش تبدیل می‌گردد که هر دو را به مبارزه با گذشته و دشمنان مشترکشان می‌کشاند.",
  chaptersCount: 6,
  chapters: [
    {
      id: 1,
      title: "مخفی",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1.jpeg?_t=1769594744",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1_${String(i+1).padStart(3,'0')}.jpeg?_t=1769594744`)
    },
    {
      id: 2,
      title: "نفوذی",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH2.jpeg?_t=1769657868",
      pageCount: 12,
      pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH2_${String(i+1).padStart(3,'0')}.jpeg?_t=1769657868`)
    },
    {
      id: 3,
      title: "شخصیت مرموز",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3.jpeg?_t=1769683122",
      pageCount: 11,
      pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3_${String(i+1).padStart(3,'0')}.jpeg?_t=1769683122`)
    },
    {
      id: 4,
      title: "یک شانس",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4.jpeg?_t=1769702450",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4_${String(i+1).padStart(3,'0')}.jpeg?_t=1769702450`)
    },
    {
      id: 5,
      title: "شکار گوزن",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5.jpeg?_t=1769775597",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5_${String(i+1).padStart(3,'0')}.jpeg?_t=1769775597`)
    },
    {
      id: 6,
      title: "رویارویی",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769781437",
      pageCount: 13,
      pages: Array.from({length: 13}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6_${String(i+1).padStart(3,'0')}.jpeg?_t=1769781445`
      )
    }
  ]
},

  // شخصیت استیفی
  {
  id: 4,
  title: "استفانی",
  cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S1/CH1.jpeg",
  teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S1/CH1.jpeg",
  summary: "استفانی، دختر باهوش، جسور و مرموز با مهارت‌های فوق‌العاده تیراندازی و تاکتیک‌های هوشمندانه، در دنیای پرخطر و پر از راز فری فایر زندگی می‌کند. او با گذشته‌ای پیچیده و اراده‌ای قوی، همیشه در جستجوی حقیقت و محافظت از کسانی است که برایش مهم هستند. ماجراهای استفانی پر از هیجان، نبردهای نفس‌گیر و لحظات احساسی عمیق است.",
  chaptersCount: 4,
  chapters: [
    {
      id: 1,
      title: "فصل اول",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S1/CH1.jpeg",
      pageCount: 15,
      pages: Array.from({length: 15}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S1/CH1_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 2,
      title: "فصل دوم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S2/CH2.jpeg",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S2/CH2_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 3,
      title: "فصل سوم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S3/CH3.jpeg",
      pageCount: 16,
      pages: Array.from({length: 16}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S3/CH3_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 4,
      title: "فصل چهارم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S4/CH4.jpeg",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/STEFFIE/S4/CH4_${String(i+1).padStart(3,'0')}.jpeg`
      )
    }
  ]
},
  // شخصیت موکو
  {
  id: 5,
  title: "موکو",
  cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S1/CH1.jpeg",
  teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S1/CH1.jpeg",
  summary: "موکو، هکر نابغه و مرموز دنیای فری فایر، با مهارت‌های فوق‌العاده در هک و جاسوسی، همیشه یک قدم جلوتر از دشمنانش است. او با گذشته‌ای تاریک و ابزارهای پیشرفته تکنولوژیک، اطلاعات را جمع‌آوری می‌کند و با هوش سرد و دقیقش در نبردها عمل می کند .",
  chaptersCount: 6,
  chapters: [
    {
      id: 1,
      title: "فصل اول",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S1/CH1.jpeg",
      pageCount: 15,
      pages: Array.from({length: 15}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S1/CH1_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 2,
      title: "فصل دوم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S2/CH2.jpeg",
      pageCount: 16,
      pages: Array.from({length: 16}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S2/CH2_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 3,
      title: "فصل سوم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S3/CH3.jpeg",
      pageCount: 13,
      pages: Array.from({length: 13}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S3/CH3_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 4,
      title: "فصل چهارم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S4/CH4.jpeg",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S4/CH4_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 5,
      title: "فصل پنجم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S5/CH5.jpeg",
      pageCount: 13,
      pages: Array.from({length: 13}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S5/CH5_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 6,
      title: "فصل ششم",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S6/CH6.jpeg",
      pageCount: 19,
      pages: Array.from({length: 19}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/MOCO/S6/CH6_${String(i+1).padStart(3,'0')}.jpeg`
      )
    }
  ]
},
  {
  id: 6,
  title: "فراری‌ها",
  cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S3/CH3.jpeg",
  teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S1/CH1.jpeg",
  summary: "توجه قبل از خواندن این کمیک ابتدا کمیک های استیفی و موکو را بخوانید .دختران فراری — موکو و استیفی — یک پیام درخواست کمک مخفی دریافت می‌کنند. استیفی که در حال ردیابی سرنخ‌ها بود، ناگهان ناپدید می‌شود. موکو برای نجات دوستش چاره‌ای جز این ندارد که مخفیانه وارد آزمایشگاه عظیم هورایزن شود.",
  chaptersCount: 10,
  chapters: [
    {
      id: 1,
      title: "فصل اول",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S1/CH1.jpeg",
      pageCount: 12,
      pages: Array.from({length: 12}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S1/CH1_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 2,
      title: "فصل دوم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S2/CH2.jpeg`,
      pageCount: 13,
      pages: Array.from({length: 13}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S2/CH2_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 3,
      title: "فصل سوم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S3/CH3.jpeg`,
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S3/CH3_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 4,
      title: "فصل چهارم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S4/CH4.jpeg`,
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S4/CH4_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 5,
      title: "فصل پنجم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S5/CH5.jpeg`,
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S5/CH5_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 6,
      title: "فصل ششم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S6/CH6.jpeg`,
      pageCount: 15,
      pages: Array.from({length: 15}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S6/CH6_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 7,
      title: "فصل هفتم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S7/CH7.jpeg`,
      pageCount: 13,
      pages: Array.from({length: 13}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S7/CH7_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 8,
      title: "فصل هشتم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S8/CH8.jpeg`,
      pageCount: 16,
      pages: Array.from({length: 16}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S8/CH8_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 9,
      title: "فصل نهم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S9/CH9.jpeg`,
      pageCount: 16,
      pages: Array.from({length: 16}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S9/CH9_${String(i+1).padStart(3,'0')}.jpeg`
      )
    },
    {
      id: 10,
      title: "فصل دهم",
      cover: `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S10/CH10.jpeg`,
      pageCount: 23,
      pages: Array.from({length: 23}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/DECODED/S10/CH10_${String(i+1).padStart(3,'0')}.jpeg`
      )
    }
  ]
}
];