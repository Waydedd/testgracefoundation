import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayloadClient } from "@/lib/payload";
import { getImageUrl } from "@/lib/media";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const revalidate = 60;

async function getPost(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 1,
    where: {
      slug: { equals: slug },
      _status: { equals: "published" },
    },
  });
  return docs[0];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Grace for Poor Foundation`,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, payload] = await Promise.all([getPost(slug), getPayloadClient()]);

  if (!post) notFound();

  const navbar = await payload.findGlobal({ slug: "navbar" });
  const imageUrl = getImageUrl(post.heroImage);

  return (
    <div className="min-h-screen">
      <Navbar
        brandName={navbar.brandName}
        brandTagline={navbar.brandTagline}
        donateButtonLabel={navbar.donateButtonLabel}
      />
      <article className="py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {post.publishedAt && (
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <h1 className="mb-8">{post.title}</h1>
          {imageUrl && (
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <ImageWithFallback
                src={imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {post.content && (
            <div className="max-w-none text-gray-700 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_a]:text-blue-600 [&_a]:underline">
              <RichText data={post.content} />
            </div>
          )}
        </div>
      </article>
      <Footer />
    </div>
  );
}
