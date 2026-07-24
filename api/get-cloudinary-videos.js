export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || 'wpeamomm';
  const apiKey = process.env.CLOUDINARY_API_KEY || process.env.VITE_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET || process.env.VITE_CLOUDINARY_API_SECRET;

  if (!apiKey || !apiSecret) {
    return res.status(200).json({
      success: false,
      message: 'CLOUDINARY_API_KEY or CLOUDINARY_API_SECRET not set in environment variables',
      resources: []
    });
  }

  try {
    const authHeader = 'Basic ' + Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/search`, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        expression: 'resource_type:video',
        sort_by: [{ created_at: 'desc' }],
        max_results: 12
      })
    });

    const data = await response.json();
    return res.status(200).json({
      success: true,
      resources: data.resources || []
    });
  } catch (err) {
    console.error('Error fetching Cloudinary resources:', err);
    return res.status(500).json({ error: err.message });
  }
}
