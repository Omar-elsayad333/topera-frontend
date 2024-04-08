const env = {
  // General
  appBase: process.env.NEXT_PUBLIC_APP_BASE,
  apiBase: process.env.NEXT_PUBLIC_API_BASE,

  // Storage keys
  theme: process.env.NEXT_PUBLIC_THEME,

  // Cookies keys
  dir: process.env.NEXT_PUBLIC_DIR,
  locale: process.env.NEXT_PUBLIC_LOCALE,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  accessExpiry: process.env.NEXT_PUBLIC_ACCESS_EXPIRY,
  refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
  refreshExpiry: process.env.NEXT_PUBLIC_REFRESH_EXPIRY,

  // API/Backend basic URL
  api_url: process.env.NEXT_PUBLIC_API_URL,
  api_file_url: process.env.NEXT_PUBLIC_API_FILE_URL,

  // Next Auth
  next_auth_secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
}

export default env
