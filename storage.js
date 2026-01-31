window.getScore = function() {
  return parseInt(localStorage.getItem('comicScore') || '20');
};

window.setScore = function(newScore) {
  localStorage.setItem('comicScore', newScore);
};

window.isChapterRead = function(comicId, chapterId) {
  return localStorage.getItem(`read_${comicId}_${chapterId}`) === 'true';
};

window.markChapterRead = function(comicId, chapterId) {
  localStorage.setItem(`read_${comicId}_${chapterId}`, 'true');
};

window.spendScoreIfNeeded = function(comicId, chapterId) {
  // اگر قبلاً خوانده شده → رایگان
  if (window.isChapterRead(comicId, chapterId)) {
    return true;
  }

  let score = window.getScore();
  if (score < 10) {
    return false; // امتیاز کافی نیست
  }

  // کم کردن امتیاز
  score -= 10;
  window.setScore(score);

  // علامت‌گذاری فصل به عنوان خوانده‌شده
  window.markChapterRead(comicId, chapterId);

  return true;
};