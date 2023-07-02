// Gündem etiketlerini al
function getTrendingTags() {
  const trendsContainer = document.querySelector(
    'div[aria-label="Zaman Akışı: Gündemdekiler"]'
  );
  if (!trendsContainer) {
    return [];
  }
  const trends = trendsContainer.querySelectorAll('div[data-testid="trend"]');

  const trendingTags = [];
  trends.forEach((trend) => {
    const tag = trend.querySelectorAll('div[dir="ltr"]')[1].textContent;
    trendingTags.push(tag);
  });

  return trendingTags;
}

// Tweetleri kontrol et ve gündem etiketlerine göre filtrele
function filterTweets() {
  const trendingTags = getTrendingTags();

  console.log("trendingTags", trendingTags);

  const tweets = document.querySelectorAll('[data-testid="tweet"]');
  tweets.forEach((tweet) => {
    const tweetText = tweet.innerText.toLowerCase();

    let tagCount = 0;
    trendingTags.forEach((tag) => {
      if (tweetText.includes(tag.toLowerCase())) {
        tagCount++;
      }
    });

    // tweet içerisinde 2'den fazla gündem etiketi varsa tweeti gizle
    if (tagCount >= 2 && tweet.style.display != "none") {
      tweet.style.display = "none";
      console.log("hidden");
    }
  });
}

// MutationObserver kullanarak sayfa değişikliklerini dinle
const observer = new MutationObserver(filterTweets);
const observerConfig = { childList: true, subtree: true };

// Observer'ı başlat
observer.observe(document.body, observerConfig);

// Sayfa yüklendiğinde tweetleri kontrol et
filterTweets();

//setInterval(filterTweets, 5000);