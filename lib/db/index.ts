import { createClient, type Client } from "@libsql/client"
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql"

import { getDatabaseConfig } from "@/lib/env"

import * as schema from "./schema"

type Database = LibSQLDatabase<typeof schema> & {
  $client: Client
}

let database: Database | null = null

export function getDb() {
  if (!database) {
    const config = getDatabaseConfig()
    const client = createClient({
      url: config.url,
      authToken: config.authToken,
    })

    database = drizzle(client, { schema })
  }

  return database
}
