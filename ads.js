

const APP_ID = "83fc9705-8bb6-45ab-90cc-d3f145a774a1";
const REWARDED_PLACEMENT = "60a72aa7-d023-457b-9232-fb2f1782face";

function initAdivery() {
  if (typeof Adivery !== 'undefined') {
    Adivery.configure(APP_ID);
    console.log("[Adivery] Configure انجام شد – آماده برای درخواست تبلیغ");
  } else {
    console.error("[Adivery] کتابخانه Adivery لود نشده است. فایل adivery.global.js مشکل دارد.");
  }
}

async function watchAdForReward() {
  console.log("[تبلیغ] دکمه کلیک شد – شروع فرآیند");

  if (typeof Adivery === 'undefined') {
    console.error("[تبلیغ] Adivery تعریف نشده");
    alert("کتابخانه تبلیغ لود نشده است. صفحه را رفرش کنید یا بعدا امتحان کنید.");
    return;
  }

  try {
    console.log("[تبلیغ] درخواست تبلیغ جایزه‌ای...");
    const ad = await Adivery.requestRewardedAd(REWARDED_PLACEMENT);
    console.log("[تبلیغ] تبلیغ با موفقیت لود شد");

    console.log("[تبلیغ] حالا تبلیغ نمایش داده می‌شود...");
    const isRewarded = await ad.show();
    console.log("[تبلیغ] نتیجه نمایش تبلیغ:", isRewarded);

    if (isRewarded === true) {
      let score = window.getScore ? window.getScore() : 20;
      score += 20;
      window.setScore(score);
      console.log("[تبلیغ] جایزه داده شد – امتیاز جدید:", score);
      alert("عالی بود! +۲۰ امتیاز اضافه شد 🎉");

      if (typeof window.updateScoreUI === 'function') {
        window.updateScoreUI();
      }
    } else {
      console.log("[تبلیغ] جایزه تعلق نگرفت (isRewarded = false)");
      alert("تبلیغ کامل دیده نشد یا جایزه داده نشد.");
    }
  } catch (err) {
    console.error("[تبلیغ] خطا در فرآیند:", err);
    alert("خطا در بارگذاری یا نمایش تبلیغ:\n" + (err.message || "نامشخص") + "\nبعداً امتحان کنید.");
  }
}