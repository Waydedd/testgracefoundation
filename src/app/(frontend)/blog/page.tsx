import type { Metadata } from "next";
import { getPayloadClient } from "@/lib/payload";
import { PostCard } from "@/components/blog/PostCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Grace for Poor Foundation",
};

export const revalidate = 60;

export default async function BlogPage() {
  const payload = await getPayloadClient();
  const [{ docs: posts }, navbar] = await Promise.all([
    payload.find({
      collection: "posts",
      depth: 1,
      sort: "order",
      where: {
        _status: { equals: "published" },
      },
    }),
    payload.findGlobal({ slug: "navbar" }),
  ]);

  return (
    <div className="min-h-screen">
      <Navbar
        brandName={navbar.brandName}
        brandTagline={navbar.brandTagline}
        donateButtonLabel={navbar.donateButtonLabel}
      />
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
              Our Blog
            </div>
            <h1 className="mb-4">News & Stories</h1>
            <p className="text-gray-600">
              Updates from the field, stories of impact, and news from Grace for Poor
              Foundation.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-gray-600">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
