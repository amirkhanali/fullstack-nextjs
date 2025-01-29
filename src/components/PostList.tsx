import { prisma } from "@/lib/db";
import Link from "next/link";

const PostList = async () => {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col items-center justify-center mt-20 px-4">
      <section className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-3">
              <Link
                href={`/blogs/${post.id}`}
                className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PostList;
