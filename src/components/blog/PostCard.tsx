import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { getImageUrl } from "@/lib/media";
import type { Post } from "@/payload-types";

export function PostCard({ post }: { post: Post }) {
  const imageUrl = getImageUrl(post.heroImage);

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
        {imageUrl && (
          <div className="aspect-[16/9] overflow-hidden">
            <ImageWithFallback
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="p-6">
          {post.publishedAt && (
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <h3 className="mb-2">{post.title}</h3>
          {post.excerpt && <p className="text-gray-600 text-sm">{post.excerpt}</p>}
        </CardContent>
      </Card>
    </Link>
  );
}
