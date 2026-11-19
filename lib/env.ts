export const siteEnv = {
  template: process.env.TEMPLATE ?? "oruc-inspired",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ishaqyusuf.com",
}

export function getDatabaseConfig() {
  return {
    url: process.env.DATABASE_URL ?? "file:local.db",
    authToken: process.env.DATABASE_AUTH_TOKEN,
  }
}
