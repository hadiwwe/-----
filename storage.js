
window.getScore = function() {
  // امتیاز های پیش فرض کاربر 
  return parseInt(localStorage.getItem('comicScore') || '20');
};

window.setScore = function(newScore) {
  localStorage.setItem('comicScore', newScore);
};

window.isChapterRead = function(comicId, chapterId) {
  return localStorage.getItem(`read_\( {comicId}_ \){chapterId}`) === 'true';
};

window.markChapterRead = function(comicId, chapterId) {
  localStorage.setItem(`read_\( {comicId}_ \){chapterId}`, 'true');
};

window.spendScoreIfNeeded = function(comicId, chapterId) {
  if (window.isChapterRead(comicId, chapterId)) {
    return true; // قبلاً خوانده شده → رایگان
  }

  let score = window.getScore();
  if (score < 10) {
    return false; // امتیاز کافی نیست
  }

  score -= 10;
  window.setScore(score);
  window.markChapterRead(comicId, chapterId);
  return true;
};