const isDev = import.meta.env.DEV;

export const ENV = {
  IS_DEV: isDev,
  API_BASE_URL: isDev
    ? "http://localhost:5000" // futuro backend
    : "https://api.exemplo.com",
};
