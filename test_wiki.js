async function getImages(query, limit) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=${limit}&prop=imageinfo&iiprop=url&format=json`;
  
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'RajeevApp/1.0 (test@example.com)' } });
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return [];
    
    return Object.values(pages).map(p => p.imageinfo?.[0]?.url).filter(Boolean);
  } catch (e) {
    console.error(e);
    return [];
  }
}

async function test() {
  const imgs = await getImages('iron gate', 10);
  console.log('Got', imgs.length, 'images:', imgs);
}

test();
