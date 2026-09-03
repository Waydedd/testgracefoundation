import type { Media } from "@/payload-types";

export function getImageUrl(image: string | number | Media | null | undefined) {
  if (image && typeof image === "object" && "url" in image) {
    return image.url ?? undefined;
  }
  return undefined;
}
