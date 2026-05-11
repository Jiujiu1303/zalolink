export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: "Method Not Allowed"});
  }
  const data = req.body;
  console.log("收到資料：", data);
  res.status(200).json({status: "ok"});
}