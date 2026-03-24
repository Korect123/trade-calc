export default async function handler(req, res) {
  const code = req.query.code || '';
  const region = req.query.region || 'SH';
  const token = 'ea3f1cff6001445c987e1fe61457691c48e2ec883fcf48988241aefbe4c57ba5';

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const url = `https://api.itick.org/stock/quote?region=${encodeURIComponent(region)}&code=${encodeURIComponent(code)}`;
    const response = await fetch(url, {
      headers: { 'accept': 'application/json', 'token': token }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ code: -1, msg: '服务器错误: ' + e.message });
  }
}
