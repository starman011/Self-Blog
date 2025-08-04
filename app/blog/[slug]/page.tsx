import { connectDB } from "@/lib/utils";
import Post from "@/models/Post";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// 🧠 Explicit post structure for TypeScript
interface PostType {
  title: string;
  slug: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export default async function BlogPostPage({ params }: Props) {
  await connectDB();

  const rawPost = await Post.findOne({ slug: params.slug }).lean();

  // 🧠 Check if it's null first
  if (!rawPost) return notFound();

  // ✅ Now cast confidently
  const post = rawPost as unknown as PostType;

  return (
    <article className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">
        {new Date(post.createdAt).toLocaleDateString("en-GB")}
      </p>
      <div className="text-lg leading-relaxed whitespace-pre-line mb-4">
        {post.content}
      </div>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
