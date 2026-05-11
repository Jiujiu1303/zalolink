export const config = {
  runtime: 'nodejs'
};

export default async function handler(req, res) {

  console.log("REQUEST!");

  console.log(req.body);

  return res.status(200).json({
    success: true
  });

}
