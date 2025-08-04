"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WriteForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug: title.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
        content,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      }),
    });
    if (!res.ok) {
      setError("Failed to create post");
      return;
    }
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 p-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded h-40"
        required
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-4 py-2 rounded"
      >
        Publish
      </button>
    </form>
  );
}
