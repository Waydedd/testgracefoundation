import { getPayload } from "payload";
import config from "@payload-config";

let cached = globalThis as unknown as { payload?: ReturnType<typeof getPayload> };

export function getPayloadClient() {
  if (!cached.payload) {
    cached.payload = getPayload({ config });
  }
  return cached.payload;
}
