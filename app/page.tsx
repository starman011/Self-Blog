"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Post = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  createdAt: string;
};

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        setPosts(data);
        const tags = Array.from(new Set(data.flatMap((post) => post.tags)));
        setAllTags(tags);
      })
      .catch((err) => console.error("Failed to load posts", err));
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <main className="px-4 py-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">📝 Blog Posts</h1>

      {/* ✅ Tag Filter Bar */}
      {allTags.length > 0 && (
        <div className="flex gap-2 flex-wrap pb-4 border-b border-border">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
            className="rounded-full"
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
      )}

      {/* ✅ Blog Cards */}
      {filteredPosts.length === 0 ? (
        <p className="text-muted-foreground">No posts found.</p>
      ) : (
        filteredPosts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-muted/50 transition cursor-pointer">
              <CardContent className="p-6 space-y-2">
                <CardTitle className="text-xl font-semibold">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {new Date(post.createdAt).toLocaleDateString("en-GB")}
                </p>
                <p className="line-clamp-3">{post.content}</p>
                <div className="text-xs text-blue-500 space-x-2 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))
      )}
    </main>
  );
}
