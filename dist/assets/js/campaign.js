// The campaign period on the home page and its topic on the contact form use Japan time.
(() => {
  const monthFormat = new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', month: 'numeric' });
  const periods = document.querySelectorAll('[data-campaign-period]');
  const topic = document.querySelector('#topic option[data-topic="campaign"]');

  function updateCampaignMonth() {
    const month = monthFormat.format(new Date());
    periods.forEach(period => { period.textContent = `${month}の特典`; });
    if (topic) topic.textContent = `${month}のキャンペーンについて`;
  }

  updateCampaignMonth();
  window.addEventListener('pageshow', event => {
    if (event.persisted) updateCampaignMonth();
  });
})();
