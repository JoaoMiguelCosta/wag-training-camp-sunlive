// src/shared/api/client.js
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

async function postJson(path, data) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    // se não vier JSON, ignoramos
  }

  if (!response.ok) {
    const message =
      payload?.error || payload?.message || "Request failed on server";
    throw new Error(message);
  }

  return payload;
}

export { API_BASE_URL, postJson };
