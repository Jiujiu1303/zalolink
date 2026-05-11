export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  console.log("收到数据：", req.body);
  res.status(200).json({ status: "ok" });
}
