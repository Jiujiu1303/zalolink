export const config = {
  runtime: 'nodejs'
};

export default async function handler(req, res) {

  // 允许跨域（可选）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS 预检
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 只允许 POST
  if (req.method !== 'POST') {

    return res.status(405).json({
      error: 'Method not allowed'
    });

  }

  try {

    let data = req.body;

    // 有时 body 是字符串
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    console.log('========== DATA ==========');

    console.log(
      JSON.stringify(data, null, 2)
    );

    console.log('==========================');

    return res.status(200).json({
      success: true
    });

  } catch (e) {

    console.error(e);

    return res.status(500).json({
      error: e.toString()
    });

  }

}
