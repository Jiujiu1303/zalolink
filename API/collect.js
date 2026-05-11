export default async function handler(req, res) {

  if (req.method !== 'POST') {

    return res.status(405).json({
      error: 'Method not allowed'
    });

  }

  console.log('========== 收到数据 ==========');

  console.log(
    JSON.stringify(req.body, null, 2)
  );

  console.log('==============================');

  return res.status(200).json({
    success: true
  });

}
