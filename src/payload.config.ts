import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Categories } from "@/collections/Categories";
import { Posts } from "@/collections/Posts";

import { Navbar } from "@/globals/Navbar";
import { Hero } from "@/globals/Hero";
import { About } from "@/globals/About";
import { Programs } from "@/globals/Programs";
import { Impact } from "@/globals/Impact";
import { Donate } from "@/globals/Donate";
import { Contact } from "@/globals/Contact";
import { Footer } from "@/globals/Footer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  telemetry: false,
  admin: {
    user: Users.slug,
  },
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    // Use explicit migrations instead of interactive dev-mode schema push,
    // since this environment can't answer push's confirmation prompts.
    push: false,
  }),
  collections: [Users, Media, Categories, Posts],
  globals: [Navbar, Hero, About, Programs, Impact, Donate, Contact, Footer],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.SUPABASE_S3_BUCKET ?? "",
      config: {
        endpoint: process.env.SUPABASE_S3_ENDPOINT,
        region: process.env.SUPABASE_S3_REGION,
        credentials: {
          accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID ?? "",
          secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY ?? "",
        },
        forcePathStyle: true,
      },
    }),
  ],
});
