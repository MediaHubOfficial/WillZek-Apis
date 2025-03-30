export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'El parámetro "url" es obligatorio.' });
  }

  try {
    // Llamada a la API original
    const apiUrl = `https://api.agatz.xyz/api/ytmp3?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Modificar el campo "creator" a "willzek"
    data.creator = "willzek";

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos", details: error.message });
  }
}
