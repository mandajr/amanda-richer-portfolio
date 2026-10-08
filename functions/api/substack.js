// GET /api/substack: Amanda's newest Substack posts as JSON, so the Writing tab
// always shows her latest pieces without manual updates. Runs free on Cloudflare
// Pages Functions; the result is cached for an hour.

const FEED = 'https://amandaricher.substack.com/feed';

const field = (item, tag) => {
  const m = item.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
  return m ? m[1].trim() : '';
};

const decode = s => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>');

export function parseFeed(xml, limit = 6) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => ({
    title: decode(field(item, 'title')),
    subtitle: decode(field(item, 'description')),
    link: field(item, 'link'),
    date: new Date(field(item, 'pubDate')).toISOString().slice(0, 10),
  })).filter(p => p.title && /^https:\/\/amandaricher\.substack\.com\//.test(p.link));
}

export async function onRequestGet() {
  try {
    const r = await fetch(FEED, { cf: { cacheTtl: 3600, cacheEverything: true } });
    if (!r.ok) throw new Error(`feed ${r.status}`);
    const posts = parseFeed(await r.text());
    return Response.json({ posts }, { headers: { 'Cache-Control': 'public, max-age=3600' } });
  } catch {
    // The Writing tab still shows the archive link when the feed can't be read.
    return Response.json({ posts: [] }, { status: 200, headers: { 'Cache-Control': 'public, max-age=300' } });
  }
}
