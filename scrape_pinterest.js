const https = require('https');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const html = await fetchHTML('https://html.duckduckgo.com/html/?q=site:pinterest.com+%22iron+gate%22+welding+fabrication');
    // Extract anything that looks like i.pinimg.com/xxx.jpg
    const regex = /https:\/\/i\.pinimg\.com\/[a-zA-Z0-9_\/]+\.jpg/g;
    const matches = html.match(regex);
    if (matches) {
      console.log([...new Set(matches)]);
    } else {
      console.log('No pinimg URLs found.');
    }
  } catch(e) {
    console.error(e);
  }
}

run();
