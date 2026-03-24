export default async function handler(req, res) {
  const { code, region } = req.query;
  const token = 'ea3f1cff6001445c987e1fe61457691c48e2ec883fcf48988241aefbe4c57ba5';

  try {
    const response = await fetch(
      `https://api.itick.org/stock/quote?region=${region}&code=${code}`,
      { headers: { 'accept': 'application/json', 'token': token } }
    );
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (e) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ code: -1, msg: '服务器错误' });
  }
}
